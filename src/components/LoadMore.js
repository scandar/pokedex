import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 5px;
  background-color: #c0392b;
  font-weight: bold;
  font-size: large;
  padding: 10px;
  border: 1px solid;
  background-color: #f8efba;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
  &:hover {
    cursor: pointer;
  }
`;

function LoadMore({ offset, setOffset }) {
  return (
    <Button
      type="button"
      onClick={() => {
        setOffset(offset + 20);
      }}
    >
      Load More
    </Button>
  );
}

export default LoadMore;
