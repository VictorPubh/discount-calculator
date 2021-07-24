import styled from "styled-components";

export const Container = styled.div`
  width: 70vw;
  margin: 2.5rem auto;
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const InputArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
`;

export const WrapperResults = styled(WrapperInput)`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Month = styled.div`
  margin: 10px;

  span {
    display: flex;
    justify-content: center;
    font-size: 25px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin: 0;
  }
`;

export const Year = styled(Month)``;

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const Card = styled.div`
  background-color: #e9ecef;
  border-radius: 1.25rem;
  cursor: pointer;

  & {
    .restaurante {
      color: green;
    }
    .academia {
      color: blue;
    }
    .combustivel {
      color: red;
    }
    .medicamentos {
      color: red;
    }
    .odontologia {
      color: white;
    }
    .cinema {
      color: orange;
    }
  }

  &:active {
    background-color: #ccc;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 1.875rem;
`;

export const Icon = styled.div`
  font-size: 5rem;
`;

export const Title = styled.h2`
  margin: 5px 0 10px 0;
`;

export const Discount = styled.h4`
  font-size: 20px;
  opacity: 0.65;
  margin: 0;
`;
