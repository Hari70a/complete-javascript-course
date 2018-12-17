// // // Global app controller
// // //default imports
// // import str from "./models/Search";

// // //named imports
// // import { add, multiply, ID } from "./views/searchView";

// // //named imports as diff name when exported as like this { add as a,  multiply as m,ID}
// // // import { a as add, m as multiply, ID as id } from "./views/searchView";

// // //named imports with different name
// // // import { add as a, multiply as m, ID as id } from "./views/searchView";

// // // named imports as a whole with name
// // // import * as searchView from "./views/searchView";

// // console.log(str, add(ID, 2), multiply(2, 4), ID);

// // // console.log(str, a(ID, 2), m(2, 4), ID);

// // // console.log(str, a(ID, 2), m(2, 4), ID);
// // // console.log(
// // //   str,
// // //   searchView.add(ID, 2),
// // //   searchView.multiply(2, 4),
// // //   searchView.ID
// // // );
// import axios from "axios";

// async function getResults(query) {
//   // const proxy = "https://crossorigin.me";
//   const API_KEY = "7bd8e11972a9594170eff35f8cf04208";
//   try {
//     const searchRecipes = await axios(
//       `https://www.food2fork.com/api/search?key=${API_KEY}&q=${query}`
//     );
//     const recipes = searchRecipes.data.recipes;
//     console.log(recipes, "recipes");
//   } catch (error) {
//     alert(error); // error response are very much clear eg:request failed with status code 404
//   }
// }
// getResults("pasta");

// // async function getResults(query) {
// //   //const proxy = "https://crossorigin.me"; // if we get CORS error, we prefix thisurl to  reverse proxy and fix it
// //   const API_KEY = "7bd8e11972a9594170eff35f8cf04208";
// //   try {
// //     const response = await fetch(
// //       `https://www.food2fork.com/api/search?key=${API_KEY}&q=${query}`
// //     );
// //     const searchRecipes = await response.json();
// //     const recipes = await searchRecipes.recipes;
// //     console.log(recipes, "recipes");
// //   } catch (error) {
// //     alert(error); // catched alert doesn't gives exact error it says like "failed to fetch" or "unexpected token >"
// //   }
// // }
// // getResults("pasta");
import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";
import Recipe from "./models/Recipe";

/** Global app controller
 * Search object
 * Recipe object
 * ShoppingList object
 * Likes object
 * **/

const state = {};

/**
 * Search Controller
 */

const controlSearch = async () => {
  //1 Get query from UI
  const query = searchView.getSearchInput();
  if (query) {
    // 2.Create a new search object and add it to state
    state.search = new Search(query);

    //3. Handle UI responsively (add a Spinner)
    searchView.clearSearchInput();
    searchView.clearResults();
    renderLoader(elements.searchResultsContainer);
    //4. call the getResults method
    try {
      await state.search.getResults();

      //5.Render results in UI
      // this.result = state.search.data;
      clearLoader();
      searchView.renderResults(state.search.result);
      // searchView.clearResults();
    } catch (err) {
      console.log(err, "controlSearc");
      alert("Something went wrong in the search ...");
    }
  }
};

elements.searchForm.addEventListener("click", e => {
  e.preventDefault();
  controlSearch();
});

elements.searchPageRes.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  console.log(btn, "btn");

  if (btn) {
    const pageNo = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, pageNo);
  }
});

/**
 * Recipe Controller
 */
const controlRecipe = async () => {
  console.log("INN control recipe");
  //1 Render UI changes

  //2.Create a new recipe Object
  const id = window.location.hash.replace("#", "");
  console.log(id, "id");

  //3. Handle UI responsively (add a Spinner)

  if (id) {
    state.recipe = new Recipe(id);
    try {
      //4.Call the getRecipe method and store in state

      await state.recipe.getRecipe();

      state.recipe.calcTime();
      state.recipe.calcServings();
      //5.Render results in UI
    } catch (err) {
      console.log(err);
      alert("Something went wrong in getting the recipe");
    }
  }
};

["hashchange", "load"].forEach(event => event, controlRecipe);
