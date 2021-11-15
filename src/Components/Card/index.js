import axios from "axios";
import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react/cjs/react.development";
import { PokeCard } from "../../Pages/Home/styles";

export function Card({ url }) {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    getPokemon();
  }, [url]);

  const getPokemon = () => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  };

  return (
    <PokeCard>
      <div>
        <button
          style={{ color: "#0086ff" }}
          onClick={() => {
            //            leftSide(pokemon);
          }}
          //        disabled={leftXP.length >= 6 ? true : false}
        >
          <FaAngleLeft />
        </button>
        <img src={pokemon?.sprites?.front_default} alt="pokemon" />

        <button
          style={{ color: "#ff1a1a" }}
          onClick={() => {
            //        rightSide(pokemon);
          }}
          //    disabled={rightXP.length >= 6 ? true : false}
        >
          <FaAngleRight />
        </button>
      </div>
      <span>{pokemon.name}</span>
    </PokeCard>
  );
}
