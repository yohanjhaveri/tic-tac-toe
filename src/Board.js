import React from 'react';
import styled from 'styled-components';

function Board({ mode, turn, playTurn, image }) {

  const play = coordinate => {
    if(mode === 'Single' && turn === 'o') return
    playTurn(coordinate)
  }

  return (
    <div>
      <Row>
        <Box id="s00" onClick={() => play(0)}> {image(0)} </Box>
        <Box id="s01" onClick={() => play(1)}> {image(1)} </Box>
        <Box id="s02" onClick={() => play(2)}> {image(2)} </Box>
      </Row>
      <Row>
        <Box id="s10" onClick={() => play(3)}> {image(3)} </Box>
        <Box id="s11" onClick={() => play(4)}> {image(4)} </Box>
        <Box id="s12" onClick={() => play(5)}> {image(5)} </Box>
      </Row>
      <Row>
        <Box id="s20" onClick={() => play(6)}> {image(6)} </Box>
        <Box id="s21" onClick={() => play(7)}> {image(7)} </Box>
        <Box id="s22" onClick={() => play(8)}> {image(8)} </Box>
      </Row>
    </div>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  padding: 15px;
  height: 90px;
  width: 90px;
`;

export default Board;
