import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';

import api from '../../services/api';

import Logo from '../../assets/goodx_logo.png';

import { Form, Container } from './styles';

class CreateProject extends Component {
  state = {
    title: '',
    description: '',
    amountcollected: '',
    error: '',
  };

  handleCreateProject = async (e) => {
    e.preventDefault();
    const { title, description, amountcollected } = this.state;

    if (!title || !description || !amountcollected) {
      this.setState({ error: 'Preencha todos os campos para criação do projeto.' });
    } else {
      try {
        await api.post('/projects', {
          title,
          description,
          amountcollected,
        });
        this.props.history.push('/projects');
      } catch (err) {
        console.log(err);
        this.setState({ error: 'Erro ao registrar projeto.' });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleCreateProject}>
          <img src={Logo} alt="Goodx Logo" />
          {this.state.error && (
          <p>
            {' '}
            {this.state.error}
          </p>
          )}
          <input
            type="text"
            placeholder="Título do Projeto"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Descrição do Projeto"
            onChange={e => this.setState({ description: e.target.value })}
          />
          <input
            type="number"
            placeholder="Valor para Arrecadar"
            onChange={e => this.setState({ amountcollected: e.target.value })}
          />
          <button type="submit">Registrar Projeto</button>
        </Form>
      </Container>
    );
  }
}

export default CreateProject;
