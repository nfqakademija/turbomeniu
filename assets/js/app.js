
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
            isToggleOn: true,
            searchValue: '',
            center: {
                lat: 54.898521,
                lng: 23.903597,
                // minLat: undefined,
                // maxLat: undefined,
                // minLng: undefined,
                // maxLng: undefined
            },
            mapZoom: 10,
            modalInfo: [],
            currentRestaurantId: undefined,
            differentRestaurants: undefined,
            similarRestaurants: undefined

        }
        ;

        this.search = this.search.bind(this);
        this.getUserLocation = this.getUserLocation.bind(this)
        this.renderModal = this.renderModal.bind(this);
        this.getInitialData = this.getInitialData.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.dataStoring = this.dataStoring.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.clearSearch = this.clearSearch.bind(this);


    }


    componentWillMount() {
        this.getUserLocation();
        this.getInitialData();

    }



    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    clearSearch(){


        this.setState({searchValue: ''});
        this.getInitialData();

    }



    getUserLocation(){
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                });
                this.getInitialData();
            }
        )
    }

    getInitialData(){
        var that = this;
        fetch(`/index/${this.state.center.lat}/${this.state.center.lng}/${this.state.mapZoom}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson)
                that.setState({filteredData: myJson})
            })
    }

    search(event) {
        this.setState({searchValue: event.target.value});
    }

    dataStoring(searchValue){

        var tempStorage = [];

        if (localStorage.TurboMeniuSearchHistory === "") {
            tempStorage = [];
            tempStorage.push(searchValue)
            localStorage.setItem('TurboMeniuSearchHistory', JSON.stringify(tempStorage));
        } else {

            if (searchValue === '')
            {return}

            tempStorage = JSON.parse(localStorage.TurboMeniuSearchHistory);
            tempStorage.push(searchValue)
            localStorage.setItem('TurboMeniuSearchHistory', JSON.stringify(tempStorage));
        }
    }


    handleSearch(event){
        if (this.state.searchValue || this.state.searchValue != ''){

            var that = this;
            fetch(`/search/${this.state.searchValue.toLowerCase()}/${this.state.center.lat}/${this.state.center.lng}/${this.state.mapZoom}`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {
                    console.log(myJson)
                    that.setState({filteredData: myJson})
                })
        } else if (!this.state.searchValue){
            this.getInitialData();
        }

        this.dataStoring(this.state.searchValue);


        event.preventDefault();
         event.stopPropagation()
    }

    onMouseOver(event) {
        var restaurantId = event.currentTarget.getAttribute("restaurantid");
        this.setState({currentRestaurantId: restaurantId});

        console.log(this.state.currentRestaurantId)
    }

    renderModal() {

            var that = this
            fetch(`/modal/${this.state.currentRestaurantId}`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {
                    that.setState({modalInfo: myJson,
                        isOpen: !that.state.isOpen});

                    console.log(that.state.modalInfo, 'modalinfo')
                })




        if (this.state.isOpen === true){
            document.body.style.overflowY="visible";
        } else if (this.state.isOpen === false){
            document.body.style.overflowY="hidden"
        }

    }

    render() {
        return (<div>
            <Header
                search={this.search}
                searchValue={this.state.searchValue}
                handleSearch={this.handleSearch}
                clearSearch={this.clearSearch}
            />
            <div className="container-fluid body">

                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <Suggestions
                        similarRestaurants={this.state.similarRestaurants}
                        differentRestaurants={this.state.differentRestaurants}
                        renderModal={this.renderModal}
                        onMouseOver={this.onMouseOver}
                        />
                    </div>

                    <Modal show={this.state.isOpen}
                           onClose={this.renderModal}
                           modalInfo={this.state.modalInfo}/>
                    </div>
                    <div className="row">

                    <div>
                        <Togglebuton
                            handleClick={this.handleClick}
                            isToggleOn={this.state.isToggleOn}
                        />
                    </div>


                    </div>

                    <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <Listings
                            listingsData={this.state.filteredData}
                            renderModal={this.renderModal}
                            onMouseOver={this.onMouseOver}
                        />
                    </div>

                    <div className={this.state.isToggleOn ? 'fixedMap col-xs-12  d-none d-sm-block col-sm-4 col-md-4 col-lg-4 col-xl-4 map' : 'fixedMap col-xs-12  col-sm-4 col-md-4 col-lg-4 col-xl-4 map'}>
                        <Map listingsData={this.state.filteredData}
                             center={this.state.center}
                             isToggleOn={this.state.isToggleOn}
                        />
                    </div>
                </div>
            </div>
        </div>)
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));