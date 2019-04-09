import axios from "axios";
require("dotenv").config();

const API_KEY =`${process.env.REACT_APP_API_KEY}`



export default {
  getBooksGoogle: function(search, apikey) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&key=${API_KEY}&country=US`);    
  }

  //   ,
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
};
