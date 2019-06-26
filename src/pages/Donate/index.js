import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import { Creators as ProjectsDetailsActions } from '../../store/ducks/projectsDetails';

import { Form, Container } from './styles';

class Donate extends Component {
  state = {
    amountdonate: '',
    error: '',
  };

  componentDidMount() {
    this.loadProjectsDetails();
  }

  loadProjectsDetails = () => {
    const { id } = this.props.match.params;

    this.props.getProjectsDetailsRequest(id);
  };

  handleDonate = async (e) => {
    e.preventDefault();
    const { amountdonate } = this.state;

    const project = this.props.projectsDetails.data;

    if (!amountdonate) {
      this.setState({ error: 'Preencha os campos abaixo para realizar doação' });
    } else {
      try {
        await api.post(`/projects/${project.id}/donations`, {
          amountdonate,
        });
        this.props.history.push(`/projects/${project.id}`);
      } catch (err) {
        console.log(err);
        this.setState({ error: 'Erro ao realizar doação' });
      }
    }
  };

  render() {
    const project = this.props.projectsDetails.data;

    return (
      <Container>
        <Form onSubmit={this.handleDonate}>
          {this.state.error && <p>{this.state.error}</p>}

          <p>{project.id}</p>
          <input
            type="number"
            placeholder="Valor da doação"
            onChange={e => this.setState({ amountdonate: e.target.value })}
          />
          <button type="submit">Fazer doação</button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  projectsDetails: state.projectsDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProjectsDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Donate);
