import React, {Component} from 'react'

export default class Listings extends Component {
    constructor() {
        super();
        this.state = {};

        this.loopListings = this.loopListings.bind(this);
    }

    loopListings() {
        const {listingsData} = this.props;
        if (listingsData === undefined || listingsData.length === 0) {
            return (<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                Sorry your filter did not match any listing</div>)
        }
        return listingsData.map((listing, index) => {
            return (<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" key={index}>
                <div className="listing" onClick={this.props.renderModal} >
                    <div className="row restName">
                        <div className="col">
                            <strong>{listing.restaurant_name}</strong>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-4 col-md-3 col-lg-4 col-xl-4">

                            <div className="listingImg row">
                                <div className="col">
                                    <img src={listing.logo} alt=""/>
                                </div>
                            </div>

                            <div className="extra row">
                                <div className="col">
                                    <ul>
                                        <li><i className="fa fa-cutlery"
                                               aria-hidden="true"></i> {listing.restaurant_type}</li>
                                        <li><i className="fas fa-lemon"></i> {listing.food_type}</li>
                                        <li><a href={listing.facebook_link} target="blank"><i
                                            className="fab fa-facebook-square"></i></a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                        <div className="col-8">
                            {listing.menu_text}
                        </div>
                    </div>
                </div>
            </div>)
        })
    }

    render() {
        return (
            <div className="listings row">
                {this.loopListings()}
            </div>
        )
    }
}