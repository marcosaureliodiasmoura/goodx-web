import React from 'react';

import { Container, Box } from './styles';

const Item = () => (
  <Container>
    <Box>
      <p>Resultado Geral no mundo</p>
      <div>
        <small>Quantidade de Projetos: </small>
        <span>300 Projetos no Goodx</span>
      </div>
      <br />
      <div>
        <small>Total de Doações: </small>
        <span>R$: 25.000.000,00</span>
      </div>
      <br />

      <div>
        <small>Quantidade de Usuários: </small>
        <span>15.000 usuários no geral. </span>
      </div>
      <br />
      <div>
        <small>País mais Doador: </small>
        <span>Africa do Sul </span>
      </div>
      <br />
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
export default Item;
