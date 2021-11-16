import axios from "axios";
import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react/cjs/react.development";
import { PokeCard } from "./style";

export function Card({ url, leftSide, setLeftSide, rightSide, setRightSide }) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon();
  }, [url]);

  const getPokemon = () => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  };
  const handleLeftSide = () => {
    leftSide.length === 6
      ? alert("Selecionar no máximo 6 pokémons!")
      : setLeftSide((prev) => [...prev, pokemon]);
  };

  const handleRightSide = () => {
    rightSide.length === 6
      ? alert("Selecionar no máximo 6 pokémons!")
      : setRightSide((prev) => [...prev, pokemon]);
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
