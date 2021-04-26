import React, { Component } from 'react';

import Header from './template/siteHeader/Header';

// import '../assets/css/animate.min.css';
// import '../assets/css/bootstrap-datetimepicker.css';
// import '../assets/css/bootstrap-select.min.css';
// import '../assets/css/flaticon.css';
// import '../assets/css/font-awesome.min.css';
// import '../assets/css/normalize.css';
import '../assets/css/responsive.css';
// import '../assets/css/slick.css';
import '../assets/css/style.css';
import '../assets/css/colors/orange.css'



import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import '../assets/css/owl.carousel.css';
// import '../assets/css/owl.theme.css';



import aboutInset from '../assets/img/about-inset.jpg';
import aboutMain from '../assets/img/about-main.jpg';
// import backHover from '../assets/img/back_hover.png';
// import back from '../assets/img/back.png';
// import banner from '../assets/img/banner.jpg';
// import blogBg from '../assets/img/blog_bg.jpg';
import coffee from '../assets/img/coffee.png';
import featuredImage01 from '../assets/img/featured-image-01.jpg';
import featuredImage02 from '../assets/img/featured-image-02.jpg';
import featuredImage03 from '../assets/img/featured-image-03.jpg';
import featuredImage04 from '../assets/img/featured-image-04.jpg';
import food from '../assets/img/food.png';
// import footerBackground from '../assets/img/footer_background.jpg';
// import fullBg from '../assets/img/full-bg.png';
import gallery01 from '../assets/img/gallery_01.jpg';
import gallery02 from '../assets/img/gallery_02.jpg';
import gallery03 from '../assets/img/gallery_03.jpg';
import gallery04 from '../assets/img/gallery_04.jpg';
import gallery05 from '../assets/img/gallery_05.jpg';
import gallery06 from '../assets/img/gallery_06.jpg';
import gallery07 from '../assets/img/gallery_07.jpg';
import gallery08 from '../assets/img/gallery_08.jpg';
import gallery09 from '../assets/img/gallery_09.jpg';
import gallery10 from '../assets/img/gallery_10.jpg';
// import iconTop from '../assets/img/icon_top.png';
// import loaderAnimation from '../assets/img/loader-animation.gif';
import logo from '../assets/img/logo.png';
import menuItemThumbnail01 from '../assets/img/menu-item-thumbnail-01.jpg';
import menuItemThumbnail02 from '../assets/img/menu-item-thumbnail-02.jpg';
import menuItemThumbnail03 from '../assets/img/menu-item-thumbnail-03.jpg';
import menuItemThumbnail04 from '../assets/img/menu-item-thumbnail-04.jpg';
import menuItemThumbnail05 from '../assets/img/menu-item-thumbnail-05.jpg';
import menuItemThumbnail06 from '../assets/img/menu-item-thumbnail-06.jpg';
import menuItemThumbnail07 from '../assets/img/menu-item-thumbnail-07.jpg';
import menuItemThumbnail08 from '../assets/img/menu-item-thumbnail-08.jpg';
import menuItemThumbnail09 from '../assets/img/menu-item-thumbnail-09.jpg';
import menuItemThumbnail10 from '../assets/img/menu-item-thumbnail-10.jpg';
// import newsLetterBg from '../assets/img/newsletter-bg.jpg';
// import nextHover from '../assets/img/next_hover.png';
// import next from '../assets/img/next.png';
// import specialMenuBg from '../assets/img/special_menu_bg.jpg';
import specialMenu1 from '../assets/img/special-menu-1.jpg';
import specialMenu2 from '../assets/img/special-menu-2.jpg';
import specialMenu3 from '../assets/img/special-menu-3.jpg';
import staff01 from '../assets/img/staff-01.jpg';
import staff02 from '../assets/img/staff-02.jpg';
import staff03 from '../assets/img/staff-03.jpg';
import store from '../assets/img/store.png';
// import teamBg from '../assets/img/team_bg.jpg';


// import '../assets/js/all.js';

import '../assets/js/custom.js'







export class MainComponent extends Component {

