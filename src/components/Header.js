import React from 'react';
import styled from 'styled-components';

const Styledheader = styled.header`
  height: 50px;
  color: #f8efba;
`;

function Header() {
  return (
    <Styledheader>
      <h1>Pokedex</h1>
    </Styledheader>
  );
}

export default Header;
