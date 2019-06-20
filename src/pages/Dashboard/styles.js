import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  /* background: #283593; */
  margin-left: 300px;
`;

export const Box = styled.div`
  width: 520px;
  height: 600px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  p {
    color: #fff;
    margin-bottom: 15px;
    border: 1px solid #fff;
    padding: 10px;
    width: 100%;
    text-align: center;
    background: #039be5;
  }

  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 13px;
    color: #63ccff;
  }

  small {
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
  }
`;
