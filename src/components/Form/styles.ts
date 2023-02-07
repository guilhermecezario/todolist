import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  margin: 10px 0px;

  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
  margin-right: 10px;

  background-color: rgb(249 250 251);
`;

export const Button = styled.button`
  height: 40px;
  background: rgb(255 255 255);
  border: 0;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  padding: 0px 10px;

  border: 1px solid rgb(229 231 235);

  :hover {
    background-color: rgb(243 244 246);
  }
`;
