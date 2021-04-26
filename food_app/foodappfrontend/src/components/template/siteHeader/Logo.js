import React, { Component } from 'react';



import logo from '../../../assets/img/logo.png';

export default class Logo extends Component {

    render() {
        return (<div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
            </button>
            <div className='logo'>
                <em className='navbar-brand js-scroll-trigger logo-header' href='#'>
                    <img src={logo} alt='' />
                </em>
            </div>
        </div >
        )
    }

}