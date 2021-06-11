import React from 'react'
import "./MainSection.css"
import Catalog from "../Catalog/Catalog";
import TopMenu from "../TopMenu/TopMenu";
import SearchSection from "../SearchSection/SearchSection";

const MainSection = props => {
    let handleChange = (e) =>{
        props.search(e)
    }
    return (
        <div className="container">
            <div className="main-container">
                <div className="top-container">
                    <TopMenu setFilter={props.setFilter}/>
                </div>
                <div className="bottom-container">
                    {/*<SearchSection search={handleChange}/>*/}
                    <Catalog url={"all"} cartItems={props.cartItems} addToCart={props.addToCart} q={props.q}/>
                </div>
            </div>
        </div>
    )
}
export default MainSection;
