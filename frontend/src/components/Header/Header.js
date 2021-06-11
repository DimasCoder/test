import React, {useState, useEffect, Component} from 'react';
import "./Header.css";
import "../..//App.css";
import logo from '../../assets/logo.png';
import ToggleButton from '../ToggleButton/ToggleButton'
import {NavLink, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faExclamationCircle, faExclamation} from '@fortawesome/free-solid-svg-icons'


class Header extends Component{
    constructor() {
        super();
        this.state ={
            search:''
        }
    }


    handleChange = (e) =>{
        this.setState({search: e.target.value});
        this.props.search(e.target.value);
    }


    render(){
        const {cartItems} = this.props
    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    {/*<div className="header-logo">*/}
                    <a className="logo-link" href="/">
                    <img
                        src={logo}
                        className="header__inner-logo"
                        alt="Logo"
                    />
                    </a>
                    <a className="logo-link-adaptive" href="/">
                    <img
                        src={logo}
                        className="header__inner-logo-adaptive"
                        alt="Logo"
                    />
                    </a>
                    <div className="search-container">
                        <input className="input-search"
                               value={this.search}
                               onChange={this.handleChange}
                               type="text"
                               placeholder="Я шукаю"/>
                        <FontAwesomeIcon className="search-icon" icon={faSearch} />
                    </div>

                    {/*<a className="logo-link" href="/">*/}
                    {/*    <img*/}
                    {/*        src={logo}*/}
                    {/*        className="header__inner-logo"*/}
                    {/*        alt="Logo"*/}
                    {/*    />*/}
                    {/*</a>*/}
                    {/*<div className="shopping-cart-icon" onClick={this.props.shoppingCartClickHandler}>*/}
                    {/*    <p>Кошик {cartItems.reduce((a, c) => a + c.count, 0)}</p>*/}
                    {/*</div>*/}
                    {/*<div className="header__inner-contact">*/}
                    {/*    <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-999-09-99</a>*/}
                    {/*    <a className="contact-phone" href="tel:0999990999"><span>(</span>+380<span>)</span>-999-09-99</a>*/}
                    {/*    /!*<a className="contact-email" href="#">monovex.studio@gmail.com</a>*!/*/}
                    {/*</div>*/}
                    <div className="header-info">
                        <div className="time-table">
                            <span>ПН-ПТ - 10:00 - 18:00</span>
                            <span>СБ - вихідний</span>
                            <span>НД - вихідний</span>
                        </div>
                        <div className="novelty-container">
                        <NavLink exact to="/novelty" className="novelty-link">Новини</NavLink>
                        </div>
                    </div>
                    <div className="header__inner-toggle">
                        <ToggleButton click={this.props.drawerClickHandler} toggle={this.props.toggle}/>
                    </div>
                </div>
            </div>

        </header>

    )
    }
}

export default Header;
