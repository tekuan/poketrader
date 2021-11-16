import React, { useContext } from "react";
import { TeamContext } from "../../Context/teamContext";
import { LeftBox, RightBox } from "./style";

export function SideBox() {
  const { leftTeam, RemoveLeftTeam, rightTeam, RemoveRightTeam } =
    useContext(TeamContext);

  return (
    <>
      <LeftBox>
        {leftTeam.map((pokemon, index) => (
          <img
            src={pokemon?.sprites?.front_default}
            alt="pokemon"
            onClick={() => RemoveLeftTeam(index)}
          />
        ))}
      </LeftBox>

      <RightBox>
        {rightTeam.map((pokemon, index) => (
          <img
            src={pokemon?.sprites?.front_default}
            alt="pokemon"
            onClick={() => RemoveRightTeam(index)}
          />
        ))}
      </RightBox>
    </>
  );
}
