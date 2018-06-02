import React, {Component} from 'react'

export default class Header extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
                <nav className="navbar navbar-dark sticky-top bg-dark flex-wrap2 flex-md-nowrap p-0 header">

                    <a className="navbar-brand col-auto mr-0" href="#"><i className="fas fa-utensils fa-1x"></i> TURBOMENIU</a>

                    <form className="input-group py-1 px-2 px-md-3" onSubmit={this.props.handleSearch}>
                        <input className="form-control form-control-dark my-2" type="text" placeholder="Search here..."
                               aria-label="Search" value={this.props.searchValue} onChange={this.props.search}/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-light my-2 searchbutton" type="submit"><i
                                    className="fa fa-search"></i></button>
                                <button className="form-control btn btn-outline-light my-2 clearbutton" type="clear" onClick={this.props.clearSearch}>Clear</button>
                            </div>
                    </form>

                </nav>
        )
    }
}