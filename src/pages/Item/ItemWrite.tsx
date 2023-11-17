import React, { useEffect, useRef, useState } from 'react'
import Instance from '../../util/API/axiosInstance';

// {"title" : "test", "price" : 1000, "describe" : "test", "itemCategories" : [1, 2]}

export default function ItemWrite() {
  const imgRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [describe, setDescribe] = useState('');
  const [selectItemCategories, setSelectItemCategories] = useState([]);
  const [itemCategories, setItemCategories] = useState([]);
  const [status, setStatus] = useState('SALE');


  useEffect(() => {
    Instance.get('/api/item-category/list').then((response) => {
      setItemCategories(response.data);
      console.log(response.data);
    })
  }, [])

  const handleSumbit = () => {
    const data = new FormData();
    let item = {
      title : title,
      price : price,
      describe : describe,
      status : status,
      itemCategories : [1]
    };
    if(imgRef.current && imgRef.current.files)
      Object.values(imgRef.current.files).forEach((file) => data.append('multipartFiles', file));
    
    data.append("itemDto", new Blob([JSON.stringify(item)], {
      type : "application/json"
    }));
    Instance.post(`/api/item/save`, data)
  }

  return (
    <>
      <h1>아이템 입력</h1>
      <input
        accept='image/*'
        ref={imgRef}
        type='file'
        multiple
      ></input>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value={"SALE"}>판매</option>
        <option value={"GIVE"}>기부</option>
        <option value={"WANTED"}>구인</option>
        <option value={"EXCHANGE"}>교환</option>
      </select>

      <label htmlFor="title">제목</label>
      <input name='title' id="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <label htmlFor="price">가격</label>
      <input name='price' id="price" type='number' value={price} onChange={(e) => setPrice(parseInt(e.target.value))}></input>
      <label htmlFor="describe">설명</label>
      <input name='describe' id='describe' value={describe} onChange={(e) => setDescribe(e.target.value)}></input>
      <label htmlFor="title">아이템 카테고리</label>
      <input name='selectItemCategories' value={selectItemCategories}></input>
      <button onClick={handleSumbit}>제출</button>
    </>
  )
}
