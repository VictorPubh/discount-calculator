import { useState, useEffect } from "react";
import styled from "styled-components";
import { CustomInput } from "reactstrap";
import { useGlobals } from "../../../context/globals";

const Line = ({ id, name, discount, min, max, amount }) => {
  const { categories, setCategories } = useGlobals();
  
  const [value, setValue] = useState(amount);
  useEffect(() => {
    let state = categories;
    state.map((category, index) => {
      if (category.id == id) {
        category.amount = value;
      }
    });
    setCategories(state);
  }, [value]);

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
