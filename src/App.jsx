import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import BeerList from "./components/BeerList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beer-list" element={<BeerList />} />
      <Route path="/single-beer/:id" element={<SingleBeer />} />
      <Route path="/random" element={<RandomBeer />} />
      <Route path="/new" element={<NewBeer />} />
    </Routes>
  );
}

export default App;
