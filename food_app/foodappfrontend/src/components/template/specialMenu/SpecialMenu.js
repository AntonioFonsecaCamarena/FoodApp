import React, { Component } from 'react';
import Carrousel from './Carrousel';

export default class SpecialMenu extends Component {

    render() {
        return (
            <div className='special-menu pad-top-100 parallax'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'>
                                <h2 className='block-title color-white text-center'> Today's Special </h2>
                                <h5 className='title-caption text-center'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia,nostrud exercitation ullamco. </h5>
                            </div>
                            <Carrousel/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}