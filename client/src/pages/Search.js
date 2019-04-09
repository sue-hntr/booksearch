import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
      search: "",
      results: [],
      error: ""
    };
  
    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    // componentDidMount() {
    //   console.log(API);
    //   API.getBooksGoogle()
    //     .then(res => this.setState({ results: res }))
    //     .catch(err => console.log(err));
    // };
  
    handleInputChange = event => {
      this.setState({ search: event.target.value });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      API.getBooksGoogle(this.state.search)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          this.setState({ results: res.data.items[0].volumeInfo.title});
        })
        .catch(err => this.setState({ error: err.message }));
    };

    render() {
      console.log(this.state.results);
      return (
        <div>
          <Container style={{ minHeight: "80%" }}>
            <h1 className="text-center">Search for Books</h1>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
            <SearchResults results={this.state.results} />
          </Container>
        </div>
      );
    }
  }
  
  export default Search;
  