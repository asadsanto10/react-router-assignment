import React from 'react';
import './App.scss';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Component/Nomatch/NoMatch';
import Postdetails from './Component/PostDetails/Postdetails';

function App() {
  
  return (
    <header className="App-header">
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/post-details/:postId">
            <Postdetails></Postdetails>
          </Route>
          <Route exact path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </header>
  );
}

export default App;
