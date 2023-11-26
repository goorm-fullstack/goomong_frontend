import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/common/logo.png';
import * as S from './FindIdStyles';
import Instance from '../../util/API/axiosInstance';

const FindId: React.FC = () => {
  const [memberName, setMemberName] = useState<string>('');
  const [memberEmail, setMemberEmail] = useState<string>('');

  const handleIdSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    Instance.get(`/api/member/email/${memberEmail}`)
      .then((response) => {
        if (response.data.memberName == memberName) {
          alert(`찾으시는 아이디는 "${response.data.memberId}"입니다.`);
          window.location.href = '/';
        } else {
          alert('찾으시는 아이디가 없습니다. 다시 입력해주세요.');
        }
      })
      .catch(() => {
        alert('찾으시는 아이디가 없습니다. 다시 입력해주세요.');
      });
  };

  return (
    <S.FindId>
      <div className="findid-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="goomongLogo" />
          </Link>
        </div>
        <div className="big">아이디 찾기</div>
        {/*<div className="small">*/}
        {/*  <p>가입 시 등록했던 이메일로 </p>*/}
        {/*  <p>아이디를 확인할 수 있는 메일을 보내드릴게요.</p>*/}
        {/*</div>*/}
        <div className="find-id">
          <form onSubmit={handleIdSubmit}>
            <div className="text">별명</div>
            <input className="name-box box" type="text" value={memberName} onChange={(e) => setMemberName(e.target.value)} />
            <div className="text email-text">이메일 주소</div>
            <input className="email-box box" type="email" value={memberEmail} onChange={(e) => setMemberEmail(e.target.value)} />
            <button type="submit" className="submit-btn">
              전송하기
            </button>
          </form>
        </div>
        <div className="bottom">
          아이디가 생각나셨나요?<Link to="/login">로그인 하기</Link>
        </div>
      </div>
    </S.FindId>
  );
};

export default FindId;
