import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  title: string;
}
const NavItem: React.FC<NavItemProps> = ({ title }) => {
  return (
    <Link to="#null">
      <li>
        <div className="image-container">
          <svg fill="none" height="20px" viewBox="0 0 48 48" width="20px" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6H8C6.89543 6 6 6.89543 6 8V18C6 19.1046 6.89543 20 8 20H18C19.1046 20 20 19.1046 20 18V8C20 6.89543 19.1046 6 18 6Z"
              fill="#2F88FF"
              stroke="black"
              strokeLinejoin="round"
              strokeWidth="4"
            />
            <path
              d="M18 28H8C6.89543 28 6 28.8954 6 30V40C6 41.1046 6.89543 42 8 42H18C19.1046 42 20 41.1046 20 40V30C20 28.8954 19.1046 28 18 28Z"
              fill="#2F88FF"
              stroke="black"
              strokeLinejoin="round"
              strokeWidth="4"
            />
            <path
              d="M40 6H30C28.8954 6 28 6.89543 28 8V18C28 19.1046 28.8954 20 30 20H40C41.1046 20 42 19.1046 42 18V8C42 6.89543 41.1046 6 40 6Z"
              fill="#2F88FF"
              stroke="black"
              strokeLinejoin="round"
              strokeWidth="4"
            />
            <path
              d="M40 28H30C28.8954 28 28 28.8954 28 30V40C28 41.1046 28.8954 42 30 42H40C41.1046 42 42 41.1046 42 40V30C42 28.8954 41.1046 28 40 28Z"
              fill="#2F88FF"
              stroke="black"
              strokeLinejoin="round"
              strokeWidth="4"
            />
          </svg>
        </div>
        <div className="category">{title}</div>
      </li>
    </Link>
  );
};

export default NavItem;
