import React, { useState } from "react";

import * as S from "./RegisterByGoomongStyles";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/common/logo.png";
import Instance from "../../util/API/axiosInstance";

const RegisterByGoomong: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [memberId, setMemberId] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [memberEmail, setMemberEmail] = useState<string>("");
  const [memberName, setMemberName] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [isCodeVerified, setIsCodeVerified] = useState<boolean>(false);
  const [isIdVerified, setIsIdVerified] = useState<boolean>(false);
  const [isNameVerified, setIsNameVerified] = useState<boolean>(false);

  const checkId = (e: React.FormEvent) => {
    e.preventDefault();

    Instance.get(`/api/member/memberId/${memberId}`)
      .then((response) => {
        if(response.data == ""){            //존재하는 아이디가 없을 때
          alert('사용할 수 있는 아이디입니다.');
          setIsIdVerified(true);
        }
        else
          alert('이미 존재하는 아이디입니다. 다른 아이디를 입력해주세요.');
      })
      .catch(() => {
        alert('다시 시도해주세요.');
      });
  };

  const checkName = (e: React.FormEvent) => {
    e.preventDefault();

    Instance.get(`/api/member/memberName/${memberName}`)
        .then((response) => {
          if(response.data == ""){            //존재하는 아이디가 없을 때
            alert('사용할 수 있는 별명입니다.');
            setIsNameVerified(true);
          }
          else
            alert('이미 존재하는 별명입니다. 다른 별명을 입력해주세요.');
        })
        .catch(() => {
          alert('다시 시도해주세요.');
        });
  };

  const sendCode = (e: React.FormEvent) => {
    e.preventDefault();

    const emailInfo = {
      //로그인 정보
      memberEmail: memberEmail,
    };

    Instance.post(`/api/support/sendCode`, emailInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        alert("인증 메일이 전송되었습니다. 확인해주세요.");
      })
      .catch((e) => alert(e));
  };

  const checkCode = (e: React.FormEvent) => {
    e.preventDefault();

    const codeInfo = {
      memberEmail: memberEmail,
      code: code,
    };

    Instance.post(`/api/support/checkCode`, codeInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setIsCodeVerified(true); //인증 됨
        alert("인증되었습니다.");
      })
      .catch(() => {
        //인증 실패
        alert("인증번호가 틀렸습니다. 다시 확인해주세요.");
      });
  };

  const handleRegGoomongSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!isIdVerified) {
      alert('아이디 중복을 완료해주세요.');
      return;
    }

    if(!isNameVerified) {
      alert('별명 중복을 완료해주세요.');
      return;
    }

    // if(!isCodeVerified) {
    //   alert('이메일 인증을 완료해주세요.');
    // }

    if (!isChecked) {
      alert('회원가입 약관에 동의해야 합니다.');
      return;
    }

    const newMemberInfo = {
      memberId: memberId,
      memberPassword: memberPassword,
      memberName: memberName,
      memberEmail: memberEmail,
    };

    Instance.post(`/api/member/save`, newMemberInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        //회원 가입 완료
        alert("회원가입이 완료되었습니다.");
        window.location.href = "/";
      })
      .catch(() => {
        //회원 가입 실패
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      });
  };
  const isPasswordMatch = memberPassword === passwordCheck;

  return (
    <S.RegisterByGoomong>
      <div className="register-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="goomongLogo" />
          </Link>
        </div>
        <form onSubmit={handleRegGoomongSubmit}>
          <div className="input-text pw">구몽 아이디</div>
          <input
            type="memberId"
            value={memberId}
            className="certification"
            onChange={(e) => setMemberId(e.target.value)}
          />
          <button
              className={`certification-btn ${memberId ? "active" : ""}`}
              onClick={checkId}
          >
            중복
          </button>

          <div className="input-text pw">비밀번호</div>
          <input
            type="password"
            value={memberPassword}
            onChange={(e) => setMemberPassword(e.target.value)}
          />
          <div className="input-text pw-check">비밀번호 확인</div>
          <input
            type="password"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            className={`check-pw ${
              passwordCheck ? (isPasswordMatch ? "match" : "mismatch") : ""
            }`}
          />

          {passwordCheck && !isPasswordMatch && (
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
          {passwordCheck && isPasswordMatch && (
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

          <div className="input-text">이메일</div>
          <input
            type="email"
            value={memberEmail}
            onChange={(e) => setMemberEmail(e.target.value)}
          />

          <div className="input-text name">별명</div>
          <input
              type="memberName"
              className="certification"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
          />
          <button
              className={`certification-btn ${memberName ? "active" : ""}`}
              onClick={checkName}
          >
            중복
          </button>


          {/*<button*/}
          {/*  className={`certification-btn ${memberEmail ? "active" : ""}`}*/}
          {/*  onClick={sendCode}*/}
          {/*>*/}
          {/*  전송*/}
          {/*</button>*/}
          {/*<input*/}
          {/*  type="text"*/}
          {/*  className="certification"*/}
          {/*  value={code}*/}
          {/*  onChange={(e) => setCode(e.target.value)}*/}
          {/*  readOnly={isCodeVerified}*/}
          {/*/>*/}
          {/*<button*/}
          {/*  type="submit"*/}
          {/*  className={`certification-btn ${*/}
          {/*    code || isCodeVerified ? "active" : ""*/}
          {/*  }`}*/}
          {/*  onClick={checkCode}*/}
          {/*  disabled={isCodeVerified}*/}
          {/*>*/}
          {/*  인증*/}
          {/*</button>*/}
          <div className="agreement">
            <div className="top">
              <input
                type="checkbox"
                id="checkbox-agreement"
                className="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label htmlFor="checkbox-agreement">
                {isChecked ? (
                  <svg
                    height="20px"
                    version="1.1"
                    viewBox="0 0 20 20"
                    width="20px"
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
                        fill="#4285f4"
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
                ) : (
                  <svg
                    height="20px"
                    version="1.1"
                    viewBox="0 0 20 20"
                    width="20px"
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
                        fill="#444444"
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
                )}
                구몽 가입 약관에 모두 동의합니다.
              </label>
              <Link to="#null">
                <div className="check-agreement">확인하기</div>
              </Link>
            </div>
            <div className="bottom">
              구몽 이용약관(필수), 개인정보취급방침(필수)
            </div>
          </div>
          <button type="submit" className="reg-goomong">
            회원가입
          </button>
        </form>
      </div>
    </S.RegisterByGoomong>
  );
};

export default RegisterByGoomong;
