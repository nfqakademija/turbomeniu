import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Listings from './Listings.js';
import Map from './Map.js';
import Suggestions from './Suggestions.js';
import Modal from './Modal.js';
import Togglebuton from './Togglebutton.js';
import listingsData from './sampleData/listingsData.json';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            listingsData,
            filteredData: listingsData,
            isOpen: false,
            center: {
                lat: null,
                lng: null
            },
            modalInfo: [],
            restaurants: []
        }
        ;

        this.search = this.search.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.restaurantList = this.restaurantList.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ center: {lat: position.coords.latitude, lng: position.coords.longitude}});
            },
            error => console.log(error)
        );
    }

    componentDidMount() {
        this.restaurantList();
        console.log(this.state.restaurants, 'restaurant value');
    }

    // Api call to get the data from server
    restaurantList() {

        $.get( "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts%7Cinfo&generator=search&formatversion=2&exsentences=1&exintro=1&explaintext=1&inprop=url&gsrsearch=${textInputForGet}&gsrwhat=text", function( data ) {
           console.log(data)
        });

        // $.getJSON("https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts%7Cinfo&generator=search&formatversion=2&exsentences=1&exintro=1&explaintext=1&inprop=url&gsrsearch=${textInputForGet}&gsrwhat=text")
        //     .then(({ jsonresponse }) => this.setState({ restaurants: jsonresponse }));

    };




    search(event) {
        event.preventDefault();

        var filteredData = this.state.listingsData;
        filteredData = filteredData.filter(function (item) {
            return item.menu_text.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });

            this.setState({filteredData: filteredData});
    }

    onMouseOver(event){
        var restaurantId = event.currentTarget.getAttribute("restaurantid");
        var modalInfo = this.state.filteredData.filter(function(restaurant){
            return restaurant.restaurant_id === Number(restaurantId);
        });

        this.setState({
            modalInfo: modalInfo
            })
    }

    renderModal(){

        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (<div>
            <Header
                search={this.search}
            />
            <div className="container-fluid body">

                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <Suggestions/>
                    </div>

                    <Modal show={this.state.isOpen}
                           onClose={this.renderModal}
                            modalInfo={this.state.modalInfo}/>
                    {/*</div>*/}
                    {/*<div className="row">*/}

                    {/*<Togglebuton />*/}

                    {/*</div>*/}

                    {/*<div className="row">*/}
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <Listings
                            listingsData={this.state.filteredData}
                            renderModal={this.renderModal}
                            onMouseOver={this.onMouseOver}
                        />
                    </div>

                    <div className="fixedMap col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <Map listingsData={this.state.filteredData}
                        center={this.state.center}/>
                    </div>
                </div>
            </div>
        </div>)
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));