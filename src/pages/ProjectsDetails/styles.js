import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  /* background: #283593; */
  margin-left: 300px;
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
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
  width: 400px;
  height: 90%;
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

  tbody {
    font-size: 14px;
  }
`;

export const Box3 = styled.div`
  width: 400px;
  height: 90%;
  background: #8e24aa;
  padding: 30px;
  display: flex;
  margin-left: 40px;
  flex-direction: column;
  /* align-items: center; */

  small {
    font-size: 15px;
  }

  p {
    color: #6a1b9a;
    margin-bottom: 6px;
    border: 1px solid #fff;
    padding: 5px;
    width: 100%;
    text-align: center;
    background: #f5f5f5;
  }
`;
