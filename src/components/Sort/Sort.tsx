import React, { useEffect, useState } from 'react';
import * as S from './Style';
import { Link } from 'react-router-dom';

interface SortProp {
  type: string;
}

const SortData = {
  order: ['최신순', '판매순', '낮은 금액순', '높은 금액순'],
  itemCategory: ['test', 'test1'],
};

const Sort: React.FC<SortProp> = ({ type }) => {
  const [nowSortType, setSortType] = useState<string[]>(SortData['order']); // 정렬 기준 리스트
  const [sortValue, setSortValue] = useState<string>(); // 현재 선택된 정렬 기준
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (type === 'order') {
      setSortType(SortData['order']);
      setSortValue(SortData['order'][0]);
    }
    if (type === 'itemCategory') {
      setSortType(SortData['itemCategory']);
      setSortValue(SortData['itemCategory'][0]);
    }
  }, [type]);

  const toggleVisibility = () => {
    setShow(!show);
  };

  const onChangeSortType = (index: number) => {
    setSortValue(nowSortType[index]);
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
        {nowSortType.map((item, index) => (
          <li className="item" key={index} onClick={() => onChangeSortType(index)}>
            <Link to={'#'}>{item}</Link>
          </li>
        ))}
      </ul>
    </S.Sort>
  );
};

export default Sort;
