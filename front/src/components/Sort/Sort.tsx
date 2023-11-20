import React, { useState } from 'react';
import * as S from './Style';
import { NavLink } from 'react-router-dom';

const SortData = {
  order: ['최신순', '판매순', '낮은 금액순', '높은 금액순'],
};

type SortType = {
  type: 'order';
};

const Sort = ({ type }: SortType) => {
  const [nowSortType, setSortType] = useState(SortData[type][0]); // 기본 값 또는 현재 선택된 값
  const [show, setShow] = useState<boolean>(false);

  const toggleVisibility = () => {
    setShow(!show);
  };

  const onChangeSortType = (item: string) => {
    setSortType(item);
  };

  return (
    <S.Sort>
      <div className="header-wrap" onClick={toggleVisibility}>
        <input type="text" readOnly value={nowSortType} />
        <svg version="1.1" viewBox="0 0 512 512">
          <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
        </svg>
      </div>
      <ul className="bottom-wrap" data-visible={show}>
        {SortData[type].map((item, index) => (
          <li className="item" key={index} onClick={() => onChangeSortType(item)}>
            {item}
          </li>
        ))}
      </ul>
    </S.Sort>
  );
};

export default Sort;
