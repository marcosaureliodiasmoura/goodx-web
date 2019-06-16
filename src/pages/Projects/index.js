import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProjectsActions } from '../../store/ducks/projects';

import {
  Container, Title, List, Project,
} from './styles';

class Projects extends Component {
  componentDidMount() {
    this.props.getProjectsRequest();
  }

  render() {
    return (
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
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProjectsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
