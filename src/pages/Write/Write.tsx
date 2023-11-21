import React, { useState, useEffect, useRef } from 'react';

import * as S from './WriteStyles';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import { CommunityCategoryData } from '../../interface/Interface';
import Instance from '../../util/API/axiosInstance';
import { useLocation } from 'react-router-dom';

const Write: React.FC = () => {
  //mypage에서 item을 가져온 경우 setting
  const location = useLocation();
  const mypageitem = location.state?.mypageitem;

  const [title, setTitle] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('카테고리 목록');
  const [content, setContent] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(); // 선택한 카테고리 id
  const [categoryData, setCategoryData] = useState<CommunityCategoryData[]>(); // 카테고리 데이터
  const [fileName, setFileName] = useState<string>(); // 업로드한 파일 이름
  const imgRef = useRef<HTMLInputElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleWriteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategoryId === undefined) {
      alert('카테고리를 선택해주세요.');
      return;
    }
    const initPost = new FormData();
    initPost.append('memberId', '1'); // memberId 가져오는 로직 필요
    initPost.append('postCategoryId', String(selectedCategoryId));
    initPost.append('postType', 'COMMUNITY');
    initPost.append('postTitle', title);
    initPost.append('postContent', content);
    if (imgRef.current && imgRef.current.files) {
      initPost.append('images', imgRef.current.files[0]);
    }

    Instance.post('/api/posts/post', initPost, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        window.location.href = '/community/all';
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCategorySelect = (category: string, id: number) => {
    setSelectedCategory(category);
    setSelectedCategoryId(id);
    setIsDropdownOpen(false);
  };

  // 카테고리 데이터 가져오기
  useEffect(() => {
    Instance.get('/api/categorys')
      .then((response) => {
        const data = response.data;
        setCategoryData(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // mypageitem 데이터가 있는 경우
    if (mypageitem) {
      setTitle(mypageitem.title);
      setSelectedCategory(mypageitem.type);
      setContent(mypageitem.content);
      // setContent, setSelectedCategoryId 등 필요한 상태 업데이트 로직 추가필요
    }
  }, [mypageitem]);

  return (
    <S.WriteStyles>
      <Header />
      <div className="write-container">
        <div className="write-title">작성하기</div>
        <form onSubmit={handleWriteSubmit} className="write-form">
          <div className="input-text">카테고리를 선택해주세요</div>
          <div className="write-category" onClick={toggleDropdown}>
            {selectedCategory}
            {isDropdownOpen ? (
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
          <div className="input-text">내용</div>
          <textarea className="content-box" required value={content} onChange={(e) => setContent(e.target.value)} />
          <div className="input-text">첨부파일</div>
          <label className="file-upload">
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
      <Footer />
    </S.WriteStyles>
  );
};

export default Write;
