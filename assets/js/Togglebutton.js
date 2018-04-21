import React, { Component } from 'react';

export default class Togglebutton extends Component {
    constructor() {
        super();

        this.state = {
            isToggleOn: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (

            <div className="col d-sm-none d-flex justify-content-center" onClick={this.handleClick}>
                <button type="button" className="btn btn-primary d-block ">{this.state.isToggleOn ? 'Show MAP' : 'Turn off MAP'}</button>
            </div>
        );
    }
}

