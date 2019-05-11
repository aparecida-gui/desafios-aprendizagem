import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ""
    };
  }

  render() {
    const HomeRoute = ({ match, recipes, searchString }) => (
      <Home match={match} recipes={recipes} searchString={searchString}/>
    );

    const RecipePageRoute = () => <RecipePage />;

    return (
      <div className="App">
        <Route
          exact
          path="/search/:searchString?"
          children={({ match }) => (
            <Navbar
              searchString={match ? match.params.searchString || "" : ""}
            />
          )}
        />

        <div className="container mt-10">
          <Switch>
            <Route exact path="/recipe" component={RecipePageRoute} />
            <Route path="/search/:searchString?" component={HomeRoute} />
            <Redirect to="/search" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
