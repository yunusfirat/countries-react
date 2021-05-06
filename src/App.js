import "./App.css";
import Navbar from "./Navbar";
import Countries from "./Countries";
import Search from "./Search";
import Country from "./Country";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [searchInput, setSearchInput] = useState("");
  const [regionInput, setRegionInput] = useState("");

  return (
      <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
      <Search searchInput={searchInput} regionInput={regionInput} setSearchInput={setSearchInput} setRegionInput={setRegionInput} />
      <Countries  searchInput={searchInput}  regionInput={regionInput} />
        </Route>
      <Route path="/country/:name" component={Country}/>
      </Switch>
    </div>
      </Router>
  );
}

export default App;
