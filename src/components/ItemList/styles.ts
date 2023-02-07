import styled from "styled-components";

export const Container = styled.li`
  list-style: none;

  padding: 10px 0px;

  border-bottom: 1px solid #dcdce6;

  display: flex;
  flex-direction: row;
  align-items: center;

  > p {
    width: 100%;
    color: #94a3b8;
    border: none;
    border-radius: 8px;
    padding: 10px 24px;
    margin: 0px;
    margin-left: 10px;

    font-size: 16px;
    font-weight: 400;

    text-decoration: line-through;
  }

  input {
    width: 100%;
    color: #656f7d;
    border: none;
    border-radius: 8px;
    padding: 10px 24px;
    margin-left: 10px;

    font-size: 16px;
    font-weight: 400;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
`;
