import { ComponentPropsWithoutRef } from "react";
import { styled } from "src/stitches.config";

type SquareProps = ComponentPropsWithoutRef<"button">;

const SquareComponent = styled("button", {
  background: "black",
  border: "2px solid #FFF",
  fontSize: "30px",
  fontWeight: 800,
  cursor: "pointer",
  color: "#fff",
  outline: "none",
});

const Square = ({ children, ...rest }: SquareProps) => {
  return <SquareComponent {...rest}>{children}</SquareComponent>;
};

export default Square;
