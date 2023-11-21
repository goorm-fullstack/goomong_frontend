import React, { useState, useEffect } from 'react';

import * as S from './BoardHistoryModelStyles';
import { Link } from 'react-router-dom';
import Pagination from '../../../../components/Pagination/Pagination';
import { Cookies } from 'react-cookie';
import Instance from '../../../../util/API/axiosInstance';
import { PostData } from '../../../../interface/Interface';
import { formattingDate } from '../../../../util/func/functions';
import { NoItem } from '../../../../Style/CommonStyles';

const BoardHistoryModel: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0); // 현재 페이지
  const [boardData, setBoardData] = useState<PostData[]>(); // 게시글 데이터
  const [totalPage, setTotalPage] = useState<number>(1); // 전체 페이지 수
  const cookies = new Cookies();
  const memberPk = cookies.get('id');
  const itemsPerPage = 10; // 페이지당 표시할 아이템 수

  // 게시글 데이터 가져오기
  useEffect(() => {
    Instance.get(`/api/posts/${memberPk}?page=${currentPage}&size=${itemsPerPage}`)
      .then((response) => {
        const data = response.data;
        setBoardData(data);
        if (data.length > 0) setTotalPage(data[0].pageInfo.totalPage);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage, memberPk]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  //삭제 확인
  const handleDelete = (itemId: number) => {
    // 사용자에게 삭제 의사를 확인
    const isConfirmed = window.confirm('이 항목을 삭제하시겠습니까?');
    if (isConfirmed) {
      Instance.delete(`/api/posts/post/softdel/${itemId}`)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <S.BoardHistoryModelStyles>
      <div className="board-history-model">
        <ul className="list-title">
          <li>게시글 종류</li>
          <li>게시글 제목</li>
          <li>작성자</li>
          <li>등록일</li>
          <li>수정 / 삭제</li>
        </ul>
        {boardData?.length === 0 && (
          <div className="board-history-item">
            <NoItem>작성한 글이 없습니다.</NoItem>
          </div>
        )}
        {boardData &&
          boardData.map((mypageitem, index) => (
            <div key={index} className="board-history-item">
              <Link to="#null" style={{ cursor: 'default' }}>
                커뮤니티
              </Link>
              <Link to={`/community/detail/${mypageitem.id}`}>{mypageitem.postTitle}</Link>
              <Link to="#null" style={{ cursor: 'default' }}>
                {mypageitem.memberId}
              </Link>
              <Link to="#null" style={{ cursor: 'default' }}>
                {formattingDate(mypageitem.regDate)}
              </Link>
              <div className="button-container">
                <Link to="/write/community" state={{ mypageitem: mypageitem }}>
                  <button>수정</button>
                </Link>

                <button onClick={() => handleDelete(mypageitem.id)}>삭제</button>
              </div>
            </div>
          ))}
      </div>

      <Pagination currentPage={currentPage + 1} totalPages={totalPage} onPageChange={handlePageChange} />
    </S.BoardHistoryModelStyles>
  );
};

export default BoardHistoryModel;
