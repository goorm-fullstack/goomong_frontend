import React, { useEffect, useState } from 'react'
import Instance from '../../util/API/axiosInstance';
import { useParams } from 'react-router-dom';

interface Item {
  id : number;
  title : string;
  itemCategories : Array<any>;
}

export default function ItemList() {
  const [itemList, setItemList] = useState<Item[]>([]);
  const {page} = useParams();
  const pageSize = 10;

  useEffect(() => {
    Instance.get("/api/item/list", {
      params : {
        page : page,
        pageSize : pageSize
      }
    }).then((response) => {
      setItemList(response.data.data);
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
