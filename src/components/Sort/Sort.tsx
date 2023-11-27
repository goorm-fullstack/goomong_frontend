import React, { useEffect, useState } from 'react';
import * as S from './Style';
import Instance from '../../util/API/axiosInstance';
import { ItemCategoryData } from '../../interface/Interface';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface SortProp {
  type: string;
}

const SortData = {
  seller: ['최신순', '오래된순', '수익순', '거래순', '리뷰순', '평점순'],
  order: ['최신순', '오래된순', '낮은 금액순', '높은 금액순', '리뷰순', '평점순'],
  community: ['최신순', '오래된순', '댓글순', '조회순', '좋아요순'],
  review: ['최신순', '오래된순', '평점순'],
  region: [
    '서울특별시',
    '경기도',
    '대구광역시',
    '부산광역시',
    '인천광역시',
    '광주광역시',
    '대전광역시',
    '울산광역시',
    '강원도',
    '충청북도',
    '충청남도',
    '경상북도',
    '경상남도',
    '전라북도',
    '전라남도',
    '제주도',
  ],
};

const Sort: React.FC<SortProp> = ({ type }) => {
  const [nowSortType, setSortType] = useState<string[]>(SortData['order']); // 정렬 기준 리스트
  const [sortValue, setSortValue] = useState<string>('최신순'); // 현재 선택된 정렬 기준
  const [show, setShow] = useState<boolean>(false);
  const [itemCategoryData, setItemCategoryData] = useState<ItemCategoryData[]>(); // 상품 카테고리 데이터
  const location = useLocation();

  useEffect(() => {
    if (type === 'order') {
      setSortType(SortData['order']);
    }
    if (type === 'itemCategory') {
      Instance.get('/api/item-category/list')
        .then((response) => {
          const data = response.data;
          setItemCategoryData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (type === 'community') {
      setSortType(SortData['community']);
    }
    if (type === 'review') {
      setSortType(SortData['review']);
    }
    if (type === 'seller') {
      setSortType(SortData['seller']);
    }
    if (type === 'region') {
      setSortType(SortData['region']);
    }
  }, []);

  useEffect(() => {
    if (type !== 'region') {
      if (location.search) {
        const word = location.search.replace('?', '');
        if (word === 'recent') setSortValue('최신순');
        if (word === 'old') setSortValue('오래된순');
        if (word === 'lowPrice') setSortValue('낮은 금액순');
        if (word === 'highPrice') setSortValue('높은 금액순');
        if (word === 'review') setSortValue('리뷰순');
        if (word === 'rate') setSortValue('평점순');
        if (word === 'comment') setSortValue('댓글순');
        if (word === 'view') setSortValue('조회순');
        if (word === 'like') setSortValue('좋아요순');
        if (word === 'income') setSortValue('수익순');
        if (word === 'business') setSortValue('거래순');
      } else setSortValue('최신순');
    } else {
      if (location.state) setSortValue(location.state.region);
      else setSortValue('지역 선택');
    }
  }, [location, type]);

  const toggleVisibility = () => {
    setShow(!show);
  };

  const sortValueToEnglish = (value: string): string => {
    if (value === '최신순') return 'recent';
    if (value === '오래된순') return 'old';
    if (value === '낮은 금액순') return 'lowPrice';
    if (value === '높은 금액순') return 'highPrice';
    if (value === '리뷰순') return 'review';
    if (value === '평점순') return 'rate';
    if (value === '댓글순') return 'comment';
    if (value === '조회순') return 'view';
    if (value === '수익순') return 'income';
    if (value === '거래순') return 'business';
    else return 'like';
  };

  const onChangeSortType = (index: number) => {
    setSortValue(nowSortType[index]);
    setShow(!show);
  };

  const onChangeItemCategory = (name: string) => {
    setSortValue(name);
    setShow(!show);
  };

  const onChangeRegion = () => {
    setShow(!show);
  };

  return (
    <S.Sort>
      <div className="header-wrap" onClick={toggleVisibility}>
        <input type="text" readOnly value={sortValue} />
        <svg version="1.1" viewBox="0 0 512 512">
          <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
        </svg>
      </div>
      <ul className="bottom-wrap" data-visible={show}>
        {type === 'region' &&
          nowSortType.map((item, index) => (
            <Link
              key={index}
              to={location.search ? location.pathname + location.search : location.pathname}
              state={{ region: item }}
              onClick={onChangeRegion}>
              <li className="item">{item}</li>
            </Link>
          ))}
        {type !== 'itemCategory'
          ? nowSortType.map((item, index) => (
              <Link
                key={index}
                to={`${location.pathname}?${sortValueToEnglish(nowSortType[index])}`}
                state={location.state && { region: location.state.region }}
                onClick={() => onChangeSortType(index)}>
                <li className="item">{item}</li>
              </Link>
            ))
          : itemCategoryData?.map((item, index) => (
              <Link
                key={index}
                to={`${location.pathname}?${sortValueToEnglish(item.title)}`}
                state={location.state && { region: location.state.region }}
                onClick={() => onChangeItemCategory(item.title)}>
                <li className="item">{item.title}</li>
              </Link>
            ))}
      </ul>
    </S.Sort>
  );
};

export default Sort;
