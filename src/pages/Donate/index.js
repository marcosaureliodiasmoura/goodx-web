import React, { Component } from 'react';

import api from '../../services/api';

import { Form, Container } from './styles';

class Donate extends Component {
  state = {
    project_id: '',
    amountdonate: '',
    error: '',
  };

  handleDonate = async (e) => {
    e.preventDefault();
    const { project_id, amountdonate } = this.state;

    if (!project_id || !amountdonate) {
      this.setState({ error: 'Preencha os campos abaixo para realizar doação' });
    } else {
      try {
        await api.post('/donations', {
          project_id,
          amountdonate,
        });
        this.history.pushState('/');
      } catch (err) {
        console.log(err);
        this.setState({ error: 'Erro ao realizar doação' });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleDonate}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Projeto a doar"
            onChange={e => this.setState({ project_id: e.target.value })}
          />
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

export default Donate;
