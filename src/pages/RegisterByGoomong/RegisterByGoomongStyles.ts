import styled from 'styled-components';

export const RegisterByGoomong = styled.div`
  .register-container {
    width: 640px;
    padding: 0px 160px;
    margin: 164px auto 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 164px);
  }
  .logo {
    width: 146px;
    height: 24px;
    cursor: pointer;
  }
  form {
    margin-top: 71px;
  }

  .input-text {
    color: var(--black);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: -0.04;
    margin-bottom: 10px;
  }
  input {
    width: 320px;
    height: 42px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 17px;
  }
  .certification {
    width: 232px;
    height: 42px;
    margin-bottom: 0%;
  }
  .certification-btn {
    margin-left: 10px;
    border-radius: 4px;
    padding: 11.5px 27px;
    background-color: #f6f6f6;
    color: #dfdfdf;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.04;
    border: 0;
    cursor: pointer;
    margin-bottom: 40px;
  }
  .certification-btn:hover {
    opacity: 0.8;
  }

  input:focus {
    outline: none;
  }
  .certification-btn.active {
    color: #fffefe;
    background-color: #141414;
  }
  .checkbox {
    display: none;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .top label {
    display: flex;
    align-items: center;
    color: var(--black);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.04;
    cursor: pointer;
  }
  .top label svg {
    margin-right: 8px;
  }
  .check-agreement {
    color: #666;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04;
  }
  .bottom {
    color: #666;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04;
    margin: 10px 0 60px;
  }
  .reg-goomong {
    width: 320px;
    height: 50px;
    border-radius: 4px;
    background-color: #4285f4;
    border: 0;
    color: #fefeff;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.04;
    cursor: pointer;
  }
  .incorrect-text,
  .correct-text {
    font-size: 12px;
    letter-spacing: -0.04;
    font-weight: 400;
    margin-bottom: 16px;
  }
  .incorrect-text svg {
    margin-right: 5px;
  }
  .correct-text svg {
    margin-right: 7px;
  }
  .incorrect-text {
    color: #ea4335;
  }
  .correct-text {
    color: #34a853;
  }
  .check-pw {
    margin-bottom: 8px;
  }
  .check-pw.mismatch {
    border: 1px solid #ea4335;
  }
  .check-pw.match {
    border: 1px solid #34a853;
  }
  .top label:hover svg g[id='Core'] path {
    fill: #4285f4;
    transition: 0.2s all ease-in-out;
  }
`;
