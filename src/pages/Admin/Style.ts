import styled from 'styled-components';

export const Admin = styled.div`
  width: 100%;
  min-width: 1280px;
  min-height: 100vh;
  background: #f7f8f9;
  padding-left: 280px;
  padding-top: 71px;

  label {
    display: flex;
    align-items: center;

    input[type='checkbox'] {
      margin-right: 6px;
    }
  }

  input[type='checkbox'] {
    width: 16px;
    height: 18px;
    border: 1px solid #ddd;
    appearance: none;
    background-color: white;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='lightgray' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    cursor: pointer;
    margin: 0;

    &:checked {
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      background-color: #4285f4;
      border-color: #4285f4;
    }
  }
`;

export const Contents = styled.section`
  padding: 32px;

  &.login {
    padding-right: 312px;
    text-align: center;
  }
  .category-form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    align-items: center;
  }
  .qna-form {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 3rem;
    align-items: center;
    gap: 5rem;
  }
  .input-text {
    font-size: 15px;
    font-weight: 500;
    color: var(--gray);
    margin-bottom: 1rem;
  }
  input {
    width: 15rem;
    height: 46px;
    border-radius: 8px;
    padding: 0 17px;
    margin-bottom: 30px;
    border: 1px solid #dbdee2;
    color: rgba(85, 85, 85, 0.6);
    font-size: 15px;
  }
  input[type='file'] {
    display: none;
  }
  label.file-upload {
    width: 30rem;
    height: 46px;
    border-radius: 8px;
    padding: 0 17px;
    margin-bottom: 30px;
    border: 1px solid #dbdee2;
    color: #4285f4;
    font-size: 15px;
    display: inline-block;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.04;
  }

  .category-list-wrapper {
    margin-bottom: 5rem;
    border: 1px solid #dbdee2;
    border-radius: 8px;
    padding: 17px;
  }
  .category-list {
    display: inline-block;
    border: 1px solid #dbdee2;
    border-radius: 8px;
    padding: 17px;
    color: var(--gray);
    margin-right: 2rem;

    button {
      border: 0;
      background-color: transparent;
    }
  }

  button.btn {
    background-color: transparent;
    display: inline-block;
    border: 1px solid #dbdee2;
    height: 32px;
    line-height: 30px;
    border-radius: 4px;
    padding: 0 8px;
    color: #404a5c;
    font-size: 100%;
    font-weight: 400;
  }
`;

export const PageTitle = styled.h2`
  font-weight: 500;
  color: #6f7785;
  margin-bottom: 32px;
`;

export const AdminTable = styled.div`
  width: 100%;
  background: white;
  border-radius: 8px;
  border: 1px solid #e9e9e9;

  table {
    width: 100%;

    th,
    td {
      padding: 15px 16px;
      line-height: 1.4;
      font-size: 15px;
      color: #101c33;

      &.center {
        // 텍스트 중앙 정렬
        text-align: center;

        label {
          justify-content: center;
        }
      }
      &.empty {
        text-align: center;
        width: 100%;
        padding: 150px 0;
      }
    }

    th {
      // 테이블 노란색 타이틀
      color: #fbbc04;
      font-weight: normal;
      padding: 16px 16px;
    }

    tbody th,
    tbody td {
      border-top: 1px solid #e9e9e9;
      vertical-align: center;
    }

    .linkBtn {
      // Link 형식 버튼
      display: inline-block;
      border: 1px solid #dbdee2;
      height: 32px;
      line-height: 30px;
      border-radius: 4px;
      padding: 0 8px;
      color: #404a5c;

      &:hover {
        background: #f5f6f7;
      }
    }
  }

  // 목록 테이블 스타일
  &.list {
    tbody tr:hover th,
    tbody tr:hover td {
      background: #f5f8ff;
    }
  }

  // 상세페이지용 테이블 스타일
  &.detail {
    table {
      tbody tr:first-child th,
      tbody tr:first-child td {
        border-top: 0;
      }

      td.full {
        padding: 0;
      }

      th.vtop {
        vertical-align: top;
      }

      input[type] {
        border: 1px solid #e9e9e9;
        height: 32px;
        padding: 0 8px;

        &.long {
          width: 80%;
        }
      }
    }
  }

  // 하단 버튼
  .buttonwrap {
    text-align: center;
    margin: 40px 0;

    button {
      width: 160px;
      height: 45px;
      border-radius: 4px;
      border: 0;
      font-size: 15px;

      &[type='submit'] {
        background-color: #4285f4;
        color: white;

        &:hover {
          background-color: rgba(66, 133, 244, 0.8);
        }
      }

      &[type='button'] {
        background-color: white;
        border: 1px solid #e9e9e9;
        color: #404a5c;

        &:hover {
          background: #f7f8f9;
        }
      }
    }

    &.double {
      button {
        margin: 0 4px;
      }
    }
  }

  .qna-content-list {
    background-color: #f7f8f9;
    padding: 0 22px;
    color: #6f7785;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.04em;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    border-top: 0;
  }
  .visible {
    max-height: 1000px;
  }
  .title-btn {
    color: #6f7785;
    border: 0;
    background-color: transparent;
    align-items: center;
    cursor: pointer;
  }
`;

export const BtnWrapper = styled.div`
  // 버튼 중앙 정렬, 여백 등 필요할 때 부모 요소로 사용
  &.center {
    // 중앙정렬
    text-align: center;
  }
  &.right {
    // 우측정렬
    text-align: right;
  }

  // 상단 여백
  &.mt40 {
    margin-top: 40px;
  }
  &.mt30 {
    margin-top: 30px;
  }
  &.mt20 {
    margin-top: 20px;
  }
  &.mt10 {
    margin-top: 20px;
  }

  // 하단 여백
  &.mb40 {
    margin-bottom: 40px;
  }
  &.mb30 {
    margin-bottom: 30px;
  }
  &.mb20 {
    margin-bottom: 20px;
  }
  &.mb10 {
    margin-bottom: 10px;
  }

  // 버튼 두개 한 줄에 정렬할 때: 작성/취소 등의 경우
  &.double > button,
  &.double > a {
    margin: 0 5px;
  }

  // 버튼 width: 100%로 한 줄에 꽉 차는 경우
  &.full > button,
  &.full > a {
    width: 100%;
  }

  // 버튼 또는 그 외 다른 요소와 양 끝 정렬일 때
  &.flexspace {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // 여러 버튼이 있는 경우
  &.flexgap {
    display: flex;
    column-gap: 10px;

    &.right {
      justify-content: flex-end;
    }
  }

  .btn {
    display: inline-block;
    border: 1px solid #dbdee2;
    height: 32px;
    line-height: 30px;
    border-radius: 4px;
    padding: 0 8px;
    color: #404a5c;

    &.red {
      // 사용에 주의 필요한 버튼들, 붉게 강조
      border-color: var(--red);
      color: var(--red);
    }

    &:hover {
      background: #f5f6f7;
    }
  }

  button.btn {
    background-color: transparent;
    display: inline-block;
    border: 1px solid #dbdee2;
    height: 32px;
    line-height: 30px;
    border-radius: 4px;
    padding: 0 8px;
    color: #404a5c;
    font-size: 100%;
    font-weight: 400;

    &.red {
      // 사용에 주의 필요한 버튼들, 붉게 강조
      border-color: var(--red);
      color: var(--red);
    }

    &:hover {
      background: #f5f6f7;
    }
  }
`;
