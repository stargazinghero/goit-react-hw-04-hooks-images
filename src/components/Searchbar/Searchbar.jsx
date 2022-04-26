import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useState } from 'react';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormLabel,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Please enter image name');
      return;
    }
    onSubmit(searchQuery);
    resetForm();
  };

  const resetForm = () => {
    setSearchQuery('');
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarContainer>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export class Searchbar extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     searchQuery: '',
//   };

//   handleChange = e => {
//     this.setState({ searchQuery: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     const { onSubmit } = this.props;
//     const { searchQuery } = this.state;
//     const { resetForm } = this;
//     e.preventDefault();
//     if (searchQuery.trim() === '') {
//       toast.error('Please enter image name');
//       return;
//     }
//     onSubmit(searchQuery);
//     resetForm();
//   };

//   resetForm = () => {
//     this.setState({ searchQuery: '' });
//   };

//   render() {
//     const { handleChange, handleSubmit } = this;
//     const { searchQuery } = this.state;
//     return (
//       <SearchbarContainer>
//         <SearchForm onSubmit={handleSubmit}>
//           <SearchFormButton type="submit">
//             <SearchFormLabel>Search</SearchFormLabel>
//           </SearchFormButton>
//           <SearchFormInput
//             type="text"
//             autocomplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={searchQuery}
//             onChange={handleChange}
//           />
//         </SearchForm>
//       </SearchbarContainer>
//     );
//   }
// }
