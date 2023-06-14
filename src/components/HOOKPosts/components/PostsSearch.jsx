import { useState } from 'react';

const PostsSearch = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(value);
    setValue('');
  };

  return (
    <form action="#" className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Type to search..."
        value={value}
        onChange={handleChange}
      />

      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};
export default PostsSearch;

// export class PostsSearch extends Component {
//   state = {
//     value: '',
//   };

//   handleChange = e => {
//     const { value } = e.target;
//     this.setState({ value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSearch(this.state.value);
//     this.setState({ value: '' });
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <form action="#" className="input-group mb-3" onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Type to search..."
//           value={value}
//           onChange={this.handleChange}
//         />

//         <button type="submit" className="btn btn-primary">
//           Search
//         </button>
//       </form>
//     );
//   }
// }
