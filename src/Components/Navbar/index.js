import React from "react";
import logo from "../../Assets/logo.svg";
import { Header } from "./styles";

export default function Navbar() {
  return (
    <Header>
      <img src={logo} alt="logo" />
      <h4>Poke Trader</h4>
    </Header>
  );
}
