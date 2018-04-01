import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import SearchFilter from './SearchFilter.js';

class App extends React.Component {
    constructor() {
        super();

        this.state = {

        };
    }

    render() {
        return (<div>
        <Header />
            <SearchFilter/>
    </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'));