import axios from "axios";
require("dotenv").config();
// const apikey = process.env.REACT_APP_API_KEY;

const API_KEY =`${process.env.REACT_APP_API_KEY}`


// console.log(apikey);

// GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

// https://www.googleapis.com/books/v1/volumes?q=search+terms + searchterm + &key=apikey

// console.log(`1. api key: ${apikey}`);
// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getBooksGoogle: function(search, apikey) {
    // console.log(`search: ${search}`);
    // console.log(`api key: ${apikey}`)
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&key=${API_KEY}&country=US`);    
    // return axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAYgwprpzWKBllgV3eTV97ILY8WTT7pe20`);
    // return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAYgwprpzWKBllgV3eTV97ILY8WTT7pe20`);
    // https://www.googleapis.com/books/v1/volumes?q=intitle:hamsters&key=AIzaSyAYgwprpzWKBllgV3eTV97ILY8WTT7pe2&country=US


  }
//   ,
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
};
