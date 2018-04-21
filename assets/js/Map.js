import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    constructor() {
        super();

        this.state = {

        };

        this.center = {
            lat: 54.89,
            lng: 23.90
        };
        this.zoom = 10

    }




    render() {
        return (
            // Important! Always set the container height explicitly
            <div className="d-none d-sm-block" style={{ height: '90vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDM7BLuRsCEe1pt_vwfbbVslNd7gWQbj14' }}
                    defaultCenter={this.center}
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

export default Map;