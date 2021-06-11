import React, {Component} from 'react';
import './AdminData.css'
import image from '../../../assets/bmw-logo.png'
import axios from "axios";

class AdminData extends Component {


    render() {
        let image = 'asd'
        if (this.props.data.file !== undefined) {
            image = 'data:image/png;base64,' + this.props.data.file.data;
        }
        return (
            <>
                <div className="admin-data-card">
                        <div className="admin-data-image">
                            <img
                                src={image}
                                alt="Admin data"
                            />
                        </div>
                    {console.log(this.props.data)}
                    <label>{this.props.data.modelName || this.props.data.brandName}</label>
                    <div className="admin-data-remove">
                        <input type="button" value="X"
                               onClick={() => this.props.remove(this.props.data.id)}
                               className="btn-cancel"/>
                        {console.log(this.props.data.id)}

                    </div>
                </div>
            </>
        );
    }
}

export default AdminData;