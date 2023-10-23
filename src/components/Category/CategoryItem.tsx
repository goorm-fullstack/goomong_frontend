import React from 'react';

interface CategoryItemProps {
  imageUrl: string;
  title: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ imageUrl, title }) => {
  return (
    <li>
      <img src={imageUrl} alt={title} />
      <div>{title}</div>
    </li>
  );
};

export default CategoryItem;
