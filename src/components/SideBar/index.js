/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Nav } from './styles';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <Link to="/">Goodx</Link>
        </li>

        <li>
          <Link to="/donate">Doar</Link>
        </li>

        <li>
          <Link to="/createproject">Criar Projeto</Link>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>Buscar Projetos</span>
        </li>
        <li>
          <Link to="/projects">Por região</Link>
        </li>
        <li>
          <a href="">Projeto Mundo</a>
        </li>
        <li>
          <a href="">Nas ruas</a>
        </li>
        <li>
          <Link to="/users">Usuários do Goodx</Link>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>Meus Projetos</span>
        </li>
        <li>
          <a href="">Minhas boas ações</a>
        </li>
        <li>
          <a href="">Movimento World</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>CONFIGURAÇÕES</span>
        </li>
        <li>
          <a href="">Perfil</a>
        </li>
        <li>
          <a href="">Cartão de Crédito</a>
        </li>
        <li>
          <a href="">Localização</a>
        </li>
      </Nav>
    </div>
  </Container>
);

export default Sidebar;
