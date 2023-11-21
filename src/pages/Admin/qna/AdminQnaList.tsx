import React, { useState, useEffect } from 'react';
import * as S from '../Style';
import AdminHeader from '../../../components/Admin/Layout/Header/AdminHeader';
import AdminSidebar from '../../../components/Admin/Layout/Sidebar/AdminSidebar';
import Pagination from '../../../components/Pagination/Pagination';
import { QnaCategoryData, QuestionData } from '../../../interface/Interface';
import Instance from '../../../util/API/axiosInstance';
import { Link } from 'react-router-dom';
import { formattingDate } from '../../../util/func/functions';

const AdminQnaList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0); // 현재 페이지
  const [totalPage, setTotalPage] = useState<number>(); // 전체 페이지
  const [totalData, setTotalData] = useState<number>(); // 전체 데이터 수
  const [allChecked, setAllChecked] = useState<boolean>(false); // 전체 선택 여부
  const [checked, setChecked] = useState<number[]>([]); // 선택된 데이터의 id
  const [categoryName, setCategoryName] = useState<string>(''); // 등록할 카테고리 이름
  const [categoryData, setCategoryData] = useState<QnaCategoryData[]>(); // 카테고리 데이터
  const [qnaData, setQnaData] = useState<QuestionData[]>(); // qna 데이터
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  //아코디언 메뉴 로직
  const toggleItem = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  // 페이지 숫자 클릭 시 해당 페이지의 아이템 보여주기
  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  // 카테고리 추가
  const submitCategory = (e: React.FormEvent) => {
    e.preventDefault();

    const initCategory = new FormData();
    initCategory.append('categoryGroup', 'QNA');
    initCategory.append('categoryName', categoryName);

    Instance.post('/api/categorys/category', initCategory, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // 카테고리 삭제
  const deleteCategory = (id: number) => {
    const isConfirm = window.confirm('삭제하시겠습니까?');
    if (isConfirm) {
      Instance.delete(`/api/categorys/category/softdel/${id}`)
        .then(() => {
          Instance.get('/api/categorys/notdeleted/name/QNA')
            .then((response) => {
              const data = response.data;
              setCategoryData(data);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // 질문 삭제
  const deleteQna = () => {
    const isConfirm = window.confirm('삭제하시겠습니까?');
    if (isConfirm) {
      checked.forEach((id) => {
        Instance.delete(`/api/qnas/qna/${id}`)
          .then(() => {
            window.location.reload();
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }
  };

  // 전체 선택 여부
  const handleAllChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setAllChecked(isChecked);

    if (isChecked && qnaData) {
      setChecked(qnaData.map((item) => item.id));
    } else setChecked([]);
  };

  // 개별 선택
  const handleChecked = (id: number) => {
    let checkedLength;
    if (checked.includes(id)) {
      setChecked(checked.filter((item) => item !== id));
      checkedLength = checked.filter((item) => item !== id).length;
    } else {
      setChecked([...checked, id]);
      checkedLength = [...checked, id].length;
    }

    const dataLength = qnaData?.length;

    setAllChecked(dataLength === checkedLength);
  };

  // 카테고리 데이터 가져오기
  useEffect(() => {
    Instance.get('/api/categorys/notdeleted/name/QNA')
      .then((response) => {
        const data = response.data;
        setCategoryData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // qna 데이터 가져오기
  useEffect(() => {
    Instance.get(`/api/qnas/questions?page=${currentPage}`)
      .then((response) => {
        const data = response.data;
        setQnaData(data);
        if (data.length > 0) {
          setTotalData(data[0].pageInfo.totalElements);
          setTotalPage(data[0].pageInfo.totalPage);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  return (
    <S.Admin>
      <AdminHeader />
      <S.Contents>
        <S.PageTitle>자주 묻는 질문 카테고리 추가</S.PageTitle>
        <form className="qna-form" onSubmit={submitCategory}>
          <div className="category-title-wrapper">
            <div className="input-text">카테고리 이름을 적어주세요</div>
            <input required type="text" defaultValue={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
          </div>
          <div className="category-submit">
            <button type="submit" className="btn">
              카테고리 등록
            </button>
          </div>
        </form>
        <S.PageTitle>자주 묻는 질문 카테고리 목록</S.PageTitle>
        <div className="category-list-wrapper">
          <ul>
            {categoryData?.length === 0 && <li>등록된 카테고리가 없습니다.</li>}
            {categoryData &&
              categoryData.map((category, index) => (
                <li className="category-list" key={index}>
                  {category.categoryName}
                  <button type="button" onClick={() => deleteCategory(category.id)}>
                    ❌
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <S.PageTitle>자주 묻는 질문 목록</S.PageTitle>
        <S.BtnWrapper className="mb20 right flexgap">
          <Link className="btn" to={'/admin/qna/write'}>
            질문 작성
          </Link>
          <button type="button" className="btn red" onClick={deleteQna}>
            질문 삭제
          </button>
        </S.BtnWrapper>
        <S.AdminTable className="list">
          <table>
            <colgroup>
              <col width="80px" />
              <col width="100px" />
              <col width="200px" />
              <col width="auto" />
              <col width="150px" />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" checked={allChecked} onChange={handleAllChecked} />
                  </label>
                </th>
                <th>번호</th>
                <th>카테고리</th>
                <th>제목</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {qnaData?.length === 0 && (
                <tr>
                  <td colSpan={6} className="empty">
                    등록된 게시글이 없습니다.
                  </td>
                </tr>
              )}
              {qnaData &&
                qnaData.map((qna, index) => (
                  <tr key={index}>
                    <td>
                      <label>
                        <input type="checkbox" checked={checked?.includes(qna.id)} onChange={() => handleChecked(qna.id)} />
                      </label>
                    </td>
                    <td className="center">{totalData && totalData - index}</td>
                    <td className="center">{qna.categoryName}</td>
                    <td className="center">
                      <button onClick={() => toggleItem(index)} className="title-btn">
                        {qna.title}
                      </button>
                      <div className={`qna-content-list ${openIndex === index ? 'visible' : ''}`} style={{ whiteSpace: 'pre-line' }}>
                        {qna.content}
                      </div>
                    </td>
                    <td className="center">{formattingDate(qna.regDate)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </S.AdminTable>
        <Pagination currentPage={currentPage + 1} totalPages={totalPage ? totalPage : 1} onPageChange={handlePageChange} />
      </S.Contents>
      <AdminSidebar />
    </S.Admin>
  );
};
export default AdminQnaList;
