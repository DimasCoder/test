import React, {Component} from 'react';
import './SearchSection.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import mercedes from '../../assets/mercedes1.png'

class SearchSection extends Component {

    render() {
        return (
            <div className="search-section-container">
                <div className="search-container">
                    <FontAwesomeIcon className="search-icon" icon={faSearch}/>
                    <input className="input-search"
                           value={this.search}
                           onChange={this.handleChange}
                           type="text"
                           placeholder="Пошук по номеру"/>
                </div>
                <img
                    src={mercedes}
                    className="mercedes-image"
                    alt="Mercedes"/>
            </div>
        )
    }
}

export default SearchSection
