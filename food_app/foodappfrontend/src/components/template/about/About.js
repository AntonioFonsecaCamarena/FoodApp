import React, { Component } from 'react';

import aboutInset from '../../../assets/img/about-inset.jpg';
import aboutMain from '../../../assets/img/about-main.jpg';

export default class About extends Component {

    render() {
        return (
            <div id='about' className='about-main pad-top-100 pad-bottom-100'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <div className='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'>
                                <h2 className='block-title'> About Us </h2>
                                <h3>IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco. </p>
                                <p> Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, Aenean commodo ligula eget dolor penatibu set magnis is parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, pellentesque eu, pretium quis, sem. quat massa quis enim. Donec vitae sapien ut libero venenatis fauci Nullam quis ante. Etiam sit amet rci eget eros. </p>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco. </p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <div className='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'>
                                <div className='about-images'>
                                    <img className='about-main' src={aboutMain} alt='About Main' />
                                    <img className='about-inset' src={aboutInset} alt='About Inset' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}