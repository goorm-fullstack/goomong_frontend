import React from 'react';
import * as S from './CategoryStyles';
import CategoryItem from './CategoryItem';

function Category() {
  const categories = [
    { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_1.png', title: '디자인' },
    { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_6.png', title: 'IT 프로그래밍' },
    { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_7.png', title: '영상 사진 음향' },
    { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_2.png', title: '마케팅' },
    { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_3.png', title: '번역 통역' },
    { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_4.png', title: '문서 글쓰기' },
    { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_8.png', title: '창업 사업' },
    { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_11.png', title: '주문제작' },
    { imageUrl: 'https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/directories/white/ic_category_14.png', title: '세무 법무 노무' },
  ];
  return (
    <S.Category>
      <div className="category-container">
        <div className="category-title">
          어떤 <span>재능</span>이 필요하세요?
        </div>
        <div className="category-items">
          <ul className="item-list">
            {categories.map((category, index) => (
              <CategoryItem key={index} imageUrl={category.imageUrl} title={category.title} />
            ))}
          </ul>
        </div>
      </div>
    </S.Category>
  );
}

export default Category;
