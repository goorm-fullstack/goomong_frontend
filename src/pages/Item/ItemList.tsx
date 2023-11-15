import React, { useEffect, useState } from 'react';
import Instance from '../../util/API/axiosInstance';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
<<<<<<< Updated upstream
=======
import * as C from '../../style/CommonStyles';
import { useParams } from 'react-router-dom';
import Sort from '../../components/Sort/Sort';
import Product from '../../components/HotItem/ProductModel/Product';
import CategoryItem from '../../components/Category/CategoryItem';
import * as S from './Style';
>>>>>>> Stashed changes

interface Item {
  id: number;
  title: string;
  itemCategories: Array<any>;
}

export default function ItemList() {
  const [itemList, setItemList] = useState<Item[]>([]);

  useEffect(() => {
    Instance.get('/api/item/list').then((response) => {
      setItemList(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <h1>아이템 리스트 테스트</h1>
      {itemList.map((item: Item) => (
        <>
          <div>
            <a href={`/item/detail/${item.id}`}>
              <p>{item.title}</p>
            </a>
          </div>
        </>
      ))}
      <Footer />
    </>
  );
}
