import styled from "styled-components";

interface ContainerProps {
  maxWidth?: string;
}

const Container = styled.div<ContainerProps>`
  max-width: ${(props: ContainerProps) => props.maxWidth};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 40px;
`;

export default Container;
