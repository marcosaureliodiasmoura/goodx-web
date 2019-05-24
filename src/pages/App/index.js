import React, { Component } from "react";
import Dimensions from "react-dimensions";
import { Container } from "./styles";
import MapGL from "react-map-gl";
import PropTypes from "prop-types";

//vamos desabilitar o mapa
const TOKEN =
  "pk.eyJ1IjoibWFyY29zbW91cmEiLCJhIjoiY2p2ZmFyeGEyMDAwYzN5bzFtN2g5dDYwMSJ9.YW8ZK1rdF3JWraEKYTSU9g";

class Map extends Component {
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  };

  state = {
    viewport: {
      latitude: -8.05428,
      longitude: -34.8813,
      zoom: 12.8,
      bearing: 0,
      pitch: 0
    }
  };

  render() {
    const { containerWidth: width, containerHeight: height } = this.props;
    return (
      <MapGL
        width={width}
        height={height}
        {...this.state.viewport}
        mapStyle="mapbox://sprites/mapbox/streets-v11"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

const DimensionedMap = Dimensions()(Map);
const App = () => (
  <Container>
    <DimensionedMap />
  </Container>
);

export default App;
