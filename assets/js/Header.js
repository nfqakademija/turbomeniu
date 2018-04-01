import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
    constructor () {
        super()
        this.state = {

        }
    }

    render () {
        return (<header className="container-fluid header">
                        <nav className="nav navbar">
                            <div className="col order-first">
                                <a className="nav-link active navbar-brand" href="#"><i className="fas fa-utensils fa-2x"></i></a>
                            </div>
                            <div className="col order-last">
                                <div>
                                    <a className="register" href="#">Log In</a>
                                    <a className="register" href="#">Register</a>
                                </div>
                            </div>
                        </nav>
        </header>)
    }
}