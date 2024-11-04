import { Button, Container, Title, Text } from "../components";
import { useMediaQuery } from "react-responsive";

const About = (): JSX.Element => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
      <Container>
        <Title>Resume</Title>
      </Container>
      <Container>
        <Container maxWidth="700px">
          <Text>My resume and experiences can be found below:</Text>
        </Container>
        {isMobile ? (
          <a href="https://drive.google.com/file/d/18rm82xOzjBM360IrCrBNYrdpjhldtMPr/view">
            <Button>View Resume</Button>
          </a>
        ) : (
          <iframe
            src="https://drive.google.com/file/d/18rm82xOzjBM360IrCrBNYrdpjhldtMPr/preview"
            width="640"
            height="825"
            allow="autoplay"
            title="Resume Preview"
          ></iframe>
        )}
      </Container>
    </>
  );
};

export default About;
