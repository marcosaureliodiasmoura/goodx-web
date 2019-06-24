import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DonatesActions } from '../../../store/ducks/donations';

class AmountDonates extends Component {
  static propTypes = {
    getDonationsRequest: PropTypes.func.isRequired,
    donations: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({})),
    }).isRequired,
  };

  componentDidMount() {
    this.props.getDonationsRequest();
  }

  render() {
    const donations = this.props.donations.data;
    return (
      <span>
        {/* {console.log(this.props.donations.data)} */}
        <span>{donations.length}</span>
        {' '}
      </span>
    );
  }
}

const mapStateToProps = state => ({
  donations: state.donations,
});

const mapDispatchToProps = dispatch => bindActionCreators(DonatesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AmountDonates);
