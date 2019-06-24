import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProjectsActions } from '../../../store/ducks/projects';

import { Estilo } from './styles';

class AmountProjects extends Component {
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
      <Estilo>
        <span>{projects.length}</span>
        {' '}
      </Estilo>
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
)(AmountProjects);
