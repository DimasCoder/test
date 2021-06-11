import React, {Component} from 'react';
import './Partners.css'
import PageTitle from "../../components/PageTitle/PageTitle";
import Line from "../../components/Line/Line";

class Partners extends Component {
    render() {
        return (
            <div className="container">
                <div className="page__inner">
                    <PageTitle title="Наші партнери"/>
                    <Line/>
                </div>
            </div>
        );
    }
}

export default Partners;
