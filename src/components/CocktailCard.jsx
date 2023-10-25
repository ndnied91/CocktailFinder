import React from 'react';
import Wrapper from '../assets/wrappers/CocktailCard';

import { Link } from 'react-router-dom';

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import { toast } from 'react-toastify';

const CocktailCard = ({ glass, id, name, image, info }) => {
  const { favorites, updateFavorite, removeFavorite } = useGlobalContext();

  // console.log(favorites);

  const addToFavorites = () => {
    toast.success(`Added ${name} to favorites`);
    updateFavorite({ id, name, image });
  };

  const removeFromFavorites = (name, id) => {
    toast.error(`Removed ${name} to favorites`);
    removeFavorite(name, id);
  };

  const renderIcon = () => {
    if (favorites.some((e) => e.id === id)) {
      return (
        <AiFillStar
          style={{ fontSize: '30px', color: 'grey' }}
          onClick={() => removeFromFavorites(name, id)}
        />
      );
    }

    return (
      <AiOutlineStar
        style={{ fontSize: '30px', color: 'grey' }}
        onClick={() => addToFavorites(name)}
      />
    );
  };

  return (
    <Wrapper>
      <div className="img-container">
        <img className="img" src={image} alt={name} />
      </div>

      <div className="footer">
        <div className="cardElements">
          <h2 style={{ paddingBottom: '10px' }}> {name} </h2>

          <div> {renderIcon()}</div>
        </div>

        <p> {glass} </p>
        <p> {info} </p>
        <Link
          to={`/cocktail/${id}`}
          className="btn btn-block"
          style={{ textAlign: 'center' }}
        >
          details
        </Link>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;
