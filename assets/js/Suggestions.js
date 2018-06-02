import React, {Component} from 'react';

export default class Suggestions extends Component {
    constructor() {
        super();
        this.state = {
            similarRestaurants: undefined,
            differentRestaurants: undefined,
        };
        this.loopMeals = this.loopMeals.bind(this);
        this.getDifferent = this.getDifferent.bind(this);
        this.getSimilar = this.getSimilar.bind(this);
        this.getLocalStorage = this.getLocalStorage.bind(this);


    }

    componentWillMount() {
        this.getLocalStorage();
        this.getDifferent();
        this.getSimilar();

    }

    getLocalStorage() {
        console.log(localStorage, "localstorage");

        if (localStorage.TurboMeniuSearchHistory === undefined) {
            localStorage.setItem('TurboMeniuSearchHistory', JSON.stringify([]))
        } else {
            var tempArray = JSON.parse(localStorage.getItem("TurboMeniuSearchHistory"))

            if (tempArray.length > 7) {
                var diff = tempArray.length - 7;

                for (var i = 0; i < diff; i++) {
                    tempArray.shift();
                }
                localStorage.setItem('TurboMeniuSearchHistory', JSON.stringify(tempArray));

                console.log('more than 20')
            }
        }

        return JSON.parse(localStorage.getItem('TurboMeniuSearchHistory'))
    }


    getDifferent() {
        var localStorageResults = this.getLocalStorage();
        console.log(localStorageResults, 'getDifferent');

        var joinedStringOfResults = localStorageResults.join(',');

        console.log(joinedStringOfResults, 'getdifferenet joinded strings')

        var that = this;
        fetch(`/different?foodName=${joinedStringOfResults}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log('getdifferent', myJson)
                var twoRandomItems = [myJson[Math.floor(Math.random() * myJson.length)], myJson[Math.floor(Math.random() * myJson.length)]]

                if(twoRandomItems[0] === undefined){
                    that.setState({differentRestaurants: undefined})
                } else {that.setState({differentRestaurants: twoRandomItems})}


                console.log(that.state.differentRestaurants, 'diff twi')
            })



    }

    getSimilar() {
        var localStorageResults = this.getLocalStorage();

        var joinedStringOfResults = localStorageResults.join(',');

        var that = this;
        fetch(`/similar?foodName=${joinedStringOfResults}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log('getsimilar', myJson)
                var twoRandomItems = [myJson[Math.floor(Math.random() * myJson.length)], myJson[Math.floor(Math.random() * myJson.length)]]
                that.setState({similarRestaurants: twoRandomItems})
                console.log(that.state.similarRestaurants, 'similar twi')
            })
    }

    loopMeals(elements) {
        const {listingsData} = this.props;
        if (listingsData === 'loading') {
            return undefined;
        }

        return elements.map((element, index) => {
            return (<div className="foodFromMenu" key={index}>
                - {element.foodName} - {element.price}&euro;
            </div>)
        })
    }

    render() {
        if (this.state.similarRestaurants === undefined || this.state.differentRestaurants === undefined) {
            return (
                <div className="carousel-element">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row restName">
                                    <div className="col">
                                        <strong>We will show some suggestions shortly</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }


        else if (this.state.similarRestaurants && this.state.differentRestaurants) {
            return (
                <div className="carousel-element">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="carousel-item active">


                                <div className="row suggestionType">

                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <strong>Try Similar Restaurants</strong>
                                    </div>
                                </div>
                                {/*first suggestion similar*/}
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                        <div className="listing" onClick={this.props.renderModal}
                                             restaurantid={this.state.similarRestaurants[0].id}
                                             onMouseOver={this.props.onMouseOver}>
                                            <div className="coloredBorder">
                                            <div className="row restName">
                                                <div className="col">
                                                    <strong>{this.state.similarRestaurants[0].name}</strong>
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-4 col-md-3 col-lg-4 col-xl-4">
                                                    <div className="listingImg row">
                                                        <div className="col">
                                                            <img src={this.state.similarRestaurants[0].logo} alt=""/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-8">
                                                    {this.loopMeals(this.state.similarRestaurants[0].meals)}
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*second suggestion similar*/}
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                        <div className="listing" onClick={this.props.renderModal}
                                             restaurantid={this.state.similarRestaurants[0].id}
                                             onMouseOver={this.props.onMouseOver}>
                                            <div className="coloredBorder">
                                            <div className="row restName">
                                                <div className="col">
                                                    <strong>{this.state.similarRestaurants[1].name}</strong>
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-4 col-md-3 col-lg-4 col-xl-4">
                                                    <div className="listingImg row">
                                                        <div className="col">
                                                            <img src={this.state.similarRestaurants[1].logo} alt=""/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-8">
                                                    {this.loopMeals(this.state.similarRestaurants[1].meals)}
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="carousel-item">
                                <div className="row suggestionType">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <strong>Try Different Restaurants</strong>
                                    </div>
                                </div>

                                {/*fist suggestion different*/}
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                        <div className="listing" onClick={this.props.renderModal}
                                             restaurantid={this.state.differentRestaurants[0].id}
                                             onMouseOver={this.props.onMouseOver}>
                                            <div className="coloredBorder">
                                            <div className="row restName">
                                                <div className="col">
                                                    <strong>{this.state.differentRestaurants[0].name}</strong>
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-4 col-md-3 col-lg-4 col-xl-4">
                                                    <div className="listingImg row">
                                                        <div className="col">
                                                            <img src={this.state.differentRestaurants[0].logo} alt=""/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-8">
                                                    {this.loopMeals(this.state.differentRestaurants[0].meals)}
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*second suggestion different*/}
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                        <div className="listing" onClick={this.props.renderModal}
                                             restaurantid={this.state.differentRestaurants[1].id}
                                             onMouseOver={this.props.onMouseOver}>
                                            <div className="coloredBorder">
                                            <div className="row restName">
                                                <div className="col">
                                                    <strong>{this.state.differentRestaurants[1].name}</strong>
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-4 col-md-3 col-lg-4 col-xl-4">
                                                    <div className="listingImg row">
                                                        <div className="col">
                                                            <img src={this.state.differentRestaurants[1].logo} alt=""/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-8">
                                                    {this.loopMeals(this.state.differentRestaurants[1].meals)}
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                           data-slide="prev">
                            {/*<span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                           data-slide="next">
                            {/*<span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>


            )
        }

    }
}