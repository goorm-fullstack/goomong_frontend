import React from 'react';
import * as S from './PaginationStyles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <S.PaginationStyles>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
          <button key={number} onClick={() => onPageChange(number)} className={currentPage === number ? 'active' : ''}>
            {number}
          </button>
        ))}
      </div>
    </S.PaginationStyles>
  );
}

export default Pagination;
