/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

import SearchIcon from '../../assets/images/search.svg';

export const Container = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #1976d2;

  div {
    margin-left: 12px;
    /* margin-left: 200px; */
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 13px;
    color: #fff;
  }

  small {
    font-size: 11px;
    color: #b3b3b3;
    margin-top: 5px;
  }
`;

export const Search = styled.div`
  padding-left: 20px;

  display: flex;
  align-items: center;
  border-radius: 12px;
  height: 24px;
  width: 175;
  padding: 6px 7px 6px 26px;
  background: #fff url(${SearchIcon}) no-repeat 7px center;

  input {
    flex: 1;
    font-size: 13px;
    color: #121212;
    border: 0;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  margin: 10px 20px 0;

  img {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px 0;
  span {
    font-size: 13px;
    color: #fff;
  }

  small {
    font-size: 11px;
    color: #b3b3b3;
    margin-top: 5px;
  }
`;
