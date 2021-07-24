import { useState } from "react";
import { CustomInput } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles";

const Line = ({ icon, name, discount, min, max, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  return (

      <S.Container>
        <FontAwesomeIcon className="icon" icon={icon} />

        <p>
          {`${name}`}
          <span>{`(${discount}%)`}</span>
        </p>

        <CustomInput
          type="range"
          className="customRange"
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
      </S.Container>
 
  );
};

export default Line;
