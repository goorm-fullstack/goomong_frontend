import React, { useEffect, useState, useLayoutEffect } from 'react';
import RankModel from './RankModel/RankModel';
import * as S from './PopularStyles';
import { Link } from 'react-router-dom';
import { Top5Ranking, RankingsState } from '../../interface/Interface';
import Instance from '../../util/API/axiosInstance';
import { getImageFile } from '../../util/func/functions';

const Popular: React.FC = () => {
  const [rankings, setRankings] = useState<RankingsState>({ ordered: [], review: [], sales: [] });

  useEffect(() => {
    Instance.get<Top5Ranking[]>(`/api/ranking`)
      .then((response) => {
        const reviewRankings = response.data.filter((r) => r.category === '리뷰');
        const orderedRankings = response.data.filter((r) => r.category === '주문');
        const salesRankings = response.data.filter((r) => r.category === '판매 금액');

        setRankings({ ordered: orderedRankings, review: reviewRankings, sales: salesRankings });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useLayoutEffect(() => {
    const fetchImages = async () => {
      const rankingsWithImages: RankingsState = {
        ordered: await mapImagesToRankings(rankings.ordered),
        review: await mapImagesToRankings(rankings.review),
        sales: await mapImagesToRankings(rankings.sales),
      };
      setRankings(rankingsWithImages);
    };

    fetchImages();
  }, [rankings]);

  // 각 Ranking에 이미지 URL을 매핑하는 함수
  const mapImagesToRankings = async (rankingList: Top5Ranking[]): Promise<Top5Ranking[]> => {
    return Promise.all(
      rankingList.map(async (rank) => {
        // 첫 번째 이미지의 path를 사용하거나 대체 이미지 URL을 설정
        const imageUrl =
          rank.profileImages.length > 0 ? await getImageFile(rank.profileImages[0].path) : 'https://via.placeholder.com/800x300?text=seller';

        return { ...rank, imageUrl }; // 각 Ranking에 imageUrl 속성 추가
      })
    );
  };

  return (
    <S.Popular>
      <div className="popular-container">
        <div className="popular-top">
          <div className="popular-title">인기 판매자 순위 TOP 5</div>
          <div className="popular-sub-title">상위 카테고리에서 가장 많이 판매한 인기 판매자에요.</div>
          <div className="ranking-container">
            {/* {rankings.review.map((rank, index) => (
              <RankModel key={`${index}`} top5Ranking={rank} />
            ))}
            {rankings.ordered.map((rank, index) => (
              <RankModel key={`${index}`} top5Ranking={...[rank]} />
            ))}
            {rankings.sales.map((rank, index) => (
              <RankModel key={`${index}`} top5Ranking={...[rank]} />
            ))} */}
            {/* <RankModel top5Ranking={rankings.review} />
            <RankModel top5Ranking={rankings.ordered} />
            <RankModel top5Ranking={rankings.sales} /> */}
          </div>
        </div>

        <div className="more-btn">
          <Link to="#null">
            <button type="submit">
              판매자 더보기
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="48.000000pt"
                height="48.000000pt"
                viewBox="0 0 48.000000 48.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#d3d5da" stroke="none">
                  <path
                    d="M156 382 c-3 -6 26 -40 64 -76 l70 -66 -70 -66 c-38 -36 -67 -70 -64
-75 8 -13 25 -1 102 73 l70 68 -75 72 c-80 78 -88 84 -97 70z"
                  />
                </g>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </S.Popular>
  );
};

export default Popular;
