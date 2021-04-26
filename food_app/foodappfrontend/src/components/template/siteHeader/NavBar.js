import React, { Component } from 'react';

export default class NavBar extends Component {

    render() {
        return (
            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav navbar-right'>
                    <li className='active'><em href='#banner'>Home</em></li>
                    <li><em href='#about'>About us</em></li>
                    <li><em href='#menu'>Menu</em></li>
                    <li><em href='#our_team'>Team</em></li>
                    <li><em href='#gallery'>Gallery</em></li>
                    <li><em href='#blog'>Blog</em></li>
                    <li><em href='#pricing'>pricing</em></li>
                    <li><em href='#reservation'>Reservaion</em></li>
                    <li><em href='#footer'>Contact us</em></li>
                </ul>
            </div>
        )
    }

}