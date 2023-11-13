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
`;
