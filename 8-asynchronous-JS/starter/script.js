//Synchronous fn
// const second = () => {
//   console.log("second function");
// };

// const first = () => {
//   console.log("Hey there");
//   second();
//   console.log("The end");
// };
//first()
//O/p
//Hey there
//second function
//The end

//Asynchronous fn
// const second = () => {
//   setTimeout(() => {
//     console.log("second function");
//   });
// };

// const first = () => {
//   console.log("Hey there");
//   second();
//   console.log("The end");
// };
// first();
//O/p
//Hey there
//The end
//second function

//// function getRecipes() {
//   setTimeout(() => {
//     const recipeId = [234, 123, 456];
//     console.log(recipeId, "recipeId");
//     setTimeout(
//       recipeId => {
//         const recipe1 = { title: "Tomato pasta", chef: "Hariraj" };
//         console.log(recipe1, "recipe1");
//         setTimeout(
//           chef => {
//             const recipe2 = { title: "Chicken Shawarma", chef: "Hariraj" };
//             console.log(recipe2, "recipe2");
//           },
//           2000,
//           recipe1.chef
//         );
//       },
//       2000,
//       recipeId[2]
//     );
//   }, 1500);
// }

// const getIds = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const recipeId = [123, 344, 346, 567];
//     resolve(recipeId[2]);
//   }, 1500);
// });

// const getRecipe1 = id => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       id => {
//         const recipe1 = { title: "Tomato pasta", chef: "Hariraj" };
//         resolve(recipe1.chef);
//       },
//       1500,
//       id
//     );
//   });
// };

// const getRecipe2 = chef => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       chef => {
//         const recipe2 = { title: "Italian pizza", chef: "Hariraj" };
//         resolve(recipe2);
//       },
//       1500,
//       chef
//     );
//   });
// };

// getIds
//   .then(id => {
//     console.log(id, "id");
//     return getRecipe1();
//   })
//   .then(chef => {
//     console.log(chef, "Recipe1");
//     return getRecipe2();
//   })
//   .then(recipe => {
//     console.log(recipe, "Recipe1");
//   })
//   .catch(e => console.log(e, "Reject error"));

// async function getIdsaw() {
//   const id = await getIds;
//   console.log(id);
//   const chef = await getRecipe1();
//   console.log(chef);
//   const recipe = await getRecipe2();
//   console.log(recipe);
//   //return recipe
//   return recipe;
// }

// getIdsaw().then(recipe =>
//   console.log(`${recipe.title} is the delicious one which I ever tasted`)
// );
function getWeather() {
  fetch(
    "https://samples.openweathermap.org/data/2.5/weather?q=London&appid=e027f08b2b572a6eaaf11e8e3e1f07c8"
  )
    .then(result => {
      console.log(result);
      return result.json();
    })
    .then(responseData => {
      console.log(responseData);
    })
    .catch(e => console.log(e));
}

getWeather();

async function getWeatheraw() {
  try {
    const result = await fetch(
      "https://samples.openweathermap.org/data/2.5/weather?q=London&appid=e027f08b2b572a6eaaf11e8e3e1f07c8"
    );
    const responseData = await result.json();
    console.log(responseData, ":rejfj");
    return responseData1;
  } catch (e) {
    console.log(e, "error");
  }
}

let londomWeather;
getWeatheraw().then(response => {
  console.log(response, "response");
  londomWeather = response.weather[0];
  console.log(londomWeather, "Inside");
});
