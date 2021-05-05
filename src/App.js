import "./App.css";
import Countries from "./Countries";
import Navbar from "./Navbar";
import Search from "./Search";
import Country from "./Country";
import { useState } from "react";
import { Route } from "react-router-dom";
function App() {
  const [searchInput, setSearchInput] = useState("");
  const [regionInput, setRegionInput] = useState("");

  return (
    <div className="App">
      <Navbar />
      <Search searchInput={searchInput} regionInput={regionInput} setSearchInput={setSearchInput} setRegionInput={setRegionInput} />
      <Countries  searchInput={searchInput}  regionInput={regionInput} />
      <Route
      path="/country/:name"
      render ={() => <Country component={Country} /> }
      />
    </div>
  );
}

export default App;
