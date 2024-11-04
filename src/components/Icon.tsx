import styled from "styled-components";

interface IconProps {
  iconImage: string;
  iconUrl: string;
  inverted?: boolean;
  height?: string;
  width?: string;
  filter?: string;
}

const Icon = (props: IconProps) => {
  const { iconImage, iconUrl, height, width, filter } = props;
  const StyledIcon = styled.img`
    src: ${(props) => iconImage};
    height: ${(props) => height};
    width: ${(props) => width};
    filter: ${(props) => filter};
  `;

  return (
    <a href={iconUrl}>
      <StyledIcon src={iconImage} />
    </a>
  );
};

export default Icon;
