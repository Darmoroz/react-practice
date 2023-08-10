import { Container } from 'components/Wrapper/Wrapper';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <NavLink to="homepage">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="forms">Forms</NavLink>
          </li>
          <li>
            <NavLink to="useState">useState</NavLink>
          </li>
          <li>
            <NavLink to="HTTP-request">HTTP-request</NavLink>
          </li>
          <li>
            <NavLink to="Reader">Reader</NavLink>
          </li>
          <li>
            <NavLink to="Users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
export default Layout;
