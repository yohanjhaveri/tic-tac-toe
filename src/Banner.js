import React from 'react';
import styled from 'styled-components';

function Banner({ mode, turn, status, message, startGame, newGame, resetGame }) {

  const disabled = mode === 'Single' && status === 'playing' && turn === 'o' // if the computer is playing

  const getButton = () => {
    switch(status) {
      case 'initial':   return <Button disabled={disabled} onClick={startGame}> Start Game </Button>
      case 'complete':  return <Button disabled={disabled} onClick={newGame}> New Game </Button>
      default:          return <Button disabled={disabled} onClick={resetGame}> Reset Game </Button>
    }
  }

  const BUTTON = getButton()

  return (
    <Container>
      <h1>{ message }</h1>
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

const Button = styled.button`
  padding: 8px 12px;
  background: #F64C72;
  border: none;
  border-radius: 5px;
  font-weight: 500;

  ${props => props.disabled && `
    cursor: not-allowed;
    opacity: 0.5;
  `}
`;

export default Banner;
