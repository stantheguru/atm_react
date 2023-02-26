import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './Login';


const Main = () => {
    
  return (
    <Routes>
        <Route>
          <Route exact path="/login" element={<Login />} />
          
        </Route>
      </Routes>
  );
}

export default Main;