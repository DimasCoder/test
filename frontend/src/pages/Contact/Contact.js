import React, {Component} from 'react';
import './Contact.css'
import PageTitle from "../../components/PageTitle/PageTitle";
import Line from "../../components/Line/Line";

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="page__inner">
                    <PageTitle title="Контакти"/>
                    <Line/>
                    <div className="contact-main">
                        <div className="contact-info">
                            <h3>Рівне</h3>
                            <h4>Інтернет-магазин Steel Guard West</h4>
                            <p>м.Рівне, вул. Біла 87д</p>
                            <h4>Телефони:</h4>
                            <p>(067)-382-48-12 Керівник представництва</p>
                            <p>(067)-291-63-50 Приймання замовлень</p>
                            <p>(096)-838-10-53 Наявність та логістика</p>
                            <p>(097)-845-51-59 Регіональний менеджер</p>
                            <h4>Email:</h4>
                            <p>example@gmail.com</p>
                        </div>
                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.268178392899!2d26.234417845868386!3d50.64071039432875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f6b5c14d816d1%3A0xf010b601c6ef7a2c!2zODdBLCDQstGD0LvQuNGG0Y8g0JHRltC70LAsIDg30JAsINCg0ZbQstC90LUsINCg0ZbQstC90LXQvdGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCAzMzAxNw!5e0!3m2!1suk!2sua!4v1623321344074!5m2!1suk!2sua"
                                width="500" height="400" style={{border : 0}} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;
