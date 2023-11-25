import React, { useEffect, useState, useLayoutEffect } from 'react';
import * as S from './SellerAllStyles';
import Header from '../../components/layout/Header/Header';
import { Link, useLocation } from 'react-router-dom';
import SellerBrandModel from './SellerBrandModel/SellerBrandModel';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/layout/Footer/Footer';
import Sort from '../../components/Sort/Sort';
import Instance from '../../util/API/axiosInstance';
import { SellerData } from '../../interface/Interface';
import { getImageFile } from '../../util/func/functions';
import { NoItem } from '../../Style/CommonStyles';

const SellerAll: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [keywordTerm, setKeywordTerm] = useState<string>();

  const handleSearchTerm = (e: React.FormEvent) => {
    e.preventDefault();
    setKeywordTerm(searchTerm);
  };

  //페이징처리
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState<number>(1); // 전체 페이지 수
  const [orderBy, setOrderBy] = useState<string>(); // 정렬 기준
  const [direction, setDirection] = useState<string>(); // 오름차순, 내림차순
  const [sellerData, setSellerData] = useState<SellerData[]>(); // 판매자 데이터
  const [imageUrls, setImageUrls] = useState<string[]>(); // 이미지
  const itemsPerPage = 7; // 페이지당 표시할 아이템 수
  const location = useLocation();
  const region = location.state ? location.state.region : null;

  // 판매자 데이터 가져오기
  useEffect(() => {
    if (region !== null) {
      if (orderBy && direction) {
        Instance.get(`/api/sellers?page=${currentPage}&size=${itemsPerPage}&orderBy=${orderBy}&direction=${direction}&region=${region}`)
          .then((response) => {
            const data = response.data;
            setSellerData(data);
            if (data.length > 0) setTotalPage(data[0].pageInfo.totalPage);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        Instance.get(`/api/sellers?page=${currentPage}&size=${itemsPerPage}&region=${region}`)
          .then((response) => {
            const data = response.data;
            setSellerData(data);
            if (data.length > 0) setTotalPage(data[0].pageInfo.totalPage);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } else {
      if (orderBy && direction) {
        Instance.get(`/api/sellers?page=${currentPage}&size=${itemsPerPage}&orderBy=${orderBy}&direction=${direction}`)
          .then((response) => {
            const data = response.data;
            setSellerData(data);
            if (data.length > 0) setTotalPage(data[0].pageInfo.totalPage);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        Instance.get(`/api/sellers?page=${currentPage}&size=${itemsPerPage}`)
          .then((response) => {
            const data = response.data;
            setSellerData(data);
            if (data.length > 0) setTotalPage(data[0].pageInfo.totalPage);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }, [currentPage, orderBy, direction, region]);

  useEffect(() => {
    if (keywordTerm) {
      if (region !== null) {
        if (orderBy && direction) {
          Instance.get(
            `/api/sellers?page=${currentPage}&size=${itemsPerPage}&orderBy=${orderBy}&direction=${direction}&region=${region}&keyword=${keywordTerm}`
          )
            .then((response) => {
              const data = response.data;
              setSellerData(data);
              if (data.length > 0) setTotalPage(data[0].pageInfo.totalPage);
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          Instance.get(`/api/sellers?page=${currentPage}&size=${itemsPerPage}&region=${region}&keyword=${keywordTerm}`)
            .then((response) => {
              const data = response.data;
              setSellerData(data);
              if (data.length > 0) setTotalPage(data[0].pageInfo.totalPage);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      } else {
        if (orderBy && direction) {
          Instance.get(`/api/sellers?page=${currentPage}&size=${itemsPerPage}&orderBy=${orderBy}&direction=${direction}&keyword=${keywordTerm}`)
            .then((response) => {
              const data = response.data;
              setSellerData(data);
              if (data.length > 0) setTotalPage(data[0].pageInfo.totalPage);
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          Instance.get(`/api/sellers?page=${currentPage}&size=${itemsPerPage}&keyword=${keywordTerm}`)
            .then((response) => {
              const data = response.data;
              setSellerData(data);
              if (data.length > 0) setTotalPage(data[0].pageInfo.totalPage);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    }
  }, [keywordTerm, currentPage, orderBy, direction, region]);

  // 이미지 상태 저장
  useLayoutEffect(() => {
    const fetchImages = async () => {
      if (sellerData) {
        const urls = await Promise.all(
          sellerData.map((seller) => {
            if (seller.imagePath !== null) return getImageFile(seller.imagePath);
            else return null;
          })
        );
        setImageUrls(urls.filter((url) => url !== null) as string[]);
      }
    };

    fetchImages();
  }, [sellerData]);

  useEffect(() => {
    if (location.search) {
      const word = location.search.replace('?', '');
      if (word === 'old') {
        setOrderBy('regDate');
        setDirection('asc');
      } else if (word === 'recent') {
        setOrderBy('regDate');
        setDirection('desc');
      } else if (word === 'rate') {
        setOrderBy('rate');
        setDirection('desc');
      } else if (word === 'lowPrice') {
        setOrderBy('income');
        setDirection('asc');
      } else if (word === 'highPrice') {
        setOrderBy('income');
        setDirection('desc');
      } else if (word === 'review') {
        setOrderBy('reviewCnt');
        setDirection('desc');
      }
    }
  }, [location]);

  //페이지가 바뀔때의 처리
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber - 1);
  };

  return (
    <S.SellerAllStyles>
      <Header />
      <div className="seller-all-container">
        <div className="top-nav">
          <Link to="/seller/rank" className="rank">
            랭킹
          </Link>
          <Link to="/seller/all" className="find">
            찾기
          </Link>
        </div>
        <div className="search-container ">
          <form className="search-form" onSubmit={handleSearchTerm}>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="어떤 서비스가 필요하세요?" />
            <button type="submit">
              <svg height="24px" width="24px" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#8e94a0"
                  d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="align-menu">
          <div className="left">
            <Sort type="region" />
          </div>
          <div className="right">
            <Sort type="seller" />
          </div>
        </div>
        <div className="seller-all-content">
          <div className="find-map">
            <svg width="54px" height="64px" id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                className="cls-1"
                style={{ fill: '#4285f4' }}
                d="M2,10c0,8.491,9.126,13.658,9.514,13.874a1,1,0,0,0,.972,0C12.874,23.658,22,18.491,22,10A10,10,0,0,0,2,10ZM12,2a8.009,8.009,0,0,1,8,8c0,6.274-6.2,10.68-8,11.83C10.2,20.68,4,16.274,4,10A8.009,8.009,0,0,1,12,2Z"
              />
              <path
                className="cls-1"
                style={{ fill: '#4285f4' }}
                d="M12,15a5,5,0,1,0-5-5A5.006,5.006,0,0,0,12,15Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,12,7Z"
              />
            </svg>
            <p className="title">내 주변 판매자 찾기</p>
            <p className="bottom">우리 동네 재능 판매자는?</p>
            <p className="bottom last">근처 재능 판매자를 빠르게 찾아드려요</p>
            <Link to="/seller/map">
              <button type="button">내 주변 판매자 찾기</button>
            </Link>
          </div>
          {sellerData?.length === 0 && <NoItem>등록된 판매자가 없습니다.</NoItem>}
          {sellerData &&
            sellerData.map((item, index) => (
              <SellerBrandModel
                key={index}
                id={item.id}
                sellerName={item.memberId}
                p_category={item.saleSido}
                content={item.description}
                totalMoney={item.income}
                totalReview={item.reviewCnt}
                totalTransaction={item.transactionCnt}
                star={item.rate / item.reviewCnt}
                imageUrl={imageUrls && imageUrls[index]}
              />
            ))}
        </div>
        <Pagination currentPage={currentPage + 1} totalPages={totalPage} onPageChange={handlePageChange} />
      </div>

      <Footer />
    </S.SellerAllStyles>
  );
};

export default SellerAll;
