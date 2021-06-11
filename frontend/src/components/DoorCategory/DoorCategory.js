import React from 'react';
import './DoorCategory.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const DoorCategory = props => {
    return (
        <li className="door-category-container" tabindex="0">
            <input type="checkbox" id={props.text}/>
            <label for={props.text} className="door-category-text">
                <Link to={`/doors/${props.url}`}>
                <p>{props.text}</p>
                </Link>
                <span><FontAwesomeIcon icon={faCaretRight}/></span>
            </label>
            <ul className="dropdown-content">
                {props.subClass.map((sClass) => (
                    <li><Link to={`/doors/${sClass.url}`} onClick={() => {props.setFilter(sClass.minPrice, sClass.maxPrice, sClass.filter)}}>{sClass.subClass}</Link></li>
                ) )}
            </ul>
            <ul className="dropdown-content-adaptive">
                {props.subClass.map((sClass) => (
                    <li><Link to={`/doors/${sClass.url}`} onClick={() => {props.setFilter(sClass.minPrice, sClass.maxPrice, sClass.filter)}}>{sClass.subClass}</Link></li>
                ) )}
            </ul>
        </li>
    )
}
export default DoorCategory;
