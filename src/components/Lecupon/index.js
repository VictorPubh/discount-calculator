import React, { useCallback, useEffect, useState } from "react";
import * as B from "reactstrap";
import { Container } from "./styles";
import { useGlobals } from "../../context/globals";

import Line from "./Line";

const Lecupon = () => {
  const { categories, setAmount, setDiscount, discount } = useGlobals();

  const handleChange = useCallback(() => {
    let amount = 0;
    let discount = 0;
    categories.map((category) => {
      discount += (category.discount / 100) * category.amount;
      amount += Number(category.amount);
    });
    setDiscount(discount);
    setAmount(amount);
  }, [categories, setAmount]);

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <Container>
      {categories.map((category, i) => (
        <Line
          key={category.id}
          id={category.id}
          name={category.name}
          discount={category.discount}
          min={category.min}
          max={category.max}
          amount={category.amount}
          handleChange={(value) => handleChange(value)}
        />
      ))}

      {discount ? (
          <h1>{discount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>
      ) : null}
    </Container>
  );
};

export default Lecupon;
