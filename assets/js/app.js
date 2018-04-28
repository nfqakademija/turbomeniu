import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Listings from './Listings.js';
import Map from './Map.js';
import Suggestions from './Suggestions.js'
import Togglebuton from './Togglebutton.js';
import listingsData from './sampleData/listingsData.json';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            listingsData,
            filteredData: listingsData,

        };

        this.search = this.search.bind(this);

    }

    search(event) {
        event.preventDefault();
        var filteredData = this.state.listingsData;
        filteredData = filteredData.filter(function (item) {
            return item.menu_text.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;

        });

            this.setState({filteredData: filteredData});

        console.log(filteredData);
        ;
    }


    render() {

        return (<div>
            <Header
                search={this.search}
            />
            <div className="container-fluid body">

                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <Suggestions/>
                    </div>
                    {/*</div>*/}
                    {/*<div className="row">*/}

                    {/*<Togglebuton />*/}

                    {/*</div>*/}

                    {/*<div className="row">*/}
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <Listings
                            listingsData={this.state.filteredData}

                        />
                    </div>

                    <div className="fixedMap col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <Map listingsData={this.state.filteredData}/>
                    </div>
                </div>
            </div>
        </div>)
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));