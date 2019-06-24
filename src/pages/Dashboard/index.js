import React from 'react';

import { Container, Box } from './styles';
import AmountProjects from '../../components/projects/amount';
import AmountUsers from '../../components/users/amount';
import CalculateDonates from '../../components/donates/calculation';

const Dashboard = () => (
  <Container>
    <Box>
      <p>Resultado Geral no mundo</p>
      <div>
        <small>Quantidade de Projetos: </small>
        <span>
          <AmountProjects />
          {' '}
Projetos no Goodx.
        </span>
      </div>
      <br />
      <div>
        <small>Total de Doações: </small>
        <span>
          R$:
          {' '}
          <CalculateDonates />
        </span>
      </div>
      <br />

      <div>
        <small>Quantidade de Usuários: </small>
        <span>
          {' '}
          <AmountUsers />
          {' '}
Usuários no Goodx.
        </span>
      </div>
      <br />
      <div>
        <small>País mais Doador: </small>
        <span>Africa do Sul </span>
      </div>
      <br />

      <p>Status no Brasil</p>
      <div>
        <small>Valor de Doações no Brasil: </small>
        <span>R$: 10.000.000,00</span>
      </div>
      <br />
      <div>
        <small>Quantidade de Brasileiros: </small>
        <span>600.000 pessoas.</span>
      </div>
      <br />
      <div>
        <small>Estados Participantes: </small>
        <span>
          Pernambuco, São Paulo, Minas Gerais, Belo Horizonte, Rio de Janeiro, Bahia, Ceará.
        </span>
      </div>
    </Box>
  </Container>
);

export default Dashboard;
