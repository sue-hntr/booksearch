import React from "react";
// import "./style.css";

function SearchResults(props) {
  return (


    <div className="card">
      <img src="" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h5 className="card-title">{props.author}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" onClick={() => {
          props.saveBook({
            title: props.title,
            author: props.author,
            description: props.description
          }
            
          )
        }} className="btn btn-primary">Save to database</a>
      </div>
  </div>
  );
}

export default SearchResults;
