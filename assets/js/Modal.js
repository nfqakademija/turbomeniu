import React, {Component} from 'react'

export default class Modal extends Component {
    constructor() {
        super();
        this.state = {};

        this.loopMeals = this.loopMeals.bind(this);
        this.loopReviews = this.loopReviews.bind(this);
        this.dateModifier = this.dateModifier.bind(this);
    }

    loopMeals(restaurant) {
        var elements = restaurant;


        return elements.map((element, index) => {
            return (<div className="foodFromMenu" key={index}>
                - {element.foodName} - {element.price}&euro;
            </div>)
        })
    }

    dateModifier(date){

        return date.slice(0, 10);

    }

    loopReviews() {
        var reviews = this.props.modalInfo.reviews;

        return reviews.map((review, index) => {
            return (

                <div className="col-12" key={index}>
                    <div className="row">
                        <div className="reviewName col-auto">{review.name}</div>
                        <div className="reviewDate col-auto">{this.dateModifier(review.date)}</div>
                    </div>

                    <div className="row">
                        <div className="col-12">{(() => {
                            switch (review.rating) {
                                case 0:
                                    return <div><i className="far fa-star-half"></i></div>;
                                    break;
                                case 1:
                                    return <div><i className="fas fa-star"></i><i className="far fa-star"></i><i
                                        className="far fa-star"></i><i className="far fa-star"></i><i
                                        className="far fa-star"></i></div>;
                                    break;
                                case 2:
                                    return <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                        className="far fa-star"></i><i className="far fa-star"></i><i
                                        className="far fa-star"></i></div>;
                                    break;
                                case 3:
                                    return <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                        className="fas fa-star"></i><i className="far fa-star"></i><i
                                        className="far fa-star"></i></div>;
                                    break;
                                case 4:
                                    return <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                        className="fas fa-star"></i><i className="fas fa-star"></i><i
                                        className="far fa-star"></i></div>;
                                    break;
                                case 5:
                                    return <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                        className="fas fa-star"></i><i className="fas fa-star"></i><i
                                        className="far fa-star checked"></i></div>
                                    break;
                            }
                        })()}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 reviewComment">{review.comment}</div>

                    </div>
                    <hr/>
            </div>)
        })
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return (<div id="modal" className="backdropStyle">


                <div className="modalStyle container">

                    <div className="row">
                        <div className="modalheader offset-11 col-1">
                            <i className="fas fa-times" onClick={this.props.onClose}></i>
                        </div>
                    </div>

                    <div className="listing">

                        <div className="row restaurantInfo">
                            <div className="col-auto restName">
                                <strong>{this.props.modalInfo.name}</strong>
                            </div>

                            <div className="col-auto extra">
                                <i className="fas fa-at"></i> {this.props.modalInfo.email}
                            </div>

                            <div className="col-auto extra">
                                <i className="fas fa-phone"></i> {this.props.modalInfo.phoneNumber}
                            </div>

                            <div className="col-auto extra">
                                <i className="fas fa-globe"></i> <a
                                href={this.props.modalInfo.webPage}>{this.props.modalInfo.webPage}</a>
                            </div>


                            <div className="col-auto extra">
                                {(() => {
                                    switch (this.props.modalInfo.avgRating) {
                                        case 0:
                                            return <div><i className="far fa-star-half"></i></div>;
                                            break;
                                        case 1:
                                            return <div><i className="fas fa-star"></i><i className="far fa-star"></i><i
                                                className="far fa-star"></i><i className="far fa-star"></i><i
                                                className="far fa-star"></i></div>;
                                            break;
                                        case 2:
                                            return <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                className="far fa-star"></i><i className="far fa-star"></i><i
                                                className="far fa-star"></i></div>;
                                            break;
                                        case 3:
                                            return <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                className="fas fa-star"></i><i className="far fa-star"></i><i
                                                className="far fa-star"></i></div>;
                                            break;
                                        case 4:
                                            return <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                className="far fa-star"></i></div>;
                                            break;
                                        case 5:
                                            return <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                className="far fa-star checked"></i></div>
                                            break;
                                    }
                                })()}
                            </div>

                        </div>

                        <div className="row modalRestaurantMenu">

                            <div className="col-auto">
                                <div className="listingImg">
                                    <img src={this.props.modalInfo.logo} alt=""/>
                                </div>
                            </div>

                            <div className="col-auto">
                                {this.loopMeals(this.props.modalInfo.meals)}
                            </div>

                        </div>
<hr/>
                        <div className="row">
                            <div className="col-12">

                                <div className="reviewDiv">
                                    {this.loopReviews()}
                                </div>
                            </div>

                        </div>


                    </div>
                </div>


            </div>


        )
    }


}