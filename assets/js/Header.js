import React, {Component} from 'react'

export default class Header extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<nav className="navbar navbar-expand-md navbar-expand-lg navbar-expand-xl navbar-light bg-light fixed-top header row">


                <a className="navbar-brand" href="#"><i className="fas fa-utensils fa-2x"></i> TURBOMENIU</a>

                <form className="form-inline my-2 my-lg-0 col col-md-4 col-lg-6 col-xl-7">
                    <input className="form-control mr-sm-2 searchbar" type="search" placeholder="Search" aria-label="Search" onChange={this.props.search}/>
                </form>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse col" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Artimiausi</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Geriausia kaina</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Geriausias įvertinimas</a>
                        </li>
                        <li className="nav-item active dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filtruoti
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Jautiena</a>
                                <a className="dropdown-item" href="#">Vištiena</a>
                                <a className="dropdown-item" href="#">Kiauliena</a>
                            </div>
                        </li>
                    </ul>

                </div>


                {/*<nav className="nav navbar fixed-top">*/
                }
                {/*<div className="col order-first">*/
                }
                {/*<a className="nav-link active navbar-brand" href="#"><i className="fas fa-utensils fa-2x"></i></a>*/
                }
                {/*</div>*/
                }
                {/*<div className="col order-last">*/
                }
                {/*<div>*/
                }
                {/*<a className="register" href="#">Log In</a>*/
                }
                {/*<a className="register" href="#">Register</a>*/
                }
                {/*</div>*/
                }
                {/*</div>*/
                }
                {/*</nav>*/}
            </nav>


        )
    }
}