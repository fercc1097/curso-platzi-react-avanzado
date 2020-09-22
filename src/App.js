/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Router } from '@reach/router';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { User } from './pages/User';
import { Favs } from './pages/Favs';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { NavBar } from './components/NavBar';

const UserLogged = ({ children }) => children({ isAuth: true });

export const App = () => (
  <div>
    <Logo />
    <GlobalStyle />
    <Router>
      <Home path='/' />
      <Home path='/pet/:id' />
      <Detail path='/detail/:detailId' />
    </Router>
    <UserLogged>
      {({ isAuth }) =>
        isAuth ? (
          <Router>
            <Favs path='/favs' />
            <User path='/user' />
          </Router>
        ) : (
          <Router>
            <NotRegisteredUser path='/favs' />
            <NotRegisteredUser path='/user' />
          </Router>
        )
      }
    </UserLogged>
    <NavBar />
  </div>
);
