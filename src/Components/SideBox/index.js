import React from "react";
import { LeftBox, RightBox } from "./style";
export function SideBox({ leftPokemons, rightPokemons }) {
  return (
    <>
      <LeftBox>
        {leftPokemons.map((pokemon) => (
          <img src={pokemon.sprites.front_default} alt="pokemon" />
        ))}
      </LeftBox>

      <RightBox>
        {rightPokemons.map((pokemon) => (
          <img src={pokemon.sprites.front_default} alt="pokemon" />
        ))}
      </RightBox>
    </>
  );
}
