import React, { Component } from 'react';

import gallery01 from '../../../assets/img/gallery_01.jpg';
import gallery02 from '../../../assets/img/gallery_02.jpg';
import gallery03 from '../../../assets/img/gallery_03.jpg';
import gallery04 from '../../../assets/img/gallery_04.jpg';
import gallery05 from '../../../assets/img/gallery_05.jpg';
import gallery06 from '../../../assets/img/gallery_06.jpg';
import gallery07 from '../../../assets/img/gallery_07.jpg';
import gallery08 from '../../../assets/img/gallery_08.jpg';
import gallery09 from '../../../assets/img/gallery_09.jpg';
import gallery10 from '../../../assets/img/gallery_10.jpg';

export default class Gallery extends Component {

    render() {
        return (
            <div id='gallery' className='gallery-main pad-top-100 pad-bottom-100'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'>
                                <h2 className='block-title text-center'>
                                    Our Gallery
                        </h2>
                                <p className='title-caption text-center'>There are many variations of passages of Lorem Ipsum available </p>
                            </div>
                            <div className='gal-container clearfix'>
                                <div className='col-md-8 col-sm-12 co-xs-12 gal-item'>
                                    <div className='box'>
                                        <em href='#' data-toggle='modal' data-target='#1'>
                                            <img src={gallery01} alt='' />
                                        </em>
                                        <div className='modal fade' id='1' tabIndex='-1' role='dialog'>
                                            <div className='modal-dialog' role='document'>
                                                <div className='modal-content'>
                                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>
                                                    <div className='modal-body'>
                                                        <img src={gallery01} alt='' />
                                                    </div>
                                                    <div className='col-md-12 description'>
                                                        <h4>This is the 1 one on my Gallery</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-6 co-xs-12 gal-item'>
                                    <div className='box'>
                                        <em href='#' data-toggle='modal' data-target='#2'>
                                            <img src={gallery02} alt='' />
                                        </em>
                                        <div className='modal fade' id='2' tabIndex='-1' role='dialog'>
                                            <div className='modal-dialog' role='document'>
                                                <div className='modal-content'>
                                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>
                                                    <div className='modal-body'>
                                                        <img src={gallery02} alt='' />
                                                    </div>
                                                    <div className='col-md-12 description'>
                                                        <h4>This is the 2 one on my Gallery</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-6 co-xs-12 gal-item'>
                                    <div className='box'>
                                        <em href='#' data-toggle='modal' data-target='#3'>
                                            <img src={gallery03} alt='' />
                                        </em>
                                        <div className='modal fade' id='3' tabIndex='-1' role='dialog'>
                                            <div className='modal-dialog' role='document'>
                                                <div className='modal-content'>
                                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>
                                                    <div className='modal-body'>
                                                        <img src={gallery03} alt='' />
                                                    </div>
                                                    <div className='col-md-12 description'>
                                                        <h4>This is the 3 one on my Gallery</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-6 co-xs-12 gal-item'>
                                    <div className='box'>
                                        <em href='#' data-toggle='modal' data-target='#4'>
                                            <img src={gallery04} alt='' />
                                        </em>
                                        <div className='modal fade' id='4' tabIndex='-1' role='dialog'>
                                            <div className='modal-dialog' role='document'>
                                                <div className='modal-content'>
                                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>
                                                    <div className='modal-body'>
                                                        <img src={gallery04} alt='' />
                                                    </div>
                                                    <div className='col-md-12 description'>
                                                        <h4>This is the 4 one on my Gallery</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-6 co-xs-12 gal-item'>
                                    <div className='box'>
                                        <em href='#' data-toggle='modal' data-target='#5'>
                                            <img src={gallery05} alt='' />
                                        </em>
                                        <div className='modal fade' id='5' tabIndex='-1' role='dialog'>
                                            <div className='modal-dialog' role='document'>
                                                <div className='modal-content'>
                                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>
                                                    <div className='modal-body'>
                                                        <img src={gallery05} alt='' />
                                                    </div>
                                                    <div className='col-md-12 description'>
                                                        <h4>This is the 5 one on my Gallery</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-6 co-xs-12 gal-item'>
                                    <div className='box'>
                                        <em href='#' data-toggle='modal' data-target='#9'>
                                            <img src={gallery06} alt='' />
                                        </em>
                                        <div className='modal fade' id='9' tabIndex='-1' role='dialog'>
                                            <div className='modal-dialog' role='document'>
                                                <div className='modal-content'>
                                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>
                                                    <div className='modal-body'>
                                                        <img src={gallery06} alt='' />
                                                    </div>
                                                    <div className='col-md-12 description'>
                                                        <h4>This is the 6 one on my Gallery</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-8 col-sm-12 co-xs-12 gal-item'>
                                    <div className='box'>
                                        <em href='#' data-toggle='modal' data-target='#10'>
                                            <img src={gallery07} alt='' />
                                        </em>
                                        <div className='modal fade' id='10' tabIndex='-1' role='dialog'>
                                            <div className='modal-dialog' role='document'>
                                                <div className='modal-content'>
                                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>
                                                    <div className='modal-body'>
                                                        <img src={gallery07} alt='' />
                                                    </div>
                                                    <div className='col-md-12 description'>
                                                        <h4>This is the 7 one on my Gallery</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-6 co-xs-12 gal-item'>
                                    <div className='box'>
                                        <em href='#' data-toggle='modal' data-target='#11'>
                                            <img src={gallery08} alt='' />
                                        </em>
                                        <div className='modal fade' id='11' tabIndex='-1' role='dialog'>
                                            <div className='modal-dialog' role='document'>
                                                <div className='modal-content'>
                                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>
                                                    <div className='modal-body'>
                                                        <img src={gallery08} alt='' />
                                                    </div>
                                                    <div className='col-md-12 description'>
                                                        <h4>This is the 8 one on my Gallery</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-6 co-xs-12 gal-item'>
                                    <div className='box'>
                                        <em href='#' data-toggle='modal' data-target='#12'>
                                            <img src={gallery09} alt='' />
                                        </em>
                                        <div className='modal fade' id='12' tabIndex='-1' role='dialog'>
                                            <div className='modal-dialog' role='document'>
                                                <div className='modal-content'>
                                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>
                                                    <div className='modal-body'>
                                                        <img src={gallery09} alt='' />
                                                    </div>
                                                    <div className='col-md-12 description'>
                                                        <h4>This is the 9 one on my Gallery</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-6 co-xs-12 gal-item'>
                                    <div className='box'>
                                        <em href='#' data-toggle='modal' data-target='#13'>
                                            <img src={gallery10} alt='' />
                                        </em>
                                        <div className='modal fade' id='13' tabIndex='-1' role='dialog'>
                                            <div className='modal-dialog' role='document'>
                                                <div className='modal-content'>
                                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>
                                                    <div className='modal-body'>
                                                        <img src={gallery10} alt='' />
                                                    </div>
                                                    <div className='col-md-12 description'>
                                                        <h4>This is the 10 one on my Gallery</h4>
                                                    </div>
                                                </div>
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