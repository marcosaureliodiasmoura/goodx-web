import React from 'react';

import {
  Container, Title, List, Project,
} from './styles';

const Projects = () => (
  <Container>
    <Title>Lista de Projetos</Title>
    <List>
      <Project to="">
        <img
          src="https://www.mensagenslindas.com.br/wp-content/uploads/2015/01/mundo-fica-mais-bonito.jpg"
          alt="Goodx"
        />
        <strong>Unidos em uma só função</strong>
        <p>A função é fazer o bem.</p>
      </Project>

      <Project to="">
        <img
          src="http://www.mensagens10.com.br/wp-content/uploads/2013/07/fazer-o-bem.jpg"
          alt="Goox"
        />
        <strong>Unidos em uma só função</strong>
        <p>A função é fazer o bem.</p>
      </Project>

      <Project to="">
        <img
          src="http://4.bp.blogspot.com/-w0X7dWp4RSA/Um7kpBUtSkI/AAAAAAAAAWE/9RlaMMR_ozc/s1600/tumblr_mouy62WhoQ1rbg2lzo1_400.jpg"
          alt="Goodx"
        />
        <strong>Unidos em uma só função</strong>
        <p>A função é fazer o bem.</p>
      </Project>

      <Project to="">
        <img
          src="http://www.mensagens10.com.br/wp-content/uploads/2013/09/plante-o-bem.jpg"
          alt="Goodx"
        />
        <strong>Unidos em uma só função</strong>
        <p>A função é fazer o bem.</p>
      </Project>
    </List>
  </Container>
);
export default Projects;
