import { useState } from 'react';
import { UsersList } from './components/UsersList/UsersList';
import { UsersStats } from './components/UsersStats/UsersStats';
import UsersSearch from './components/UsersSearch/UsersSearch';
import Modal from 'components/HOOKModal/Modal';
import AddNewUserForm from './components/AddNewUserForm/AddNewUserForm';
import useToggle from 'hooks/useToggle';
import usersJSON from 'assets/users.json';

const Users = () => {
  const [search, setSearch] = useState('');
  const [usersState, setUsersState] = useState(usersJSON);
  const [on, toggle] = useToggle(false);

  const newUsers = usersState.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleUpdateSearch = value => {
    setSearch(value);
  };

  const handleDelete = id => {
    setUsersState(usersState => {
      return usersState.filter(user => user.id !== id);
    });
  };

  const addUser = newUser => {
    setUsersState(usersState => [...usersState, ...newUser]);
    toggle(false);
  };

  return (
    <div>
      {on && (
        <Modal onClose={toggle}>
          <AddNewUserForm onAdd={addUser} length={usersState.length} />
        </Modal>
      )}
      <button
        type="button"
        className="btn btn-primary mb-4 mt-4"
        onClick={toggle}
      >
        Add new user
      </button>
      <UsersSearch onSubmit={handleUpdateSearch} />
      <UsersStats users={newUsers} />
      <UsersList users={newUsers} onDelete={handleDelete} />
    </div>
  );
};
export default Users;

// export class Users extends Component {
//   state = {
//     search: '',
//     users: this.props.users,
//     isModalOpen: false,
//   };

//   componentDidMount() {
//     const users = JSON.parse(localStorage.getItem('users')) || this.props.users;
//     this.setState({ users });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.users.length !== 0 &&
//       prevState.users.length !== this.state.users.length
//     ) {
//       localStorage.setItem('users', JSON.stringify(this.state.users));
//     }
//   }

//   handleDelete = id => {
//     this.setState(prevState => {
//       return { users: prevState.users.filter(user => user.id !== id) };
//     });
//   };

//   handleUpdateSearch = value => {
//     this.setState({ search: value });
//   };

//   handleToogleModal = () => {
//     this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
//   };

//   render() {
//     const { search, users, isModalOpen } = this.state;
//     const newUsers = users.filter(user =>
//       user.name.toLowerCase().includes(search.toLowerCase())
//     );
//     return (
//       <div>
//         {isModalOpen && (
//           <Modal onClose={this.handleToogleModal}>
//             <AddNewUserForm />
//           </Modal>
//         )}
//         <button
//           type="button"
//           className="btn btn-primary mb-4 mt-4"
//           onClick={this.handleToogleModal}
//         >
//           Add new user
//         </button>
//         <UsersSearch onSubmit={this.handleUpdateSearch} />
//         <UsersStats users={newUsers} />
//         <UsersList users={newUsers} onDelete={this.handleDelete} />
//       </div>
//     );
//   }
// }
