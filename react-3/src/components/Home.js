import React, { Component } from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";
import { getRecipesByName } from "../services/recipes";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      page: 1
    };
  }

  render() {
    const {title, page} = this.state
    let verificaNomes = getRecipesByName("g", 1).then(results=>console.log("test Names with filter: ", results));
    return (
      <div>
        <div className="row">
          <RecipeItem recipes={ getRecipesByName(title, page).then(results=> console.log(results))}/>
        </div>
        <div className="d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <button id="prev" className="page-link" href="#">
                  Previous
                </button>
              </li>
              <li className="page-item">
                <button id="next" className="page-link" href="#">
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
