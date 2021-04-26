import React, { Component } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
// import '../../../assets/css/responsive.css';
// import '../../../assets/css/slick.css';
// import '../../../assets/css/style.css';


export default class Header extends Component {

    render() {
        return (
            <div id='site-header'>
                <header id='header' className='header-block-top'>
                    <div className='container'>
                        <div className='row'>
                            <div className='main-menu'>
                                <nav className='navbar navbar-default' id='mainNav'>
                                    <Logo />
                                    <NavBar />
                                </nav>
                                {/*  end navbar */}
                            </div>
                        </div>
                        {/*  end row */}
                    </div>
                    {/*  end container-fluid */}
                </header>
                {/*  end header */}
            </div>)
    }

}