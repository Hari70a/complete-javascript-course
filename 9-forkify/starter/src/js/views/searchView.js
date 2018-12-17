// //export modules individually
// // export const add = (a, b) => a + b;
// // export const multiply = (a, b) => a * b;
// // export const ID = 34;

// //export modules as a object
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// const ID = 34;

// // this is also possible
// // export { add as a, multiply as m, ID };

// export { add, multiply, ID };

// //Both are same

import { elements } from "./base";

export const getSearchInput = () => elements.searchInput.value;

export const clearSearchInput = () => {
  elements.searchInput.value = "";
};

export const clearResults = () => {
  elements.searchResList.innerHTML = "";
  elements.searchPageRes.innerHTML = "";
};

//Balsamic Strawberry and Chicken Pizza with Sweet Onions and Smoked Bacon
//acc =0/acc+cur.lngth = 8/ acc+cur.length<=17 / newTitle.push()/ ['Balsamic]
//acc = 8/ acc+cur+lngth = 8+10 / 'Balsamic...'

const limitRecipeTitle = (title, limit = 17) => {
  if (title.length > 17) {
    const newTitle = [];
    title.split(" ").reduce((acc, cur) => {
      const acumVal = acc + cur.length;
      if (acumVal <= limit) {
        newTitle.push(cur);
      }
      return acumVal;
    }, 0);
    return `${newTitle.join(" ")}...`;
  }
  return title;
};

const recipe = rec => {
  const markUp = `
    <li>
      <a class="results__link" href="#${rec.recipe_id}">
          <figure class="results__fig">
              <img src="${rec.image_url}" alt="${rec.title}">
          </figure>
          <div class="results__data">
              <h4 class="results__name">${limitRecipeTitle(rec.title)}</h4>
              <p class="results__author">${rec.publisher}</p>
          </div>
      </a>
    </li>`;
  elements.searchResList.insertAdjacentHTML("beforeend", markUp);
};

const pageBtnMarkUp = (page, type) => `
  <button class="btn-inline results__btn--${type}" data-goto=${
  type === "prev" ? page - 1 : page + 1
}>
    <span>Page ${type === "prev" ? page - 1 : page + 1}</span>
    <svg class="search__icon">
      <use href="img/icons.svg#icon-triangle-${
        type === "prev" ? "left" : "right"
      }"></use>
    </svg>
  </button>`;

const renderButton = (page, resPerPage, numResults) => {
  const pages = Math.ceil(numResults / resPerPage);
  let paginationBtn;
  if (page === 1 && pages > 1) {
    //Only render next button
    paginationBtn = pageBtnMarkUp(page, "next");
  } else if (page < pages) {
    //render Both prev and next btn
    paginationBtn = `${pageBtnMarkUp(page, "prev")} ${pageBtnMarkUp(
      page,
      "next"
    )}`;
  } else if (page === pages && pages > 1) {
    //Only render prev Btn
    paginationBtn = pageBtnMarkUp(page, "prev");
  }
  elements.searchPageRes.insertAdjacentHTML("afterbegin", paginationBtn);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
  const start = (page - 1) * resPerPage; //0 10 20 --> pag1 page2 pag 3
  const end = page * resPerPage; //10 20 30 --> pag1 page2 pag 3
  recipes.slice(start, end).forEach(recipe);
  renderButton(page, resPerPage, recipes.length);
};
