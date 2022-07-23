import React from "react";
import Client from './client'
import Landing from "./component/landing/landing";
import Namepage from "./component/nameDetails/namePageLanding";
import { Route, Routes, Switch, useLocation } from "react-router-dom";

import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <div >
      <CookiesProvider>
      <Routes>
      <Route exact element={<Landing/>} path="/" /> 
      <Route exact element={<Namepage/>} path="/meaningof/:name" /> 
      <Route exact element={<Landing/>} path="/nameWith/:letter" /> 
      <Route exact element={<Landing/>} path="/nameOf/:letter" /> 
      </Routes>
      </CookiesProvider>

    </div>
  );
}

export default App;
