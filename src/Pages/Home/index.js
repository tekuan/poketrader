import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Card } from "../../Components/Card";
import { HistoryModal } from "../../Components/HistoryModal";
import Navbar from "../../Components/Navbar";
import { SideBox } from "../../Components/SideBox";
import { TeamContext } from "../../Context/teamContext";
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
  const [loading, setLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const { leftTeam, rightTeam } = useContext(TeamContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get(urlPagination)
      .then((response) => {
        setUrl(response.data.results);
        setNext(response.data.next);
        setPrevious(response.data.previous);
      })
      .catch((error) =>
        alert(
          "Ocorreu um erro ao carregar a página, atualize e tente novamente!"
        )
      );

    setLoading(false);
  }, [urlPagination]);

  const calculate = () => {
    var left = leftTeam.reduce(
      (left, pokemon) => left + pokemon.base_experience,
      0
    );
    var right = rightTeam.reduce(
      (right, pokemon) => right + pokemon.base_experience,
      0
    );

    if (rightTeam.length === 0 || leftTeam.length === 0) {
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
      <SideBox />
      <HistoryModal showHistory={showHistory} setShowHistory={setShowHistory} />

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
            {url && url.map((pokemon) => <Card url={pokemon.url} />)}
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
            <button onClick={() => setShowHistory(true)}>HISTÓRICO </button>

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
