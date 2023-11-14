import React, { useEffect, useState } from 'react';
import Slide from '../Slide/Slide';
import ReviewModel from './ReviewModel/ReviewModel';
import * as S from './ReviewStyles';
import { Link } from 'react-router-dom';
import { ReviewData } from '../../interface/Interface';
import Instance from '../../util/API/axiosInstance';
import { formattingDate } from '../../util/func/functions';
import { NoItem } from '../../Style/CommonStyles';

const Review: React.FC = () => {
  const [reviewData, setReviewData] = useState<ReviewData[]>();
  const [imageUrls, setImageUrls] = useState<string[]>();

  useEffect(() => {
    Instance.get('/api/reviews')
      .then((response) => {
        const data = response.data;
        setReviewData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getImageFile = async (path: string) => {
    try {
      const response = await Instance.get('/api/image', {
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        responseType: 'blob',
        params: {
          imagePath: path,
        },
      });

      if (response.status === 200) {
        return URL.createObjectURL(response.data) as string;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadImageUrl = async (path: string) => {
    try {
      const imageUrl = await getImageFile(path);
      return imageUrl || '';
    } catch (error) {
      console.error(error);
      return '';
    }
  };

  const loadImages = async () => {
    const urls = await Promise.all(
      reviewData?.map(async (reviewModel) => {
        if (reviewModel.imageList.length > 0) {
          return await loadImageUrl(reviewModel.imageList[0].path);
        }
        return '';
      }) || []
    );
    setImageUrls(urls);
  };

  useEffect(() => {
    loadImages();
  }, [reviewData]);

  return (
    <S.Review>
      <div className="review-container">
        <div className="review-main-top">
          <div className="title-top">구몽을 이용한 회원들의 생생한 후기</div>
          <div className="title-bottom">
            <div className="sub-title">실시간 구매자 후기</div>
            <div className="score">4.9점</div>
          </div>
        </div>

        {reviewData && (
          <Slide>
            {reviewData.map((reviewModel, index) => (
              <Link to="#null">
                <ReviewModel
                  key={`reviewModel-${index}`}
                  writer={reviewModel.memberId}
                  date={formattingDate(reviewModel.regDate)}
                  rating={reviewModel.rate}
                  category={reviewModel.itemCategory}
                  productName={reviewModel.itemName}
                  content={reviewModel.content}
                  imageUrl={imageUrls && imageUrls[index]}
                />
              </Link>
            ))}
          </Slide>
        )}
      </div>
    </S.Review>
  );
};

export default Review;
