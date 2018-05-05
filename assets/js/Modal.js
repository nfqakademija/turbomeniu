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
                    <div className="footer">
                        <button onClick={this.props.onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>


        )}



}