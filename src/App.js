import "./App.css";
import Countries from "./Countries";
import Navbar from "./Navbar";
import Search from "./Search";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [regionInput, setRegionInput] = useState("");

  return (
    <div className="App">
      <Navbar />
      <Search searchInput={searchInput} regionInput={regionInput} setSearchInput={setSearchInput} setRegionInput={setRegionInput} />
      <Countries  searchInput={searchInput}  regionInput={regionInput} />
    </div>
  );
}

export default App;
