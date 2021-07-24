import React, { useCallback, useEffect, useState } from "react";
import { useGlobals } from "../../context/globals";

import { Container, Result } from "./styles";

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
          icon={category.icon}
          handleChange={(value) => handleChange(value)}
        />
      ))}

      {discount ? (
        <>
          <Result>
              Economia/mês <span>{discount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
          </Result>
          <Result>
              Economia/ano <span>{(discount * 12).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
          </Result>
        </>
      ) : null}
    </Container>
  );
};

export default Lecupon;
