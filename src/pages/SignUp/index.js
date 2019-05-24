import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import Logo from "../../assets/goodx_logo.png";
import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    password: "",
    password_confirmation: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const {
      name,
      surname,
      email,
      password,
      password_confirmation
    } = this.state;

    if (!name || !surname || !email || !password || !password_confirmation) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/users", {
          name,
          surname,
          email,
          password,
          password_confirmation
        });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta" });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="Goodx Logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Informe seu sobrenome"
            onChange={e => this.setState({ surname: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Informe novamente a senha"
            onChange={e =>
              this.setState({ password_confirmation: e.target.value })
            }
          />
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
