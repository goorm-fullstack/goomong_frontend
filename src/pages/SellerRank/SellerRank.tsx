import React, { useEffect, useLayoutEffect, useState } from 'react';

import * as S from './SellerRankStyles';
import Header from '../../components/layout/Header/Header';
import { Link } from 'react-router-dom';
import RankModel from '../../components/Popular/RankModel/RankModel';
import Footer from '../../components/layout/Footer/Footer';
import { Top5Ranking, RankingsState, FindMember } from '../../interface/Interface';
import Instance from '../../util/API/axiosInstance';
import { getImageFile } from '../../util/func/functions';

interface SellerListInfo {
  imageUrl?: string;
  category: string;
  sellerName: string;
  totalMoney: number;
  totalReview: number;
  totalTransaction: number;
  star: number;
}

const SellerRank: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(0);
  const [currentMonth, setCurrentMonth] = useState<number>(0);
  const [rankings, setRankings] = useState<RankingsState>({ ordered: [], review: [], sales: [] });
  const [FindMember, setFindMember] = useState<FindMember[]>([]);

  useEffect(() => {
    Instance.get<Top5Ranking[]>(`/api/ranking`)
      .then((response) => {
        const reviewRankings = response.data.filter((r) => r.category === '리뷰');
        const orderedRankings = response.data.filter((r) => r.category === '주문');
        const salesRankings = response.data.filter((r) => r.category === '판매 금액');

        setRankings({ ordered: orderedRankings, review: reviewRankings, sales: salesRankings });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const rankingsWithImages: RankingsState = {
        ordered: await mapImagesToRankings(rankings.ordered),
        review: await mapImagesToRankings(rankings.review),
        sales: await mapImagesToRankings(rankings.sales),
      };
      setRankings(rankingsWithImages);
    };

    if (rankings.ordered.length > 0 || rankings.review.length > 0 || rankings.sales.length > 0) {
      fetchImages();
    }
  }, [rankings.ordered, rankings.review, rankings.sales]);

  const mapImagesToRankings = async (rankingList: Top5Ranking[]): Promise<Top5Ranking[]> => {
    return Promise.all(
      rankingList.map(async (rank) => {
        const imageUrl =
          rank.profileImages.length > 0 ? await getImageFile(rank.profileImages[0].path) : 'https://via.placeholder.com/800x300?text=seller';
        return { ...rank, imageUrl };
      })
    );
  };

  useEffect(() => {
    Instance.get(`/api/ranking/sellers`)
      .then((response) => {
        setFindMember(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const fetchMemberImages = async () => {
      const membersWithImages = await mapImagesToFindMembers(FindMember);
      setFindMember(membersWithImages);
    };

    if (FindMember.length > 0) {
      fetchMemberImages();
    }
  }, [FindMember]);

  const mapImagesToFindMembers = async (members: FindMember[]): Promise<FindMember[]> => {
    return Promise.all(
      members.map(async (member) => {
        const imageUrl =
          member.profileImages.length > 0 ? await getImageFile(member.profileImages[0].path) : 'https://via.placeholder.com/800x300?text=seller';
        return { ...member, imageUrl };
      })
    );
  };

  useEffect(() => {
    const date = new Date();
    setCurrentYear(date.getFullYear());
    setCurrentMonth(date.getMonth() + 1);
  }, []);

  const defaultImage = (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="36px" height="32px">
      <path
        fill="#aab1bc"
        d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"
      />
    </svg>
  );

  //억,만 단위 표시 , 1000단위 ,찍기
  const formatCurrency = (money: number): string => {
    const billion: number = Math.floor(money / 100000000);
    const tenThousand: number = Math.floor((money % 100000000) / 10000);

    let result: string = '';
    if (billion > 0) {
      result += `${billion}억 `;
    }
    if (tenThousand > 0) {
      result += `${tenThousand.toLocaleString()}만`;
    }
    return result + '원';
  };

  return (
    <S.SellerRankStyles>
      <Header />
      <div className="seller-rank-container">
        <div className="top-nav">
          <Link to="/seller/rank" className="rank">
            랭킹
          </Link>
          <Link to="/seller/all" className="find">
            찾기
          </Link>
        </div>
        <div className="rank-content">
          <div className="title">
            {currentYear}년 {currentMonth}월 판매자 순위 TOP 5
          </div>
          <div className="rank-model">
            {rankings.review.length > 0 && <RankModel top5Ranking={rankings.review} />}
            {rankings.ordered.length > 0 && <RankModel top5Ranking={rankings.ordered} />}
            {rankings.sales.length > 0 && <RankModel top5Ranking={rankings.sales} />}
          </div>
          <div className="bottom">
            <div className="top">TOP 5</div>
            <div className="align-menu">
              <div className="left">
                <div className="left-category">
                  재능 카테고리
                  <svg height="17px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="17px" xmlns="http://www.w3.org/2000/svg">
                    <polygon transform="rotate(90 256 256)" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                  </svg>
                </div>
                <div className="left-local">
                  지역 선택
                  <svg height="17px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="17px" xmlns="http://www.w3.org/2000/svg">
                    <polygon transform="rotate(90 256 256)" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                  </svg>
                </div>
              </div>
            </div>
            <div className="seller-list">
              {FindMember.map((item, index) => (
                <div className={`seller-list-item ${index === FindMember.length - 1 ? 'last-item' : ''}`} key={index}>
                  <Link to="#null">
                    <div className="image-container">{item.imageUrl ? <img src={item.imageUrl} alt="" /> : defaultImage}</div>
                    <div className="right">
                      <div className="category">{item.category}</div>
                      <div className="seller-name">{item.memberName}</div>
                      <div className="total-list">
                        <span className="money">
                          총수익 <span className="number">{formatCurrency(item.totalSales)}</span>
                        </span>
                        <span className="transaction">
                          총거래 <span className="number">{item.transaction}</span>
                        </span>
                        <span className="review">
                          총리뷰 <span className="number">{item.reviewCount}</span>
                        </span>
                        <span className="star"> ★</span>
                        <span className=" star-number">{item.totalRating}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </S.SellerRankStyles>
  );
};

export default SellerRank;
