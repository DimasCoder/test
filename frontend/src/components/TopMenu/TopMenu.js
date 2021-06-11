import React, {Component} from 'react'
import "./TopMenu.css"
import Line from "../Line/Line";
import DoorCategory from "../DoorCategory/DoorCategory";
import axios from "axios";
import Backdrop from "../Backdrop/Backdrop";
import def1 from "../../assets/banner1.png"
import def2 from "../../assets/banner2.png"
import Loader from "../Loader/Loader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";

export default class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            brands: [],
            warehouseDoor: [{subClass: "Складська програма", minPrice: 0, maxPrice: 35000, filter:true, url: 'warehouse'}],
            streetDoor: [{subClass: "Преміум", minPrice: 22700, maxPrice: 35000, url: 'streetDoor'},
                {subClass: "Стандарт", minPrice: 11200, maxPrice: 22700, url: 'streetDoor'},
                {subClass: "Економ", minPrice: 0, maxPrice: 11200, url: 'streetDoor'}],
            flatDoor: [{subClass: "Преміум", minPrice: 22700, maxPrice: 35000, url: 'flatDoor'},
                {subClass: "Стандарт", minPrice: 11200, maxPrice: 22700, url: 'flatDoor'},
                {subClass: "Економ", minPrice: 0, maxPrice: 11200, url: 'flatDoor'}],
            techDoor: [{subClass: "Технічні", minPrice: 0, maxPrice: 35000, url: 'techDoor'},
                {subClass: "Протипожежні", minPrice: 0, maxPrice: 35000, url: 'fireDoor'}],
            interiorDoor: [{subClass: "TM «BRAMA» складська програма", filter: 'flatDoor', url: 'interiorDoor'}]
        };
    }


    componentDidMount() {
        this.findAllBrands();
    }

    findAllBrands() {
        axios.get("/api/brand/all")
            .then(response => response.data)
            .then((data) => {
                this.setState({brands: data, isLoading: false})

            });
    }

    // playVideo(e){
    //     console.log(e)
    //     let video, image, btn;
    //     video = document.getElementById("video" + e)
    //     image = document.getElementById("image" + 1)
    //     btn = document.getElementById("btn-close" + 1)
    //     // console.log(video.outerHTML + " " + image.outerHTML + " " + btn.outerHTML)
    //     console.log(video.style.display === "none")
    //     if(video.style.display === "none"){
    //         video.style.display = "flex"
    //         // video.src += "&autoplay=1"
    //         image.style.display = "none"
    //         btn.style.display = "flex"
    //     }
    // }
    //
    // close(e){
    //     let video, image, btn;
    //     video = document.getElementById("video" + e)
    //     image = document.getElementById("image" + e)
    //     btn = document.getElementById("btn-close" + e)
    //     console.log(video.outerHTML)
    //     video.style.display = "none"
    //     image.style.display = "flex"
    //     btn.style.display = "none"
    //     }

    render() {
        const {isLoading, warehouseDoor, streetDoor, flatDoor, techDoor, interiorDoor} = this.state
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            fade:true,
            lazyLoad: true,
            speed: 1000,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        };
        return (
            <div className="top-menu">
                <div>
                    <div className="top-menu-container">
                        <div className="door-categories">
                            <h2>Каталог дверей</h2>
                            <Line/>
                            <ul className="notAdaptive">
                                <DoorCategory text={"Складська програма"} url="warehouse" subClass={warehouseDoor}
                                              setFilter={this.props.setFilter}/>
                                <DoorCategory text={"Двері на вулицю"} url="streetDoor" subClass={streetDoor}
                                              setFilter={this.props.setFilter}/>
                                <DoorCategory text={"Двері в квартиру"} url="flatDoor" subClass={flatDoor}
                                              setFilter={this.props.setFilter}/>
                                <DoorCategory text={"Технічні двері"} url="techDoor" subClass={techDoor}
                                              setFilter={this.props.setFilter}/>
                                <DoorCategory text={"Міжкімнатні двері"} url="interiorDoor" subClass={interiorDoor}
                                              setFilter={this.props.setFilter}/>
                                {/*<DoorCategory text={"Протипожежні двері"} setFilter={this.props.setFilter}/>*/}
                            </ul>
                        </div>
                        <div className="carousel">
                            <div style={{width: '75%'}}>
                            <Slider {...settings}>
                                {/*<div className="carousel-video">*/}
                                {/*    <iframe id="video1" width="563" height="268"*/}
                                {/*            src="https://www.youtube.com/embed/tgbNymZ7vqY" rel="0"*/}
                                {/*            enablejsapi="1" modestbranding="0" controls="0" frameBorder="0"*/}
                                {/*            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"*/}
                                {/*            style={{display: "none"}}*/}
                                {/*            allowFullScreen></iframe>*/}
                                {/*    <img id="image1" className="carousel-image" src={def1}  onClick={() => {this.playVideo(1)}}/>*/}
                                {/*    <button id="btn-close1" className="btn-close" onClick={() => {this.close(1)}}>x</button>*/}
                                {/*</div>*/}
                                {/*<div className="carousel-video">*/}
                                {/*    <iframe id="video2" width="563" height="268"*/}
                                {/*            src="https://www.youtube.com/embed/NpU6YHCGZ_M" rel="0"*/}
                                {/*            enablejsapi="1" modestbranding="0" controls="0" frameBorder="0"*/}
                                {/*            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"*/}
                                {/*            style={{display: "none"}}*/}
                                {/*            allowFullScreen></iframe>*/}
                                {/*    <img id="image2" className="carousel-image" src={def2}   onClick={() => {this.playVideo(2)}}/>*/}
                                {/*    <button id="btn-close2" className="btn-close" onClick={() => {this.close(2)}}>x</button>*/}
                                {/*</div>*/}
                                <img className="carousel-image" src={def1}/>
                                <img className="carousel-image" src={def2}/>

                            </Slider>
                            </div>

                            <div className="carousel-text">
                                <article>Захисти свій дім</article>
                                <p>вибирай сертифіковані зламостійкі вхідні двері</p>
                                <NavLink exact to="/protected-door" className="protected-door-link">Детальніше</NavLink>
                            </div>
                        </div>
                        {/*<div className="carousel-test">*/}
                        {/*    <Slider {...settings}>*/}
                        {/*        <img className="carousel-image" src={def1}/>*/}
                        {/*        <img className="carousel-image" src={def2}/>*/}
                        {/*    </Slider>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }
}
