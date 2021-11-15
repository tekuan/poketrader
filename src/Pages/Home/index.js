import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import api from "../../api";
import { Card } from "../../Components/Card";
import Navbar from "../../Components/Navbar";
import {
  ButtonBtm,
  CenterBox,
  Container,
  ContentContainer,
  LeftBox,
  RightBox,
} from "./styles";

export default function Home() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState([]);
  const [offset, setOffset] = useState(0);
  const [leftXP, setLeftXP] = useState([]);
  const [rightXP, setRightXP] = useState([]);
  const [fair, setFair] = useState("");

  useEffect(() => {
    getPokemons(offset);
  }, [offset]);

  const getPokemons = (offset) => {
    api.get(`pokemon?limit=10&offset=${offset}`).then((response) => {
      setUrl(response.data.results);
    });
  };

  const leftSide = (pokemon) => {
    setLeftXP((prev) => [...prev, pokemon]);
  };
  const rightSide = (pokemon) => {
    setRightXP((prev) => [...prev, pokemon]);
  };

  const clear = () => {
    setRightXP([]);
    setLeftXP([]);
  };

  const calculate = () => {
    var left = leftXP.reduce(
      (left, pokemon) => left + pokemon.base_experience,
      0
    );
    var right = rightXP.reduce(
      (right, pokemon) => right + pokemon.base_experience,
      0
    );

    if (right === left) {
      if (right !== 0 && left !== 0) setFair("Troca justa");
    } else setFair("Troca injusta");
  };

  return (
    <Container>
      <Navbar />

      <RightBox>
        <div>
          {rightXP &&
            rightXP.map((pokemon) => (
              <img src={pokemon.sprites.front_default} alt="pokemon" />
            ))}
        </div>
      </RightBox>

      <LeftBox>
        <div>
          {leftXP &&
            leftXP.map((pokemon) => (
              <img src={pokemon.sprites.front_default} alt="pokemon" />
            ))}
        </div>
      </LeftBox>
      <ContentContainer>
        <CenterBox>
          {url && url.map((pokemon) => <Card url={pokemon.url} />)}
        </CenterBox>

        <ButtonBtm>
          <button
            disabled={offset === 0 ? true : false}
            onClick={() => {
              if (offset >= 0) setOffset(offset - 10);
            }}
          >
            <FaAngleLeft />
          </button>
          <button onClick={calculate}>
            <h3>CALCULAR</h3>
          </button>
          <div>
            <h3>{fair}</h3>
          </div>
          <button onClick={clear}>
            <h3>LIMPAR</h3>
          </button>
          <button
            disabled={offset === 1110 ? true : false}
            onClick={() => {
              if (offset <= 1100) setOffset(offset + 10);
            }}
          >
            <h4>
              <FaAngleRight />
            </h4>
          </button>
        </ButtonBtm>
      </ContentContainer>
    </Container>
  );
}
