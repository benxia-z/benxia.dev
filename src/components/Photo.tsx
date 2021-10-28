import styled from "styled-components";

const Photo = styled.img`
  src: ${(props) => props.src!};
  alt: Ben Xia;
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
`;

export default Photo;
