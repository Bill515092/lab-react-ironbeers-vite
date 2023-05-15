import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BeerList() {
  const [beers, setBeers] = useState([]);

  const fetchBeers = async () => {
    try {
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
      const parsed = await response.json();
      setBeers(parsed);
      console.log(parsed);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBeers();
  }, []);
  return (
    <div>
      <header>
        <Link to={"/"}>Home</Link>
      </header>
      <h2>Beer List</h2>
      {beers.map((beer) => (
        <Link to={`/single-beer/${beer._id}`} key={beer._id}>
          <div>
            <img src={beer.image_url} alt="beer" />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <h5>{beer.contributed_by}</h5>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BeerList;
