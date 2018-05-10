import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const UserLocation = ({ text }) => <div><i className="fas fa-street-view fa-2x userIcon"></i>{text}</div>;
const Restaurant = ({ text }) => <div><i className="fas fa-utensils 2x"></i>{text}</div>;

class Map extends Component {
    constructor() {
        super();

        this.state = {


        };

        this.center = {
            lat: 54.89,
            lng: 23.90
        };
        this.zoom = 13;
        this.loopMapComponents = this.loopMapComponents.bind(this)

    }



    loopMapComponents() {
        const {listingsData} = this.props;

        if (listingsData === 'loading') {
            return undefined;
        }
        return listingsData.map((listing, index) => {
            return (<Restaurant
                lat={listing.latitude}
                lng={listing.longitude}
                text={listing.name}
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
        return (
            // Important! Always set the container height explicitly
            <div className="d-none d-sm-block map" style={{ height: '90vh', width: '100%' }}>
                <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyDM7BLuRsCEe1pt_vwfbbVslNd7gWQbj14' }}
                    center={this.props.center}
                    defaultZoom={this.zoom}
                >

                    <UserLocation
                        lat={this.props.center.lat}
                        lng={this.props.center.lng}
                        text={'You are here'}
                    />
{this.loopMapComponents()}

                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;


