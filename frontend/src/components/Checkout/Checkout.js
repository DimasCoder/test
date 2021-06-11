import React, {Component} from 'react';
import './Checkout.css'

class Checkout extends Component {
    render() {
        return (
            <section className="checkout">
                <div className="container">
                    <h1>Оформлення замовлення</h1>
                    <div className="checkout__inner">
                        <div className="checkout__inner-left">
                            <div className="checkout-customer-data">
                                <h2>Ваші дані</h2>
                                <div className="data-field">
                                    <span>Ім'я *</span>
                                    <input className="review-form-input" required={true} type="name"
                                           name="productName"
                                           placeholder="Ваше ім'я"/>
                                </div>
                                <div className="data-field">
                                    <span>Прізвище *</span>
                                    <input className="review-form-input" required={true} type="input"
                                           name="productName"
                                           placeholder="Ваше прізвище"/>
                                </div>
                                <div className="data-field">
                                    <span>Номер телефону *</span>
                                    <input className="review-form-input" required={true} type="text"
                                           name="productName"
                                           placeholder="Ваш номер телефону"/>
                                </div>
                                <div className="data-field">
                                    <span>Електронна адреса</span>
                                    <input className="review-form-input" required={true} type="email"
                                           name="productName"
                                           placeholder="Ваша електронна адреса"/>
                                </div>


                            </div>
                            <div className="checkout-nova-poshta">

                            </div>

                        </div>
                        <div className="checkout__inner-right">
                            <div className="checkout-cart">
                                <div className="checkout-cart__inner">
                                    <h2>Ваше замовлення</h2>
                                    <span>Всього товарів: 2</span>

                                    <table className="cart-table">
                                        <tr>
                                            <th>Товар</th>
                                            <th>Зображення</th>
                                            <th>Ціна</th>
                                            <th>Видалити</th>
                                        </tr>
                                        {this.props.cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.productName}</td>
                                                <td><img
                                                    className="cart-image"
                                                    src={`data:image/png;base64,${item.file.data}`}
                                                    alt="Product image"
                                                /></td>
                                                <td>{item.price}</td>
                                                <td><input type="button" value="X" onClick={() => this.props.removeFromCart(item)}
                                                           className="btn-cancel"/></td>
                                            </tr>
                                        ))}

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Checkout;
