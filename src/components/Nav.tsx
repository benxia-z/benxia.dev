import { useEffect, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 60vw;
  }
  @media (min-width: 768px) {
    width: 35vw;
  }
  margin: 15px auto;
  padding: 5px;
  height: 40px;
  background-color: #f3f3f3;
  border-radius: 40px;
`;

interface NavItemProps {
  primary?: boolean;
}

const NavItem = styled.div<NavItemProps>`
  display: flex;
  justify-self: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${(props: NavItemProps) =>
    props.primary ? "#dddddd" : "#f3f3f3"};
  width: 95%;
  text-align: center;
  align-content: center;
  flex-direction: column;
  transition: ease-in-out 0.15s;
  &:hover {
    background: #cccccc;
    transition: all ease-in-out 0.2s;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  height: 100%;
  line-height: 230%;
`;

interface NavProps {
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
}

const Nav = (props: NavProps): JSX.Element => {
  const { activeLink, setActiveLink } = props;
  const tabStates = [
    { tabName: "Home", route: "/" },
    { tabName: "About", route: "/about" },
    { tabName: "Projects", route: "/projects" },
  ];

  useEffect(() => {
    setActiveLink(localStorage.getItem("SelectedTab") || "Home");
  });

  return (
    <NavContainer>
      {tabStates.map((tab) => (
        <NavItem
          onClick={() => {
            setActiveLink(tab.tabName);
            localStorage.setItem("SelectedTab", tab.tabName);
          }}
          primary={activeLink === tab.tabName}
          key={tab.tabName}
        >
          <StyledLink to={tab.route}>{`${tab.tabName}`}</StyledLink>
        </NavItem>
      ))}
    </NavContainer>
  );
};
export default Nav;
