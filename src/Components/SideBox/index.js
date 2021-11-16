import React, { useContext } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TeamContext } from "../../Context/teamContext";
import { LeftBox, RightBox } from "./style";

export function SideBox() {
  const { leftTeam, RemoveLeftTeam, rightTeam, RemoveRightTeam } =
    useContext(TeamContext);

  return (
    <>
      <LeftBox>
        {leftTeam.map((pokemon, index) => (
          <div onClick={() => RemoveLeftTeam(index)}>
            <img src={pokemon?.sprites?.front_default} alt="pokemon" />
            <FaAngleRight size={40} color="white" />
          </div>
        ))}
      </LeftBox>

      <RightBox>
        {rightTeam.map((pokemon, index) => (
          <div onClick={() => RemoveRightTeam(index)}>
            <FaAngleLeft size={40} color="white" />
            <img src={pokemon?.sprites?.front_default} alt="pokemon" />
          </div>
        ))}
      </RightBox>
    </>
  );
}
