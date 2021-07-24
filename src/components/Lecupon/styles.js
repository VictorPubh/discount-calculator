import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Result = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 50px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  background: #ff9902;
  border-radius: 30px;

  margin-top: 10px;

  span {
    font-size: 22px;
    background-color: #bf7300;
    border-radius: 30px;
    padding: 8px 20px;
    margin-left: 15px;
  }
`;
