import React from 'react';
import styled from 'styled-components';

const Div = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8efba;
  color: #1e272e;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid;
  clip-path: polygon(
    0% 0%,
    0% 0%,
    100% 0%,
    100% 0%,
    100% 100%,
    100% 100%,
    8% 100%,
    0% 92%
  );
`;

const ImgContainer = styled.div`
  background-color: #1e272e;
  border-radius: 5px;
  padding: 20px 0;
  min-width: 170px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: inset -3px 5px 8px 0 rgba(0, 0, 0, 0.4);
`;

function Pokemon({ pokemon }) {
  return (
    <Div>
      <ImgContainer>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </ImgContainer>
      <h1>{pokemon.name}</h1>
    </Div>
  );
}

export default Pokemon;
