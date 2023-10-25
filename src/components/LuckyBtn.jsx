import { Form, useNavigation } from 'react-router-dom';

import styled from 'styled-components';

const LuckyForm = styled.div`
  box-shadow: var(--shadow-2);
  padding: 2rem 2.5rem;
  padding-top: 0px;
`;

const SearchFormBtn = ({ refetch }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <LuckyForm>
      <form>
        <input
          name="search"
          style={{ display: 'none' }}
          defaultValue={'random'}
        />

        <button
          className="btn btn-block"
          type="submit"
          onClick={() => refetch()}
        >
          {isSubmitting ? 'searching...' : 'Pick for me!'}
        </button>
      </form>
    </LuckyForm>
  );
};

export default SearchFormBtn;
