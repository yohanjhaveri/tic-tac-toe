import React from 'react';
import styled from 'styled-components';

function Scores({ mode, scores, players, message }) {
  return (
    <Container>
      <Player>
        <Name>{ players[0] }</Name>
        <Score><Icon src={require('./icons/x.png')} />{ scores['x'] }</Score>
      </Player>
      <Player>
        <Name>{ players[1] }</Name>
        <Score><Icon src={require('./icons/o.png')} />{ scores['o'] }</Score>
      </Player>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Player = styled.div`
  width: 140px;
  height: 100%;
  text-align: center;
`;

const Icon = styled.img`
  height: 22px;
  margin-right: 10px;
`;

const Name = styled.h3`

`;

const Image = styled.img`
  height: 20px;
`;

const Score = styled.h1`
  // color: #33bcea;
`;

export default Scores;
