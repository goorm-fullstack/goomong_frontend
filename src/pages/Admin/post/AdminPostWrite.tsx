import React, { useState, useEffect, useRef } from 'react';

import * as S from './AdminPostWriteStyles';
import * as A from '../Style';
import AdminHeader from '../../../components/Admin/Layout/Header/AdminHeader';
import AdminSidebar from '../../../components/Admin/Layout/Sidebar/AdminSidebar';
import { CommunityCategoryData } from '../../../interface/Interface';
import Instance from '../../../util/API/axiosInstance';

const postType = [
  { name: '공지사항', value: 'NOTICE' },
  { name: '고정 공지사항 (커뮤니티 게시판에 고정됩니다.)', value: 'FIX' },
  { name: '커뮤니티', value: 'COMMUNITY' },
  { name: '이벤트', value: 'EVENT' },
];

const AdminPostWrite: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isDropdownOpenCategory, setIsDropdownOpenCategory] = useState<boolean>(false);
  const [isDropdownOpenType, setIsDropdownOpenType] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('카테고리 목록');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(); // 선택한 카테고리 id
  const [selectedPostType, setSelectedPostType] = useState<string>('게시글 종류');
  const [selectedPostTypeValue, setSelectedPostTypeValue] = useState<string>(); // 선택한 게시글 종류
  const [categoryData, setCategoryData] = useState<CommunityCategoryData[]>(); // 카테고리 데이터
  const [fileName, setFileName] = useState<string>(); // 업로드 파일 이름
  const imgRef = useRef<HTMLInputElement>(null);

  const toggleDropdownCategory = () => {
    setIsDropdownOpenCategory(!isDropdownOpenCategory);
  };

  const toggleDropdownType = () => {
    setIsDropdownOpenType(!isDropdownOpenType);
  };

  // 게시글 작성
  const handleWriteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPostType === '커뮤니티' && selectedCategoryId === undefined) {
      alert('카테고리를 선택해주세요.');
      return;
    }
    if (selectedPostTypeValue === undefined) {
      alert('게시글 종류를 선택해주세요.');
      return;
    }
    const initPost = new FormData();
    initPost.append('memberId', '1'); // memberId 가져오는 로직 필요
    if (selectedCategoryId !== undefined) {
      initPost.append('postCategoryId', String(selectedCategoryId));
    }
    initPost.append('postType', selectedPostTypeValue === 'FIX' ? 'NOTICE' : selectedPostTypeValue);
    initPost.append('postTitle', title);
    initPost.append('postContent', content);
    if (imgRef.current && imgRef.current.files) {
      initPost.append('images', imgRef.current.files[0]);
    }
    if (selectedPostTypeValue === 'FIX') {
      initPost.append('isFix', 'true');
    }

    Instance.post('/api/posts/post', initPost, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        window.location.href = '/admin/postList';
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCategorySelect = (category: string, id: number) => {
    setSelectedCategory(category);
    setSelectedCategoryId(id);
    setIsDropdownOpenCategory(false);
  };

  const handleTypeSelect = (type: string, value: string) => {
    setSelectedPostType(type);
    setSelectedPostTypeValue(value);
    setIsDropdownOpenType(false);
  };

  // 카테고리 데이터 가져오기
  useEffect(() => {
    Instance.get('/api/categorys')
      .then((response) => {
        const data = response.data;
        if (data.length > 0) {
          const result = data.filter((item: CommunityCategoryData) => item.categoryGroup !== 'QNA');
          setCategoryData(result);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <A.Admin>
      <AdminHeader />
      <A.Contents>
        <S.WriteStyles>
          <div className="write-container">
            <div className="write-title">게시글 작성하기</div>
            <form onSubmit={handleWriteSubmit} className="write-form">
              <div className="input-text">게시글 종류를 선택해주세요</div>
              <div className="write-category" onClick={toggleDropdownType}>
                {selectedPostType}
                {isDropdownOpenType ? (
                  <div className="dropdown-category">
                    <ul>
                      {postType.map((type, index) => (
                        <li onClick={() => handleTypeSelect(type.name, type.value)} key={index}>
                          {type.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
              {selectedPostType === '커뮤니티' && (
                <>
                  <div className="input-text">카테고리를 선택해주세요</div>
                  <div className="write-category" onClick={toggleDropdownCategory}>
                    {selectedCategory}
                    {isDropdownOpenCategory ? (
                      <div className="dropdown-category">
                        <ul>
                          {categoryData &&
                            categoryData.map((category, index) => (
                              <li onClick={() => handleCategorySelect(category.categoryName, category.id)} key={index}>
                                {category.categoryName}
                              </li>
                            ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </>
              )}

              <div className="input-text">제목</div>
              <input required type="text" value={title} placeholder="제목을 입력하세요." onChange={(e) => setTitle(e.target.value)} />
              <div className="input-text">내용</div>
              <textarea className="content-box" required value={content} onChange={(e) => setContent(e.target.value)} />
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
              <div className="submit-btn">
                <button type="submit">작성</button>
              </div>
            </form>
          </div>
        </S.WriteStyles>
      </A.Contents>
      <AdminSidebar />
    </A.Admin>
  );
};

export default AdminPostWrite;
