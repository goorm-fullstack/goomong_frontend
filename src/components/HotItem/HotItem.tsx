import * as S from './HotItemStyles';
import React from 'react';
import Product from './ProductModel/Product';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
const HotItem: React.FC = () => {
  const products = [
    {
      sellerName: '판매자 브랜드명0',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원',
      rating: 3.9,
      review: 3560,
    },
    {
      sellerName: '판매자 브랜드명1',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원',
      rating: 5,
      review: 3560,
    },
    {
      sellerName: '판매자 브랜드명2',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원',
      rating: 5,
      review: 3560,
    },
    // {
    //   sellerName: '판매자 브랜드명3',
    //   productName: '상품 이름을 이렇게 적고요.',
    //   price: '150,000원',
    //   rating: 5,
    //   review: 3560,
    // },
    // {
    //   sellerName: '판매자 브랜드명4',
    //   productName: '상품 이름을 이렇게 적고요.',
    //   price: '150,000원',
    //   rating: 5,
    //   review: 3560,
    // },
    // {
    //   sellerName: '판매자 브랜드명5',
    //   productName: '상품 이름을 이렇게 적고요.',
    //   price: '150,000원',
    //   rating: 5,
    //   review: 3560,
    // },
    // {
    //   sellerName: '판매자 브랜드명6',
    //   productName: '상품 이름을 이렇게 적고요.',
    //   price: '150,000원',
    //   rating: 5,
    //   review: 3560,
    // },
    // {
    //   sellerName: '판매자 브랜드명7',
    //   productName: '상품 이름을 이렇게 적고요.',
    //   price: '150,000원',
    //   rating: 5,
    //   review: 3560,
    // },
  ];

  const settings = {
    infinite: true,
    slidesToShow: Math.min(products.length, 6.3),
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

        <Slider {...settings}>
          {products.map((product, index) => (
            <Product
              key={index}
              sellerName={product.sellerName}
              productName={product.productName}
              price={product.price}
              rating={product.rating}
              review={product.review}
            />
          ))}
        </Slider>

        <div className="more-btn">
          <Link to="#null">
            <button type="submit">
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
