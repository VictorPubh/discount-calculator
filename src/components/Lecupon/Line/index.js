import { useState, useEffect } from "react";
import styled from "styled-components";
import * as S from "./styles";
import { CustomInput } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobals } from "../../../context/globals";

const Line = ({ id, icon, name, discount, min, max, amount, handleChange }) => {
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
    handleChange(value);
  }, [value]);

  return (

      <S.Container>
        <span>
          <FontAwesomeIcon className="icon" icon={icon} />
          {`${name}`}
          <b>{`(${discount}%)`}</b>
        </span>

        <CustomInput
          type="range"
          className="customRange"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          className="valueInput"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </S.Container>
 
  );
};

export default Line;
