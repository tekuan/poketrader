import { createContext, useState } from "react";

export const TeamContext = createContext(0);

export const TeamContextProvider = ({ children }) => {
  const [leftTeam, setLeftTeam] = useState([]);
  const [rightTeam, setRightTeam] = useState([]);

  const AddLeftTeam = (pokemon) => {
    leftTeam.length === 6
      ? alert("Selecionar no máximo 6 pokémons!")
      : setLeftTeam((prev) => [...prev, pokemon]);
  };
  const RemoveLeftTeam = (index) => {
    setLeftTeam(leftTeam.filter((pokemon, pokeIndex) => pokeIndex !== index));
  };

  const AddRightTeam = (pokemon) => {
    rightTeam.length === 6
      ? alert("Selecionar no máximo 6 pokémons!")
      : setRightTeam((prev) => [...prev, pokemon]);
  };
  const RemoveRightTeam = (index) => {
    setRightTeam(rightTeam.filter((pokemon, pokeIndex) => pokeIndex !== index));
  };
  return (
    <TeamContext.Provider
      value={{
        leftTeam,
        AddLeftTeam,
        RemoveLeftTeam,
        rightTeam,
        AddRightTeam,
        RemoveRightTeam,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};
