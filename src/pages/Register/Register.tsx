import React from 'react';
import * as S from './Style';
import Logo from '../../assets/images/common/logo.png';
import Kakao from '../../assets/oauth/ico_kakao.png';
import Google from '../../assets/oauth/ico_google.png';
import Naver from '../../assets/oauth/ico_naver.png';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  return (
    <S.Register>
      <div className="register-container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="reg-text">
          <div className="big">반갑습니다.🐾</div>
          <div className="small">
            각양각색 재능이 모이는 곳, <strong>구몽</strong>입니다.
          </div>
          <div className="small">회원가입 후 간편하게 재능을 거래하세요.</div>
        </div>
        <div className="oauth">
          <Link to="#null">
            <div className="kakao">
              <img src={Kakao} alt="kakao" />
              카카오로 가입하기
            </div>
          </Link>
          <Link to="#null">
            <div className="google">
              <img src={Google} alt="google" />
              구글로 가입하기
            </div>
          </Link>
          <Link to="#null">
            <div className="naver">
              <img src={Naver} alt="naver" />
              네이버로 가입하기
            </div>
          </Link>
        </div>
        <div className="and">또는</div>
        <Link to="#null">
          <div className="goomong-reg">구몽으로 회원가입하기</div>
        </Link>
        <div className="bottom">
          <span className="text">이미 구몽 계정이 있으신가요?</span>
          <Link to="#null">로그인하기</Link>
        </div>
      </div>
    </S.Register>
  );
};

export default Register;
