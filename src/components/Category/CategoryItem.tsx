import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryItemProps {
  imageUrl: string;
  title: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ imageUrl, title }) => {
  return (
    <li>
      <Link to={`/item/sale/${title}/1`}>
        <img src={imageUrl} alt={title} />
        <div>{title}</div>
      </Link>
    </li>
  );
};

export default CategoryItem;
