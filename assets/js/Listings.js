import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Listings extends Component {
    constructor () {
        super();
        this.state = {

        }
    }

    render () {
        return (
            <div className="listings container">
                <div className="listing">

                    <div className="row menuTime">
                        <time>
                            <strong>Pirmadienis</strong> 2018 Sausio 1 d.
                        </time>
                    </div>

<div className="row">

    <div className="col-xl-3 col-lg-3 col-md-12 col-xs-12">
        <div className="listingImg">
            <img src="https://marketplace.canva.com/MACP0--HhzM/1/0/thumbnail_large/canva-black-circle-with-utensils-restaurant-logo-MACP0--HhzM.jpg" alt=""/>
        </div>
    </div>

<div className="col-xl-9 col-lg-9 col-md-12 col-xs-12">
    <div className="row restName">
        Restaurant name
    </div>

    <div className="row restAddress">
        Restaurant address
    </div>

    <div className="row foodType">
        Food type
    </div>
</div>


</div>

                    <div className="row">
                        <div className="dayMenuHeader">
                            <strong>Dienos meniu:</strong>
                        </div>

                        <div className="fullmenu">
                            ŠALTIBARŠČIAI SU BULVĖMIS-1,50eur <br />
                            <br />
                            1. Pupelių sriuba<br />
                            2. Kijevo kotletas<br />
                            3. Karbonadas užkeptas sūriu,pievagrybiais ir traškiais svogūnais<br />
                            4. Lietiniai su braškių įdaru<br />
                            5. Tuno salotos<br />
                            6. Salotos su vištiena<br />
                            7. Graikiškos salotos<br />
                            <br />
                            Garnyras: bulvės, ryžiai, grikiai (pasirinktinai)<br />
                            <br />
                            KAINOS:<br />
                            <br />
                            SRIUBA-1 EUR<br />
                            ANTRAS PATIEKALAS--3,30EUR<br />
                            ŠALTIBARŠČIAI-1,50 EUR
                        </div>
                    </div>


                </div>


            </div>

            
        )
    }
}