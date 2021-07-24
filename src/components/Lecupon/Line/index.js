import { useState } from 'react';
import styled from 'styled-components';
import { CustomInput } from "reactstrap";

const Line = ({ name, discount, min, max, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <Container>
      <span>{`${name} (${discount}%)`}</span>
      <CustomInput
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 11rem 1fr 5rem;
  gap: 2rem;
`;

export default Line;
