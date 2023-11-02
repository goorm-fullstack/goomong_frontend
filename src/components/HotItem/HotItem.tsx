import * as S from './HotItemStyles';
import React from 'react';
import Slide from '../Slide/Slide';
import Product from './ProductModel/Product';
import { Link } from 'react-router-dom';
const HotItem: React.FC = () => {
  const products = [
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
  ];

  return (
    <S.Hotitem>
      <div className="hotitem-container">
        <div className="hotitem-top">
          <div className="hotitem-title">
            구몽 추천, <span>HOT</span>인기 재능
          </div>
          <ul className="hotitem-btn">
            <li className="marketing-btn selected">마케팅</li>
            <li className="e-book-btn">전자책</li>
            <li className="translate-btn">영어 번역</li>
            <li className="e-book-btn">전자책</li>
            <li className="e-book-btn">전자책</li>
          </ul>
        </div>

        <Slide>
          {products.map((product, index) => (
            <Link to="#null" key={index}>
              <Product
                imageUrl={product.imageUrl}
                sellerName={product.sellerName}
                productName={product.productName}
                price={product.price}
                rating={product.rating}
                review={product.review}
              />
            </Link>
          ))}
        </Slide>

        <div className="more-btn">
          <Link to="#null">
            <button type='submit'>
              재능 더보기
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
    </S.Hotitem>
  );
};

export default HotItem;
