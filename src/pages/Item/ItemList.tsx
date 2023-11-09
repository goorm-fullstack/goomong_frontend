import React, { useEffect, useState } from 'react'
import Instance from '../../util/API/axiosInstance';

interface Item {
  id : number;
  title : string;
  itemCategories : Array<any>;
}

export default function ItemList() {
  const [itemList, setItemList] = useState<Item[]>([]);

  useEffect(() => {
    Instance.get("/api/item/list").then((response) => {
      setItemList(response.data);
      console.log(response.data)
    })
  }, [])

  return (
    <>
    <h1>아이템 리스트 테스트</h1>
    {itemList.map((item : Item) => (
        <>
          <div>
            <a href={`/item/detail/${item.id}`}><p>{item.title}</p></a>
          </div>
        </>
      ))}
    </>
  )
}