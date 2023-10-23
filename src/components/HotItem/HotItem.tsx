import React from 'react';
import Slide from '../Slide/Slide';
import Product from './ProductModel/Product';
import '../../style/global.css';
import './HotItem.css';
const HotItem: React.FC = () => {


  const products = [
    {
      imageUrl: 'path/to/image1.jpg',
      sellerName: '판매자 브랜드명',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원~',
      rating: 5,
    },
    {
      imageUrl: 'path/to/image1.jpg',
      sellerName: '판매자 브랜드명',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원~',
      rating: 5,
    },
    {
      imageUrl: 'path/to/image1.jpg',
      sellerName: '판매자 브랜드명',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원~',
      rating: 5,
    },
    {
      imageUrl: 'path/to/image1.jpg',
      sellerName: '판매자 브랜드명',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원~',
      rating: 5,
    },
    {
      imageUrl: 'path/to/image1.jpg',
      sellerName: '판매자 브랜드명',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원~',
      rating: 5,
    },
    {
      imageUrl: 'path/to/image1.jpg',
      sellerName: '판매자 브랜드명',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원~',
      rating: 5,
    },
    {
      imageUrl: 'path/to/image1.jpg',
      sellerName: '판매자 브랜드명',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원~',
      rating: 5,
    },
  ];

  return (
    <div className="hotitem-container">
      <h2>
        구몽 추천, <span>HOT</span>인기 재능
      </h2>
      <ul className="hotitem-btn">
        <li className="marketing-btn">마케팅</li>
        <li className="e-book-btn">전자책</li>
        <li className="translate-btn">영어 번역</li>
      </ul>
      <Slide>
        {products.map((product, index) => (
          <Product
            key={index}
            imageUrl={product.imageUrl}
            sellerName={product.sellerName}
            productName={product.productName}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </Slide>

      <div className="more-btn">
        <button>재능 더보기 &gt;</button>
      </div>
    </div>
  );
};

export default HotItem;
