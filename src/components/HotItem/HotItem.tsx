import React, { useEffect, useState, useLayoutEffect } from 'react';
import * as S from './HotItemStyles';
import Product from './ProductModel/Product';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Pagination from '../../components/Pagination/Pagination';
import { Item } from '../../interface/Interface';
import Instance from '../../util/API/axiosInstance';
import { commaNumber, getImageFile } from '../../util/func/functions';

const HotItem: React.FC = () => {
  const [itemList, setItemList] = useState<Item[]>();
  const [imageUrls, setImageUrls] = useState<string[]>();

  useEffect(() => {
    Instance.get(`/api/item/hot`)
      .then((response) => {
        setItemList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useLayoutEffect(() => {
    const fetchImages = async () => {
      if (itemList) {
        const urls = await Promise.all(
          itemList.map((item) => {
            if (item.thumbNailList.length > 0 && item.thumbNailList[0].path !== null) return getImageFile(item.thumbNailList[0].path);
            else return null;
          })
        );
        setImageUrls(urls.filter((url) => url !== null) as string[]);
      }
    };
    fetchImages();
  }, [itemList]);

  const settings = {
    infinite: true,
    slidesToShow: Math.min(itemList && itemList.length > 0 ? itemList.length : 0, 6),
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <S.Hotitem>
      <div className="hotitem-container">
        <div className="hotitem-top">
          <div className="hotitem-title">
            구몽 추천, <span>HOT</span>인기 재능
          </div>
        </div>

        <Slider {...settings}>
          {itemList &&
            itemList.map((item, index) => (
              <li key={index}>
                <Product
                  key={index}
                  id={item.id}
                  imageUrl={imageUrls && imageUrls[index]}
                  sellerName={item.memberId}
                  productName={item.title}
                  price={commaNumber(item.price)}
                  rating={item.rate}
                  review={item.reviewList.length}
                />
              </li>
            ))}
        </Slider>

        <div className="more-btn">
          <Link to="/item/sale/all/1">
            <button type="submit">
              재능 더보기
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="48.000000pt"
                height="48.000000pt"
                viewBox="0 0 48.000000 48.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#d3d5da" stroke="none">
                  <path
                    d="M156 382 c-3 -6 26 -40 64 -76 l70 -66 -70 -66 c-38 -36 -67 -70 -64
-75 8 -13 25 -1 102 73 l70 68 -75 72 c-80 78 -88 84 -97 70z"
                  />
                </g>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </S.Hotitem>
  );
};

export default HotItem;
