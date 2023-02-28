import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './Login';
import Welcome from './Welcome';
import Home from './Home';
import Withdraw from './Withdraw';
import TakeCard from './TakeCard';
import ThankYou from './ThankYou';
import Finish from './Finish';
import Balance from './Balance';


const Main = () => {
    
  return (
    <Routes>
        <Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/withdraw" element={<Withdraw />} />
          <Route exact path="/take_card" element={<TakeCard />} />
          <Route exact path="/thank_you" element={<ThankYou />} />
          <Route exact path="/finish" element={<Finish />} />
          <Route exact path="/balance" element={<Balance />} />

          
        </Route>
      </Routes>
  );
}

export default Main;