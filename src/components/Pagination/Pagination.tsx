import React, { useState } from 'react';
import * as S from './Style';

const Pagination = ({ item }: any) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 3;

  const pageCount: number = Math.ceil(item.length / itemsPerPage);

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems = item.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  return (
    <S.Pagination>
      {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
        <button type="button" key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
          {number}
        </button>
      ))}
    </S.Pagination>
  );
};

export default Pagination;
