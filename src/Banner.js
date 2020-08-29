import React from 'react';
import styled from 'styled-components';

function Banner({ status, message, startGame, newGame, resetGame }) {

  const getButton = () => {
    switch(status) {
      case 'initial':   return <Button onClick={startGame}> Start Game </Button>
      case 'complete':  return <Button onClick={newGame}> New Game </Button>
      default:          return <Button onClick={resetGame}> Reset Game </Button>
    }
  }

  const BUTTON = getButton()

  return (
    <Container>
      <Heading>{ message }</Heading>
      { BUTTON }
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 10px;
`;

const Heading = styled.h1`

`;

const Button = styled.button`
  padding: 8px 12px;
  background: #F64C72;
  border: none;
  border-radius: 5px;
  font-weight: 500;
`;

export default Banner;
