import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/common/logo.png';
import * as S from './FindPwStyles';
import Instance from "../../util/API/axiosInstance";

const FindPw: React.FC = () => {
  const [userid, setUserid] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleFindPwSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    Instance.get(`/api/member/email/${email}`)
        .then((response) => {
          if(response.data.memberName == username && response.data.memberId == userid) {
            window.location.href = `/newpw?memberId=${userid}`;
          }
          else{
            alert('찾으시는 아이디가 없습니다. 다시 입력해주세요.');
          }
        })
        .catch(() => {
          alert("찾으시는 아이디가 없습니다. 다시 입력해주세요.");
        });
  };
  return (
    <S.FindPw>
      <div className="findpw-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="goomongLogo" />
          </Link>
        </div>
        <div className="big">비밀번호 찾기</div>
        {/*<div className="small">*/}
        {/*  <p>가입 시 등록했던 이메일로 </p>*/}
        {/*  <p>비밀번호를 변결할 수 있는 메일을 보내드릴게요.</p>*/}
        {/*</div>*/}
        <div className="find-pw">
          <form onSubmit={handleFindPwSubmit}>
            <div className="text">회원 아이디</div>
            <input className="id-box box" type="text" value={userid} onChange={(e) => setUserid(e.target.value)} />
            <div className="text name-text">별명</div>
            <input className="name-box box" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <div className="text email-text">이메일 주소</div>
            <input className="email-box box" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className="submit-btn">
              전송하기
            </button>
          </form>
        </div>
        <div className="bottom">
          비밀번호가 생각나셨나요?<Link to="/login">로그인 하기</Link>
        </div>
      </div>
    </S.FindPw>
  );
};

export default FindPw;
