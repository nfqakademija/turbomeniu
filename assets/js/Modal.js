import React, {Component} from 'react'

export default class Modal extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        if(!this.props.show) {
            return null;
        }

        return (<div className="backdropStyle" >
                <div className="modalStyle" >
                    <div className="listing" >
                        <div className="row restName">
                            <div className="col">
                                <strong>{this.props.modalInfo[0].restaurant_name}</strong>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-4 col-md-3 col-lg-4 col-xl-4">

                                <div className="listingImg row">
                                    <div className="col">
                                        <img src={this.props.modalInfo[0].logo} alt=""/>
                                    </div>
                                </div>

                                <div className="extra row">
                                    <div className="col">
                                        <ul>
                                            <li><i className="fa fa-cutlery"
                                                   aria-hidden="true"></i> {this.props.modalInfo[0].restaurant_type}</li>
                                            <li><i className="fas fa-lemon"></i> {this.props.modalInfo[0].food_type}</li>
                                            <li><a href={this.props.modalInfo[0].facebook_link} target="blank"><i
                                                className="fab fa-facebook-square"></i></a></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                            <div className="col-8">
                                {this.props.modalInfo[0].menu_text}
                            </div>
                        </div>
                    </div>

                    <div className="footer">

                        <button onClick={this.props.onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>


        )}



}