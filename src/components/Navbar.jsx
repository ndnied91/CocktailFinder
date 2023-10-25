import React from 'react';
import { NavLink } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Navbar';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { favorites } = useGlobalContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <NavLink to="/" className="logo">
          CocktailFinder
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          {favorites.length > 0 ? (
            <NavLink to="/favorites" className="nav-link">
              Favorites
            </NavLink>
          ) : null}

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
