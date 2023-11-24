import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/common/logo.png';
import * as S from './FindPwStyles';
import Instance from "../../util/API/axiosInstance";

const NewPw: React.FC = () => {
  const [userid, setUserid] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPasswordCheck, setNewPasswordCheck] = useState<string>('');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const isNewPasswordMatch: boolean = newPassword === newPasswordCheck;

  useEffect(() => {
    const memberId = searchParams.get('memberId');
    setUserid(memberId ?? '');
  }, []);

  const handleFindPwSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isNewPasswordMatch) {
      alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
      return null;
    }


    const memberInfo = {
      memberId: userid,
      newPassword: newPassword
    }

    Instance.put(`/api/member/update/findpassword`, memberInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    })
        .then(() => {
          alert(
              "비밀번호가 변경되었습니다. 로그인을 진행해주세요."
          );
          window.location.href = '/login';

        })
        .catch(() => {
          alert("현재 비밀번호가 틀렸습니다. 다시 입력해주세요.");
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
            <input className="id-box box" type="text" value={userid} onChange={(e) => setUserid(e.target.value)} readOnly />
            <div className="text">새 비밀번호</div>
              <input
                  required
                  type="password"
                  value={newPassword}
                  className="id-box box"
                  onChange={(e) => setNewPassword(e.target.value)}
              />
            <div className="text">
              새 비밀번호 확인
              <input
                  required
                  type="password"
                  value={newPasswordCheck}
                  onChange={(e) => setNewPasswordCheck(e.target.value)}
                  className="id-box box"
              />
              {newPassword && !isNewPasswordMatch && (
                  <div className="incorrect-text">
                    <svg
                        width="12px"
                        height="11px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            fill="#ea4335"
                            d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zm-8.66 16h15.588L12 5.5 4.206 19zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"
                            fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    비밀번호가 일치하지 않습니다.
                  </div>
              )}
              {newPasswordCheck && isNewPasswordMatch && (
                  <div className="correct-text">
                    <svg
                        height="10px"
                        version="1.1"
                        viewBox="0 0 20 20"
                        width="10px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <desc />
                      <defs />
                      <g
                          fill="none"
                          fillRule="evenodd"
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                      >
                        <g
                            fill="#34a853"
                            id="Core"
                            transform="translate(-128.000000, -86.000000)"
                        >
                          <g
                              id="check-circle-outline"
                              transform="translate(128.000000, 86.000000)"
                          >
                            <path
                                d="M5.9,8.1 L4.5,9.5 L9,14 L19,4 L17.6,2.6 L9,11.2 L5.9,8.1 L5.9,8.1 Z M18,10 C18,14.4 14.4,18 10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C10.8,2 11.5,2.1 12.2,2.3 L13.8,0.7 C12.6,0.3 11.3,0 10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 L18,10 L18,10 Z"
                                id="Shape"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    비밀번호가 일치합니다.
                  </div>
              )}
            </div>
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

export default NewPw;
