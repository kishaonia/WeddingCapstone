// import React from "react";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { Route, Switch } from "react-router-dom";
// import * as sessionActions from "./store/session";
// import Navigation from "./components/Navigation"
// import LoginFormModal from "./components/LoginFormModal";
// import WeddingDetails from "./components/WeddingDetails";
// // import ProfileButton from "./components/Navigation/ProfileButton";
// import SongRequests from "./components/SongRequest";
// import Photos from "./components/Photo";


// function App() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);
//   useEffect(() => {
//       dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
//   }, [dispatch]);
//   return (
//    <>
//    <Navigation isLoaded={isLoaded}/>
//    {isLoaded && (
//     <Switch>
//       {/* <Route exact path="/">
//         <Home />
//       </Route> */}
//     <Route exact path="/">
//       <LoginFormModal/>
//     </Route>
//       <Route exact path="/weddingdetails">
//       <WeddingDetails />
//       </Route>
//       <Route exact path="/weddingdetails">
//       <Photos />
//       </Route>
//       <Route exact path="/weddingdetails">
//       <SongRequests/>
//     </Route>
      
//     </Switch>
//    )}
//    </>
//   );
// }

// export default App;
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import LoginFormModal from "./components/LoginFormModal";
import WeddingDetails from "./components/WeddingDetails";
import SongRequests from "./components/SongRequest";
import Photos from "./components/Photo";
import Navigation from "./components/Navigation";
import Loader from "./Loader";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {!isLoaded && <Loader />} {/* Render Loader when isLoaded is false */}
      <Switch>
        <Route exact path="/">
          <LoginFormModal />
        </Route>
        <Route path="/">
          <Navigation isLoaded={isLoaded} />
          {isLoaded && (
            <>
              <Route exact path="/weddingdetails">
                <WeddingDetails />
              </Route>
              <Route exact path="/photos">
                <Photos />
              </Route>
              <Route exact path="/songrequests">
                <SongRequests />
              </Route>
            </>
          )}
        </Route>
      </Switch>
    </>
  );
}

export default App;
