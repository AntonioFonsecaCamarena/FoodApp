import React, { Component } from 'react';

import $ from 'jquery'; 
import OwlCarousel from 'react-owl-carousel';

import specialMenu1 from '../../../assets/img/special-menu-1.jpg';
import specialMenu2 from '../../../assets/img/special-menu-2.jpg';
import specialMenu3 from '../../../assets/img/special-menu-3.jpg';

export default class Carrousel extends Component {

    render() {
        return (
            <div className='container-fluid special-box' >
                <OwlCarousel items={3}
                    className="owl-theme"
                    autoplay={true}
                    loop
                    margin={10}>
                    <div ><img className="img" src={specialMenu1} alt='sp' /></div>
                    <div ><img className="img" src={specialMenu2} alt='sp' /></div>
                    <div ><img className="img" src={specialMenu3} alt='sp' /></div>
                </OwlCarousel>
            </div>
        )
    }

}