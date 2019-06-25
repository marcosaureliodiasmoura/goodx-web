import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProjectsDetailsActions } from '../../store/ducks/projectsDetails';

import { Container, Box, Button } from './styles';
// Realizando teste para trazer as doações deste relacionamento

class ProjectsDetails extends Component {
  componentDidMount() {
    this.loadProjectsDetails();
  }

  loadProjectsDetails = () => {
    // Todos os parametros que são enviados pelo react-router,
    // Eles ficam dentro do match.params do this.props da nossa página
    // Esse id fica no routes projets/:id
    const { id } = this.props.match.params;

    this.props.getProjectsDetailsRequest(id);
  };

  render() {
    const project = this.props.projectsDetails.data;
    const { id } = this.props.match.params;
    // const { user_id } = this.props.projectsDetails.data;

    return (
      <Container>
        <Box>
          {/* {console.log(this.props.match.params)} */}
          <p>{id}</p>
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
          {' '}
          <span>Quantias doadas:</span>
          <br />
          <tbody>
            {!project.user ? (
              <tr>
                <td colSpan={5}>Nenhuma doação registrada ainda.</td>
              </tr>
            ) : (
              project.donations.map(donation => (
                <tr key={donation.id}>
                  <td>
                    R$:
                    {' '}
                    {donation.amountdonate}
                    ,00
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <br />
          <span>Id do responsável: </span>
          <span>{project.user_id}</span>
          {/* <span>
            {!project.users ? (
              <td colSpan={5}>Nenhuma usuário.</td>
            ) : (
              project.user.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                </tr>
              ))
            )}
          </span> */}
          <br />
          <Link to={`/projects/${project.id}/donations`}>
            <Button>Doar</Button>
          </Link>
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  projectsDetails: state.projectsDetails,
  // user: state.projectsDetails.data.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProjectsDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectsDetails);
