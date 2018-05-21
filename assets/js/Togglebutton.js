import React, { Component } from 'react';

export default class Togglebutton extends Component {
    constructor() {
        super();

        this.state = {

        };


    }



    render() {
        return (

            <div className="toggleButton col d-sm-none d-flex justify-content-center" onClick={this.props.handleClick}>
                <button type="button" className="btn btn-secondary d-block ">{this.props.isToggleOn ? 'Show MAP' : 'Turn off MAP'}</button>
            </div>
        );
    }
}

