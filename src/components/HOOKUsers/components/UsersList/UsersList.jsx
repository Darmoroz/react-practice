import { UsersItem } from './UsersItem';

export const UsersList = ({ users, onDelete }) => {
  return (
    <ul className="mb-5 d-flex">
      {users.map(user => (
        <UsersItem key={user.id} user={user} onDelete={onDelete} />
      ))}
    </ul>
  );
};
