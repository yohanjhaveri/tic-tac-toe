import React from 'react';
import styled from 'styled-components';

function Scores({ mode, scores, message }) {
  const players = mode === 'Single'
    ? ['Player', 'Computer']
    : ['Player 1', 'Player 2']

  return (
    <Container>
      <Player>
        <Name>{ players[0] }</Name>
        <Score>{ scores[players[0]] }</Score>
      </Player>
      <Player>
        <Name>{ players[1] }</Name>
        <Score>{ scores[players[1]] }</Score>
      </Player>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Player = styled.div`
  width: 125px;
  height: 100%;
  text-align: center;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 10px;
`;

const Name = styled.h3`

`;

const Score = styled.h1`
  color: #33bcea;
`;

export default Scores;
