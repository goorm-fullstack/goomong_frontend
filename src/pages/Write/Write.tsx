import React, { useState, useEffect, useRef } from 'react';

import * as S from './WriteStyles';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import { CommunityCategoryData } from '../../interface/Interface';
import Instance from '../../util/API/axiosInstance';
import { Cookies } from 'react-cookie';
import { useLocation, useNavigate, useParams } from 'react-router';
const Write: React.FC = () => {
  //mypage에서 item을 가져온 경우 setting
  const location = useLocation();
  const mypageitem = location.state?.mypageitem;
  const [title, setTitle] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('카테고리 목록');
  const [content, setContent] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(); // 선택한 카테고리 id
  const [categoryData, setCategoryData] = useState<CommunityCategoryData[]>(); // 카테고리 데이터
  const [fileName, setFileName] = useState<string>(); // 업로드한 파일 이름
  const imgRef = useRef<HTMLInputElement>(null);
  const cookies = new Cookies();
  const type = useParams().type;
  const itemId = location.state.itemId;
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleWriteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'community') {
      if (selectedCategoryId === undefined) {
        alert('카테고리를 선택해주세요.');
        return;
      }
      const initPost = new FormData();
      initPost.append('memberId', String(cookies.get('id')));
      initPost.append('postCategoryId', String(selectedCategoryId));
      initPost.append('postType', 'COMMUNITY');
      initPost.append('postTitle', title);
      initPost.append('postContent', content);
      if (imgRef.current && imgRef.current.files) {
        initPost.append('images', imgRef.current.files[0]);
      }

      if (mypageitem) {
        Instance.put(`/api/posts/post/${mypageitem.id}`, initPost, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then(() => {
            navigate(-1);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        Instance.post('/api/posts/post', initPost, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then(() => {
            navigate(-1);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } else {
      const initQuestion = new FormData();
      initQuestion.append('memberId', String(cookies.get('id')));
      initQuestion.append('itemId', itemId);
      initQuestion.append('title', title);
      initQuestion.append('content', content);
      if (imgRef.current && imgRef.current.files) {
        initQuestion.append('images', imgRef.current.files[0]);
      }

      Instance.post('/api/asks/ask', initQuestion, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(() => {
          navigate(-1);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleCategorySelect = (category: string, id: number) => {
    setSelectedCategory(category);
    setSelectedCategoryId(id);
    setIsDropdownOpen(false);
  };

  // 카테고리 데이터 가져오기
  useEffect(() => {
    Instance.get('/api/categorys')
      .then((response) => {
        const data = response.data;
        setCategoryData(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // mypageitem 데이터가 있는 경우
    if (mypageitem) {
      setTitle(mypageitem.postTitle);
      setSelectedCategory(mypageitem.postCategory);
      setSelectedCategoryId(mypageitem.postCategoryId);
      setContent(mypageitem.postContent);
      if (mypageitem.filesList.length > 0) setFileName(mypageitem.filesList[0].fileName);
      else if (mypageitem.imageList.length > 0) setFileName(mypageitem.imageList[0].fileName);
    }
  }, [mypageitem]);

  return (
    <S.WriteStyles>
      <Header />
      <div className="write-container">
        <div className="write-title">{type === 'community' ? '게시글 작성하기' : '문의하기'}</div>
        <form onSubmit={handleWriteSubmit} className="write-form">
          {type === 'community' && (
            <>
              <div className="input-text">카테고리를 선택해주세요</div>
              <div className="write-category" onClick={toggleDropdown}>
                {selectedCategory}
                {isDropdownOpen ? (
                  <div className="dropdown-category">
                    <ul>
                      {categoryData &&
                        categoryData.map((category, index) => (
                          <li onClick={() => handleCategorySelect(category.categoryName, category.id)} key={index}>
                            {category.categoryName}
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </>
          )}

          <div className="input-text">제목</div>
          <input required type="text" value={title} placeholder="제목을 입력하세요." onChange={(e) => setTitle(e.target.value)} />
          <div className="input-text">내용</div>
          <textarea className="content-box" required value={content} onChange={(e) => setContent(e.target.value)} />
          <div className="input-text">첨부파일</div>
          <label className="file-upload">
            {fileName ? fileName : '파일 추가 또는 파일을 여기로 드래그하세요.'}
            <input
              type="file"
              name="file"
              accept=".jpg, .jpeg, .png, .gif"
              ref={imgRef}
              onChange={(e) => setFileName(e.target.files ? e.target.files[0].name : '파일 추가 또는 파일을 여기로 드래그하세요.')}
            />
          </label>
          <div className="submit-btn">
            <button type="submit">작성</button>
          </div>
        </form>
      </div>
      <Footer />
    </S.WriteStyles>
  );
};

export default Write;
