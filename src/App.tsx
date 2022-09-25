import Board from "./components/Board";
import { useCallback, useEffect, useState } from "react";
import { styled } from "./stitches.config";
import { calculateWinners, defaultSquares, getNumberofItem } from "./utils";
import { readLocal, saveLocal } from "./hooks/useLocal";

const Wrapper = styled("div", {
  gridCenter: "inital",
  background: "#000",
  height: "100vh",
  gap: "10px",
});

const Box = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const PlayerWrapper = styled("div", {
  display: "inherit",
  flexDirection: "column",
  textAlign: "center",
  gap: "10px",
  span: {
    color: "#FFF",
    fontWeight: "bold",
  },
  opacity: 0.5,
  variants: {
    isTurn: {
      true: {
        opacity: 1,
      },
    },
  },
});

function App() {
  const [board, setBoard] = useState(defaultSquares);
  const [winners, setWinners] = useState<string[]>(readLocal("winners") ?? []);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinners(board);

  const getWinners = useCallback(
    (item: "X" | "O" | "TIE") => getNumberofItem(item, winners),
    [winners]
  );

  const setUpWinners = (winners: string[]) => {
    setWinners(winners);
    saveLocal(winners, "winners");
  };

  const setupWinner = (value = "TIE") => {
    const tempWinner = [...winners];
    tempWinner.push(value);
    setUpWinners(tempWinner);
    setBoard(defaultSquares);
  };

  const onHandleBoardClick = (i: number) => {
    const clonedBoard = [...board];
    const cloneboardNotNull = clonedBoard.filter(Boolean);
    if (cloneboardNotNull.length === 8 && !winner) {
      return setupWinner();
    }
    if (!clonedBoard[i] && !winner) {
      clonedBoard[i] = xIsNext ? "X" : "O";
      setBoard(clonedBoard);
      setXisNext((prev) => !prev);
    }
  };

  const onResetGame = () => {
    setUpWinners([]);
    setBoard(defaultSquares);
  };

  useEffect(() => {
    if (!!winner) {
      setupWinner(winner);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner]);

  return (
    <Wrapper>
      <Board squares={board} onClick={onHandleBoardClick} />
      <Box>
        <PlayerWrapper isTurn={xIsNext}>
          <span>Player 1 (X)</span>
          <span>{getWinners("X")}</span>
        </PlayerWrapper>
        <PlayerWrapper>
          <span>Tie</span>
          <span>{getWinners("TIE")}</span>
        </PlayerWrapper>
        <PlayerWrapper isTurn={!xIsNext}>
          <span>Player 2 (O)</span>
          <span>{getWinners("O")}</span>
        </PlayerWrapper>
      </Box>
      <button onClick={onResetGame}>Reset Game</button>
    </Wrapper>
  );
}

export default App;
