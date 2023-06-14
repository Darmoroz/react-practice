export const UsersStats = ({ users }) => {
  const openToWorkCount = users.filter(user => user.isOpenToWork).length;

  return (
    <>
      <p className="text-uppercase text__right">Total: {users.length}</p>
      <p className="text__right">Open to work: {openToWorkCount}</p>
    </>
  );
};
