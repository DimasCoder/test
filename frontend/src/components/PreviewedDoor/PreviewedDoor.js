import React, {useState} from 'react'
import './PreviewedDoor.css'
import {Link, NavLink} from "react-router-dom";

const PreviewedDoor = props => {
    let avalaibility = props.product.available
    let [previouslyViewed, setPreviouslyViewed] = useState(localStorage.getItem("previouslyViewed") ? JSON.parse(localStorage.getItem("previouslyViewed")) : [])
    let available;
    if (avalaibility) {
        available = <span className="span-available">В наявності</span>
    } else {
        available = <span className="span-unavailable">Нема в наявності</span>
    }

    let image = 'data:image/png;base64,' + props.product.file.data;


    let toPriceFormat = (e) => {
        e = e.toString()
        e = e.substring(0,e.length - 3) + ' ' + e.substring(e.length - 3)
        return e
    }

    const addToLocalStorage = (id) => {
        previouslyViewed = previouslyViewed.slice()
        let alreadyViewed = false;
        previouslyViewed.forEach((item) => {
            if (item === id) {
                alreadyViewed = true
            }
        });
        if (!alreadyViewed && previouslyViewed.length < 5) {
            previouslyViewed = [...previouslyViewed, id]
        } else if (!alreadyViewed && previouslyViewed.length === 5) {
            previouslyViewed.shift()
            previouslyViewed = [...previouslyViewed, id]
        }
        localStorage.setItem("previouslyViewed", JSON.stringify(previouslyViewed));
    }

    return (
        <a href={`/door/${props.product.id}`} className="door-card-container">
            <img
                src={image}
                alt="Auto"
                className="door-logo"/>
            <div className="door-card-header">
                <p>Серія: {props.product.series}</p>
                {available}
            </div>
            <h3>Двері {props.product.doorName}</h3>

            <div className="doorPrev-card-footer">
                <span>{toPriceFormat(props.product.price)} грн.</span>
                {/*<NavLink to={`/doors/${props.product.doorType}/${props.product.doorName.replace(' ', '-')}`.toLowerCase()} className="to-cart"*/}
                {/*         product={props.product.doorName}>Детальніше</NavLink>*/}
                <a href={`/door/${props.product.id}`} className="to-cart"
                         product={props.product.doorName} onClick={() => {addToLocalStorage(props.product.id)}}>Детальніше</a>
            </div>

        </a>
    )
}
export default PreviewedDoor;
