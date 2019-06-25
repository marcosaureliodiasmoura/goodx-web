import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  /* background: #283593; */
  margin-left: 300px;
`;

export const Button = styled.button`
  color: #fff;
  font-size: 16px;
  background: #fc6963;
  height: 56px;
  border: 0;
  border-radius: 5px;
  width: 100%;
`;

export const Item = styled.div``;
export const ItemList = styled.div``;

export const Box = styled.div`
  width: 520px;
  height: 600px;
  background: #8e24aa;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  p {
    color: #6a1b9a;
    margin-bottom: 15px;
    border: 1px solid #fff;
    padding: 10px;
    width: 100%;
    text-align: center;
    background: #f5f5f5;
  }

  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 16px;
    color: #ffeb3b;
  }

  small {
    font-size: 15px;
    color: #fff;
    margin-top: 5px;
  }

  tr {
    font-size: 14px;
  }
`;
