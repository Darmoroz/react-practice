import { NavLink, Outlet } from 'react-router-dom';

const Forms = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="lg1">Login-Form #1</NavLink>
        </li>
        <li>
          <NavLink to="lg2">Login-Form #2</NavLink>
        </li>
        <li>
          <NavLink to="lg3">Formik</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default Forms;
