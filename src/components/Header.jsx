import styled from "styled-components";

const TitleBanner = styled.header`
  background-color: #353439;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 100;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 5px;
  color: #d36a46;
  font-size: 50px;
  text-transform: uppercase;
`;

const SubHeader = styled.div`
  background-color: #d36a46;
  content: "";
  display: block;
  width: 100%;
  height: 50px;
  top: 50px;
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Note = styled.p`
  color: #fff;
  font-size: 12px;
`;

const Header = () => {
  return (
    <>
      <TitleBanner>
        <Title>Heatkit H-89</Title>
      </TitleBanner>
      <SubHeader>
        <Note>Computer, floppy, smart terminal, 16K RAM, $1595</Note>
      </SubHeader>
    </>
  );
};

export default Header;
