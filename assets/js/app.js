import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Listings from './Listings.js';
import Map from './Map.js';
import Togglebuton from './Togglebutton.js';
import listingsData from './sampleData/listingsData.json';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            listingsData,
        };

    }


    render() {
        return (<div>
            <Header />
            <div className="container-fluid body">
                <div className="row">
                    <Togglebuton />
                </div>

<div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <Listings listingsData={this.state.listingsData}/>
                    </div>

                    <div className="fixedMap col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <Map />
                    </div>
</div>
            </div>
        </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'));