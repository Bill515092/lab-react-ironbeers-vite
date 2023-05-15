import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NewBeer() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };
    try {
      const response = await fetch(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.status === 200) {
        console.log("All good");
        const newBeer = await response.json();
        console.log("new beer", newBeer);
        // Navigate to the details page
        navigate(`/beer-list/`);
      }
    } catch (error) {
      console.log(error);
    }
    console.log("submit");
  };
  return (
    <div>
      <header>
        <Link to={"/"}>Home</Link>
      </header>
      <form style={{ display: "grid" }} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Tagline</label>
        <input
          value={tagline}
          onChange={(event) => {
            setTagline(event.target.value);
          }}
        />
        <label>Description</label>
        <input
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <label>First Brewed</label>
        <input
          value={firstBrewed}
          onChange={(event) => {
            setFirstBrewed(event.target.value);
          }}
        />
        <label>Brewers Tips</label>
        <input
          value={brewersTips}
          onChange={(event) => {
            setBrewersTips(event.target.value);
          }}
        />
        <label>Attenuation Level</label>
        <input
          value={attenuationLevel}
          onChange={(event) => {
            setAttenuationLevel(event.target.value);
          }}
        />
        <label>Contributed By</label>
        <input
          value={contributedBy}
          onChange={(event) => {
            setContributedBy(event.target.value);
          }}
        />

        <button type="submit">Add Beer!</button>
      </form>
    </div>
  );
}

export default NewBeer;
