import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;
  margin-top: 50px;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const ContagemProjects = styled.h1``;

export const Project = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 200px;
  text-decoration: none;
  img {
    height: 200px;
  }
  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }
  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }
  &:hover img {
    opacity: 0.4;
  }
  &:first-child {
    margin: 0px;
  }
`;
