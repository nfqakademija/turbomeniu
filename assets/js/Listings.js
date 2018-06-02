import React, {Component} from 'react'

export default class Listings extends Component {
    constructor() {
        super();
        this.state = {};

        this.loopListings = this.loopListings.bind(this);
        this.loopMeals = this.loopMeals.bind(this);
    }

    loopMeals(elements){
        const {listingsData} = this.props;
        if (listingsData === 'loading') {
            return undefined;
        }

        return elements.map((element, index) =>{
            return ( <div className="foodFromMenu" key={index}>
                - {element.foodName} - {element.price}&euro;
            </div>)
        })
    }


    loopListings() {
        const {listingsData} = this.props;

        if (listingsData === undefined || listingsData.length === 0) {
            return (
                <div className="row">
                <div className="col-12">
                <div className="loading">
                    Sorry your filter did not match any listing
                </div>

                </div>
                </div>)
        } else if (listingsData === 'loading' ) {
            return (
                <div className="row">
                <div className="col-12">
                    <div className="loading">Restaurants loading <i className="fas fa-spinner fa-spin"></i></div>
                </div>
                </div>)
        } else {
        return listingsData.map((listing, index) => {
            return (<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" key={index}>
                <div className="listing" onClick={this.props.renderModal} id={listing.id} onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut}>

                    <div className="coloredBorder">
                    <div className="row">
                        <div className="col-8 restName">
                            <strong>{listing.name}</strong>
                        </div>

                        <div className="col-4 rating">
                            {(() => {switch(listing.avgRating){
                                case 0:
                                    return <div><i className="far fa-star-half"></i></div>;
                                    break;
                                case 1:
                                    return <div><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>;
                                    break;
                                case 2:
                                    return <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>;
                                    break;
                                case 3:
                                    return <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>;
                                    break;
                                case 4:
                                    return <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></div>;
                                    break;
                                case 5:
                                    return <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star checked"></i></div>
                                    break;
                            }
                            })()}
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-4 col-xs-12 col-md-3 col-lg-4 col-xl-4">

                            <div className="listingImg row">
                                <div className="col">
                                    <img src={listing.logo} alt=""/>
                                </div>
                            </div>

                        </div>

                        <div className="col-xs-12 col-8">
                            {this.loopMeals(listing.meals)}
                        </div>
                    </div>

                    </div>
                </div>
            </div>)
        })}
    }

    render() {
        return (
            <div className="listings row">
                {this.loopListings()}
            </div>
        )
    }
}