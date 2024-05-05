import React from 'react';
import { LINKS_LIST } from '../../_constants/constants';
import { Link, useLocation } from 'react-router-dom';

interface NavDetailProps {
  id: string;
}

const NavDetail: React.FC<NavDetailProps> = ({ id }) => {
  return (
    <div>
      <ul>
        {LINKS_LIST.map((link, index) => (
          <li key={index}>
            <Link to={`/user/${id}/${link.link}`}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default NavDetail;