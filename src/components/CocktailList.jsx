import React from 'react';
import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from './CocktailCard';

import styled from 'styled-components';

const SingleDrink = styled.div`
  margin: auto;
  width: 500px;
  padding: 50px;
`;

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    );
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  if (formattedDrinks.length === 1) {
    return (
      <SingleDrink>
        {formattedDrinks.map((item) => {
          return <CocktailCard key={item.id} {...item} />;
        })}
      </SingleDrink>
    );
  } else {
    return (
      <Wrapper>
        {formattedDrinks.map((item) => {
          return <CocktailCard key={item.id} {...item} />;
        })}
      </Wrapper>
    );
  }
};

export default CocktailList;
