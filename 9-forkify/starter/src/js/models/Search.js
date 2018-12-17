import axios from "axios";
import { key, proxy } from "../config";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const response = await axios(
        `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      console.log(response, "response");
      this.result = response.data.recipes;
      // console.log(this.result, "result");
    } catch (error) {
      alert(error); // error response are very much clear eg:request failed with status code 404
    }
  }
}
