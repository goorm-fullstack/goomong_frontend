import React, { useEffect, useState, useLayoutEffect } from 'react';
import * as S from './SearchDetailStyles';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import { Link, useParams } from 'react-router-dom';
import Product from '../../components/HotItem/ProductModel/Product';
import BoardModel from '../Community/CommunityItems/BoardModel/BoardModel';
import { PostData, Item } from '../../interface/Interface';
import Pagination from '../../components/Pagination/Pagination';
import Instance from '../../util/API/axiosInstance';
import { commaNumber, getImageFile, detailDate } from '../../util/func/functions';
import { Cookies } from 'react-cookie';

const SearchDetail = () => {
  const { searchTerm } = useParams();
  const [communityData, setCommunityData] = useState<PostData[]>(); // 커뮤니티 게시판 데이터
  const [totalPage, setTotalPage] = useState<number>(0); // 전체 페이지
  const [currentPage, setCurrentPage] = useState(0);
  const [imageUrls, setImageUrls] = useState<string[]>(); // 이미지 데이터
  const [itemList, setItemList] = useState<Item[]>();
  const [selectedTab, setSelectedTab] = useState('community');
  const [didMount, setDidMount] = useState<boolean>(false);
  const itemsPerPage = 10; // 페이지당 표시할 아이템 수
  const cookies = new Cookies();
  const id = cookies.get(`id`);

  useEffect(() => {
    console.log('mount');
    setDidMount(true);
    return () => {
      console.log('unmount');
    };
  }, []);

  useEffect(() => {
    const searchKeyword = {
      memberId: id,
      keyword: searchTerm,
      order: null,
      category: null,
      page: currentPage,
      size: itemsPerPage,
    };
    if (didMount) {
      if (selectedTab === 'community') {
        Instance.post(`/api/search/post`, searchKeyword, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            const data = response.data;
            setCommunityData(data.data);
            if (data.data.length > 0) {
              setTotalPage(data.pageInfo.totalPage);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        Instance.post(`/api/search/item`, searchKeyword, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            const data = response.data;
            setItemList(data.data);
            if (data.data.length > 0) {
              setTotalPage(data.pageInfo.totalPage);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }, [didMount, searchTerm, selectedTab]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber - 1);
  };

  useEffect(() => {}, [selectedTab]);

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

    useLayoutEffect(() => {
      const fetchImages = async () => {
        if (itemList) {
          const urls = await Promise.all(
            itemList.map((item) => {
              if (item.thumbNailList.length > 0) return getImageFile(item.thumbNailList[0].path);
              else return null;
            })
          );
          setImageUrls(urls.filter((url) => url !== null) as string[]);
        }
      };
      fetchImages();
    }, [itemList]);

  return (
    <S.SearchDetailStyles>
      <Header />
      <div className="search-detail-container">
        <div className="top">"{searchTerm ? searchTerm : ''}"에 대한 결과입니다.</div>
        <ul className="nav-list">
          <li onClick={() => setSelectedTab('community')}>구몽 생활</li>
          <li onClick={() => setSelectedTab('itemList')}>재능</li>
        </ul>
        <div className="community-list" style={{ display: selectedTab === 'community' ? 'block' : 'none' }}>
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
        <div className="product-list" style={{ display: selectedTab !== 'community' ? 'grid' : 'none' }}>
          {itemList &&
            itemList.map((item, index) => (
              <Product
                key={index}
                id={item.id}
                imageUrl={imageUrls && imageUrls[index]}
                sellerName={item.member.name}
                productName={item.title}
                price={commaNumber(item.price)}
                rating={item.rate}
                review={item.reviewList.length}
              />
            ))}
        </div>
        <Pagination currentPage={currentPage + 1} totalPages={totalPage} onPageChange={handlePageChange} />
      </div>

      <Footer />
    </S.SearchDetailStyles>
  );
};

export default SearchDetail;
