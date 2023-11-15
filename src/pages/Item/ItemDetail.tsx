import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Instance from '../../util/API/axiosInstance';
import { blob } from 'stream/consumers';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import * as C from '../../Style/CommonStyles';
import * as S from './Style';

interface Item {
  id: number;
  title: string;
  member: any;
  price: number;
  thumbNailList: Array<any>;
  itemCategories: Array<any>;
  reviewList: Array<any>;
  askList: Array<any>;
  rate: number;
  stauts: string;
}

const item = {
  id: 1,
  title: '',
  member: '',
  price: 5431212,
  thumbNailList: [],
  itemCategories: [],
  reviewList: [],
  askList: [],
  rate: 11,
  stauts: '',
};

export default function ItemDetail() {
  const { id } = useParams();
  // const [item, setItem] = useState<Item>();
  const navigator = useNavigate();
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  // useLayoutEffect(() => {
  //   Instance.get(`/api/item/${id}`).then((response) => {
  //     setItem(response.data);
  //   });
  // }, []);

  // useLayoutEffect(() => {
  //   const fetchImages = async () => {
  //     if (item) {
  //       const urls = await Promise.all(item.thumbNailList.map((img) => getImageFile(img.path)));
  //       setImageUrls(urls.filter((url) => url !== null) as string[]);
  //     }
  //   };

  //   fetchImages();
  // }, [item]);

  const handleBuyClick = () => {
    navigator('/order/write', {
      state: {
        itemId: id,
      },
    });
  };

  // const getImageFile = async (path: string) => {
  //   try {
  //     const response = await Instance.get('/api/image', {
  //       headers: { 'Content-type': 'application/json; charset=UTF-8' },
  //       responseType: 'blob',
  //       params: {
  //         imagePath: path,
  //       },
  //     });

  //     if (response.status === 200) {
  //       return URL.createObjectURL(response.data);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // };

  return (
    <>
      <Header />
      <C.Container>
        {item ? (
          <div>
            {imageUrls.map((url, index) => (
              <img key={index} src={url} alt={`img-${index}`} width="200px" height="200px" />
            ))}
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.rate}</p>
          </div>
        ) : (
          <></>
        )}
        <button onClick={handleBuyClick}>구매하기</button>
      </C.Container>
      <Footer />
    </>
  );
}
