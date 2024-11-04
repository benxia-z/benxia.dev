import styled from "styled-components";
import { Container, Title, Text, Icon } from "../components";
import gratsPreview from "../assets/grats-preview.png";
import terminalPreview from "../assets/reddit-term-preview.png";
import githubIcon from "../assets/GitHub-Mark-64px.png";

const ProjectContainer = styled.div`
  display: grid;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  justify-content: space-around;
  width: 80vw;
  margin: 15px auto;
  padding: 5px;
`;

const PreviewContainer = styled.div`
  position: absolute;
  font-size: 1.6rem;
  font-weight: 600;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background: #222;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  margin: 0 0 0 0;
  transition: ease opacity 0.2s, visibility 0.2s;
`;

const ProjectItem = styled.a`
  @media (max-width: 768px) {
    height: 41vw;
    width: 80vw;
  }
  @media (min-width: 768px) {
    height: 20.5vw;
    width: 40vw;
  }

  margin: 15px;
  border: 1px solid black;
  -webkit-filter: brightness(100%);
  background-color: #ffffff;
  position: relative;

  &:hover ${PreviewContainer} {
    opacity: 0.8;
    visibility: visible;
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PreviewIcons = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 25% 0 25%;
  justify-content: space-around;
`;

const Projects = (): JSX.Element => {
  const ProjectLinkStates = [
    {
      projectName: "Grats",
      projectPeviewImage: gratsPreview,
      githubUrl: "https://github.com/Zoopsoup/grats",
    },
    {
      projectName: "Reddit Terminal",
      projectPeviewImage: terminalPreview,
      githubUrl: "https://github.com/Zoopsoup/tiny-reddit",
    },
  ];
  return (
    <>
      <Container>
        <Title>Projects</Title>
      </Container>
      <Container>
        <Container maxWidth="700px">
          <Text>Here are some projects I've worked on:</Text>
        </Container>
      </Container>
      <ProjectContainer>
        {ProjectLinkStates.map((project) => (
          <ProjectItem href={project.githubUrl || "#"}>
            <PreviewImage src={project.projectPeviewImage} />
            <PreviewContainer>
              <p>{project.projectName}</p>
              <PreviewIcons>
                {project.githubUrl && (
                  <Icon
                    iconImage={githubIcon}
                    iconUrl={project.githubUrl}
                    height="50%"
                    filter="invert(100%)"
                  ></Icon>
                )}
              </PreviewIcons>
            </PreviewContainer>
          </ProjectItem>
        ))}
      </ProjectContainer>
    </>
  );
};

export default Projects;
