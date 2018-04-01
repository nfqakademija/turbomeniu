import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class SearchFilter extends Component {
    constructor () {
        super();
        this.state = {

        }
    }

    render () {
        return (

            <div className="container">
                <form className="search">
                    <div className="form-group searchbox">
                        <input className="form-control" type="text" placeholder="Ieškoti"/>
                    </div>

                </form>
            </div>
            )
    }
}