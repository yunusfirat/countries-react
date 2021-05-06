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
  const [clicked, SetClicked] = useState(false);
  return (
      <Router>
    <div className="App">
      <Navbar clicked={clicked} SetClicked={SetClicked} />
      <Switch>
        <Route exact path="/">
          <div className={clicked ? "darkmode" : ""}>
      <Search searchInput={searchInput} regionInput={regionInput} setSearchInput={setSearchInput} setRegionInput={setRegionInput} clicked={clicked}/>
      <Countries  searchInput={searchInput}  regionInput={regionInput} clicked={clicked} />
          </div>
        </Route>
      <Route path="/country/:name" component={Country}/>
      </Switch>
    </div>
      </Router>
  );
}

export default App;
