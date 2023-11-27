import React, { useEffect, useState, useLayoutEffect } from 'react';
import Instance from '../../util/API/axiosInstance';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import * as C from '../../Style/CommonStyles';
import { useLocation, useParams } from 'react-router-dom';
import Sort from '../../components/Sort/Sort';
import Product from '../../components/HotItem/ProductModel/Product';
import * as S from './Style';
import Pagination from '../../components/Pagination/Pagination';
import { Item } from '../../interface/Interface';
import { commaNumber, getImageFile } from '../../util/func/functions';
import { Link } from 'react-router-dom';

// interface Item {
//   // 컴포넌트 중 HotItem 하위 폴더의 Product.tsx 파일과 맞추시면 될 것 같아요~ 자세한건 선웅님께!
//   id: number;
//   title: string;
//   itemCategories: Array<any>;

//   imageUrl: string;
//   sellerName: string;
//   productName: string;
//   price: number;
//   rating: number;
//   review: number;
// }

const TitleData: TitleType = {
  sale: '재능 마켓',
  exchange: '재능 교환',
  give: '재능 기부',
  wanted: '재능 탐색',
};

type LocationType = 'sale' | 'exchange' | 'give' | 'wanted';

type TitleType = {
  [location in LocationType]: string | undefined;
};

const categories = [
  // 선웅님표 Category 컴포넌트 가데이터 재사용
  { title: '전체' },
  { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_1.png', title: '디자인' },
  { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_6.png', title: 'IT 프로그래밍' },
  { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_7.png', title: '영상 사진 음향' },
  { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_2.png', title: '마케팅' },
  { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_3.png', title: '번역 통역' },
  { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_4.png', title: '문서 글쓰기' },
  { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_8.png', title: '창업 사업' },
  { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_11.png', title: '주문제작' },
  { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_14.png', title: '세무 법무 노무' },
];

export default function ItemList() {
  const url = useLocation();
  const region = url.state && url.state.region;
  const location = useParams().type;
  const categoryName = useParams().category;
  const [itemList, setItemList] = useState<Item[]>();
  const { page } = useParams();
  const [orderBy, setOrderBy] = useState<String | null>(null); // 정렬 기준
  const [direction, setDirection] = useState('desc'); // 정렬 순서
  const [imageUrls, setImageUrls] = useState<string[]>();
  const [pageNum, setPageNum] = useState(1);

  //be와 연동하는 부분 주석처리해두겠습니다~ 작업하실 때 풀어주세요~
  useEffect(() => {
    if (typeof page !== undefined && region === null) {
      Instance.get(`/api/item/list/${location}`, {
        params: {
          orderBy: orderBy,
          direction: direction,
          page: Number(page) - 1,
          categoryName: categoryName,
        },
      }).then((response) => {
        setItemList(response.data.data);
        if (response.data.data.length > 0) setPageNum(response.data.pageNum);
      });
    }
  }, [url, orderBy, direction, page, location, region, categoryName]);

  useEffect(() => {
    if (typeof page !== undefined) {
      if (categoryName === 'all') {
        Instance.get(`/api/item/list/${location}`, {
          params: {
            orderBy: orderBy,
            direction: direction,
            page: Number(page) - 1,
            region: region,
          },
        }).then((response) => {
          setItemList(response.data.data);
          if (response.data.data.length > 0) setPageNum(response.data.pageNum);
        });
      } else {
        Instance.get(`/api/item/list/${location}`, {
          params: {
            orderBy: orderBy,
            direction: direction,
            categoryName: categoryName,
            page: Number(page) - 1,
            region: region,
          },
        }).then((response) => {
          setItemList(response.data.data);
          if (response.data.data.length > 0) setPageNum(response.data.pageNum);
        });
      }
    }
  }, [location, orderBy, direction, page, categoryName, region]);

  const mockOnChangeNumber = (num: number) => {
    window.location.href = `/item/${location}/${categoryName}/${num}`;
  };

  // 여기 반환되는 url이 빈값으로 반환되서 이미지가 안나옵니다... 아래 함수로 대체할게요 - @배진환
  // const getImageFile = (id: number): string => {
  //   let url = '';

  //   Instance.get(`/api/item/${id}`).then((response) => {
  //     const item = response.data;

  //     if (item.thumbNailList[0]) {
  //       Instance.get('/api/image', {
  //         headers: { 'Content-type': 'application/json; charset=UTF-8' },
  //         responseType: 'blob',
  //         params: {
  //           imagePath: item.thumbNailList[0].path,
  //         },
  //       }).then((res) => {
  //         url = URL.createObjectURL(res.data) as string;
  //       });
  //     }
  //   });
  //   return url;
  // };

  useEffect(() => {
    if (url.search) {
      const word = url.search.replace('?', '');
      if (word === 'old') {
        setOrderBy('regDate');
        setDirection('asc');
      } else if (word === 'recent') {
        setOrderBy('regDate');
        setDirection('desc');
      } else if (word === 'lowPrice') {
        setOrderBy('price');
        setDirection('asc');
      } else if (word === 'highPrice') {
        setOrderBy('price');
        setDirection('desc');
      } else if (word === 'review') {
        setOrderBy('reviewCnt');
        setDirection('desc');
      } else if (word === 'rate') {
        setOrderBy('rate');
        setDirection('desc');
      }
    }
  }, [url]);

  // 이미지 상태 저장
  useLayoutEffect(() => {
    const fetchImages = async () => {
      if (itemList) {
        const urls = await Promise.all(
          itemList.map((item) => {
            if (item.thumbNailList.length > 0 && item.thumbNailList[0].path !== null) return getImageFile(item.thumbNailList[0].path);
            else return null;
          })
        );
        setImageUrls(urls.filter((url) => url !== null) as string[]);
      }
    };
    fetchImages();
  }, [itemList]);

  // 오류 해결용
  const handleCheckChange = () => {};

  return (
    <>
      <Header />
      <C.Container>
        <C.PageTitle>{TitleData[location as LocationType]}</C.PageTitle>
        <C.SortWrapper>
          <p className="total">총 {itemList && commaNumber(itemList.length)}개</p>
          <div className="sort-right">
            <Sort type="region" />
            <Sort type="order" />
          </div>
        </C.SortWrapper>
        <S.ItemList>
          {/* 카테고리 */}
          <div className="category-wrapper">
            <h3>전체 카테고리</h3>
            <ul>
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={category.title === '전체' ? `/item/${location}/all/1` : `/item/${location}/${category.title}/1`}
                  state={region && { region: region }}>
                  <li>
                    <label htmlFor={category.title}>
                      <input
                        type="checkbox"
                        id={category.title}
                        checked={categoryName === 'all' ? category.title === '전체' : category.title === categoryName}
                        onChange={handleCheckChange}
                      />
                      {category.title}
                    </label>
                  </li>
                </Link>
              ))}
            </ul>
            {/* 지역도 추가하실거면 이쯤에 추가하시면 됩니다. sort로 넣어도 되고요. */}
          </div>
          {/* 상품 */}
          <div className="item-wrapper">
            <ul>
              {/* 선웅님표 컴포넌트 Product 재사용 */}
              {itemList && itemList.length > 0 ? (
                itemList.map((item, index) =>
                  item.price ? (
                    <li key={index}>
                      <Product
                        key={index}
                        id={item.id}
                        imageUrl={imageUrls && imageUrls[index]}
                        sellerName={item.memberId}
                        productName={item.title}
                        price={commaNumber(item.price)}
                        rating={item.rate}
                        review={item.reviewList.length}
                      />
                    </li>
                  ) : (
                    <li key={index}>
                      <Product
                        key={index}
                        id={item.id}
                        imageUrl={imageUrls && imageUrls[index]}
                        sellerName={item.memberId}
                        productName={item.title}
                        rating={item.rate}
                        review={item.reviewList.length}
                      />
                    </li>
                  )
                )
              ) : (
                <>데이터가 없습니다.</>
              )}
            </ul>
            <Pagination currentPage={page ? Number(page) : 1} totalPages={pageNum} onPageChange={mockOnChangeNumber} />
          </div>
        </S.ItemList>
      </C.Container>
      <Footer />
    </>
  );
}
