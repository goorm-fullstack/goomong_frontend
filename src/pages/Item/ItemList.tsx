import React, { useEffect, useState, useLayoutEffect } from 'react';
import Instance from '../../util/API/axiosInstance';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import * as C from '../../Style/CommonStyles';
import { useParams } from 'react-router-dom';
import Sort from '../../components/Sort/Sort';
import Product from '../../components/HotItem/ProductModel/Product';
import * as S from './Style';
import Pagination from '../../components/Pagination/Pagination';
import { ItemData } from '../../interface/Interface';
import { commaNumber, getImageFile } from '../../util/func/functions';

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
  const type = useParams().type;
  const category = useParams().category;
  const [itemList, setItemList] = useState<ItemData[]>();
  const [currentPage, setCurrentPage] = useState<number>(0); // 현재 페이지
  const [totalPage, setTotalPage] = useState<number>(1); // 전체 페이지 수
  const [orderBy, setOrderBy] = useState<String | null>(null); // 정렬 기준
  const [direction, setDirection] = useState('desc'); // 정렬 순서
  const [imageUrls, setImageUrls] = useState<string[]>();
  const sort = '최신순';

  //be와 연동하는 부분 주석처리해두겠습니다~ 작업하실 때 풀어주세요~
  useEffect(() => {
    if (type === 'sale') {
      if (category === 'all') {
        Instance.get(`/api/item/list/sale?page=${currentPage}`, {
          params: {
            orderBy: orderBy,
            direction: direction,
          },
        }).then((response) => {
          setItemList(response.data);
          if (response.data.length > 0) setTotalPage(response.data[0].pageNum);
        });
      } else {
        Instance.get(`/api/item/list/sale?page=${currentPage}`, {
          params: {
            orderBy: orderBy,
            direction: direction,
            categoryName: category,
          },
        }).then((response) => {
          setItemList(response.data);
          if (response.data.length > 0) setTotalPage(response.data[0].pageNum);
        });
      }
    } else if (type === 'exchange') {
      if (category === 'all') {
        Instance.get(`/api/item/list/exchange?page=${currentPage}`, {
          params: {
            orderBy: orderBy,
            direction: direction,
          },
        }).then((response) => {
          setItemList(response.data);
          if (response.data.length > 0) setTotalPage(response.data[0].pageNum);
        });
      } else {
        Instance.get(`/api/item/list/exchange?page=${currentPage}`, {
          params: {
            orderBy: orderBy,
            direction: direction,
            categoryName: category,
          },
        }).then((response) => {
          setItemList(response.data);
          if (response.data.length > 0) setTotalPage(response.data[0].pageNum);
        });
      }
    } else {
      if (category === 'all') {
        Instance.get(`/api/item/list/give?page=${currentPage}`, {
          params: {
            orderBy: orderBy,
            direction: direction,
          },
        }).then((response) => {
          setItemList(response.data);
          if (response.data.length > 0) setTotalPage(response.data[0].pageNum);
        });
      } else {
        Instance.get(`/api/item/list/give?page=${currentPage}`, {
          params: {
            orderBy: orderBy,
            direction: direction,
            categoryName: category,
          },
        }).then((response) => {
          setItemList(response.data);
          if (response.data.length > 0) setTotalPage(response.data[0].pageNum);
        });
      }
    }
  }, [type, currentPage, direction, orderBy, category]);

  useEffect(() => {
    if (sort === '최신순') {
      setOrderBy('regDate');
      setDirection('desc');
    }
  }, [sort]);

  // 이미지 상태 저장
  useLayoutEffect(() => {
    const fetchImages = async () => {
      if (itemList) {
        const urls = await Promise.all(
          itemList.map((item) => {
            if (item.data.thumbNailList.length > 0) return getImageFile(item.data.thumbNailList[0].path);
            else return null;
          })
        );
        setImageUrls(urls.filter((url) => url !== null) as string[]);
      }
    };

    fetchImages();
  }, [itemList]);

  // 페이지 숫자 클릭 시 해당 페이지의 아이템 보여주기
  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber - 1);
  };

  const clickCategory = (category: string): void => {
    if (category === '전체') {
      window.location.href = `/item/${type}/all`;
      return;
    }
    window.location.href = `/item/${type}/${category}`;
  };

  return (
    <>
      <Header />
      <C.Container>
        <C.PageTitle>{TitleData[type as LocationType]}</C.PageTitle>
        <C.SortWrapper>
          <p className="total">총 {itemList ? commaNumber(itemList.length) : 0}개</p>
          <Sort type="order" />
        </C.SortWrapper>
        <S.ItemList>
          {/* 카테고리 */}
          <div className="category-wrapper">
            <h3>전체 카테고리</h3>
            <ul>
              {categories.map((item, index) => (
                <li key={index}>
                  <label htmlFor={item.title}>
                    <input
                      type="checkbox"
                      id={item.title}
                      checked={category === 'all' ? item.title === '전체' : item.title === category}
                      onClick={() => clickCategory(item.title)}
                    />
                    {item.title}
                  </label>
                </li>
              ))}
            </ul>
            {/* 지역도 추가하실거면 이쯤에 추가하시면 됩니다. sort로 넣어도 되고요. */}
          </div>
          {/* 상품 */}
          <div className="item-wrapper">
            <ul>
              {/* 선웅님표 컴포넌트 Product 재사용 */}
              {itemList?.length === 0 && <li>등록된 상품이 없습니다.</li>}
              {itemList &&
                itemList.map((item, index) => (
                  <li key={index}>
                    <Product
                      key={index}
                      id={item.data.id}
                      imageUrl={imageUrls && imageUrls[index]}
                      sellerName={item.data.member.name}
                      productName={item.data.title}
                      price={commaNumber(item.data.price)}
                      rating={item.data.rate}
                      review={item.data.reviewList.length}
                    />
                  </li>
                ))}
            </ul>
            <Pagination currentPage={currentPage + 1} totalPages={totalPage} onPageChange={handlePageChange} />
          </div>
        </S.ItemList>
      </C.Container>
      <Footer />
    </>
  );
}
