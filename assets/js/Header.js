import React, {Component} from 'react'

export default class Header extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<nav className="navbar navbar-expand-md navbar-expand-lg navbar-expand-xl navbar-dark bg-dark fixed-top header row">

                <div className="col-xs-12">
                <a className="navbar-brand" href="#"><i className="fas fa-utensils fa-1x"></i> TURBOMENIU</a>
                </div>
                <form className="form-inline my-2 my-lg-0 col input-group col-xs-12" onSubmit={this.props.handleSearch}>
                    <input className="form-control mr-sm-0 searchbar " type="search" placeholder="Search" aria-label="Search" value={this.props.searchValue} onChange={this.props.search}/>
                    <div className="input-group-append">
                    <button className="form-control btn btn-outline-light my-2 my-sm-0 searchbutton" type="submit" >Search</button>
                    <button className="form-control btn btn-outline-light my-2 my-sm-0 clearbutton" type="clear" onClick={this.props.clearSearch}>Clear</button>
                    </div>
                </form>

                {/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
                        {/*data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
                        {/*aria-expanded="false"*/}
                        {/*aria-label="Toggle navigation">*/}
                    {/*<span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}


                {/*<div className="collapse navbar-collapse col" id="navbarSupportedContent">*/}
                    {/*<ul className="navbar-nav mr-auto">*/}
                        {/*<li className="nav-item active">*/}
                            {/*<a className="nav-link" href="#">Artimiausi</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item active">*/}
                            {/*<a className="nav-link" href="#">Geriausia kaina</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item active">*/}
                            {/*<a className="nav-link" href="#">Geriausias įvertinimas</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item active dropdown">*/}
                            {/*<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*/}
                               {/*data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                                {/*Filtruoti*/}
                            {/*</a>*/}
                            {/*<div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                                {/*<a className="dropdown-item" href="#">Jautiena</a>*/}
                                {/*<a className="dropdown-item" href="#">Vištiena</a>*/}
                                {/*<a className="dropdown-item" href="#">Kiauliena</a>*/}
                            {/*</div>*/}
                        {/*</li>*/}
                    {/*</ul>*/}

                {/*</div>*/}


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