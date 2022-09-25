import { styled } from "src/stitches.config";
import Square from "../Square";

interface BoardProps {
  squares: (null | string)[];
  onClick: (idx: number) => void;
}

const BoardComponents = styled("div", {
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  width: "300px",
  height: "300px",
  margin: "10px auto",
});

const Board = ({ squares, onClick }: BoardProps) => {
  return (
    <BoardComponents>
      {squares.map((value, idx) => (
        <Square key={idx} onClick={() => onClick(idx)}>
          {value}
        </Square>
      ))}
    </BoardComponents>
  );
};

export default Board;
