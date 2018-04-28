import React, {Component} from 'react'

export default class Sugestions extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="listing col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >

                                <div className="row restName">
                                    <div className="col">
                                        <strong>Restorano pavadinimas</strong>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-4 col-md-3 col-lg-4 col-xl-4">

                                        <div className="listingImg row">
                                            <div className="col">
                                                <img src="" alt=""/>
                                            </div>
                                        </div>

                                        <div className="extra row">
                                            <div className="col">
                                                <ul>
                                                    <li><i className="fa fa-cutlery" aria-hidden="true"></i> Restorano tipas</li>
                                                    <li><i className="fas fa-lemon"></i> Maisto tipas</li>
                                                    <li><a href="" target="blank"><i className="fab fa-facebook-square"></i></a></li>
                                                </ul>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-8">
                                        Vistiena, Kiauliena, Versiena, Kalakutiena
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="listing col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >

                                <div className="row restName">
                                    <div className="col">
                                        <strong>Restorano pavadinimas</strong>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-4 col-md-3 col-lg-4 col-xl-4">

                                        <div className="listingImg row">
                                            <div className="col">
                                                <img src="" alt=""/>
                                            </div>
                                        </div>

                                        <div className="extra row">
                                            <div className="col">
                                                <ul>
                                                    <li><i className="fa fa-cutlery" aria-hidden="true"></i> Restorano tipas</li>
                                                    <li><i className="fas fa-lemon"></i> Maisto tipas</li>
                                                    <li><a href="" target="blank"><i className="fab fa-facebook-square"></i></a></li>
                                                </ul>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-8">
                                        Vistiena, Kiauliena, Versiena, Kalakutiena
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="listing col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >

                                <div className="row restName">
                                    <div className="col">
                                        <strong>Restorano pavadinimas</strong>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-4 col-md-3 col-lg-4 col-xl-4">

                                        <div className="listingImg row">
                                            <div className="col">
                                                <img src="" alt=""/>
                                            </div>
                                        </div>

                                        <div className="extra row">
                                            <div className="col">
                                                <ul>
                                                    <li><i className="fa fa-cutlery" aria-hidden="true"></i> Restorano tipas</li>
                                                    <li><i className="fas fa-lemon"></i> Maisto tipas</li>
                                                    <li><a href="" target="blank"><i className="fab fa-facebook-square"></i></a></li>
                                                </ul>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-8">
                                        Vistiena, Kiauliena, Versiena, Kalakutiena
                                    </div>
                                </div>
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