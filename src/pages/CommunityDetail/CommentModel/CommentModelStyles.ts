import styled from 'styled-components';

export const CommentModelStyles = styled.div`
  .comment-container {
    padding: 24px 0px;
    border-bottom: 1px solid #e9ebed;
  }
  .comment-top {
    display: flex;
    margin-bottom: 13px;
  }
  .writer-image-container {
    background-color: #f7f8f9;
    border-radius: 8px;
    width: 42px;
    height: 42px;
  }
  .writer-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .comment-top .right {
    margin-left: 11px;
  }
  .comment-writer {
    color: #101c33;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.04em;
    margin-bottom: 10px;
    margin-top: 4px;
  }
  .comment-time {
    color: #8e94a0;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.04em;
  }
  .comment-content {
    color: #101c33;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.04em;
    margin-bottom: 22px;
  }
  .comment-like {
    font-size: 12px;
    color: #aab1bc;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .comment-like svg {
    margin-right: 7px;
    cursor: pointer;
  }
  .reply-container .comment-container {
    border: 0;
    padding: 0;
    display: flex;
    margin-left: 30px;
  }
  .reply-form {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .reply-form input {
    width: 600px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid #dbdee2;
    margin-bottom: 16px;
  }
  .reply-form button {
    height: 30px;
    border-radius: 8px;
    border: 0;
    background-color: #4285f4;
    color: #fff;
    font-size: 12px;
    padding: 0 15px;
    cursor: pointer;
  }
  .reply-container .writer-image-container {
    width: 22px;
    height: 22px;
    background-color: #f7f8f9;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .reply-container .writer-image-container svg {
    width: 22px;
    height: 22px;
  }
  .writer-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .reply-container .comment-writer {
    color: #101c33;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.04em;
    margin-bottom: 10px;
    margin-top: 4px;
  }
  .reply-container .comment-bottom-reply {
    display: none;
  }

  .comment-bottom-reply {
    display: flex;
    margin-bottom: 20px;
  }
  .comment-reply-btn {
    font-size: 12px;
    color: #aab1bc;
    font-weight: 500;
    display: flex;
    align-items: center;
    border: 0;
    border-radius: 8px;
    margin-left: 10px;
    padding: 3px 5px;
    cursor: pointer;
  }

  .reply-container .right {
    margin-right: 30px;
  }
  .reply-container .comment-time {
    color: #8e94a0;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: -0.04em;
  }
  .reply-container .comment-top {
    display: flex;
    align-items: center;
  }
  .reply-container .comment-content {
    display: flex;
    align-items: center;
  }
`;
