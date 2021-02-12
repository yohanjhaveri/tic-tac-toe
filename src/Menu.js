import React from "react";
import styled from "styled-components";

function Menu({ mode, setMode }) {
  return (
    <Container>
      <Logo>
        <Icon src={require("./img/png/ghost.png")} />
        <Name> React Games </Name>
      </Logo>
      <Modes>
        <Mode onClick={() => setMode("Single")} selected={mode === "Single"}>
          <ModeIcon className="fas fa-user" />
        </Mode>
        <Mode onClick={() => setMode("Multi")} selected={mode === "Multi"}>
          <ModeIcon className="fas fa-users" />
        </Mode>
      </Modes>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;

const Icon = styled.img`
  height: 40px;
`;

const Name = styled.h1`
  font-size: 25px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;

const Modes = styled.div`
  display: flex;
  grid-gap: 10px;
`;

const Mode = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.selected && "rgb(51, 188, 234, 0.1)"};
`;

const ModeIcon = styled.span`
  font-size: 20px;
  cursor: pointer;
`;

export default Menu;
