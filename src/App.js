import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import { Switch, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <div
      style={{
        backgroundColor: "rgb(176, 189, 199)",
      }}
    >
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>

        <Route exact path="/details">
          <Details />
        </Route>

        <Route>This is 404 page</Route>
      </Switch>
    </div>
  );
}

export default App;
