import React, { useEffect, useState } from 'react';
import Instance from '../../util/API/axiosInstance';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import * as C from '../../Style/CommonStyles';
import { useParams } from 'react-router-dom';
import Sort from '../../components/Sort/Sort';
import Product from '../../components/HotItem/ProductModel/Product';
import CategoryItem from '../../components/Category/CategoryItem';
import * as S from './Style';

interface Item {
  // 컴포넌트 중 HotItem 하위 폴더의 Product.tsx 파일과 맞추시면 될 것 같아요~ 자세한건 선웅님께!
  id: number;
  title: string;
  itemCategories: Array<any>;

  imageUrl: string;
  sellerName: string;
  productName: string;
  price: string;
  rating: number;
  review: number;
}

const TitleData: TitleType = {
  market: '재능 마켓',
  exchange: '재능 교환',
  contribution: '재능 기부',
};

type LocationType = 'market' | 'exchange' | 'contribution';

type TitleType = {
  [location in LocationType]: string | undefined;
};

const itemList = [
  // 선웅님표 Product 컴포넌트 가데이터 재사용
  {
    imageUrl: 'https://via.placeholder.com/800x300?text=product+1',
    sellerName: '판매자 브랜드명',
    productName: '상품 이름을 이렇게 적고요.',
    price: '150,000원~',
    rating: 3.9,
    review: 3560,
  },
  {
    imageUrl: 'https://via.placeholder.com/800x300?text=product+2',
    sellerName: '판매자 브랜드명',
    productName: '상품 이름을 이렇게 적고요.',
    price: '150,000원~',
    rating: 5,
    review: 3560,
  },
  {
    imageUrl: 'https://via.placeholder.com/800x300?text=product+3',
    sellerName: '판매자 브랜드명',
    productName: '상품 이름을 이렇게 적고요.',
    price: '150,000원~',
    rating: 5,
    review: 3560,
  },
  {
    imageUrl: 'https://via.placeholder.com/800x300?text=product+4',
    sellerName: '판매자 브랜드명',
    productName: '상품 이름을 이렇게 적고요.',
    price: '150,000원~',
    rating: 5,
    review: 3560,
  },
  {
    imageUrl: 'https://via.placeholder.com/800x300?text=product+5',
    sellerName: '판매자 브랜드명',
    productName: '상품 이름을 이렇게 적고요.',
    price: '150,000원~',
    rating: 5,
    review: 3560,
  },
  {
    imageUrl: 'https://via.placeholder.com/800x300?text=product+6',
    sellerName: '판매자 브랜드명',
    productName: '상품 이름을 이렇게 적고요.',
    price: '150,000원~',
    rating: 5,
    review: 3560,
  },
  {
    imageUrl: 'https://via.placeholder.com/800x300?text=product+7',
    sellerName: '판매자 브랜드명',
    productName: '상품 이름을 이렇게 적고요.',
    price: '150,000원~',
    rating: 5,
    review: 3560,
  },
  {
    imageUrl: 'https://via.placeholder.com/800x300?text=product+7',
    sellerName: '판매자 브랜드명',
    productName: '상품 이름을 이렇게 적고요.',
    price: '150,000원~',
    rating: 5,
    review: 3560,
  },
];

const categories = [
  // 선웅님표 Category 컴포넌트 가데이터 재사용
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
  const location = useParams().type;
  // be와 연동하는 부분 주석처리해두겠습니다~ 작업하실 때 풀어주세요~
  // const [itemList, setItemList] = useState<Item[]>([]);

  // useEffect(() => {
  //   Instance.get('/api/item/list').then((response) => {
  //     setItemList(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 3;

  const pageCount: number = Math.ceil(itemList.length / itemsPerPage);

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems = itemList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <C.Container>
        <C.PageTitle>{TitleData[location as LocationType]}</C.PageTitle>
        <C.SortWrapper>
          <p className="total">총 17,153개</p>
          <Sort type="order" />
        </C.SortWrapper>
        <S.ItemList>
          {/* 카테고리 */}
          <div className="category-wrapper">
            <h3>전체 카테고리</h3>
            <ul>
              {categories.map((category, index) => (
                <li>
                  <label htmlFor={category.title}>
                    <input type="checkbox" id={category.title} />
                    {category.title}
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
              {itemList.map((item, index) => (
                <li>
                  <Product
                    key={index}
                    imageUrl={item.imageUrl}
                    sellerName={item.sellerName}
                    productName={item.productName}
                    price={item.price}
                    rating={item.rating}
                    review={item.review}
                  />
                </li>
              ))}
            </ul>
            <C.Pagination>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
                <button type="button" key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
                  {number}
                </button>
              ))}
            </C.Pagination>
          </div>
        </S.ItemList>
      </C.Container>
      <Footer />
    </>
  );
}
