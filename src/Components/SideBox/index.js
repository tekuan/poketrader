import React from "react";
import { LeftBox, RightBox } from "./style";
export function SideBox({ leftPokemons, rightPokemons }) {
  const removePokemon = (e) => {
    if (e?.target?.title === "left") leftPokemons.splice(e?.target?.id, 1);

    if (e?.target?.title === "right") rightPokemons.splice(e?.target?.id, 1);
  };
  return (
    <>
      <LeftBox>
        {leftPokemons.map((pokemon, index) => (
          <img
            src={pokemon?.sprites?.front_default}
            alt="pokemon"
            id={index}
            title={"left"}
            onClick={removePokemon}
          />
        ))}
      </LeftBox>

      <RightBox>
        {rightPokemons.map((pokemon, index) => (
          <img
            src={pokemon?.sprites?.front_default}
            alt="pokemon"
            id={index}
            title={"right"}
            onClick={removePokemon}
          />
        ))}
      </RightBox>
    </>
  );
}