    render() {
        return (
            <div>
                {/* <div id='loader'>
                <div id='status'></div>
            </div> */}
             
            <Header/>

                <div id='banner' className='banner full-screen-mode parallax'>
                    <div className='container pr'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='banner-static'>
                                <div className='banner-text'>
                                    <div className='banner-cell'>
                                        <h1>Dinner with us  <span className='typer' id='some-id' data-delay='200' data-delim=':' data-words='Friends:Family:Officemates' data-colors='red'></span><span className='cursor' data-owner='some-id'></span></h1>
                                        <h2>Accidental appearances </h2>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod</p>
                                        <div className='book-btn'>
                                            <em href='#reservation' className='table-btn hvr-underline-from-center'>Book my Table</em>
                                        </div>
                                        <em href='#about'>
                                            <div className='mouse'></div>
                                        </em>
                                    </div>
                                    {/*  end banner-cell */}
                                </div>
                                {/*  end banner-text */}
                            </div>
                            {/*  end banner-static */}
                        </div>
                        {/*  end col */}
                    </div>
                    {/*  end container */}
                </div>
                {/*  end banner */}

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
                            {/*  end col */}
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'>
                                    <div className='about-images'>
                                        <img className='about-main' src={aboutMain} alt='About Main' />
                                        <img className='about-inset' src={aboutInset} alt='About Inset' />
                                    </div>
                                </div>
                            </div>
                            {/*  end col */}
                        </div>
                        {/*  end row */}
                    </div>
                    {/*  end container */}
                </div>

                <div className='special-menu pad-top-100 parallax'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <div className='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'>
                                    <h2 className='block-title color-white text-center'> Today's Special </h2>
                                    <h5 className='title-caption text-center'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia,nostrud exercitation ullamco. </h5>
                                </div>

                                <div className='container-fluid special-box' >
                                    <OwlCarousel items={3}
                                        className="owl-theme"
                                        autoplay={true}
                                        loop
                                        margin={10}
                                    >
                                        <div ><img className="img" src={specialMenu1} alt='sp' /></div>
                                        <div ><img className="img" src={specialMenu2} alt='sp' /></div>
                                        <div ><img className="img" src={specialMenu3} alt='sp' /></div>
                                    </OwlCarousel>
                                </div>


                                {/* <div className='special-box'>
                                <div id='owl-demo'>
                                    <div className='item item-type-zoom'>
                                        <em href='#' className='item-hover'>
                                            <div className='item-info'>
                                                <div className='headline'>
                                                    SALMON STEAK
                                                    <div className='line'></div>
                                                    <div className='dit-line'>Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                                                </div>
                                            </div>
                                        </em>
                                        <div className='item-img'>
                                            <img src={specialMenu1} alt='sp-menu'/>
                                        </div>
                                    </div>
                                    <div className='item item-type-zoom'>
                                        <em href='#' className='item-hover'>
                                            <div className='item-info'>
                                                <div className='headline'>
                                                    ITALIAN PIZZA
                                                    <div className='line'></div>
                                                    <div className='dit-line'>Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                                                </div>
                                            </div>
                                        </em>
                                        <div className='item-img'>
                                            <img src={specialMenu2} alt='sp-menu' />
                                        </div>
                                    </div>
                                    <div className='item item-type-zoom'>
                                        <em href='#' className='item-hover'>
                                            <div className='item-info'>
                                                <div className='headline'>
                                                    VEG. ROLL
                                                    <div className='line'></div>
                                                    <div className='dit-line'>Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                                                </div>
                                            </div>
                                        </em>
                                        <div className='item-img'>
                                            <img src={specialMenu3} alt='sp-menu'/>
                                        </div>
                                    </div>
                                    <div className='item item-type-zoom'>
                                        <em href='#' className='item-hover'>
                                            <div className='item-info'>
                                                <div className='headline'>
                                                    SALMON STEAK
                                                    <div className='line'></div>
                                                    <div className='dit-line'>Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                                                </div>
                                            </div>
                                        </em>
                                        <div className='item-img'>
                                            <img src={specialMenu1} alt='sp-menu'/>
                                        </div>
                                    </div>
                                    <div className='item item-type-zoom'>
                                        <em href='#' className='item-hover'>
                                            <div className='item-info'>
                                                <div className='headline'>
                                                    VEG. ROLL
                                                    <div className='line'></div>
                                                    <div className='dit-line'>Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                                                </div>
                                            </div>
                                        </em>
                                        <div className='item-img'>
                                            <img src={specialMenu2} alt='sp-menu'/>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                                {/*  end special-box */}
                            </div>
                            {/*  end col */}
                        </div>
                        {/*  end row */}
                    </div>
                    {/*  end container */}
                </div>
                {/*  end special-menu */}

                <div id='menu' className='menu-main pad-top-100 pad-bottom-100'>
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
                                            {/*  end col */}
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
                                            {/*  end col */}
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
                                            {/*  end col */}
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
                                            {/*  end col */}
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
                                            {/*  end col */}
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
                                            {/*  end col */}
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
                                            {/*  end col */}
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
                                            {/*  end col */}
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
                                            {/*  end col */}
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
                                            {/*  end col */}
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
                                            {/*  end col */}
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
                                            {/*  end col */}
                                        </div>
                                    </div>
                                </div>
                                {/*  end tab-menu */}
                            </div>
                            {/*  end col */}
                        </div>
                        {/*  end row */}
                    </div>
                    {/*  end container */}
                </div>
                {/*  end menu */}

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
                                        {/*  end col */}
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
                                        {/*  end col */}
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
                                        {/*  end col */}
                                    </div>
                                    {/*  end row */}

                                </div>
                                {/*  end team-box */}

                            </div>
                            {/*  end col */}
                        </div>
                        {/*  end row */}
                    </div>
                    {/*  end container */}
                </div>
                {/*  end team-main */}

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
                                {/*  end gal-container */}
                            </div>
                            {/*  end col */}
                        </div>
                        {/*  end row */}
                    </div>
                    {/*  end container */}
                </div>
                {/*  end gallery-main */}

                <div id='blog' className='blog-main pad-top-100 pad-bottom-100 parallax'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <h2 className='block-title text-center'>
                                    Our Blog
                        </h2>
                                <div className='blog-box clearfix'>
                                    <div className='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'>
                                        <div className='col-md-6 col-sm-6'>
                                            <div className='blog-block'>
                                                <div className='blog-img-box'>
                                                    <img src={featuredImage01} alt='' />
                                                    <div className='overlay'>
                                                        <em href=''><i className='fa fa-link' aria-hidden='true'></i></em>
                                                    </div>
                                                </div>
                                                <div className='blog-dit'>
                                                    <p><span>25 NOVEMBER, 2014</span></p>
                                                    <h2>LATEST RECIPES JUST IN!</h2>
                                                    <h5>BY John Doggett</h5>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  end col */}
                                    </div>
                                    <div className='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'>
                                        <div className='col-md-6 col-sm-6'>
                                            <div className='blog-block'>
                                                <div className='blog-img-box'>
                                                    <img src={featuredImage02} alt='' />
                                                    <div className='overlay'>
                                                        <em href=''><i className='fa fa-link' aria-hidden='true'></i></em>
                                                    </div>
                                                </div>
                                                <div className='blog-dit'>
                                                    <p><span>2 NOVEMBER, 2014</span></p>
                                                    <h2>NEW RECRUITS HAVE ARRIVED!</h2>
                                                    <h5>BY Jeffrey Spender</h5>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  end col */}
                                    </div>
                                    <div className='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'>
                                        <div className='col-md-6 col-sm-6'>
                                            <div className='blog-block'>
                                                <div className='blog-img-box'>
                                                    <img src={featuredImage03} alt='' />
                                                    <div className='overlay'>
                                                        <em href=''><i className='fa fa-link' aria-hidden='true'></i></em>
                                                    </div>
                                                </div>
                                                <div className='blog-dit'>
                                                    <p><span>4 NOVEMBER, 2014</span></p>
                                                    <h2>BAKING TIPS FROM THE PROS</h2>
                                                    <h5>BY Monica Reyes</h5>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  end col */}
                                    </div>
                                    <div className='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'>
                                        <div className='col-md-6 col-sm-6'>
                                            <div className='blog-block'>
                                                <div className='blog-img-box'>
                                                    <img src={featuredImage04} alt='' />
                                                    <div className='overlay'>
                                                        <em href=''><i className='fa fa-link' aria-hidden='true'></i></em>
                                                    </div>
                                                </div>
                                                <div className='blog-dit'>
                                                    <p><span>12 NOVEMBER, 2014</span></p>
                                                    <h2>ALL YOUR EGGS BELONG TO US</h2>
                                                    <h5>BY John Doggett</h5>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  end col */}
                                    </div>
                                </div>
                                {/*  end blog-box */}

                                <div className='blog-btn-v'>
                                    <em className='hvr-underline-from-center' href='#'>View the Blog</em>
                                </div>

                            </div>
                            {/*  end col */}
                        </div>
                        {/*  end row */}
                    </div>
                    {/*  end container */}
                </div>
                {/*  end blog-main */}

                <div id='pricing' className='pricing-main pad-top-100 pad-bottom-100'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <h2 className='block-title text-center'>
                                    Pricing
                            </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci varius, elementum lectus nec, aliquam lectus. Duis neque augue, maximus in sapien ut, porta pharetra odio.</p>
                            </div>
                            <div className='panel-pricing-in'>
                                {/*  item */}
                                <div className='col-md-4 col-sm-4 text-center'>
                                    <div className='panel panel-pricing'>
                                        <div className='panel-heading'>
                                            <div className='pric-icon'>
                                                <img src={store} alt='' />
                                            </div>
                                            <h3>Basic</h3>
                                        </div>
                                        <div className='panel-body text-center'>
                                            <p><strong>$30/<span>Month</span></strong></p>
                                        </div>
                                        <ul className='list-group text-center'>
                                            <li className='list-group-item'><i className='fa fa-check'></i> One Website</li>
                                            <li className='list-group-item'><i className='fa fa-check'></i> One User</li>
                                            <li className='list-group-item'><i className='fa fa-check'></i> 10 GB Bandwidth</li>
                                            <li className='list-group-item'><i className='fa fa-times'></i> 2GB Storage</li>
                                            <li className='list-group-item'><i className='fa fa-times'></i> Offline work</li>
                                            <li className='list-group-item'><i className='fa fa-check'></i> 24x7 Support</li>
                                        </ul>
                                        <div className='panel-footer'>
                                            <em className='btn btn-lg btn-block hvr-underline-from-center' href='#'>Purchase Now!</em>
                                        </div>
                                    </div>
                                </div>
                                {/*  /item */}

                                {/*  item */}
                                <div className='col-md-4 col-sm-4 text-center'>
                                    <div className='panel panel-pricing'>
                                        <div className='panel-heading'>
                                            <div className='pric-icon'>
                                                <img src={food} alt='' />
                                            </div>
                                            <h3>Pro</h3>
                                        </div>
                                        <div className='panel-body text-center'>
                                            <p><strong>$60/<span>Month</span></strong></p>
                                        </div>
                                        <ul className='list-group text-center'>
                                            <li className='list-group-item'><i className='fa fa-check'></i> One Website</li>
                                            <li className='list-group-item'><i className='fa fa-check'></i> One User</li>
                                            <li className='list-group-item'><i className='fa fa-check'></i> 50 GB Bandwidth</li>
                                            <li className='list-group-item'><i className='fa fa-check'></i> 2GB Storage</li>
                                            <li className='list-group-item'><i className='fa fa-check'></i> Offline work</li>
                                            <li className='list-group-item'><i className='fa fa-check'></i> 24x7 Support</li>
                                        </ul>
                                        <div className='panel-footer'>
                                            <em className='btn btn-lg btn-block hvr-underline-from-center' href='#'>Purchase Now!</em>
                                        </div>
                                    </div>
                                </div>
                                {/*  /item */}

                                {/*  item */}
                                <div className='col-md-4 col-sm-4 text-center'>
                                    <div className='panel panel-pricing'>
                                        <div className='panel-heading'>
                                            <div className='pric-icon'>
                                                <img src={coffee} alt='' />
                                            </div>
                                            <h3>Platinum</h3>
                                        </div>
                                        <div className='panel-body text-center'>
                                            <p><strong>$90/<span>Month</span></strong></p>
                                        </div>
                                        <ul className='list-group text-center'>
                                            <li className='list-group-item'><i className='fa fa-check'></i> One Website</li>
                                            <li className='list-group-item'><i className='fa fa-check'></i> One User</li>
                                            <li className='list-group-item'><i className='fa fa-check'></i> 100 GB Bandwidth</li>
                                            <li className='list-group-item'><i className='fa fa-check'></i> 2GB Storage</li>
                                            <li className='list-group-item'><i className='fa fa-check'></i> Offline work</li>
                                            <li className='list-group-item'><i className='fa fa-check'></i> 24x7 Support</li>
                                        </ul>
                                        <div className='panel-footer'>
                                            <em className='btn btn-lg btn-block hvr-underline-from-center' href='#'>Purchase Now!</em>
                                        </div>
                                    </div>
                                </div>
                                {/*  /item */}
                            </div>
                        </div>
                        {/*  end row */}
                    </div>
                    {/*  end container */}
                </div>
                {/*  end pricing-main */}

                <div id='reservation' className='reservations-main pad-top-100 pad-bottom-100'>
                    <div className='container'>
                        <div className='row'>
                            <div className='form-reservations-box'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'>
                                        <h2 className='block-title text-center'>
                                            Reservations
                            </h2>
                                    </div>
                                    <h4 className='form-title'>BOOKING FORM</h4>
                                    <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>

                                    <form id='contact-form' method='post' className='reservations-box' name='contactform' action='mail.php'>
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                            <div className='form-box'>
                                                <input type='text' name='form_name' id='form_name' placeholder='Name' required='required' data-error='Firstname is required.' />
                                            </div>
                                        </div>
                                        {/*  end col */}
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                            <div className='form-box'>
                                                <input type='email' name='email' id='email' placeholder='E-Mail ID' required='required' data-error='E-mail id is required.' />
                                            </div>
                                        </div>
                                        {/*  end col */}
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                            <div className='form-box'>
                                                <input type='text' name='phone' id='phone' placeholder='contact no.' />
                                            </div>
                                        </div>
                                        {/*  end col */}
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                            <div className='form-box'>
                                                <select name='no_of_persons' id='no_of_persons' className='selectpicker'>
                                                    <option disabled>No. Of persons</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/*  end col */}
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                            <div className='form-box'>
                                                <input type='text' name='date-picker' id='date-picker' placeholder='Date' required='required' data-error='Date is required.' />
                                            </div>
                                        </div>
                                        {/*  end col */}
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                            <div className='form-box'>
                                                <input type='text' name='time-picker' id='time-picker' placeholder='Time' required='required' data-error='Time is required.' />
                                            </div>
                                        </div>
                                        {/*  end col */}
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                            <div className='form-box'>
                                                <select name='preferred_food' id='preferred_food' className='selectpicker'>
                                                    <option disabled>preferred food</option>
                                                    <option>Indian</option>
                                                    <option>Continental</option>
                                                    <option>Mexican</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/*  end col */}
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                            <div className='form-box'>
                                                <select name='occasion' id='occasion' className='selectpicker'>
                                                    <option disabled>Occasion</option>
                                                    <option>Wedding</option>
                                                    <option>Birthday</option>
                                                    <option>Anniversary</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/*  end col */}

                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                            <div className='reserve-book-btn text-center'>
                                                <button className='hvr-underline-from-center' type='submit' value='SEND' id='submit'>BOOK MY TABLE </button>
                                            </div>
                                        </div>
                                        {/*  end col */}
                                    </form>
                                    {/*  end form */}
                                </div>
                                {/*  end col */}
                            </div>
                            {/*  end reservations-box */}
                        </div>
                        {/*  end row */}
                    </div>
                    {/*  end container */}
                </div>
                {/*  end reservations-main */}

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
                                {/*  end col */}
                            </div>
                            {/*  end row */}
                        </div>
                        {/*  end container */}
                    </div>
                    {/*  end footer-news */}
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
                                        {/*  end footer-box-a */}
                                    </div>
                                    {/*  end col */}
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
                                        {/*  end footer-box-b */}
                                    </div>
                                    {/*  end col */}
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
                                        {/*  end footer-box-c */}
                                    </div>
                                    {/*  end col */}
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
                                        {/*  end footer-box-d */}
                                    </div>
                                    {/*  end col */}
                                </div>
                                {/*  end footer-in-main */}
                            </div>
                            {/*  end row */}
                        </div>
                        {/*  end container */}
                        <div id='copyright' className='copyright-main'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                        <h6 className='copy-title'> Copyright &copy; 2017 Food Funday is powered by <em href='#' target='_blank'></em> </h6>
                                    </div>
                                </div>
                                {/*  end row */}
                            </div>
                            {/*  end container */}
                        </div>
                        {/*  end copyright-main */}
                    </div>
                    {/*  end footer-box */}
                </div>
                {/*  end footer-main */}

                <em href='#' className='scrollup'>Scroll</em>

                <section id='color-panel' className='close-color-panel'>
                    <em className='panel-button gray2'><i className='fa fa-cog fa-spin fa-2x'></i></em>
                    {/*  Colors */}
                    <div className='segment'>
                        <h4 className='gray2 normal no-padding'>Color Scheme</h4>
                        <em title='orange' className='switcher orange-bg'></em>
                        <em title='strong-blue' className='switcher strong-blue-bg'></em>
                        <em title='moderate-green' className='switcher moderate-green-bg'></em>
                        <em title='vivid-yellow' className='switcher vivid-yellow-bg'></em>
                    </div>
                </section>
            </div>
        
        )
    }

}