import React, { useState, useEffect, useRef } from 'react';

import * as S from './AdminQnaWriteStyles';
import * as A from '../Style';
import AdminHeader from '../../../components/Admin/Layout/Header/AdminHeader';
import AdminSidebar from '../../../components/Admin/Layout/Sidebar/AdminSidebar';
import { CommunityCategoryData } from '../../../interface/Interface';
import Instance from '../../../util/API/axiosInstance';

const AdminQnaWrite: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isDropdownOpenCategory, setIsDropdownOpenCategory] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('카테고리 목록');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(); // 선택한 카테고리 id
  const [categoryData, setCategoryData] = useState<CommunityCategoryData[]>(); // 카테고리 데이터

  const toggleDropdownCategory = () => {
    setIsDropdownOpenCategory(!isDropdownOpenCategory);
  };

  // 자주 묻는 질문 작성
  const handleWriteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategoryId === undefined) {
      alert('카테고리를 선택해주세요.');
      return;
    }
    const initQna = {
      title: title,
      content: content,
      categoryId: selectedCategoryId,
    };

    Instance.post('/api/qnas/qna/question', initQna)
      .then(() => {
        window.location.href = '/admin/qna';
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

  return (
    <A.Admin>
      <AdminHeader />
      <A.Contents>
        <S.WriteStyles>
          <div className="write-container">
            <div className="write-title">자주 묻는 질문 작성하기</div>
            <form onSubmit={handleWriteSubmit} className="write-form">
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

              <div className="input-text">제목</div>
              <input required type="text" value={title} placeholder="제목을 입력하세요." onChange={(e) => setTitle(e.target.value)} />
              <div className="input-text">답변</div>
              <textarea className="content-box" required value={content} onChange={(e) => setContent(e.target.value)} />
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

export default AdminQnaWrite;
