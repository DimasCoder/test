import React from 'react';
import {Link} from "react-scroll";
import './SideDrawer.css'
import logo from "../../assets/logo.png";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAddressCard,
    faComments,
    faCreditCard, faIdBadge,
    faMoneyBillAlt,
    faPaperPlane
} from "@fortawesome/free-regular-svg-icons";
import {faCaretDown, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <div className={drawerClasses}>
            <div className="side-drawer__inner">
                <div className="side-drawer__logo">
                    <img
                        src={logo}
                        className="side-drawer__logo-image"
                        alt="Logo"
                    />
                </div>

                <nav className="side-drawer__navigation">
                    <NavLink exact to="/delivery" className="side-drawer__navigation-link">
                        <FontAwesomeIcon icon={faPaperPlane}/> Доставка
                    </NavLink>
                    <NavLink exact to="/payment" className="side-drawer__navigation-link">
                        <FontAwesomeIcon icon={faMoneyBillAlt}/> Оплата
                    </NavLink>
                    <NavLink exact to="/contact" className="side-drawer__navigation-link">
                        <FontAwesomeIcon icon={faAddressCard}/> Контакти
                    </NavLink>
                    <NavLink exact to="/how-to-buy" className="side-drawer__navigation-link">
                        <FontAwesomeIcon icon={faCreditCard}/> Як купити
                    </NavLink>
                    <NavLink exact to="/partners" className="side-drawer__navigation-link">
                        <FontAwesomeIcon icon={faIdBadge}/> Наші партнери
                    </NavLink>
                    <NavLink exact to="/where-to-buy" className="side-drawer__navigation-link">
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Де купити
                    </NavLink>
                    <NavLink exact to="/novelty" className="novelty-link">Новини</NavLink>
                </nav>
                <div className="side-drawer__contact">
                    <a className="contact-phone" href="tel:0673824812">(067)-382-48-12 <span>Керівник представництва</span></a>
                    <a className="contact-phone" href="tel:0672916350">(067)-291-63-50 <span>Приймання замовлень</span></a>
                    <a className="contact-phone" href="tel:0968381053">(096)-838-10-53 <span>Наявність та логістика</span></a>
                    <a className="contact-phone" href="tel:0978455159">(097)-845-51-59 <span>Регіональний менеджер</span></a>
                </div>
                <div className="side-drawer-social">
                    <a target="_blank" href="http://instagram.com"> <FontAwesomeIcon icon={faInstagram}/></a>
                    <a target="_blank" href="http://facebook.com"> <FontAwesomeIcon icon={faFacebookF}/></a>
                    <a target="_blank" href="http://youtube.com"> <FontAwesomeIcon icon={faYoutube}/></a>
                </div>
            </div>
        </div>
    )
}
export default SideDrawer;
