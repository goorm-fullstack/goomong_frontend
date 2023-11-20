import React, { useEffect, useRef, useState } from 'react';
import * as S from '../Style';
import AdminHeader from '../../../components/Admin/Layout/Header/AdminHeader';
import AdminSidebar from '../../../components/Admin/Layout/Sidebar/AdminSidebar';
import { CommunityCategoryData, PostData } from '../../../interface/Interface';
import Instance from '../../../util/API/axiosInstance';
import Pagination from '../../../components/Pagination/Pagination';
import { formattingDate } from '../../../util/func/functions';
import { Link } from 'react-router-dom';

const AdminPostList: React.FC = () => {
  const [postData, setPostData] = useState<PostData[]>(); // 게시글 데이터
  const [currentPage, setCurrentPage] = useState<number>(0); // 현재 페이지
  const [totalPage, setTotalPage] = useState<number>(); // 전체 페이지
  const [totalData, setTotalData] = useState<number>(); // 전체 데이터 수
  const [allChecked, setAllChecked] = useState<boolean>(false); // 전체 선택 여부
  const [checked, setChecked] = useState<number[]>([]); // 선택된 데이터의 id
  const [fileName, setFileName] = useState<string>(); // 업로드한 파일 이름
  const [categoryData, setCategoryData] = useState<CommunityCategoryData[]>(); // 카테고리 데이터
  const [categoryName, setCategoryName] = useState<string>(''); // 등록할 카테고리 이름
  const imgRef = useRef<HTMLInputElement>(null);

  // 페이지 숫자 클릭 시 해당 페이지의 아이템 보여주기
  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  // 게시글 종류 한글로 변경
  const postTypeToKorean = (postType: string): string => {
    if (postType === 'NOTICE') return '공지사항';
    if (postType === 'COMMUNITY') return '커뮤니티';
    if (postType === 'EVENT') return '이벤트';
    else return 'QnA';
  };

  // 전체 선택 여부
  const handleAllChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setAllChecked(isChecked);

    if (isChecked && postData) {
      setChecked(postData.map((item) => item.id));
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

    const dataLength = postData?.length;

    setAllChecked(dataLength === checkedLength);
  };

  // 카테고리 추가
  const submitCategory = (e: React.FormEvent) => {
    e.preventDefault();

    const initCategory = new FormData();
    initCategory.append('categoryGroup', 'COMMUNITY');
    initCategory.append('categoryName', categoryName);
    if (imgRef.current && imgRef.current.files) {
      initCategory.append('images', imgRef.current.files[0]);
    }

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
          Instance.get('/api/categorys/notdeleted/name/COMMUNITY')
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

  // 게시글 삭제
  const deletePost = () => {
    const isConfirm = window.confirm('삭제하시겠습니까?');
    if (isConfirm) {
      checked.forEach((id) => {
        Instance.delete(`/api/posts/post/softdel/${id}`)
          .then(() => {
            window.location.reload();
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }
  };

  const reportPost = () => {
    const isConfirm = window.confirm('신고하시겠습니까?');
    if (isConfirm) {
      checked.forEach((id) => {
        const initReport = new FormData();
        initReport.append('memberId', '1');
        initReport.append('postId', String(id));
        initReport.append('reportReason', '관리자');

        Instance.post('/api/reports/report', initReport, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }).catch((error) => {
          console.error(error);
        });
      });
    }
  };

  // 게시글 데이터 가져오기
  useEffect(() => {
    Instance.get(`/api/posts?page=${currentPage}`)
      .then((response) => {
        const data = response.data;
        setPostData(data);
        if (data.length > 0) {
          setTotalData(data[0].pageInfo.totalElements);
          setTotalPage(data[0].pageInfo.totalPage);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  // 카테고리 데이터 가져오기
  useEffect(() => {
    Instance.get('/api/categorys/notdeleted/name/COMMUNITY')
      .then((response) => {
        const data = response.data;
        setCategoryData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <S.Admin>
      <AdminHeader />
      <S.Contents>
        <S.PageTitle>커뮤니티 카테고리 추가</S.PageTitle>
        <form className="category-form" onSubmit={submitCategory}>
          <div className="category-title-wrapper">
            <div className="input-text">카테고리 이름을 적어주세요</div>
            <input required type="text" defaultValue={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
          </div>
          <div className="category-image-wrapper">
            <div className="input-text">첨부파일</div>
            <label className="file-upload">
              {fileName ? fileName : '파일 추가 또는 파일을 여기로 드래그하세요.'}
              <input
                type="file"
                name="file"
                accept=".jpg, .jpeg, .png, .gif"
                ref={imgRef}
                onChange={(e) => setFileName(e.target.files ? e.target.files[0].name : '파일 추가 또는 파일을 여기로 드래그하세요.')}
              />
            </label>
          </div>
          <div className="category-submit">
            <button type="submit" className="btn">
              카테고리 등록
            </button>
          </div>
        </form>
        <S.PageTitle>커뮤니티 카테고리 목록</S.PageTitle>
        <div className="category-list-wrapper">
          <ul>
            {categoryData?.length === 0 && <li>등록된 카테고리가 없습니다.</li>}
            {categoryData &&
              categoryData.map((category, index) => (
                <li className="category-list" key={index}>
                  {category.categoryName}{' '}
                  <button type="button" onClick={() => deleteCategory(category.id)}>
                    ❌
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <S.PageTitle>게시글 목록</S.PageTitle>
        <S.BtnWrapper className="mb20 right flexgap">
          <Link className="btn" to={'/admin/post/write'}>
            게시글 작성
          </Link>
          <button type="button" className="btn red" onClick={reportPost}>
            게시글 신고
          </button>
          <button type="button" className="btn red" onClick={deletePost}>
            게시글 삭제
          </button>
        </S.BtnWrapper>
        <S.AdminTable className="list">
          <table>
            <colgroup>
              <col width="80px" />
              <col width="100px" />
              <col width="200px" />
              <col width="auto" />
              <col width="200px" />
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
                <th>게시글 종류</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {postData?.length === 0 && (
                <tr>
                  <td colSpan={6} className="empty">
                    등록된 게시글이 없습니다.
                  </td>
                </tr>
              )}
              {postData &&
                postData.map((post, index) => (
                  <tr key={index}>
                    <td>
                      <label>
                        <input type="checkbox" checked={checked?.includes(post.id)} onChange={() => handleChecked(post.id)} />
                      </label>
                    </td>
                    <td className="center">{totalData && totalData - index}</td>
                    <td className="center">{postTypeToKorean(post.postType)}</td>
                    <td className="center">
                      <Link to={`/admin/post/detail/${post.id}`}>{post.postTitle}</Link>
                    </td>
                    <td className="center">
                      <Link to="#">{post.memberId}</Link>
                    </td>
                    <td className="center">{formattingDate(post.regDate)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </S.AdminTable>
        <Pagination currentPage={currentPage} totalPages={totalPage ? totalPage : 1} onPageChange={handlePageChange} />
      </S.Contents>
      <AdminSidebar />
    </S.Admin>
  );
};
export default AdminPostList;
