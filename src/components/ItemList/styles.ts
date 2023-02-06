import styled from 'styled-components';

export const Container = styled.li`
  list-style: none;

  padding: 10px 0px;

  border-bottom: 1px solid #dcdce6;

  display: flex;
  flex-direction: row;
  align-items: center;

  > p {
    margin-left: 10px;
  }

  input {
    width: 100%;
    height: 40px;
    color: #333;
    border: none;
    border-radius: 8px;
    padding: 0 24px;
    margin-left: 10px;
  }
`;