import React, {Component} from 'react';
import './WhereToBuy.css'
import PageTitle from "../../components/PageTitle/PageTitle";
import Line from "../../components/Line/Line";

class WhereToBuy extends Component {
    render() {
        return (
            <div className="container">
                <div className="page__inner">
                    <PageTitle title="Де купити"/>
                    <Line/>
                </div>
            </div>
        );
    }
}

export default WhereToBuy;
