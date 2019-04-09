import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";

require("dotenv").config();




function App() {
  return (
    <Router>
      <div>
        
          <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
