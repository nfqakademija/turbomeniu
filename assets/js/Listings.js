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
            return (<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                Sorry your filter did not match any listing</div>)
        } else if (listingsData === 'loading' ) {
            return (<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                Restaurants loading</div>)
        } else {
        return listingsData.map((listing, index) => {
            return (<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" key={index}>
                <div className="listing" onClick={this.props.renderModal} restaurantid={listing.id} onMouseOver={this.props.onMouseOver}>
                    <div className="row restName">
                        <div className="col">
                            <strong>{listing.name}</strong>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-4 col-md-3 col-lg-4 col-xl-4">

                            <div className="listingImg row">
                                <div className="col">
                                    <img src={listing.logo} alt=""/>
                                </div>
                            </div>

                        </div>

                        <div className="col-8">
                            {this.loopMeals(listing.meals)}
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