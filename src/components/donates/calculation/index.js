import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DonatesActions } from '../../../store/ducks/donations';

class CalculateDonates extends Component {
  static propTypes = {
    getDonationsRequest: PropTypes.func.isRequired,
    donations: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          // id: PropTypes.number,
          // title: PropTypes.string,
          // description: PropTypes.string,
          // amountcollected: PropTypes.number,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    this.props.getDonationsRequest();
  }

  render() {
    // const donations = this.props.donations.data;
    return (
      <span>
        {/* {console.log(this.props.total)} */}
        {/* {console.log(this.props.donations.data)} */}
        {/* <span>{donations.length}</span> */}
        <span>{this.props.total}</span>
        {' '}
      </span>
    );
  }
}

const mapStateToProps = state => ({
  donations: state.donations,
  total: state.donations.data.reduce((total, donations) => total + donations.amountdonate, 0),
});

const mapDispatchToProps = dispatch => bindActionCreators(DonatesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalculateDonates);
