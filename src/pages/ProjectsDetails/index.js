/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProjectsDetailsActions } from '../../store/ducks/projectsDetails';

import {
  Container, Box, Button, Box3,
} from './styles';

class ProjectsDetails extends Component {
  // static propTypes = {
  //   match: PropTypes.shape({
  //     params: PropTypes.shape({
  //       id: PropTypes.string,
  //     }),
  //   }).isRequired,
  //   projectsDetails: PropTypes.shape({
  //     data: PropTypes.shape({
  //       title: PropTypes.string,
  //     }),
  //     user: PropTypes.shape({
  //       name: PropTypes.string,
  //     }),
  //   }).isRequired,
  // };

  componentDidMount() {
    this.loadProjectsDetails();
  }

  loadProjectsDetails = () => {
    const { id } = this.props.match.params;

    this.props.getProjectsDetailsRequest(id);
  };

  render() {
    if (this.props.projectsDetails.loading) {
      return <p>Carregando...</p>;
    }

    const project = this.props.projectsDetails.data;

    return (
      <Container>
        <Box>
          <p>{project.title}</p>
          <span>Descrição</span>
          <small>{project.description}</small>
          <br />
          <span>Valor para Arrecadar:</span>
          <small>
            R$:
            {' '}
            {project.amountcollected}
            ,00 reais.
          </small>
          <br />
          <span>Doações feitas neste projeto:</span>
          {!!project.donations && (
          <small>
            {' '}
            {project.donations.length}
            {' '}
doações.
          </small>
          )}
          <br />
          <small> Estado, País e Região do projeto:</small>
          <small>A fazer</small>

          <br />
          <Link to={`/projects/${project.id}/donations`}>
            {' '}
            <Button>Doar</Button>
            {' '}
          </Link>

          <small>Criado por:</small>
          {!!project.user && (
            <small>
              {project.user.name}
              {' '}
              {project.user.surname}
              <br />
              <br />
              <small>E-mail:</small>
              {'  '}
              <br />
              <small>{project.user.email}</small>
            </small>
          )}
          <br />
          <small>
            {' '}
            Estado do criador do projeto:
            {'  '}
            {' '}
A fazer
          </small>
        </Box>

        <Box3>
          {' '}
          <span>Quantias doadas:</span>
          {' '}
          <br />
          <ul>
            {!project.donations ? (
              <ul>
                <small colSpan={1}>0 doações.</small>
              </ul>
            ) : (
              project.donations.map(donation => (
                <ul key={donation.id}>
                  <p>
                    R$:
                    {' '}
                    {donation.amountdonate}
                    ,00
                  </p>
                </ul>
              ))
            )}
          </ul>
          <br />
          <small> Total arrecadado:</small>
          <small>A fazer</small>
          <br />
          <small> Restante:</small>
          <small>A fazer</small>
        </Box3>
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
)(ProjectsDetails);
