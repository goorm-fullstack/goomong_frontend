import React, { useState } from 'react';

import * as S from './WriteStyles';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';

const Write: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('카테고리 목록');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleWriteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

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
                  <li onClick={() => handleCategorySelect('카테고리 1')}>카테고리 1</li>
                  <li onClick={() => handleCategorySelect('카테고리 2')}>카테고리 2</li>
                  <li onClick={() => handleCategorySelect('카테고리 3')}>카테고리 3</li>
                  <li onClick={() => handleCategorySelect('카테고리 4')}>카테고리 4</li>
                  <li onClick={() => handleCategorySelect('카테고리 5')}>카테고리 5</li>
                  <li onClick={() => handleCategorySelect('카테고리 6')}>카테고리 6</li>
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
            <input type="file" name="file" accept=".jpg, .jpeg, .png, .gif" />
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
