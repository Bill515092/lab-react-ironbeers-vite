import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RandomBeer() {
  const [beer, setBeer] = useState();

  console.log();

  const fetchBeer = async () => {
    try {
      const response = await fetch(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log("the response", response);
      if (response.status === 200) {
        const parsed = await response.json();
        console.log(parsed);
        setBeer(parsed);
        console.log("one beer", beer);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBeer();
  }, []);

  return beer ? (
    <div>
      <header>
        <Link to={"/"}>Home</Link>
      </header>
      <div key={beer._id}>
        <img src={beer.image_url} alt="beer" />
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <h5>{beer.contributed_by}</h5>
      </div>
    </div>
  ) : (
    <h1>Loading information about your beer...</h1>
  );
}

export default RandomBeer;