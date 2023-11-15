import styled from 'styled-components';

export const TextEditor = styled.div`
  .ck.ck-content {
    min-height: 400px;
  }

  .ck.ck-toolbar,
  .ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
    border-color: #e9e9e9;
  }
`;
