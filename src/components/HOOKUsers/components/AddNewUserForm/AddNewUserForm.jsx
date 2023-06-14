import { useState } from 'react';

import { Availability } from './components/Availability/Availability';
import { GeneralInfo } from './components/GeneralInfo/GeneralInfo';
import Skills from './components/Skills/Skills';
import useToggle from 'hooks/useToggle';

const AddNewUserForm = ({ onAdd, length }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  // const [skills, setSkills] = useState([]);
  const [on, toggle] = useToggle(true);

  const handleChangeGeneralInfo = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'bio':
        setBio(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd([
      { name, bio, email, isOpenToWork: on, skills: ['react'], id: length + 1 },
    ]);
  };

  return (
    <form
      action="#"
      autoComplete="off"
      className="w-100"
      onSubmit={handleSubmit}
    >
      <GeneralInfo
        bio={bio}
        name={name}
        email={email}
        onChange={handleChangeGeneralInfo}
      />

      <Availability isOpenToWork={on} onChange={toggle} />

      <Skills />

      <div className="d-flex flex-column mt-5">
        <button type="button" className="btn py-2 btn-light w-100 mb-2">
          Cancel
        </button>
        <button type="submit" className="btn py-2 btn-primary w-100">
          Add user
        </button>
      </div>
    </form>
  );
};

export default AddNewUserForm;

// export class AddNewUserForm extends Component {
//   state = {
//     name: '',
//     email: '',
//     bio: '',
//     skills: [],
//     isOpenToWork: true,
//   };

//   handleChangeGeneralInfo = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleChangeOpenToWork = () => {
//     this.setState(prevState => ({ isOpenToWork: !prevState.isOpenToWork }));
//   };

//   render() {
//     const { name, email, bio, isOpenToWork } = this.state;

//     return (
//       <form action="#" autoComplete="off" className="w-100">
//         <GeneralInfo
//           bio={bio}
//           name={name}
//           email={email}
//           onChange={this.handleChangeGeneralInfo}
//         />

//         <Availability
//           isOpenToWork={isOpenToWork}
//           onChange={this.handleChangeOpenToWork}
//         />

//         <Skills />

//         <div className="d-flex flex-column mt-5">
//           <button type="button" className="btn py-2 btn-light w-100 mb-2">
//             Cancel
//           </button>
//           <button type="submit" className="btn py-2 btn-primary w-100">
//             Add user
//           </button>
//         </div>
//       </form>
//     );
//   }
// }
