import React, {Component} from 'react';
import "./Navigation.css"
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faPaperPlane, faCreditCard, faAddressCard, faIdBadge, faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons'
import {faChevronDown, faCaretDown, faUserCog, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="container">
                    <div className="navigation__inner">
                        <nav className="navigation-links">
                            <div className="navigation-link nav-dropdown">
                                <FontAwesomeIcon icon={faComments} /> Номер телефону <FontAwesomeIcon icon={faCaretDown} />
                                <div className="dropdown-numbers">
                                    <a className="contact-phone" href="tel:0673824812"><span>(</span>067<span>)</span>-382-48-12 Керівник представництва</a>
                                    <a className="contact-phone" href="tel:0672916350"><span>(</span>067<span>)</span>-291-63-50 Приймання замовлень</a>
                                    <a className="contact-phone" href="tel:0968381053"><span>(</span>096<span>)</span>-838-10-53 Наявність та логістика</a>
                                    <a className="contact-phone" href="tel:0978455159"><span>(</span>097<span>)</span>-845-51-59 Регіональний менеджер</a>
                                </div>
                            </div>
                            <NavLink exact to="/delivery" className="navigation-link">
                                <FontAwesomeIcon icon={faPaperPlane} /> Доставка
                            </NavLink>
                            <NavLink exact to="/payment" className="navigation-link">
                                <FontAwesomeIcon icon={faMoneyBillAlt} /> Оплата
                            </NavLink>
                            <NavLink exact to="/contact" className="navigation-link">
                                <FontAwesomeIcon icon={faAddressCard} /> Контакти
                            </NavLink>
                            <NavLink exact to="/how-to-buy" className="navigation-link">
                                <FontAwesomeIcon icon={faCreditCard} /> Як купити
                            </NavLink>
                            <NavLink exact to="/partners" className="navigation-link">
                                <FontAwesomeIcon icon={faIdBadge} /> Наші партнери
                            </NavLink>
                            <NavLink exact to="/where-to-buy" className="navigation-link">
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> Де купити
                            </NavLink>
                        </nav>
                        {this.props.role && (
                            <NavLink exact to="/admin-panel" className="navigation-link">
                                <FontAwesomeIcon icon={faUserCog} /> Адмін-панель
                            </NavLink>
                        )}
                        <div className="nav-social">
                            <a target="_blank" href="http://instagram.com"> <FontAwesomeIcon icon={faInstagram} /></a>
                            <a target="_blank" href="http://facebook.com"> <FontAwesomeIcon icon={faFacebookF} /></a>
                            <a target="_blank" href="http://youtube.com"> <FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
