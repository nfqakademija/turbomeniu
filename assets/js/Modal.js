import React, {Component} from 'react'

export default class Modal extends Component {
    constructor() {
        super();
        this.state = {};

        this.loopMeals = this.loopMeals.bind(this);
        this.loopReviews = this.loopReviews.bind(this);
    }

    loopMeals(restaurant) {
 var meals = restaurant;


        return meals.map((meal, index) =>{
            return ( <div key={index}>

                {meal.foodName} - {meal.price}
            </div>)
        })
    }

    loopReviews(){
        var reviews = this.props.modalInfo.reviews;

        return reviews.map((review, index) =>{
            return ( <div key={index}>
                <div className="reviewName col-12">{review.name}</div>
                <div className="date col-12">{review.date}</div>
                <div className="col-12">{(() => {switch(review.rating){
                    case 0:
                    return <i className="far fa-star-half"></i>;
                    break;
                    case 1:
                    return <i className="far fa-star"></i>;
                    break;
                    case 2:
                    return <div><i className="far fa-star"></i><i className="far fa-star"></i></div>;
                    break;
                    case 3:
                    return <div><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>;
                    break;
                    case 4:
                    return <div><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>;
                    break;
                    case 5:
                    return <div><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>
                    break;
                }
                })()}
                </div>
                <div className="col-12">{review.comment}</div>
                 <hr/>
            </div>)
        })
    }

    render() {
        if(!this.props.show) {
            return null;
        }

        return (<div className="backdropStyle" >

                <div className="modalStyle" >
                    <div className="modal-header col-12">
                        <i className="fas fa-times" onClick={this.props.onClose}></i>
                    </div>
                    <div className="listing" >
                        <div className="row restName">
                            <div className="col">
                                <strong>{this.props.modalInfo.name}</strong>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">

                                <div className="listingImg row">
                                    <div className="col">
                                        <img src={this.props.modalInfo.logo} alt=""/>
                                    </div>
                                </div>

                                <div className="extra row">
                                    <div className="col">
                                        <i className="fas fa-at"></i> {this.props.modalInfo.email}<br/>
                                        <i className="fas fa-phone"></i> {this.props.modalInfo.phoneNumber}<br/>
                                        <a href={this.props.modalInfo.webPage}>{this.props.modalInfo.webPage}</a>
                                    </div>

                                </div>

                            </div>

                            <div className="col-4">

                                {this.loopMeals(this.props.modalInfo.meals)}
                            </div>

                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">

                                <div className="reviewDiv">
                                    {this.loopReviews()}

                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>


        )}



}