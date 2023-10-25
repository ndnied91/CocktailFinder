import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import LuckyBtn from '../components/LuckyBtn';
import styled from 'styled-components';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const cocktailRandomUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/random.php';
import { useQuery } from '@tanstack/react-query';

const Forms = styled.div`
  width: 100%;
  max-width: var(--fixed-width);
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  margin: 3rem auto;
  padding-top: 0px;
`;

const searchCocktailsQuery = (searchTerm) => {
  if (searchTerm === 'random') {
    return {
      queryKey: [''],
      queryFn: async () => {
        const response = await axios.get(cocktailRandomUrl);
        let item = response.data.drinks[0].id;
        return response.data.drinks;
      },
    };
  } else {
    return {
      queryKey: ['search', searchTerm || 'all'],
      queryFn: async () => {
        const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
        return response.data.drinks;
      },
    };
  }
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);

    const searchTerm = url.searchParams.get('search') || '';
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks, refetch } = useQuery(searchCocktailsQuery(searchTerm));

  return (
    <>
      <Forms>
        <SearchForm searchTerm={searchTerm} />
        <LuckyBtn searchTerm={searchTerm} refetch={refetch} />
      </Forms>
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
