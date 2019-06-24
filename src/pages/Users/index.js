import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsersActions } from '../../store/ducks/users';

import {
  Container, Title, List, User,
} from './styles';

class Users extends Component {
  static propTypes = {
    getUsersRequest: PropTypes.func.isRequired,
    users: PropTypes.shape({
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
    this.props.getUsersRequest();
  }

  render() {
    const users = this.props.users.data;
    return (
      <Container>
        <Title>Lista de Usuários</Title>
        {!!users && (
        <p>
          {users.length}
          {' '}
usuários no Goodx
        </p>
        )}

        <List>
          {this.props.users.data.map(user => (
            <User key={user.id} to="/users/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMS8Uh64P4hJcHp8i-2XFArZeCTMw-osDKKG9DIUA3qnZugrbx"
                alt="Goodx"
              />
              <strong>
                {user.name}
                {' '}
                {user.surname}
              </strong>
              <p>{user.email}</p>
            </User>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
