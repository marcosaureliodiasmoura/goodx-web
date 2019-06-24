import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsersActions } from '../../../store/ducks/users';

import { Estilo } from './styles';

class AmountUsers extends Component {
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
      <Estilo>
        <span>{users.length}</span>
        {' '}
      </Estilo>
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
)(AmountUsers);
