import React from 'react';

import * as S from './RegisterByGoomongStyles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/common/logo.png';

const RegisterByGoomong: React.FC = () => {
  return (
    <S.RegisterByGoomong>
      <div className="register-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="goomongLogo" />
          </Link>
        </div>
      </div>
    </S.RegisterByGoomong>
  );
};

export default RegisterByGoomong;
