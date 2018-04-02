import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import SearchFilter from './SearchFilter.js';
import Listings from './Listings.js';
import Map from './Map.js';

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
            <div className="container">
<div className="row">
    <div className="col-xl-6 col-lg-6 col-md-6 col-xs-6">
        <Listings />
    </div>

    <div className="col-xl-6 col-lg-6 col-md-6 col-xs-6">
        <Map />
    </div>
</div>



            </div>

    </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'));