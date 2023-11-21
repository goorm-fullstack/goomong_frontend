import React, { useState } from 'react';

import * as S from './HireStyles';
import Header from '../../components/layout/Header/Header';
import { Link } from 'react-router-dom';
import Footer from '../../components/layout/Footer/Footer';

const Hire: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('문의 유형');
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setIsDropdownOpen(false);
  };
  return (
    <S.HireStyles>
      <Header />
      <div className="hire-container">
        <div className="hire-title">견적 요청</div>
        <form onSubmit={handleInquirySubmit} className="inquiry-form">
          <div className="input-text">문의항목을 선택해주세요</div>
          <div className="inquiry-type" onClick={toggleDropdown}>
            {selectedType}
            {isDropdownOpen ? (
              <div className="dropdown-type">
                <ul>
                  <li onClick={() => handleTypeSelect('유형 1')}>유형 1</li>
                  <li onClick={() => handleTypeSelect('유형 2')}>유형 2</li>
                  <li onClick={() => handleTypeSelect('유형 3')}>유형 3</li>
                  <li onClick={() => handleTypeSelect('유형 4')}>유형 4</li>
                  <li onClick={() => handleTypeSelect('유형 5')}>유형 5</li>
                  <li onClick={() => handleTypeSelect('유형 6')}>유형 6</li>
                </ul>
              </div>
            ) : null}
          </div>

          <div className="input-text">이메일 주소</div>
          <input required type="email" value={email} placeholder="이메일 주소를 입력하세요." onChange={(e) => setEmail(e.target.value)} />
          <div className="input-text">연락처</div>
          <input type="text" value={phone} placeholder="연락처를 입력하세요" onChange={(e) => setPhone(e.target.value)} />
          <div className="input-text">제목</div>
          <input required type="text" value={title} placeholder="제목을 입력하세요." onChange={(e) => setTitle(e.target.value)} />
          <div className="input-text">설명</div>
          <textarea className="content-box" required value={content} onChange={(e) => setContent(e.target.value)} />
          <div className="input-text">첨부파일</div>
          <label className="file-upload">
            <input type="file" name="file" accept=".jpg, .jpeg, .png, .gif" />
          </label>
          <div className="bottom">
            <div className="top">개인정보 수집 및 이용에 대한 동의 내용</div>
            <p>
              정보통신망 이용촉진 및 정보보호 등 관한 법률을 준수하며 고객님의 개인정보를 수집하고 소중하게 다루고 있습니다. 1. 수집 및 이용 항목 :
              이메일, 이름, 연락처 2. 수집 및 이용 목적 : 앱 이용 문의에 대한 답변 관련 업무 3, 보유 및 이용 기간 : 수집 목적이 달성되면{' '}
            모든 개인정보를 파기합니다. 동의를 하지 않을 경우 문의한 내용에 대한 답변에 제한이 있을 수 있습니다</p>
          </div>
          <input
            type="checkbox"
            id="checkbox-agreement"
            className="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            required
          />
          <label htmlFor="checkbox-agreement" className="agreement">
            {isChecked ? (
              <svg height="20px" version="1.1" viewBox="0 0 20 20" width="20px" xmlns="http://www.w3.org/2000/svg">
                <title />
                <desc />
                <defs />
                <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                  <g fill="#4285f4" id="Core" transform="translate(-128.000000, -86.000000)">
                    <g id="check-circle-outline" transform="translate(128.000000, 86.000000)">
                      <path
                        d="M5.9,8.1 L4.5,9.5 L9,14 L19,4 L17.6,2.6 L9,11.2 L5.9,8.1 L5.9,8.1 Z M18,10 C18,14.4 14.4,18 10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C10.8,2 11.5,2.1 12.2,2.3 L13.8,0.7 C12.6,0.3 11.3,0 10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 L18,10 L18,10 Z"
                        id="Shape"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            ) : (
              <svg height="20px" version="1.1" viewBox="0 0 20 20" width="20px" xmlns="http://www.w3.org/2000/svg">
                <title />
                <desc />
                <defs />
                <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                  <g fill="#444444" id="Core" transform="translate(-128.000000, -86.000000)">
                    <g id="check-circle-outline" transform="translate(128.000000, 86.000000)">
                      <path
                        d="M5.9,8.1 L4.5,9.5 L9,14 L19,4 L17.6,2.6 L9,11.2 L5.9,8.1 L5.9,8.1 Z M18,10 C18,14.4 14.4,18 10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C10.8,2 11.5,2.1 12.2,2.3 L13.8,0.7 C12.6,0.3 11.3,0 10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 L18,10 L18,10 Z"
                        id="Shape"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            )}
            동의합니다.
          </label>
          <div className="submit-btn">
            <button type="submit">제출</button>
          </div>
        </form>
      </div>
      <Footer />
    </S.HireStyles>
  );
};

export default Hire;
