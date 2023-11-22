import React, { useEffect, useState } from 'react';

import * as S from './SearchDetailStyles';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import { Link, useParams } from 'react-router-dom';
import BoardModel from '../Community/CommunityItems/BoardModel/BoardModel';
import Product from '../../components/HotItem/ProductModel/Product';
import Pagination from '../../components/Pagination/Pagination';

interface CommunityProps {
  id: number;
  imageURL?: string;
  p_category: string;
  title: string;
  content: string;
  local: string;
  like: number;
  comment: number;
  time: string;
  isLastItem?: boolean;
  clickLike?: boolean;
}
interface ProductProps {
  id?: number;
  imageUrl?: string;
  sellerName: string;
  productName: string;
  price: string;
  rating: number;
  review: number;
}

const SearchDetail = () => {
  const { searchTerm } = useParams();

  useEffect(() => {
    // searchText 값이 변경되었을 때 실행할 작업을 여기에 작성
  }, [searchTerm]);

  const communityData: CommunityProps[] = [
    {
      id: 1,
      p_category: '재능카테고리',
      title: '게시글 제목',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: '30분전',
      content: '게시글 내용입니다.',
    },
    {
      id: 2,
      p_category: '재능카테고리',
      title: '게시글 제목',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: '30분전',
      content: '게시글 내용입니다.',
    },
    {
      id: 3,
      p_category: '재능카테고리',
      title: '게시글 제목',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: '30분전',
      content: '게시글 내용입니다.',
    },
    {
      id: 4,
      p_category: '재능카테고리',
      title: '게시글 제목',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: '30분전',
      content: '게시글 내용입니다.',
    },
    {
      id: 5,
      p_category: '재능카테고리',
      title: '게시글 제목',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: '30분전',
      content: '게시글 내용입니다.',
    },
    {
      id: 6,
      p_category: '재능카테고리',
      title: '게시글 제목',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: '30분전',
      content: '게시글 내용입니다.',
    },
    {
      id: 7,
      p_category: '재능카테고리',
      title: '게시글 제목',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: '30분전',
      content: '게시글 내용입니다.',
    },
  ];

  const productData: ProductProps[] = [
    {
      sellerName: '판매자 브랜드명',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원',
      rating: 3.9,
      review: 3560,
    },
    {
      sellerName: '판매자 브랜드명',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원',
      rating: 5,
      review: 3560,
    },
    {
      sellerName: '판매자 브랜드명',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원',
      rating: 5,
      review: 3560,
    },
    {
      sellerName: '판매자 브랜드명',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원',
      rating: 5,
      review: 3560,
    },
    {
      sellerName: '판매자 브랜드명',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원',
      rating: 5,
      review: 3560,
    },
    {
      sellerName: '판매자 브랜드명',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원',
      rating: 5,
      review: 3560,
    },
    {
      sellerName: '판매자 브랜드명',
      productName: '상품 이름을 이렇게 적고요.',
      price: '150,000원',
      rating: 5,
      review: 3560,
    },
  ];
  const [selectedTab, setSelectedTab] = useState('community');

  //커뮤니티 페이징
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 페이지당 표시할 아이템 수
  const totalPages = Math.ceil(communityData.length / itemsPerPage); // 총 페이지 수 계산 => 연동시 백엔드에서 totalPage를 받아와서 대입

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 따라 표시할 아이템 목록 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = communityData.slice(indexOfFirstItem, indexOfLastItem);

  //상품 페이징
  const [currentPage1, setCurrentPage1] = useState(1);
  const itemsPerPage1 = 8; // 페이지당 표시할 아이템 수
  const totalPages1 = Math.ceil(productData.length / itemsPerPage1); // 총 페이지 수 계산 => 연동시 백엔드에서 totalPage를 받아와서 대입

  const handlePageChange1 = (pageNumber: number) => {
    setCurrentPage1(pageNumber);
  };

  // 현재 페이지에 따라 표시할 아이템 목록 계산
  const indexOfLastItem1 = currentPage * itemsPerPage1;
  const indexOfFirstItem1 = indexOfLastItem - itemsPerPage1;
  const currentItems1 = productData.slice(indexOfFirstItem1, indexOfLastItem1);

  return (
    <S.SearchDetailStyles>
      <Header />
      <div className="search-detail-container">
        <div className="top">"{searchTerm}"에 대한 결과입니다.</div>
        <ul className="nav-list">
          <li onClick={() => setSelectedTab('community')}>구몽 생활</li>
          <li onClick={() => setSelectedTab('category1')}>카테고리1</li>
          <li onClick={() => setSelectedTab('category2')}>카테고리2</li>
          <li onClick={() => setSelectedTab('category3')}>카테고리3</li>
        </ul>
        <div className="community-list" style={{ display: selectedTab === 'community' ? 'block' : 'none' }}>
          {currentItems.map((item, index) => (
            <BoardModel
              key={index}
              id={item.id}
              p_category={item.p_category}
              content={item.content}
              local={item.local}
              like={item.like}
              comment={item.comment}
              time={item.time}
              title={item.title}
            />
          ))}
        </div>
        <div className="product-list" style={{ display: selectedTab !== 'community' ? 'grid' : 'none' }}>
          {currentItems1.map((product, index) => (
            <Product
              key={index}
              sellerName={product.sellerName}
              productName={product.productName}
              price={product.price}
              rating={product.rating}
              review={product.review}
            />
          ))}
        </div>
        <Pagination
          currentPage={selectedTab === 'community' ? currentPage : currentPage1}
          totalPages={selectedTab === 'community' ? totalPages : totalPages1}
          onPageChange={selectedTab === 'community' ? handlePageChange : handlePageChange1}
        />
      </div>

      <Footer />
    </S.SearchDetailStyles>
  );
};

export default SearchDetail;
