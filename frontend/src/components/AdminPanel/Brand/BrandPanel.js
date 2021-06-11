import React, {Component} from 'react';
import axios from "axios";
import './BrandPanel.css'

class BrandPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            text: '',
            isLoading: true
        }
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange = (e) => {
        console.log(this.state.subject);
        console.log(this.state.text);
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    sendMail = () => {
        let data = new FormData();
        data.append('subject', this.state.subject);
        data.append('text', this.state.text);
        axios.post("http://localhost:8080/api/emails/send", data)
    }

    render() {
        const {subject, text} = this.state
        return (
            <div>
                <div className="add-brand">
                    <h3>Відправити розсилку</h3>
                    <div className="add-brand_inner">
                        <div className="add-brand-group">
                            <label>Тема повідомлення</label>
                            <input className="review-form-input" required={true} type="input"
                                   value={subject}
                                   name="subject"
                                   onChange={this.inputChange} placeholder="Тема"/>
                            <label>Текст повідомлення</label>
                            <textarea className="review-form-textarea" required={true}
                                   value={text}
                                   name="text"
                                   onChange={this.inputChange} placeholder="Текст..."/>
                        </div>

                        <div className="btn-send-container">
                            <button className="btn-send" type="submit"
                                    onClick={this.sendMail}>
                                <a>Відправити</a>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default BrandPanel;
