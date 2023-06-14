import { useState } from 'react';

const UsersSearch = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'search':
        setSearch(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        name="search"
        type="text"
        className="form-control"
        placeholder="Search username"
        value={search}
        onChange={handleChange}
      />
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
};

export default UsersSearch;

// export class UsersSearch extends Component {
//   state = {
//     search: '',
//   };

//   handleChange = e => {
//     const { value, name } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.search);
//   };

//   render() {
//     const { search } = this.state;

//     return (
//       <form className="input-group mb-3" onSubmit={this.handleSubmit}>
//         <input
//           name="search"
//           type="text"
//           className="form-control"
//           placeholder="Search username"
//           value={search}
//           onChange={this.handleChange}
//         />
//         <button className="btn btn-primary" type="submit">
//           Search
//         </button>
//       </form>
//     );
//   }
// }
