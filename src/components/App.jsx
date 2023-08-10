import Forms from 'pages/Forms';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NotFound } from './NotFound/NotFound';
import UseState from 'pages/UseState';
import HttpReq from 'pages/HTTP-request';
import HomePage from 'pages/HomePage';
import Reader from './HOOKReader/Reader';
import Users from './HOOKUsers/Users';
import LoginForm from './HOOKLoginForm/LoginForm';
import LoginFormSecondary from './HOOKLoginFormSecondary/LoginFormSecondary';
import { LoginFormFormik } from './LoginForm(formik)/LoginForm';
import { Banner } from './HOOKBanner/Banner';
import { Clock } from './HOOKClock/Clock';
import { ColorPicker } from './HOOKColorPicker/ColorPicker';
import { Counter } from './HOOKCounter/Counter';
import { CounterReducer } from './HOOKCounterReducer/Counter';
import Timer from './HOOKTimer/Timer';
import { Pokemon } from './HOOKPokemon/Pokemon';
import Posts from './HOOKPosts/Posts';
import { MaterialCRUD } from './MaterialCRUD/MaterialCRUD';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="homepage" />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="forms" element={<Forms />}>
          <Route index element={<Navigate to="lg1" />} />
          <Route path="lg1" element={<LoginForm />} />
          <Route path="lg2" element={<LoginFormSecondary />} />
          <Route path="lg3" element={<LoginFormFormik />} />
        </Route>
        <Route path="useState" element={<UseState />}>
          <Route index element={<Navigate to="banner" />} />
          <Route path="banner" element={<Banner />} />
          <Route path="clock" element={<Clock />} />
          <Route path="colorpicker" element={<ColorPicker />} />
          <Route path="counter" element={<Counter />} />
          <Route path="counterreducer" element={<CounterReducer />} />
          <Route path="timer" element={<Timer />} />
        </Route>
        <Route path="HTTP-request" element={<HttpReq />}>
          <Route index element={<Navigate to="pokemon" />} />
          <Route path="pokemon" element={<Pokemon />} />
          <Route path="posts" element={<Posts />} />
          <Route path="materialscrud" element={<MaterialCRUD />} />
        </Route>
        <Route path="Reader" element={<Reader />} />
        <Route path="Users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default App;

// import { Container } from 'components/Wrapper/Wrapper';

// import { LoginFormFormik } from 'components/LoginForm(formik)/LoginForm';

// import LoginFormSecondary from 'components/HOOKLoginFormSecondary/LoginFormSecondary';

// import Users from 'components/HOOKUsers/Users';
// import usersJSON from 'assets/users.json';

// import Reader from 'components/HOOKReader/Reader';
// import publications from 'assets/publications.json';

// import { Banner } from 'components/HOOKBanner/Banner';

// import Timer from 'components/HOOKTimer/Timer';

// import { MaterialCRUD } from 'components/MaterialCRUD/MaterialCRUD';

// import Posts from 'components/HOOKPosts/Posts';

// import { LoginForm } from 'components/HOOKLoginForm/LoginForm';

// import { ColorPicker } from './HOOKColorPicker/ColorPicker';
// import { colorPickerOptions } from 'constants/colorPickerOptions';

// import { Counter } from './HOOKCounter/Counter';

// import { Clock } from './HOOKClock/Clock';

// import { Pokemon } from './HOOKPokemon/Pokemon';

// import { CounterReducer } from './HOOKCounterReducer/Counter';

// export class App extends Component {
//   render() {
//     return (
//       <WrapperStyled>
//         <LoginFormFormik />
//         <LoginFormSecondary />
//         <Users users={usersJSON} />
//         <Reader items={publications} />
//         <Banner />
//         <Timer />
//         <MaterialCRUD />
//         <Posts />
//         <LoginForm />
//         <ColorPicker options={colorPickerOptions} />
//         <Counter />
//         <Clock />
//         <Pokemon />
//         <CounterReducer />
//       </WrapperStyled>
//     );
//   }
// }
