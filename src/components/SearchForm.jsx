import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          placeholder="Search for cocktails.."
          defaultValue={searchTerm === 'random' ? '' : searchTerm}
        />

        <button className="btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'searching...' : 'search'}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
