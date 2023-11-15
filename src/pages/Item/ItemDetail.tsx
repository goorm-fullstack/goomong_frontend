import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Navigate, useNavigate, useParams, Link } from 'react-router-dom';
import Instance from '../../util/API/axiosInstance';
import { blob } from 'stream/consumers';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import * as C from '../../Style/CommonStyles';
import * as S from './Style';
import ReviewModel from '../../components/Review/ReviewModel/ReviewModel';
import Pagination from '../../components/Pagination/Pagination';

interface Item {
  id: number;
  title: string;
  member: any;
  price: number;
  thumbNailList: Array<any>;
  itemCategories: Array<any>;
  reviewList: Array<any>;
  askList: Array<any>;
  rate: number;
  stauts: string;
}

const item = {
  id: 1,
  title: '',
  member: '',
  price: 5431212,
  thumbNailList: [],
  itemCategories: [],
  reviewList: [],
  askList: [],
  rate: 11,
  stauts: '',
};

const reviewSlideItems = [
  {
    writer: '닉네임1',
    date: '2023.10.18',
    rating: 5,
    category: '디자인',
    productName: '이거 구매했어요 상품명',
    content:
      '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
  },
  {
    writer: '닉네임2',
    date: '2023.10.18',
    rating: 5,
    category: '디자인',
    productName: '이거 구매했어요 상품명',
    content:
      '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
  },
  {
    writer: '닉네임3',
    date: '2023.10.18',
    rating: 5,
    category: '디자인',
    productName: '이거 구매했어요 상품명',
    content:
      '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
  },
  {
    writer: '닉네임4',
    date: '2023.10.18',
    rating: 5,
    category: '디자인',
    productName: '이거 구매했어요 상품명',
    content:
      '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
  },
  {
    writer: '닉네임5',
    date: '2023.10.18',
    rating: 5,
    category: '디자인',
    productName: '이거 구매했어요 상품명',
    content:
      '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
  },
  {
    writer: '닉네임6',
    date: '2023.10.18',
    rating: 5,
    category: '디자인',
    productName: '이거 구매했어요 상품명',
    content:
      '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
  },
];

export default function ItemDetail() {
  const { id } = useParams();
  // const [item, setItem] = useState<Item>();
  const navigator = useNavigate();
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  // useLayoutEffect(() => {
  //   Instance.get(`/api/item/${id}`).then((response) => {
  //     setItem(response.data);
  //   });
  // }, []);

  // useLayoutEffect(() => {
  //   const fetchImages = async () => {
  //     if (item) {
  //       const urls = await Promise.all(item.thumbNailList.map((img) => getImageFile(img.path)));
  //       setImageUrls(urls.filter((url) => url !== null) as string[]);
  //     }
  //   };

  //   fetchImages();
  // }, [item]);

  const handleBuyClick = () => {
    navigator('/order/write', {
      state: {
        itemId: id,
      },
    });
  };

  // const getImageFile = async (path: string) => {
  //   try {
  //     const response = await Instance.get('/api/image', {
  //       headers: { 'Content-type': 'application/json; charset=UTF-8' },
  //       responseType: 'blob',
  //       params: {
  //         imagePath: path,
  //       },
  //     });

  //     if (response.status === 200) {
  //       return URL.createObjectURL(response.data);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // };

  return (
    <>
      <Header />
      <C.Container>
        <div>
          <div>
            <div>
              {/* 상품 썸네일 */}
              {imageUrls.map((url, index) => (
                <img key={index} src={url} alt={`img-${index}`} width="200px" height="200px" />
              ))}
            </div>
            <div>
              <div>
                <ul>
                  <li>
                    <Link to="">재능설명</Link>
                  </li>
                  <li>
                    <Link to="">문의답변</Link>
                  </li>
                  <li>
                    <Link to="">고객후기</Link>
                  </li>
                </ul>
              </div>
              <div>{/* 상품 상세정보 */}</div>
              <div>
                <h3>문의답변</h3>
                <table>
                  <colgroup>
                    <col width="" />
                  </colgroup>
                  <thead>
                    <th></th>
                  </thead>
                  <tbody>
                    <td></td>
                  </tbody>
                </table>
                <Pagination item={reviewSlideItems} />
              </div>
              <div>
                <h3>고객후기</h3>
                <div>
                  {reviewSlideItems.map((reviewItem, index) => (
                    <ReviewModel
                      writer={reviewItem.writer}
                      date={reviewItem.date}
                      rating={reviewItem.rating}
                      category={reviewItem.category}
                      productName={reviewItem.productName}
                      content={reviewItem.content}
                    />
                  ))}
                  <Pagination item={reviewSlideItems} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              {/* 상품 정보 */}
              <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>{item.rate}</p>
              </div>
              <button onClick={handleBuyClick}>구매하기</button>
            </div>
            <div>
              <p>판매자명</p>
              <div></div>
              <p>판매자 소개</p>
            </div>
          </div>
        </div>
      </C.Container>
      <Footer />
    </>
  );
}
