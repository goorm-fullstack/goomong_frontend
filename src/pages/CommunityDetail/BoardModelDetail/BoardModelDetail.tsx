import React from 'react';
import * as S from './BoardModelDetailStyles';

interface BoardModelDetailProps {
  boardImage?:string;
  boardCategory:string;
  boardTitle:string;
  writerImage?:string;
  writerName:string;
  boardTime:number;
  views:number;
  boardContent:string;
  boardLike:number;
  boardComment:number;
}

const BoardModelDetail: React.FC = () => {
  return (
    <S.BoardModelDetailStyles>
      <div>BoardModelDetail</div>
    </S.BoardModelDetailStyles>
  );
};

export default BoardModelDetail;
