import { NavLink, Outlet } from 'react-router-dom';

const HttpReq = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="pokemon">Pokemon</NavLink>
        </li>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="materialscrud">MaterialsCRUD</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default HttpReq;
