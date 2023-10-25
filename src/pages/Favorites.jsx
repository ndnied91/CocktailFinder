import { useGlobalContext } from '../context';

import Wrapper from '../assets/wrappers/CocktailList';
import FavoritesWrapper from '../assets/wrappers/FavoritesWrapper';
import CocktailCard from '../components/CocktailCard';

import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites } = useGlobalContext();

  if (favorites.length < 1) {
    return (
      <FavoritesWrapper>
        <div>
          <p>There aren't any favorites here just yet :/</p>
          <Link to="/">Go Home</Link>
        </div>
      </FavoritesWrapper>
    );
  }

  return (
    <Wrapper>
      {favorites.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default Favorites;
