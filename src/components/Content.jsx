import styled from "styled-components";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  z-index: 100;
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #4c3227;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -2px;
  font-size: 26px;
  margin: 0;
`;

const Description = styled.p`
  color: #4c3227;
  font-size: 14px;
  margin: 0;
  max-width: 350px;
`;

const Content = () => {
  return (
    <Container>
      <Title>H89 All-In-One Computer</Title>
      <Description>
        Heath takes the risk out of selecting a balanced computer system. Now,
        video terminal, floppy, keyboard and 8-bit computer are brought together
        in one self-container, compact unit. Nothing hangs out.
      </Description>
    </Container>
  );
};

export default Content;
