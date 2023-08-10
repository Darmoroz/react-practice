import { NavLink, Outlet } from 'react-router-dom';

const UseState = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="banner">Banner</NavLink>
        </li>
        <li>
          <NavLink to="clock">Clock</NavLink>
        </li>
        <li>
          <NavLink to="colorpicker">ColorPicker</NavLink>
        </li>
        <li>
          <NavLink to="counter">Counter</NavLink>
        </li>
        <li>
          <NavLink to="counterreducer">CounterReducer</NavLink>
        </li>
        <li>
          <NavLink to="timer">Timer</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default UseState;
