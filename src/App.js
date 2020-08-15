import React, { useState } from 'react';
import styled from 'styled-components';
import Pokemon from './components/Pokemon';
import usePokemon from './hooks/usePokemon';
import Header from './components/Header';
import LoadMore from './components/LoadMore';
import useResetScroll from './hooks/useResetScroll';

const Container = styled.div`
  font-family: sans-serif;
  padding: 0 40px;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11em, 1fr));
  grid-gap: 10px;
  padding: 0;
  margin: 0;
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.4));
`;

function App() {
  const [offset, setOffset] = useState(0);
  const pokemons = usePokemon(offset);
  useResetScroll();

  return (
    <Container>
      <Header />
      <Section>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </Section>
      <LoadMore offset={offset} setOffset={setOffset} />
    </Container>
  );
}

export default App;
