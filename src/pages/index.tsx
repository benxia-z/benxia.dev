import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";
import {
  Button,
  Container,
  Title,
  Text,
  StyledLink,
  Photo,
  Subtitle,
  Icon,
} from "../components";
import me2 from "../assets/me_2.jpg";
import linkedinIcon from "../assets/linkedin-logo.png";
import instagramIcon from "../assets/instagram-logo.png";
import githubIcon from "../assets/GitHub-Mark-64px.png";

const PreviewIcons = styled.div`
  display: flex;
  width: 300px;
  margin-bottom: 30px;
  justify-content: space-between;
`;
interface IndexPageProps {
  setActiveLink: Dispatch<SetStateAction<string>>;
}

const Home = (props: IndexPageProps): JSX.Element => {
  const { setActiveLink } = props;
  const socialLinks = [
    {
      socialIcon: linkedinIcon,
      socialLink: "https://www.linkedin.com/in/benjamin-xia/",
      filter: "brightness(0%)",
    },

    {
      socialIcon: githubIcon,
      socialLink: "https://github.com/benxia-z",
    },
    {
      socialIcon: instagramIcon,
      socialLink: "https://www.instagram.com/soopzoup/",
    },
  ];
  return (
    <>
      <Container>
        <Photo src={me2} />
        <Title>Ben Xia</Title>
        <Subtitle>Software Developer</Subtitle>
      </Container>
      <Container>
        <Container maxWidth="700px">
          <PreviewIcons>
            {socialLinks.map((social) => (
              <Icon
                iconImage={social.socialIcon}
                iconUrl={social.socialLink}
                height="50px"
                filter={social.filter || ""}
              />
            ))}
          </PreviewIcons>

          <Text>
            Frontend engineer with 2.5 years of experience in creating
            accessible and performant web apps.
          </Text>
        </Container>
        <StyledLink to="/about">
          <Button
            onClick={() => {
              setActiveLink("About");
              localStorage.setItem("SelectedTab", "About");
            }}
          >
            More about me &rarr;
          </Button>
        </StyledLink>
        <a href="mailto:bzijiexia@gmail.com">
          <Button secondary>Contact me</Button>
        </a>
      </Container>
    </>
  );
};

export default Home;
