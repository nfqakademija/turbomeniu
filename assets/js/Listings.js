import React, {Component} from 'react'

export default class Listings extends Component {
    constructor() {
        super();
        this.state = {};

        this.loopListings = this.loopListings.bind(this);
    }

    loopListings() {
        const {listingsData} = this.props;
        return listingsData.map((listing, index) => {
            return (<div className="listing col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" key={index}>

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
                                    <li><i className="fa fa-cutlery" aria-hidden="true"></i> {listing.restaurant_type}</li>
                                    <li><i className="fas fa-lemon"></i> {listing.food_type}</li>
                                    <li><a href={listing.facebook_link} target="blank"><i className="fab fa-facebook-square"></i></a></li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="col-8">
                        {listing.menu_text}
                    </div>
                </div>

                {/*<div className="row menuTime">*/}
                {/*<time>*/}
                {/*<strong>{listing.menu_date}</strong>*/}
                {/*</time>*/}
                {/*</div>*/}

                {/*<div className="row">*/}

                {/*<div className="col-xl-3 col-lg-3 col-md-12 col-xs-12">*/}
                {/*<div className="listingImg">*/}
                {/*<img src={listing.logo} alt=""/>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*<div className="col-xl-9 col-lg-9 col-md-12 col-xs-12">*/}
                {/*<div className="row restName">*/}
                {/*{listing.restaurant_name}*/}
                {/*</div>*/}

                {/*<div className="row foodType">*/}
                {/*{listing.food_type}*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*<div className="row">*/}
                {/*<div className="dayMenuHeader">*/}
                {/*<strong>Dienos meniu:</strong>*/}
                {/*</div>*/}

                {/*<div className="fullmenu">*/}

                {/*{listing.menu_text}*/}
                {/*/!*ŠALTIBARŠČIAI SU BULVĖMIS-1,50eur <br />*!/*/}
                {/*/!*<br />*!/*/}
                {/*/!*1. Pupelių sriuba<br />*!/*/}
                {/*/!*2. Kijevo kotletas<br />*!/*/}
                {/*/!*3. Karbonadas užkeptas sūriu,pievagrybiais ir traškiais svogūnais<br />*!/*/}
                {/*/!*4. Lietiniai su braškių įdaru<br />*!/*/}
                {/*/!*5. Tuno salotos<br />*!/*/}
                {/*/!*6. Salotos su vištiena<br />*!/*/}
                {/*/!*7. Graikiškos salotos<br />*!/*/}
                {/*/!*<br />*!/*/}
                {/*/!*Garnyras: bulvės, ryžiai, grikiai (pasirinktinai)<br />*!/*/}
                {/*/!*<br />*!/*/}
                {/*/!*KAINOS:<br />*!/*/}
                {/*/!*<br />*!/*/}
                {/*/!*SRIUBA-1 EUR<br />*!/*/}
                {/*/!*ANTRAS PATIEKALAS--3,30EUR<br />*!/*/}
                {/*/!*ŠALTIBARŠČIAI-1,50 EUR*!/*/}
                {/*</div>*/}
                {/*</div>*/}
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