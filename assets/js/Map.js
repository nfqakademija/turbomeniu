import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const UserLocation = ({ text }) => <div><i className="fas fa-street-view fa-2x"></i>{text}</div>;
const Restaurant = ({ text }) => <div><i className="fas fa-utensils 2x"></i>{text}</div>;

class Map extends Component {
    constructor() {
        super();

        this.state = {
            center: {
                lat: null,
                lng: null
            }

        };

        this.center = {
            lat: 54.89,
            lng: 23.90
        };
        this.zoom = 10;
        this.loopMapComponents = this.loopMapComponents.bind(this)

    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ center: {lat: position.coords.latitude, lng: position.coords.longitude}});
            },
            error => console.log(error)
        );
    }

    loopMapComponents() {
        const {listingsData} = this.props;
        return listingsData.map((listing, index) => {
            return (<Restaurant
                lat={listing.coordinates.lat}
                lng={listing.coordinates.lng}
                text={listing.restaurant_name}
                key={index}
            />)
               })
                }

    // static defaultProps = {
    //     center: {
    //         lat: 59.95,
    //         lng: 30.33
    //     },
    //     zoom: 11
    // };


    render() {
console.log(this.state.center);
        return (
            // Important! Always set the container height explicitly
            <div className="d-none d-sm-block" style={{ height: '90vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDM7BLuRsCEe1pt_vwfbbVslNd7gWQbj14' }}
                    center={this.state.center}
                    defaultZoom={this.zoom}
                >

                    <UserLocation
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                        text={'Hello World'}
                    />
{this.loopMapComponents()}

                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;

