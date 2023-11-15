import React, { useState } from 'react';
import * as S from './CSInquiryStyles';
import CSHeader from '../CSHeader/CSHeader';
import { Link } from 'react-router-dom';
import CSFooter from '../CSFooter/CSFooter';

const CSInquiry: React.FC = () => {
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
  const handleInquierySearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setIsDropdownOpen(false);
  };
  return (
    <S.CSInquiryStyles>
      <CSHeader />
      <div className="cs-inquiry-container">
        <div className="inquiry-location">
          <div className="left">
            <div className="total-location">
              <Link to="/cs/home">구몽 고객센터</Link>
            </div>
            <svg height="15px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="11px" xmlns="http://www.w3.org/2000/svg" fill="#8e94a0">
              <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
            </svg>
            <div className="small-location">문의하기</div>
          </div>
          <div className="search-bar">
            <form onSubmit={handleInquierySearchSubmit}>
              <input type="text" placeholder="검색" />
            </form>
            <button className="search-btn" type="submit">
              <svg fill="#dbdee2" height="19px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="19px" xmlns="http://www.w3.org/2000/svg">
                <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="cs-inquiry-title">문의하기</div>
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
              이메일, 이름, 연락처 2. 수집 및 이용 목적 : 앱 이용 문의에 대한 답변 관련 업무 3, 보유 및 이용 기간 : 수집 목적이 달성되면 모든
              개인정보를 파기합니다. 동의를 하지 않을 경우 문의한 내용에 대한 답변에 제한이 있을 수 있습니다
            </p>
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
      <CSFooter />
    </S.CSInquiryStyles>
  );
};

export default CSInquiry;
