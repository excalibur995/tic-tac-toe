export const defaultSquares = Array(9).fill(null);

export function calculateWinners(squares: (null | string)[]) {
  const winnerLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (let i = 0; i < winnerLine.length; i++) {
    const [a, b, c] = winnerLine[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export const getNumberofItem = (
  item: "X" | "O" | "TIE",
  container: string[]
) => {
  return container.filter((value) => value === item).length;
};
