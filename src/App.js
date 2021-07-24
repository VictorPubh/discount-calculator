import React, { useState } from "react";
import mockCategories from "./mock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as B from "reactstrap";
import * as S from "./styles";

function App() {
  const [categories, setCategories] = useState(mockCategories);
  const [dailyValue, setDailyValue] = useState(20);

  const [monthValue, setMonthValue] = useState();
  const [yearValue, setYearValue] = useState();

  const [isOpen, setIsOpen] = useState(false);

  const discountCalculator = (discount) => {
    const month = dailyValue * 30;
    const year = month * 12;
    const discountMonth = (discount / 100) * month;
    const discountYear = (discount / 100) * year;

    if (isOpen) {
      setIsOpen(false);

      setTimeout(() => {
        setMonthValue(month - discountMonth);
        setYearValue(year - discountYear);
        setIsOpen(true);
      }, 500);
    } else {
      setMonthValue(month - discountMonth);
      setYearValue(year - discountYear);
      setIsOpen(true);
    }

    console.log(`mês: ${month}`);
    console.log(`desconto no mês: ${discountMonth}`);
    console.log(`ano: ${year}`);
    console.log(`desconto no ano: ${discountYear}`);
  };

  return (
    <S.Container>
      <S.WrapperInput>
        <S.InputArea>
          <B.InputGroup>
            <B.InputGroupAddon addonType="prepend">
              <B.InputGroupText>R$</B.InputGroupText>
            </B.InputGroupAddon>
            <B.Input
              type="number"
              value={dailyValue}
              onChange={(e) => setDailyValue(e.target.value)}
            />
          </B.InputGroup>

          <B.CustomInput
            type="range"
            id="exampleCustomRange"
            name="customRange"
            min={1}
            max={200}
            value={dailyValue}
            onChange={(e) => setDailyValue(e.target.value)}
          />
        </S.InputArea>
      </S.WrapperInput>

      <B.Collapse isOpen={isOpen}>
        <S.WrapperResults>
          {/* {monthValue ? <S.Month>R${monthValue}</S.Month> : null} */}
          <S.Month>
            <span>Mensal</span>
            <p>Valor mensal: R$ 100</p>
            <p>Desconto mensal: R$ 10</p>
            <p>Total mensal: R$ 90</p>
          </S.Month>
          <S.Year>
            <span>Anual</span>
            <p>Valor anual: R$ 100</p>
            <p>Desconto anual: R$ 10</p>
            <p>Total anual: R$ 90</p>
          </S.Year>
          {/* {yearValue ? <h1>{yearValue}</h1> : null} */}
        </S.WrapperResults>
      </B.Collapse>

      <S.WrapperCards>
        {categories.map((category) => (
          <S.Card>
            <S.CardBody onClick={() => discountCalculator(category.discount)}>
              <S.Icon>
                <FontAwesomeIcon
                  className={category.class}
                  icon={category.icon}
                />
              </S.Icon>
              <S.Title>{category.name}</S.Title>
              <S.Discount>Desconto: {category.discount}%</S.Discount>
            </S.CardBody>
          </S.Card>
        ))}
      </S.WrapperCards>
    </S.Container>
  );
}

export default App;
