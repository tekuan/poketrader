import axios from "axios";
import { useContext, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react/cjs/react.development";
import { TeamContext } from "../../Context/teamContext";
import { PokeCard } from "./style";

export function Card({ url }) {
  const [pokemon, setPokemon] = useState([]);
  const { AddLeftTeam, AddRightTeam } = useContext(TeamContext);

  useEffect(() => {
    getPokemon();
  }, [url]);

  const getPokemon = () => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  };
  const handleLeftSide = () => {
    AddLeftTeam(pokemon);
  };

  const handleRightSide = () => {
    AddRightTeam(pokemon);
  };

  return (
    <PokeCard>
      <p>XP {pokemon?.base_experience} </p>
      <div>
        <button style={{ color: "#0086ff" }} onClick={handleLeftSide}>
          <FaAngleLeft size={30} />
        </button>
        <img src={pokemon?.sprites?.front_default} alt="pokemon" />
        <button style={{ color: "#ff1a1a" }} onClick={handleRightSide}>
          <FaAngleRight size={30} />
        </button>
      </div>
      <span>{pokemon?.name?.toUpperCase()}</span>
    </PokeCard>
  );
}
