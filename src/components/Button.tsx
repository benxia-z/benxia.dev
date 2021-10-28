import styled, { css } from "styled-components";

interface ButtonProps {
  secondary?: boolean;
}

const Button = styled.button<ButtonProps>`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 20px;
  display: inline-block;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  padding: 18px 50px;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  transition: ease-in-out 0.15s;
  outline: 0;
  color: white;
  background-color: #0e0e0e;
  width: 250px;
  &:hover {
    ${(props) =>
      props.secondary
        ? css`
            color: black;
            background-color: white;
          `
        : css`
            color: white;
            background-color: black;
          `};

    transform: scale(1.04);
  }

  ${(props) =>
    props.secondary &&
    css`
      background: white;
      color: black;
      border: 1px solid black;
    `}
`;

export default Button;
