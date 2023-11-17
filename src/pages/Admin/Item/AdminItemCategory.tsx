import React, { useEffect, useState } from 'react'
import Instance from '../../../util/API/axiosInstance';

// 아이템 카테고리 인터페이스
interface ItemCategory {
  id : number;
  title : string;
  level : number;
  priority : number;
  parent : any;
  childCategory : Array<any>;
}

export default function AdminItemCategory() {
  const [parentCategory, setParentCategory] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectCategory, setSelectCategory] = useState(0);
  const [childTitle, setChildTitle] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    Instance.get('/api/item-category/list/lv1').then((response) => {
      setParentCategory(response.data);
    });

    Instance.get('/api/item-category/list').then((response) => {
      setCategoryList(response.data);
    })
  }, []);

  // 자식 카테고리 추가
  const handleAddChildCategory = () => {
    let requestCategory = {
      title : childTitle,
      parentId : selectCategory
    }
    Instance.post('/api/item-category/save/lv2', requestCategory).then((response) => {
      if(response.status === 200) {
        alert("추가 성공")
        window.location.reload();
      }
    })
  }

  // 부모 카테고리 추가
  const handleAddCategory = () => {
    let requestCategory = {
      title : title
    }
    Instance.post('/api/item-category/save/lv1', requestCategory).then((response) => {
      if(response.status === 200) {
        alert("추가 성공")
        window.location.reload();
      }
    })
  }

  return (
    <>
      <div>대분류 추가
      <label htmlFor='title'>카테고리 명</label>
        <input name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <button onClick={handleAddCategory}>카테고리 추가</button>
      </div>
      <div>소분류 추가
        <select value={selectCategory} onChange={(e) => setSelectCategory(parseInt(e.target.value))}>
          {parentCategory ? (
              parentCategory.map((category : ItemCategory) => (
                <option value={category.id}>{category.title}</option>
              ))
          ) : (
            <option>카테고리가 비어있습니다.</option>
          )}
        </select>
        <label htmlFor='child_title'>카테고리 명</label>
        <input name='child_title' id='child_title' value={childTitle} onChange={(e) => setChildTitle(e.target.value)}></input>
        <button onClick={handleAddChildCategory}>카테고리 추가</button>
      </div>
      <div>카테고리 목록
        <table>
          {categoryList ? (
            categoryList.map((category : ItemCategory) => (
              <tr>
                <td>{category.title}</td>
                <td>{category.level}</td>
              </tr>
            ))
          ) : (
            <span>데이터가 없습니다</span>
          )}
        </table>
      </div>
    </>
  )
}
