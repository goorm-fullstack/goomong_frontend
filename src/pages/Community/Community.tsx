import React, { useEffect, useState, useLayoutEffect } from 'react';
import * as S from './CommunityStyles';
import * as C from '../../Style/CommonStyles';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import NavItem from './CommunityItems/NavItem/NavItem';
import NoticeBoardModel from './CommunityItems/NoticeBoardModel/NoticBoardModel';
import SlideBoardModel from './CommunityItems/BoardModel/SlideBoardModel';
import BoardModel from './CommunityItems/BoardModel/BoardModel';
import Pagination from '../../components/Pagination/Pagination';
import { Link, useParams } from 'react-router-dom';
import { CommunityCategoryData, PostData } from '../../interface/Interface';
import Instance from '../../util/API/axiosInstance';
import { getImageFile, detailDate } from '../../util/func/functions';
import { Cookies } from 'react-cookie';

const Community: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchTerm = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const [slideIndex, setSlideIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const [communityData, setCommunityData] = useState<PostData[]>(); // 커뮤니티 게시판 데이터
  const [fixedData, setFixedData] = useState<PostData | null>(); // 고정 게시글
  const [totalPage, setTotalPage] = useState<number>(0); // 전체 페이지
  const [imageUrls, setImageUrls] = useState<string[]>(); // 이미지 데이터
  const [categoryData, setCategoryData] = useState<CommunityCategoryData[]>(); // 카테고리 데이터
  const [hotCommunityData, setHotCommunityData] = useState<PostData[]>(); // hot 커뮤니티 게시글 데이터
  const category = useParams().category;
  const itemsPerPage = 5; // 페이지당 표시할 아이템 수
  const cookies = new Cookies();

  // 페이지 변경 함수
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 커뮤니티 데이터 가져오기
  useEffect(() => {
    if (category === 'all') {
      Instance.get(`/api/posts/notdeletedtype/COMMUNITY?page=${currentPage}&size=${itemsPerPage}`)
        .then((response) => {
          const data = response.data;
          setCommunityData(data);
          if (data.length > 0) {
            setTotalPage(data[0].pageInfo.totalPage);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Instance.get(`/api/posts/notdeletedcategory/${category}`)
        .then((response) => {
          const data = response.data;
          setCommunityData(data);
          if (data.length > 0) {
            setTotalPage(data[0].pageInfo.totalPage);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [currentPage, category]);

  // 이미지 상태 저장
  useLayoutEffect(() => {
    const fetchImages = async () => {
      if (communityData) {
        const urls = await Promise.all(
          communityData.map((community) => {
            if (community.imageList.length > 0) return getImageFile(community.imageList[0].path);
            else return null;
          })
        );
        setImageUrls(urls as string[]);
      }
    };

    fetchImages();
  }, [communityData]);

  // 카테고리 데이터 가져오기
  useEffect(() => {
    Instance.get('/api/categorys/notdeleted/name/COMMUNITY')
      .then((response) => {
        const data = response.data;
        setCategoryData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [communityData]);

  // hot 커뮤니티 게시글 가져오기
  useEffect(() => {
    Instance.get('/api/posts/hot')
      .then((response) => {
        const data = response.data;
        setHotCommunityData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [communityData]);

  // 고정 게시글 가져오기
  useEffect(() => {
    Instance.get('/api/posts/post/fixed')
      .then((response) => {
        const data = response.data;
        setFixedData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const nextSlide = () => {
    if (hotCommunityData) setSlideIndex((prevIndex) => (prevIndex + 1) % hotCommunityData.length);
  };

  const prevSlide = () => {
    if (hotCommunityData) setSlideIndex((prevIndex) => (prevIndex === 0 ? hotCommunityData.length - 1 : prevIndex - 1));
  };

  // 작성하기 클릭 시 로그인 여부 체크
  const isLogin = () => {
    if (cookies.get('id') === undefined) {
      alert('로그인 후 이용하실 수 있습니다.');
      window.location.href = '/login';
    } else window.location.href = '/write/community';
  };

  return (
    <S.CommunityStyles>
      <div className="community">
        <Header />
        <C.Container>
          <C.PageTitle>구몽생활</C.PageTitle>

          <div className="search-container">
            <form action="submit" className="search-form">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="궁금하신 내용을 키워드 또는 #태그로 검색해보세요."
              />
              <button type="submit" onClick={handleSearchTerm}>
                <svg height="24px" width="24px" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#8e94a0"
                    d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"
                  />
                </svg>
              </button>
            </form>
          </div>

          <div className="content-container">
            <div className="left-nav">
              <ul className="category-list">{categoryData && <NavItem category={categoryData} />}</ul>
            </div>
            <div className="board-content">
              <div className="slide-top">
                <div className="hot-title">지금 가장 HOT한 소식</div>
                <div className="slide-btn">
                  <button onClick={prevSlide} style={slideIndex === 0 ? { opacity: 0.5, cursor: 'default' } : {}} disabled={slideIndex === 0}>
                    <svg height="15px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="11px" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256" transform="rotate(180 256 256)" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    style={hotCommunityData && slideIndex === hotCommunityData.length - 2 ? { opacity: 0.5, cursor: 'default' } : {}}
                    disabled={hotCommunityData && slideIndex === hotCommunityData.length - 2}>
                    <svg height="15px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="11px" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="board-content-top">
                {!fixedData && <NoticeBoardModel title="등록된 고정글이 없습니다." />}
                {fixedData && (
                  <NoticeBoardModel
                    type={fixedData.postCategory}
                    title={fixedData.postTitle}
                    writer={fixedData.memberId}
                    comment={fixedData.commentNo}
                  />
                )}
                <div className="hot-slide">
                  {hotCommunityData &&
                    hotCommunityData.map((item, index) => (
                      <div
                        key={index}
                        style={{ display: index === slideIndex || index === (slideIndex + 1) % hotCommunityData.length ? 'block' : 'none' }}>
                        <SlideBoardModel category={item.postCategory} title={item.postTitle} writer={item.memberId} comment={item.commentNo} />
                      </div>
                    ))}
                </div>
              </div>

              <div className="align-menu">
                <div className="left">
                  <div className="left-local">
                    지역 선택
                    <svg height="17px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="17px" xmlns="http://www.w3.org/2000/svg">
                      <polygon transform="rotate(90 256 256)" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                    </svg>
                  </div>
                  <div className="align-standard">
                    정렬 기준
                    <svg height="17px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="17px" xmlns="http://www.w3.org/2000/svg">
                      <polygon transform="rotate(90 256 256)" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                    </svg>
                  </div>
                </div>

                <div className="right">
                  <button type="button" className="write-btn" onClick={isLogin}>
                    작성하기
                  </button>
                </div>
              </div>

              <div className="board-list">
                {communityData?.length === 0 && <C.NoItem>등록된 게시글이 없습니다.</C.NoItem>}
                {communityData &&
                  communityData.map((item, index) => (
                    <BoardModel
                      key={index}
                      id={item.id}
                      p_category={item.postCategory}
                      title={item.postTitle}
                      content={item.postContent}
                      local={item.memberAddress}
                      like={item.postLikeNo}
                      comment={item.commentNo}
                      time={detailDate(item.regDate)}
                      isLastItem={index === communityData.length - 1}
                      imageURL={imageUrls && imageUrls[index] !== null ? imageUrls[index] : undefined}
                    />
                  ))}
              </div>
              <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange} />
            </div>
          </div>
        </C.Container>
        <Footer />
      </div>
    </S.CommunityStyles>
  );
};

export default Community;
