import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
    constructor () {
        super()
        this.state = {

        }
    }

    render () {
        return (<header className="container-fluid">
            <nav className="navbar navbar-light bg-light">
                <i className="fas fa-utensils fa-2x"></i>
            </nav>
        </header>)
    }
}