import React, {Component} from 'react'

export default class Suggestions extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
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
                                    <strong>Try Similar Restaurants</strong>
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <div className="row suggestionType">
                                <div className="col">
                                    <strong>Try Different Restaurants</strong>
                                </div>
                                <div className="col"></div>

                            </div>
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>


        )
    }
}