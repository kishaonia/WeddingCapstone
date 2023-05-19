import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation"
import WeddingDetails from "./components/WeddingDetails";
import Registries from "./components/Registries";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
      dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
   <>
   <Navigation isLoaded={isLoaded}/>
   {isLoaded && (
    <Switch>
      {/* <Route exact path="/">
        <Home />
      </Route> */}
      <Route exact path="/">
              <WeddingDetails />
      </Route>
      <Route exact path="/">
  <Registries />
</Route>
      
    </Switch>
   )}
   </>
  );
}

export default App;
