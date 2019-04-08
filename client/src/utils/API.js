import axios from "axios";
// require("dotenv").config();
// const apikey = process.env.API_KEY;

// GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

// https://www.googleapis.com/books/v1/volumes?q=search+terms + searchterm + &key=apikey

// console.log(`1. api key: ${apikey}`);
// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getBooksGoogle: function(search) {
    // console.log(`search: ${search}`);
    // console.log(`api key: ${apikey}`)
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyB6E_JvHhk8b4SnD0wbWk9lOaX_AkRc1ug`);

  }
//   ,
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
};
