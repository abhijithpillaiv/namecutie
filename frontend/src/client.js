import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Landing from "./component/landing/landing";
import { AnimatePresence } from "framer-motion";
import { LoginContext } from "./context/loginContext";

function App() {
  const [User, setUser] = useState(1);
  const location = useLocation();

  return (
    <span>
      <div>
        {/* <LoginContext.Provider value={{ User: User, setUser: setUser }}> */}
          <AnimatePresence>
              <Route exact component={Landing} path="/" />
          </AnimatePresence>
        {/* </LoginContext.Provider> */}
      </div>
    </span>
  ) 
}

export default App;
