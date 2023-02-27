import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './Login';
import Welcome from './Welcome';
import Home from './Home';


const Main = () => {
    
  return (
    <Routes>
        <Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/home" element={<Home />} />

          
        </Route>
      </Routes>
  );
}

export default Main;