import React from 'react';
import { useLoaderData, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { AiOutlineStar, AiFillStar, AiFillHome } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/CocktailPage';
import { useGlobalContext } from '../context';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    //if we have the key, return it
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      // ONLY PLACE WERE MAKING A REQUEST!!!
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id)); // ensureQueryData checks caches data
    return { id };
  };

const Cocktail = () => {
  const { favorites, updateFavorite, removeFavorite } = useGlobalContext();
  const { id } = useLoaderData(); //to access the loader data, gets loader data
  const { data } = useQuery(singleCocktailQuery(id)); //loader data gets passed here to check

  if (!data.drinks) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  const formatInstructions = (data) => {
    return data.split('.').map((i, index) => {
      if (i !== '') {
        return (
          <div key={index} className="container">
            <span style={{ paddingRight: '5px' }}> {index + 1}.</span>
            <span className="directions"> {i}</span>
          </div>
        );
      }
    });
  };

  const formatIngredients = (data) => {
    return data.map((i, index) => {
      return (
        <div key={index} className="container">
          <span style={{ paddingRight: '5px' }}> -</span>
          <span> {i}</span>
        </div>
      );
    });
  };

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
          style={{ fontSize: '35px', color: 'grey' }}
          onClick={() => removeFromFavorites(name, id)}
        />
      );
    }

    return (
      <AiOutlineStar
        style={{ fontSize: '35px', color: 'grey' }}
        onClick={() => addToFavorites(name)}
      />
    );
  };

  return (
    <Wrapper>
      <section className="main">
        <div className="drink">
          <img src={image} alt={name} className="img" />
          <div className="drink-info">
            <div className="title-container">
              <span className="drink-title"> {name}</span>
              <span className="favorites">{renderIcon()}</span>
            </div>
            <p>
              <span className="drink-details">
                {info} {category}
              </span>
            </p>

            <div className="breakLine" />
            <div className="border" />
            <section>
              <div className="drink-data ins">INGREDIENTS</div>
              <div className="drink-instructions">
                {formatIngredients(validIngredients)}
              </div>
            </section>

            <div className="breakLine" />

            <section>
              <div className="drink-data ins">INSTRUCTIONS</div>

              <p>
                <span className="drink-data">glass:</span>{' '}
                <span className="drink-details">{glass} </span>
              </p>

              <div className="drink-instructions">
                {formatInstructions(instructions)}
              </div>
            </section>
          </div>
        </div>

        <Link to="/" className="btn" style={{ textAlign: 'center' }}>
          Back to Search
        </Link>
      </section>
    </Wrapper>
  );
};

export default Cocktail;
