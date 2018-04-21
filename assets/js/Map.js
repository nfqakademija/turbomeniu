import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {geolocated} from 'react-geolocated';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    constructor() {
        super();

        this.state = {

        };

        // this.center = {
        //         lat: 54.89,
        //         lng: 23.90
        //     };
        this.zoom = 10;

        this.props = {
            coords: {
                latitude,
                longitude,
                altitude,
                accuracy,
                altitudeAccuracy,
                heading,
                speed,
            },
            isGeolocationAvailable, // boolean flag indicating that the browser supports the Geolocation API
            isGeolocationEnabled, // boolean flag indicating that the user has allowed the use of the Geolocation API
            positionError, // object with the error returned from the Geolocation API call
        };




    }

    // static defaultProps = {
    //     center: {
    //         lat: 59.95,
    //         lng: 30.33
    //     },
    //     zoom: 11
    // };


    render() {
        return (

            // Important! Always set the container height explicitly
            <div className="d-none d-sm-block" style={{ height: '90vh', width: '100%' }}>
                !this.props.isGeolocationAvailable
                ? <div>Your browser does not support Geolocation</div>
                : !this.props.isGeolocationEnabled
                ? <div>Geolocation is not enabled</div>
                : this.props.coords
                ? <table>
                <tbody>
                <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
                <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
                <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
                <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
                <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
                </tbody>
            </table>
                : <div>Getting the location data&hellip; </div>;
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDM7BLuRsCEe1pt_vwfbbVslNd7gWQbj14' }}
                    defaultZoom={this.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Hello World'}
                    />
                </GoogleMapReact>


            </div>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Map);