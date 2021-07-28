import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Result = styled.div`
  display: flex;
  text-transform: uppercase;
  justify-content: flex-end;
  align-items: center;

  height: 50px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  background: #ff8C46;
  border-radius: 30px;

  margin-top: 10px;

  span {
    font-size: 22px;
    background-color: rgb(214, 118, 59);
    border-radius: 30px;
    padding: 8px 20px;
    margin-left: 15px;
  }

  @media (max-width: 800px) {
    text-align: center;
    font-size: 15px;

    span {
      margin-left: 10px;
      font-size: 17px;
      padding: 12px 15px;
    }
  }
`;
