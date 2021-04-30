import React, { Component } from 'react';

import staff01 from '../../../assets/img/staff-01.jpg';
import staff02 from '../../../assets/img/staff-02.jpg';
import staff03 from '../../../assets/img/staff-03.jpg';

export default class Team extends Component {

    render() {
        return (
            <div id='our_team' className='team-main pad-top-100 pad-bottom-100 parallax'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'>
                                <h2 className='block-title text-center'>
                                    Our Team
                            </h2>
                                <p className='title-caption text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            </div>
                            <div className='team-box'>
                                <div className='row'>
                                    <div className='col-md-4 col-sm-6'>
                                        <div className='sf-team'>
                                            <div className='thumb'>
                                                <em href='#'><img src={staff01} alt='' /></em>
                                            </div>
                                            <div className='text-col'>
                                                <h3>John Doggett</h3>
                                                <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                                                <ul className='team-social'>
                                                    <li><em href='#'><i className='fa fa-facebook' aria-hidden='true'></i></em></li>
                                                    <li><em href='#'><i className='fa fa-twitter' aria-hidden='true'></i></em></li>
                                                    <li><em href='#'><i className='fa fa-linkedin' aria-hidden='true'></i></em></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6'>
                                        <div className='sf-team'>
                                            <div className='thumb'>
                                                <em href='#'><img src={staff02} alt='' /></em>
                                            </div>
                                            <div className='text-col'>
                                                <h3>Jeffrey Spender</h3>
                                                <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                                                <ul className='team-social'>
                                                    <li><em href='#'><i className='fa fa-facebook' aria-hidden='true'></i></em></li>
                                                    <li><em href='#'><i className='fa fa-twitter' aria-hidden='true'></i></em></li>
                                                    <li><em href='#'><i className='fa fa-linkedin' aria-hidden='true'></i></em></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6'>
                                        <div className='sf-team'>
                                            <div className='thumb'>
                                                <em href='#'><img src={staff03} alt='' /></em>
                                            </div>
                                            <div className='text-col'>
                                                <h3>Monica Reyes</h3>
                                                <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                                                <ul className='team-social'>
                                                    <li><em href='#'><i className='fa fa-facebook' aria-hidden='true'></i></em></li>
                                                    <li><em href='#'><i className='fa fa-twitter' aria-hidden='true'></i></em></li>
                                                    <li><em href='#'><i className='fa fa-linkedin' aria-hidden='true'></i></em></li>
                                                </ul>
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