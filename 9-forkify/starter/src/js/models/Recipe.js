import axios from "axios";
import { key, proxy } from "../config";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const response = await axios(
        `https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`
      );
      console.log(response, "response");
      this.title = response.data.recipe.title;
      this.author = response.data.recipe.publisher;
      this.img = response.data.recipe.image_url;
      this.source = response.data.recipe.source_url;
      this.ingredients = response.data.recipe.ingredients;
      console.log(this, "result");
    } catch (error) {
      alert(error); // error response are very much clear eg:request failed with status code 404
    }
  }

  calcTime() {
    //Assumption
    //Need to use three ingredients for each dish and each dish takes a time period of 15 min
    const numOfIng = this.ingredients.length;
    const periods = Math.ceil(numOfIng / 3);
    this.time = periods * 15;
  }

  calcServings() {
    this.servings = 4;
  }
}
