import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.scss';

class App extends React.Component {
    constructor() {
        super();

        this.state = {

        };
    }


    render() {


        console.log('hello world');
        return <div className="test"> Hello world </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));