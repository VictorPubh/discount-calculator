import React, { useEffect, useState } from "react";
import mockCategories from "../../mock";

import { Container, Result } from "./styles";

import Line from "./Line";

const Lecupon = () => {
  const [categories, setCategories] = useState(mockCategories);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <Container>
      {categories.map((category, i) => (
        <Line
          icon={category.icon}
          name={category.name}
          discount={category.discount}
          min={category.min}
          max={category.max}
          defaultValue={category.default}
        />
      ))}
      <Result>
        VALOR ECONOMIZADO <span>R$ 1.440,00</span>
      </Result>
    </Container>
  );
};

export default Lecupon;
