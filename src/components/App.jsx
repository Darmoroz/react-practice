import { Component } from 'react';
import { WrapperStyled } from 'components/Wrapper/Wrapper';

import { LoginFormFormik } from 'components/LoginForm(formik)/LoginForm';

import LoginFormSecondary from 'components/HOOKLoginFormSecondary/LoginFormSecondary';

import Users from 'components/HOOKUsers/Users';
import usersJSON from 'assets/users.json';

import Reader from 'components/HOOKReader/Reader';
import publications from 'assets/publications.json';

import { Banner } from 'components/HOOKBanner/Banner';

import Timer from 'components/HOOKTimer/Timer';

import { MaterialCRUD } from 'components/MaterialCRUD/MaterialCRUD';

import Posts from 'components/HOOKPosts/Posts';

import { LoginForm } from 'components/HOOKLoginForm/LoginForm';

import { ColorPicker } from './HOOKColorPicker/ColorPicker';
import { colorPickerOptions } from 'constants/colorPickerOptions';

import { Counter } from './HOOKCounter/Counter';

import { Clock } from './HOOKClock/Clock';

import { Pokemon } from './HOOKPokemon/Pokemon';

import { CounterReducer } from './HOOKCounterReducer/Counter';

export class App extends Component {
  render() {
    return (
      <WrapperStyled>
        <LoginFormFormik />
        <LoginFormSecondary />
        <Users users={usersJSON} />
        <Reader items={publications} />
        <Banner />
        <Timer />
        <MaterialCRUD />
        <Posts />
        <LoginForm />
        <ColorPicker options={colorPickerOptions} />
        <Counter />
        <Clock />
        <Pokemon />
        <CounterReducer />
      </WrapperStyled>
    );
  }
}
