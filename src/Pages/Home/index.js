import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Card } from "../../Components/Card";
import { HistoryModal } from "../../Components/HistoryModal";
import Navbar from "../../Components/Navbar";
import { SideBox } from "../../Components/SideBox";
import {
  ButtonBtm,
  CenterBox,
  Container,
  ContentContainer,
  ImgCenter,
} from "./style";

export function Home() {
  const [url, setUrl] = useState([]);
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();
  const [urlPagination, setUrlPagination] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
  );
  const [leftSide, setLeftSide] = useState([]);
  const [rightSide, setRightSide] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
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
    } else {
      var compare = Math.abs(right - left);
      var fair;
      if (compare <= 30) {
        alert("Troca justa");
        fair = "Troca justa";
      } else {
        alert("Troca injusta");
        fair = "Troca injusta";
      }

      var history = JSON.parse(localStorage.getItem("history") || "[]");

      history.push({
        leftSide: left,
        rightSide: right,
        fair: fair,
      });

      localStorage.setItem("history", JSON.stringify(history));
    }
  };

  return (
    <Container>
      <Navbar />
      <SideBox leftPokemons={leftSide} rightPokemons={rightSide} />
      <HistoryModal showHistory={showHistory} setShowHistory={setShowHistory} />

      <button onClick={() => setShowHistory(true)}>Histórico</button>
      {loading ? (
        <ImgCenter>
          <img
            src={"https://media.giphy.com/media/l0HlLMeBgzK2UuHVS/giphy.gif"}
            alt="loading"
          />
        </ImgCenter>
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
