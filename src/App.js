import "./App.css";
import Countries from "./Countries";
import Navbar from "./Navbar";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search  />
      <Countries />
    </div>
  );
}

export default App;
