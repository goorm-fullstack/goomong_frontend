import styled from 'styled-components';

export const LoginForm = styled.form`
  width: 400px;
  margin: 0 auto;
  padding-top: 230px;

  h2 {
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 40px;
    color: #404a5c;
  }

  input,
  button {
    width: 100%;
    border-radius: 4px;
  }

  input {
    height: 45px;
    margin: 4px 0;
    border: 1px solid #e9e9e9;
    padding: 0 16px;
  }

  button {
    height: 50px;
    margin-top: 8px;
    border: 0;
    background: #4285f4;
    color: white;
  }
`;
