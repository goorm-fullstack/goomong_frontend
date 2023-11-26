import React, { useState, useEffect, useRef } from 'react';

import * as S from './WriteStyles';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import { CommunityCategoryData, ItemCategoryData } from '../../interface/Interface';
import Instance from '../../util/API/axiosInstance';
import { Cookies } from 'react-cookie';
import { useLocation, useNavigate, useParams } from 'react-router';
import { commaNumber } from '../../util/func/functions';

const typeOfItem = [
  { name: '판매', value: 'SALE' },
  { name: '교환', value: 'GIVE' },
  { name: '기부', value: 'EXCHANGE' },
];

const Write: React.FC = () => {
  //mypage에서 item을 가져온 경우 setting
  const location = useLocation();
  const mypageitem = location.state?.mypageitem;
  const reviewItemId = location.state?.itemId;
  const [title, setTitle] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('카테고리 목록');
  const [selectedItemType, setSelectedItemType] = useState<string>('판매 타입');
  const [selectedItemTypeValue, setSelectedItemTypeValue] = useState<string>();
  const [content, setContent] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [isDropdownOpenCategory, setIsDropdownOpenCategory] = useState(false);
  const [isDropdownOpenItemType, setIsDropdownOpenItemType] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(); // 선택한 카테고리 id
  const [categoryData, setCategoryData] = useState<CommunityCategoryData[]>(); // 카테고리 데이터
  const [itemCategoryData, setItemCategoryData] = useState<ItemCategoryData[]>(); // 상품 카테고리 데이터
  const [fileName, setFileName] = useState<string>(); // 업로드한 파일 이름
  const imgRef = useRef<HTMLInputElement>(null);
  const cookies = new Cookies();
  const type = useParams().type;
  const itemId = type !== 'productreg' ? location.state?.itemId : undefined;
  const navigate = useNavigate();

  const categoryToggleDropdown = () => {
    setIsDropdownOpenCategory(!isDropdownOpenCategory);
  };

  const itemTypeToggleDropdown = () => {
    setIsDropdownOpenItemType(!isDropdownOpenItemType);
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
    } else if (type === 'productreg') {
      if (selectedItemTypeValue === undefined) {
        alert('판매 타입을 선택해주세요');
        return;
      }

      const initItem = new FormData();

      const itemOption = inputOption.map((value, index) => ({
        option: value,
        price: inputPrice[index],
      }));
      const itemDto = {
        title: title,
        price: price,
        describe: content,
        status: selectedItemTypeValue,
        itemCategories: [selectedCategoryId],
        memberId: cookies.get('id'),
        itemOptions: itemOption,
      };

      initItem.append('itemDto', new Blob([JSON.stringify(itemDto)], { type: 'application/json' }));
      if (imgRef.current && imgRef.current.files) {
        initItem.append('multipartFiles', imgRef.current.files[0]);
      }

      Instance.post('/api/item/save', initItem, {
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
    setIsDropdownOpenCategory(false);
  };

  const handleItemTypeSelect = (typeName: string, typeValue: string) => {
    setSelectedItemType(typeName);
    setSelectedItemTypeValue(typeValue);
    setIsDropdownOpenItemType(false);
  };

  // 카테고리 데이터 가져오기
  useEffect(() => {
    if (type === 'community') {
      Instance.get('/api/categorys')
        .then((response) => {
          const data = response.data;
          setCategoryData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (type === 'productreg') {
      Instance.get('/api/item-category/list/lv1')
        .then((response) => {
          const data = response.data;
          setItemCategoryData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // mypageitem 데이터가 있는 경우
    if (mypageitem) {
      setTitle(mypageitem.postTitle);
      setSelectedCategory(mypageitem.postCategory);
      setSelectedCategoryId(mypageitem.postCategoryId);
      setContent(mypageitem.postContent);
      if (mypageitem.filesList.length > 0) setFileName(mypageitem.filesList[0].fileName);
      else if (mypageitem.imageList.length > 0) setFileName(mypageitem.imageList[0].fileName);
    }
  }, [mypageitem, type]);

  const [inputCount, setInputCount] = useState<number>(1);
  const [inputOption, setInputOption] = useState(Array.from({ length: inputCount }, () => ''));
  const [inputPrice, setInputPrice] = useState(Array.from({ length: inputCount }, () => 0));

  const handleInputOptionChange = (index: number, value: string) => {
    const newInputValues = [...inputOption];
    newInputValues[index] = value;
    setInputOption(newInputValues);
  };

  const handleInputPriceChange = (index: number, value: number) => {
    const newInputValues = [...inputPrice];
    newInputValues[index] = value;
    setInputPrice(newInputValues);
  };

  const addInput = () => {
    setInputCount(inputCount + 1);
    setInputOption([...inputOption, '']);
    setInputPrice([...inputPrice, 0]);
  };

  const deleteInput = () => {
    setInputCount((prevCount) => {
      if (prevCount === 1) {
        return prevCount;
      }

      const newInputOption = [...inputOption];
      const newInputPrice = [...inputPrice];

      newInputOption.pop();
      newInputPrice.pop();

      setInputOption(newInputOption);
      setInputPrice(newInputPrice);

      return prevCount - 1;
    });
  };

  return (
    <S.WriteStyles>
      <Header />
      <div className="write-container">
        <div className="write-title">
          <div className="write-title">
            {type === 'community' ? '게시글 작성하기' : type === 'productreg' ? '재능 등록' : type === 'reviewreg' ? '리뷰 작성하기' : '문의하기'}
          </div>
        </div>
        <form onSubmit={handleWriteSubmit} className="write-form">
          {type === 'community' && (
            <>
              <div className="input-text">카테고리를 선택해주세요</div>
              <div className="write-category" onClick={categoryToggleDropdown}>
                {selectedCategory}
                {isDropdownOpenCategory ? (
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
          {type === 'productreg' && (
            <>
              <div className="input-text">카테고리를 선택해주세요</div>
              <div className="write-category" onClick={categoryToggleDropdown}>
                {selectedCategory}
                {isDropdownOpenCategory ? (
                  <div className="dropdown-category">
                    <ul>
                      {itemCategoryData &&
                        itemCategoryData.map((category, index) => (
                          <li onClick={() => handleCategorySelect(category.title, category.id)} key={index}>
                            {category.title}
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </>
          )}

          <div className="input-text">상품 이름</div>
          <input required type="text" value={title} placeholder="제목을 입력하세요." onChange={(e) => setTitle(e.target.value)} />
          {type === 'productreg' && (
            <>
              <div className="input-text">가격 (원)</div>
              <input
                required
                type="text"
                value={commaNumber(price)}
                placeholder="가격을 입력하세요"
                onChange={(e) => setPrice(Number(e.target.value.replace(/,/g, '')))}
              />
              <div className="input-text">판매 타입을 선택해주세요</div>
              <div className="write-category" onClick={itemTypeToggleDropdown}>
                {selectedItemType}
                {isDropdownOpenItemType ? (
                  <div className="dropdown-category">
                    <ul>
                      {typeOfItem.map((item, index) => (
                        <li onClick={() => handleItemTypeSelect(item.name, item.value)} key={index}>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="option-wrapper">
                <div className="input-text">옵션</div>
                <div className="plus-minus">
                  <div>
                    <button type="button" onClick={addInput}>
                      ➕
                    </button>
                  </div>
                  <div>
                    <button type="button" onClick={deleteInput}>
                      ➖
                    </button>
                  </div>
                </div>
              </div>
              <div className="option-input-wrapper">
                {inputOption.map((value, index) => (
                  <React.Fragment key={index}>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleInputOptionChange(index, e.target.value)}
                      placeholder={'옵션' + (index + 1)}
                      className="option-input"
                      required
                    />
                    <input
                      type="text"
                      value={commaNumber(inputPrice[index])}
                      onChange={(e) => handleInputPriceChange(index, Number(e.target.value.replace(/,/g, '')))}
                      placeholder="가격"
                      className="option-price-input"
                      required
                    />
                  </React.Fragment>
                ))}
              </div>
            </>
          )}
          <div className="input-text">{type === 'productreg' ? '상품 설명' : '내용'}</div>
          <textarea className="content-box" required value={content} onChange={(e) => setContent(e.target.value)} />
          {type === 'reviewreg' && (
            <div className="rating-container">
              <div className="input-text">평점</div>
              <div className="radio-container">
                <div>
                  <input type="radio" id="rating1" name="rating" value="1" required />
                  <label htmlFor="rating1">★</label>
                </div>
                <div>
                  <input type="radio" id="rating2" name="rating" value="2" required />
                  <label htmlFor="rating2">★★</label>
                </div>
                <div>
                  <input type="radio" id="rating3" name="rating" value="3" required />
                  <label htmlFor="rating3">★★★</label>
                </div>
                <div>
                  <input type="radio" id="rating4" name="rating" value="4" required />
                  <label htmlFor="rating4">★★★★</label>
                </div>
                <div>
                  <input type="radio" id="rating5" name="rating" value="5" required />
                  <label htmlFor="rating5">★★★★★</label>
                </div>
              </div>
            </div>
          )}
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
