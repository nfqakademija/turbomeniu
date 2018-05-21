import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';

const UserLocation = ({ text }) => <div><i className="fas fa-street-view fa-2x userIcon"></i>{text}</div>;
const Restaurant = ({ text }) => <div><i className="fas fa-utensils 2x"></i>{text}</div>;

class Map extends Component {
    constructor() {
        super();

        this.state = {


        };

        this.bounds = {
            ne: {
                lat: 50.01038826014866,
                lng: -118.6525866875
            },
            sw: {
                lat: 32.698335045970396,
                lng: -92.0217273125
            }
        }

        this.defaultCenter = {
            lat: 54.89,
            lng: 23.90
        };
        this.zoom = 13;
        this.loopMapComponents = this.loopMapComponents.bind(this);
        this.getBounds = this.getBounds.bind(this);
    }

    componentWillMount(){
        
    }

    //todo bounds function
    getBounds(){
        const {listingsData} = this.props;
        console.log(listingsData[1].latitude, 'getbounds');

        let maxLatitude = listingsData.forEach(function(listing){
            var maxLat = 0;
            if (listing.latitude > maxLat) {
                maxLat = listing.latitude
            }
            return maxLat;
        })

        console.log(maxLatitude, 'MapmaxLatitude')

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
            <div style={{ height: '90vh', width: '100%' }} onMouseOver={this.getBounds}>
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


