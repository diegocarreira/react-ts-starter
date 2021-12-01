import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { FaHome } from "react-icons/fa";

import { useContext } from "react";
import {UserContext} from '../../App';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <Link className="header-item" to="/home"> <FaHome className="icon-home" /> </Link>
      { user?.login &&
        (
          <span>Welcome {user?.login}!</span>
        )
      }
      <Link className="header-item" to="/login"> Sair </Link>
    </header>
  ) 
}

export default Header;