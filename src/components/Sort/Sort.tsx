import React, { useEffect, useState } from 'react';
import * as S from './Style';
import Instance from '../../util/API/axiosInstance';
import { ItemCategoryData } from '../../interface/Interface';

interface SortProp {
  type: string;
}

const SortData = {
  order: ['최신순', '판매순', '낮은 금액순', '높은 금액순'],
  community: ['최신순', '댓글순', '조회순', '좋아요순'],
  review: ['최신순', '평점순'],
};

const Sort: React.FC<SortProp> = ({ type }) => {
  const [nowSortType, setSortType] = useState<string[]>(SortData['order']); // 정렬 기준 리스트
  const [sortValue, setSortValue] = useState<string>(); // 현재 선택된 정렬 기준
  const [show, setShow] = useState<boolean>(false);
  const [itemCategoryData, setItemCategoryData] = useState<ItemCategoryData[]>(); // 상품 카테고리 데이터

  useEffect(() => {
    if (type === 'order') {
      setSortType(SortData['order']);
      setSortValue(SortData['order'][0]);
    }
    if (type === 'itemCategory') {
      Instance.get('/api/item-category/list')
        .then((response) => {
          const data = response.data;
          setItemCategoryData(data);
          setSortValue(data[0].title);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (type === 'community') {
      setSortType(SortData['community']);
      setSortValue(SortData['community'][0]);
    }
    if (type === 'review') {
      setSortType(SortData['review']);
      setSortValue(SortData['review'][0]);
    }
  }, [type]);

  const toggleVisibility = () => {
    setShow(!show);
  };

  const onChangeSortType = (index: number) => {
    setSortValue(nowSortType[index]);
    setShow(!show);
  };

  const onChangeItemCategory = (name: string) => {
    setSortValue(name);
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
        {type !== 'itemCategory'
          ? nowSortType.map((item, index) => (
              <li className="item" key={index} onClick={() => onChangeSortType(index)}>
                {item}
              </li>
            ))
          : itemCategoryData?.map((item, index) => (
              <li className="item" key={index} onClick={() => onChangeItemCategory(item.title)}>
                {item.title}
              </li>
            ))}
      </ul>
    </S.Sort>
  );
};

export default Sort;
