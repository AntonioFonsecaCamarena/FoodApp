import React, { Component } from 'react';

import logo from '../../../assets/img/logo.png';

export default class Footer extends Component {

    render() {
        return (
            <div id='footer' className='footer-main'>
                <div className='footer-news pad-top-100 pad-bottom-70 parallax'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <div className='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'>
                                    <h2 className='ft-title color-white text-center'> Newsletter </h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                                <form>
                                    <input type='email' placeholder='Enter your e-mail id' />
                                    <em href='#' className='orange-btn'><i className='fa fa-paper-plane-o' aria-hidden='true'></i></em>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-box pad-top-70'>
                    <div className='container'>
                        <div className='row'>
                            <div className='footer-in-main'>
                                <div className='footer-logo'>
                                    <div className='text-center'>
                                        <img src={logo} alt='' />
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                    <div className='footer-box-a'>
                                        <h3>About Us</h3>
                                        <p>Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes.</p>
                                        <ul className='socials-box footer-socials pull-left'>
                                            <li>
                                                <em href='#'>
                                                    <div className='social-circle-border'><i className='fa  fa-facebook'></i></div>
                                                </em>
                                            </li>
                                            <li>
                                                <em href='#'>
                                                    <div className='social-circle-border'><i className='fa fa-twitter'></i></div>
                                                </em>
                                            </li>
                                            <li>
                                                <em href='#'>
                                                    <div className='social-circle-border'><i className='fa fa-google-plus'></i></div>
                                                </em>
                                            </li>
                                            <li>
                                                <em href='#'>
                                                    <div className='social-circle-border'><i className='fa fa-pinterest'></i></div>
                                                </em>
                                            </li>
                                            <li>
                                                <em href='#'>
                                                    <div className='social-circle-border'><i className='fa fa-linkedin'></i></div>
                                                </em>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                    <div className='footer-box-b'>
                                        <h3>New Menu</h3>
                                        <ul>
                                            <li><em href='#'>Italian Bomba Sandwich</em></li>
                                            <li><em href='#'>Double Dose of Pork Belly</em></li>
                                            <li><em href='#'>Spicy Thai Noodles</em></li>
                                            <li><em href='#'>Triple Truffle Trotters</em></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                    <div className='footer-box-c'>
                                        <h3>Contact Us</h3>
                                        <p>
                                            <i className='fa fa-map-signs' aria-hidden='true'></i>
                                            <span>6 E Esplanade, St Albans VIC 3021, Australia</span>
                                        </p>
                                        <p>
                                            <i className='fa fa-mobile' aria-hidden='true'></i>
                                            <span>
                                                +91 80005 89080
                                        </span>
                                        </p>
                                        <p>
                                            <i className='fa fa-envelope' aria-hidden='true'></i>
                                            <span><em href='#'>support@foodfunday.com</em></span>
                                        </p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                    <div className='footer-box-d'>
                                        <h3>Opening Hours</h3>

                                        <ul>
                                            <li>
                                                <p>Monday - Thursday </p>
                                                <span> 11:00 AM - 9:00 PM</span>
                                            </li>
                                            <li>
                                                <p>Friday - Saturday </p>
                                                <span>  11:00 AM - 5:00 PM</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='copyright' className='copyright-main'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <h6 className='copy-title'> Copyright &copy; 2017 Food Funday is powered by <em href='#' target='_blank'></em> </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}