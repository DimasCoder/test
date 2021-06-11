import React from 'react';
import {Link} from "react-router-dom";
import './ShoppingCart.css'
import logo from "../../assets/rem7.png";

const ShoppingCart = props => {
    let drawerClasses = 'shopping-cart';
    if(props.show){
        drawerClasses = 'shopping-cart open';
    }
    return(
        <div className={drawerClasses}>
            <div className="shopping-cart__inner">
            <table className="cart-table">
                <tr>
                    <th>Товар</th>
                    <th>Зображення</th>
                    <th>Ціна</th>
                    <th>Видалити</th>
                </tr>
                {props.cartItems.map((item, index) => (
                    <tr key={index}>
                        <td>{item.productName}</td>
                        <td><img
                            className="cart-image"
                            src={`data:image/png;base64,${item.file.data}`}
                            alt="Product image"
                        /></td>
                        <td>{item.price}</td>
                        <td><input type="button" value="X" onClick={() => props.removeFromCart(item)}
                                                           className="btn-cancel"/></td>
                    </tr>
                ))}

            </table>
            <div className="shopping-cart-footer">
                <div className="order-sum">
                    <p>Сума замовлення:</p>
                    <p>{props.cartItems.reduce((a, c) => a + c.price, 0)}.00₴</p>
                </div>
                <span>Всього: {props.cartItems.reduce((a, c) => a + c.price, 0)}.00 грн</span>
                <Link className="order-button" to="/checkout" onClick={() => {props.click()}}>Перейти до оформлення</Link>
            </div>
            </div>
        </div>
    )
}
export default ShoppingCart;
