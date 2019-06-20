import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProjectsActions } from '../../store/ducks/projects';

import {
  Container, Title, List, Project,
} from './styles';

class Projects extends Component {
  static propTypes = {
    getProjectsRequest: PropTypes.func.isRequired,
    projects: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          description: PropTypes.string,
          amountcollected: PropTypes.number,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    this.props.getProjectsRequest();
  }

  render() {
    const projects = this.props.projects.data;
    return (
      <Container>
        <Title>Lista de Projetos</Title>
        {!!projects && (
        <p>
          {projects.length}
          {' '}
projetos no Goodx
        </p>
        )}

        <List>
          {this.props.projects.data.map(project => (
            <Project key={project.id} to={`/projects/${project.id}`}>
              {/* <img src={project.thumbnail} alt={project.title} /> */}
              <img
                src="https://viajantehu.hotelurbano.com.br/wp-content/uploads/2017/12/recife.jpg"
                alt="Goodx"
              />
              <strong>{project.title}</strong>
              <p>{project.description}</p>
              <p>
                Meta R$:
                {project.amountcollected}
                ,00
              </p>
            </Project>
          ))}
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
