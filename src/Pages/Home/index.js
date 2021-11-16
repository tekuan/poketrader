import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Card } from "../../Components/Card";
import Navbar from "../../Components/Navbar";
import { SideBox } from "../../Components/SideBox";
import { ButtonBtm, CenterBox, Container, ContentContainer } from "./style";

export function Home() {
  const [url, setUrl] = useState([]);

  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();
  const [urlPagination, setUrlPagination] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=15"
  );
  const [leftSide, setLeftSide] = useState([]);
  const [rightSide, setRightSide] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPokemons();
  }, [urlPagination]);

  const getPokemons = () => {
    setLoading(true);
    axios.get(urlPagination).then((response) => {
      setUrl(response.data.results);
      setNext(response.data.next);
      setPrevious(response.data.previous);
    });
    setLoading(false);
  };

  const calculate = () => {
    var left = leftSide.reduce(
      (left, pokemon) => left + pokemon.base_experience,
      0
    );
    var right = rightSide.reduce(
      (right, pokemon) => right + pokemon.base_experience,
      0
    );

    if (rightSide.length === 0 || leftSide.length === 0) {
      alert("Selecione no mínimo 1 pokémon para cada lado!");
    }
    if (Math.abs(right - left) <= 30) {
      alert("Troca justa");
    } else {
      alert("Troca injusta");
    }
  };

  return (
    <Container>
      <Navbar />
      <SideBox leftPokemons={leftSide} rightPokemons={rightSide} />
      <img
        src={
          "https://giphy.com/gifs/pokemon-pikachu-after-effects-l0HlLMeBgzK2UuHVS"
        }
      />
      {loading ? (
        <img
          src={
            "https://giphy.com/gifs/pokemon-pikachu-after-effects-l0HlLMeBgzK2UuHVS"
          }
        />
      ) : (
        <ContentContainer>
          <CenterBox>
            {url &&
              url.map((pokemon) => (
                <Card
                  url={pokemon.url}
                  leftSide={leftSide}
                  setLeftSide={setLeftSide}
                  rightSide={rightSide}
                  setRightSide={setRightSide}
                />
              ))}
          </CenterBox>
          <ButtonBtm>
            <button
              disabled={previous ? false : true}
              onClick={() => {
                setUrlPagination(previous);
              }}
            >
              <FaAngleLeft size={30} />
            </button>
            <button onClick={calculate}>
              <h3>TROCAR</h3>
            </button>

            <button
              disabled={next ? false : true}
              onClick={() => {
                setUrlPagination(next);
              }}
            >
              <FaAngleRight size={30} />
            </button>
          </ButtonBtm>
        </ContentContainer>
      )}
    </Container>
  );
}
