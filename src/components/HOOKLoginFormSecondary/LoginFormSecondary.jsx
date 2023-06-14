import { useLocalStorage } from 'hooks/useLocalStorage';
import { useState } from 'react';

const LoginFormSecondary = () => {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  return (
    <form
      autoComplete="off"
      className="w-25"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label className="form-label">
          <p>Email address</p>
          <input
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label">
          <p>Password</p>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginFormSecondary;

// export class LoginFormSecondary extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = e => {
//     const { value, name } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.resetForm();
//   };

//   resetForm = () => {
//     return this.setState({
//       email: '',
//       password: '',
//     });
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <form
//         className="w-25"
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//         onSubmit={this.handleSubmit}
//       >
//         <div className="mb-3">
//           <label className="form-label">
//             <p>Email address</p>
//             <input
//               type="text"
//               className="form-control"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">
//             <p>Password</p>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     );
//   }
// }
