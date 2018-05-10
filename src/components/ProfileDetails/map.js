import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
class MapComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      lat:'59.955413',
      lng:'30.337844'
    }
  }
    componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude, position.coords.longitude);
        // this.setState({ lat: position.coords.latitude, lng: position.coords.longitude});
      },
      error => console.log(error)
    );
  }
    render() {
        return (
            <div style={{ height: '50vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBF6v9Rr6pybH_EVsghVG08ZG3m1C3Cyfg" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}>
                <Marker
                  lat={this.state.lat}
                  lng={this.state.lng}
                  text={'Kreyser Avrora'}
                />
              </GoogleMapReact>
            </div>
        );
    }
}
MapComponent.defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 2
    };
const Marker = ({ text }) => <div>{text}</div>;
export default MapComponent;

