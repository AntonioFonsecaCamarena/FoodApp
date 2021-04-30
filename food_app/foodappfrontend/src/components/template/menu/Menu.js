import React, { Component } from 'react';

import menuItemThumbnail01 from '../../../assets/img/menu-item-thumbnail-01.jpg';
import menuItemThumbnail02 from '../../../assets/img/menu-item-thumbnail-02.jpg';
import menuItemThumbnail03 from '../../../assets/img/menu-item-thumbnail-03.jpg';
import menuItemThumbnail04 from '../../../assets/img/menu-item-thumbnail-04.jpg';
import menuItemThumbnail05 from '../../../assets/img/menu-item-thumbnail-05.jpg';
import menuItemThumbnail06 from '../../../assets/img/menu-item-thumbnail-06.jpg';
import menuItemThumbnail07 from '../../../assets/img/menu-item-thumbnail-07.jpg';
import menuItemThumbnail08 from '../../../assets/img/menu-item-thumbnail-08.jpg';
import menuItemThumbnail09 from '../../../assets/img/menu-item-thumbnail-09.jpg';
import menuItemThumbnail10 from '../../../assets/img/menu-item-thumbnail-10.jpg';

export default class Menu extends Component {

    render() {
        return (
            <div id='menu' className='menu-main pad-top-100 pad-bottom-100' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'>
                                <h2 className='block-title text-center'>
                                    Our Menu
                        </h2>
                                <p className='title-caption text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            </div>
                            <div className='tab-menu'>
                                <div className='slider slider-nav'>
                                    <div className='tab-title-menu'>
                                        <h2>STARTERS</h2>
                                        <p> <i className='flaticon-canape'></i> </p>
                                    </div>
                                    <div className='tab-title-menu'>
                                        <h2>MAIN DISHES</h2>
                                        <p> <i className='flaticon-dinner'></i> </p>
                                    </div>
                                    <div className='tab-title-menu'>
                                        <h2>DESERTS</h2>
                                        <p> <i className='flaticon-desert'></i> </p>
                                    </div>
                                    <div className='tab-title-menu'>
                                        <h2>DRINKS</h2>
                                        <p> <i className='flaticon-coffee'></i> </p>
                                    </div>
                                </div>
                                <div className='slider slider-single'>
                                    <div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                                            <div className='offer-item'>
                                                <img src={menuItemThumbnail01} alt='' className='img-responsive' />
                                                <div>
                                                    <h3>GARLIC BREAD</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                </p>
                                                </div>
                                                <span className='offer-price'>$8.5</span>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                                            <div className='offer-item'>
                                                <img src={menuItemThumbnail02} alt='' className='img-responsive' />
                                                <div>
                                                    <h3>MIXED SALAD</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                </p>
                                                </div>
                                                <span className='offer-price'>$25</span>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                                            <div className='offer-item'>
                                                <img src={menuItemThumbnail03} alt='' className='img-responsive' />
                                                <div>
                                                    <h3>BBQ CHICKEN WINGS</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                </p>
                                                </div>
                                                <span className='offer-price'>$10</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                                            <div className='offer-item'>
                                                <img src={menuItemThumbnail04} alt='' className='img-responsive' />
                                                <div>
                                                    <h3>MEAT FEAST PIZZA</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                </p>
                                                </div>
                                                <span className='offer-price'>$5</span>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                                            <div className='offer-item'>
                                                <img src={menuItemThumbnail05} alt='' className='img-responsive' />
                                                <div>
                                                    <h3>CHICKEN TIKKA MASALA</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                </p>
                                                </div>
                                                <span className='offer-price'>$15</span>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                                            <div className='offer-item'>
                                                <img src={menuItemThumbnail06} alt='' className='img-responsive' />
                                                <div>
                                                    <h3>SPICY MEATBALLS</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                </p>
                                                </div>
                                                <span className='offer-price'>$6.5</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                                            <div className='offer-item'>
                                                <img src={menuItemThumbnail07} alt='' className='img-responsive' />
                                                <div>
                                                    <h3>CHOCOLATE FUDGECAKE</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                </p>
                                                </div>
                                                <span className='offer-price'>$4.5</span>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                                            <div className='offer-item'>
                                                <img src={menuItemThumbnail08} alt='' className='img-responsive' />
                                                <div>
                                                    <h3>CHICKEN TIKKA MASALA</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                </p>
                                                </div>
                                                <span className='offer-price'>$9.5</span>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                                            <div className='offer-item'>
                                                <img src={menuItemThumbnail09} alt='' className='img-responsive' />
                                                <div>
                                                    <h3>CHICKEN TIKKA MASALA</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                </p>
                                                </div>
                                                <span className='offer-price'>$10</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                                            <div className='offer-item'>
                                                <img src={menuItemThumbnail10} alt='' className='img-responsive' />
                                                <div>
                                                    <h3>MEAT FEAST PIZZA</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                </p>
                                                </div>
                                                <span className='offer-price'>$12.5</span>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                                            <div className='offer-item'>
                                                <img src={menuItemThumbnail09} alt='' className='img-responsive' />
                                                <div>
                                                    <h3>CHICKEN TIKKA MASALA</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                </p>
                                                </div>
                                                <span className='offer-price'>$9.5</span>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
                                            <div className='offer-item'>
                                                <img src={menuItemThumbnail08} alt='' className='img-responsive' />
                                                <div>
                                                    <h3>CHICKEN TIKKA MASALA</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                                                </p>
                                                </div>
                                                <span className='offer-price'>$5.5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}