import React from 'react';
import HomePage from './pages/home/home-page';
import Toggle from './comps/toggle/toggle';
import { connect } from 'react-redux';
import { setDimensions } from './actions/user.actions';
import './App.css';

function App({ setDimensions }) {
  const resize = () => {
    let object = {};
    object.width = window.innerWidth;
    object.height = window.innerHeight;
    setDimensions(object);
  };

  window.onresize = resize;

  return (
    <div>
      <Toggle />
      <HomePage />
    </div>
  );
}

export default connect(null, { setDimensions })(App);
