import React, {Component} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import Line from "../../components/Line/Line";

class Payment extends Component {
    render() {
        return (
            <div className="container">
                <div className="page__inner">
                    <PageTitle title="Оплата"/>
                    <Line/>
                    <p>Оплата придбаних товарів здійснюється відповідно до виставленого рахунку через касу банку, термінал або систему Приват24.</p>
                </div>
            </div>
        );
    }
}

export default Payment;
