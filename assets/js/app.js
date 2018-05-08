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
            restaurants: [],
            filteredData: 'loading',
            isOpen: false,
            center: {
                lat: undefined,
                lng: undefined,
                minLat: undefined,
                maxLat: undefined,
                minLng: undefined,
                maxLng: undefined
            },
            modalInfo: [],
            currentRestaurantId: undefined,

        }
        ;

        this.search = this.search.bind(this);
        this.renderModal = this.renderModal.bind(this);
        // this.restaurantList = this.restaurantList.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        minLat: position.coords.latitude - 0.1,
                        maxLat: position.coords.latitude + 0.1,
                        minLng: position.coords.longitude - 0.2,
                        maxLng: position.coords.longitude + 0.2
                    }
                });

                var that = this;
                fetch(`https://turbomeniu.projektai.nfqakademija.lt/index/${this.state.center.minLat}/${this.state.center.maxLat}/${this.state.center.minLng}/${this.state.center.maxLng}`)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (myJson) {
                        that.setState({filteredData: myJson})
                    })
            }
        )
    }


    search(event) {
        event.preventDefault();

        var filteredData = this.state.filteredData;
        filteredData = filteredData.filter(function (item) {
            return item.menu_text.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });

        this.setState({filteredData: filteredData});
    }

    onMouseOver(event) {
        var restaurantId = event.currentTarget.getAttribute("restaurantid");
        this.setState({currentRestaurantId: restaurantId});

        console.log(this.state.currentRestaurantId)








        // var modalInfo = this.state.filteredData.filter(function (restaurant) {
        //     return restaurant.id === Number(restaurantId);
        // });



        // this.setState({
        //     modalInfo: modalInfo
        // })
        //
        // console.log(this.state.modalInfo)
    }

    renderModal() {

        var that = this
        fetch(`http://127.0.0.1:8000/modal/${this.state.currentRestaurantId}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                that.setState({modalInfo: myJson,
                    isOpen: !that.state.isOpen});

                console.log(that.state.modalInfo.name, 'onMouseOver')
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