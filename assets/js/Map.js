import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    constructor() {
        super();

        this.state = {

        };

        this.center = {
                lat: 59.95,
                lng: 30.33
            };
        this.zoom = 11

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
            <div style={{ height: '100px', width: '100px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDM7BLuRsCEe1pt_vwfbbVslNd7gWQbj14' }}
                    defaultCenter={this.center}
                    defaultZoom={this.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;