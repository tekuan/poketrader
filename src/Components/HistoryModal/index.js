import { FaTimes } from "react-icons/fa";
import { Modal } from "./style";
export function HistoryModal({ showHistory, setShowHistory }) {
  var history = JSON.parse(localStorage.getItem("history") || "[]");
  const removeHistory = () => {
    localStorage.removeItem("history");
    setShowHistory(false);
  };

  return (
    <>
      {showHistory ? (
        <Modal>
          <div>
            <button onClick={removeHistory}>
              <h3>Apagar</h3>
            </button>

            <h2>Histórico de Trocas </h2>
            <button onClick={() => setShowHistory(false)}>
              <FaTimes size={30} />
            </button>
          </div>
          {history &&
            history.map((item) => (
              <div>
                <span>
                  Lado esquerdo XP:
                  {item.leftSide}
                </span>
                <span>
                  Lado direito XP:
                  {item.rightSide}
                </span>
                {item.fair}
              </div>
            ))}
        </Modal>
      ) : null}
    </>
  );
}
