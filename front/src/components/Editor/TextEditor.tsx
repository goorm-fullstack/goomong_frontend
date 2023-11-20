import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as S from './Style';

const TextEditor = () => {
  return (
    <S.TextEditor>
      <CKEditor editor={ClassicEditor} data="" />
    </S.TextEditor>
  );
};

export default TextEditor;
