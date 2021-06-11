import React, {Component, useEffect, useState} from 'react';
import './FilteredCatalog.css'
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import PageTitle from "../PageTitle/PageTitle";
import {Link} from "react-router-dom";
import SliderRange from "@material-ui/core/Slider";
import Slider from "react-slick";
import def2 from "../../assets/banner1.png";
import def1 from "../../assets/banner2.png";
import {Typography} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import Loader from "../Loader/Loader";


const FilteredCatalog = (props) => {
    const [priceValue, setPriceValue] = useState(props.filter.length > 1 ? [props.filter[0], props.filter[1]] : [0, 35000]);
    const [resistance, setResistance] = useState([])
    const [series, setSeries] = useState([])
    const [products, setProducts] = useState([])
    const [sort, setSort] = useState("nameAZ")
    const [isLoading, setIsLoading] = useState(true)


    const setTitle = () => {
        if (props.typeFilter === 'flatDoor')
            return 'Двері в квартиру'
        else if (this.props.typeFilter === 'streetDoor')
            return 'Двері на вулицю'
        else
            return 'Всі двері'
    }

    useEffect(() => {
        findFilteredProducts();
    })
    // console.log(props.filter[2])

    const findFilteredProducts = () => {
            axios.get(`/api/doors/filter/${props.match.params.filter}`)
                .then(response => response.data)
                .then((data) => {
                    setProducts(data);   setIsLoading(false)
                });
        console.log(products)

    }

    const rangeSelector = (event, newValue) => {
        setPriceValue(newValue)
    };

    const handleChange = (e) => {
        setSort(e.target.value)
    }

    const sortDoors = (e) => {
        if (sort === "nameAZ") {
            return e.sort(function (a, b) {
                if (a.doorName > b.doorName) {
                    return 1;
                }
                if (a.doorName < b.doorName) {
                    return -1;
                }
                return 0;
            })
        } else if (sort === "nameZA") {
            return e.sort(function (a, b) {
                if (a.doorName < b.doorName) {
                    return 1;
                }
                if (a.doorName > b.doorName) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            })
        } else if (sort === "priceUp") {
            return e.sort(function (a, b) {
                return a.price - b.price;
            })
        } else if (sort === "priceDown") {
            return e.sort(function (a, b) {
                return b.price - a.price;
            })
        } else if (sort === "modelAZ") {
            return e.sort(function (a, b) {
                if (a.series > b.series) {
                    return 1;
                }
                if (a.series < b.series) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            })
        } else if (sort === "modelZA") {
            return e.sort(function (a, b) {
                if (a.series < b.series) {
                    return 1;
                }
                if (a.series > b.series) {
                    return -1;
                }
                return 0;
            })
        }
    }

    const changeSeries = (e) => {
        if (series.includes(e.target.value)) {
            setSeries(series.filter(function (ele) {
                return ele !== e.target.value
            }))
        } else {
            setSeries([...series, e.target.value])
        }
    }

    const changeResistance = (e) => {
        if (resistance.includes(e.target.value)) {
            setResistance(resistance.filter(function (ele) {
                return ele !== e.target.value
            }))
        } else {
            setResistance([...resistance, e.target.value])
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        fade: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const filteredProducts = products.filter((product) => {
        if (resistance.length > 0 && series.length > 0) {
            return product.price < priceValue[1] && product.price > priceValue[0] && (resistance.includes(product.burglaryResistance) && series.includes(product.series));
        } else if (resistance.length > 0) {
            return product.price < priceValue[1] && product.price > priceValue[0] && resistance.includes(product.burglaryResistance);
        } else if (series.length > 0) {
            return product.price < priceValue[1] && product.price > priceValue[0] && series.includes(product.series);
        } else
            return product.price < priceValue[1] && product.price > priceValue[0]
    })

    return (
        <div className="container">
            <div className="filtered-catalog__inner">
                <div className="filter">
                    <PageTitle title={"Фільтр"}/>
                        <input type="checkbox" id="filter-checkbox"/>
                        <label htmlFor="filter-checkbox" className="filter-label">
                            Фільтри <FontAwesomeIcon icon={faFilter}/>
                        </label>
                    <div className="filter__inner">
                        <div>
                            <h4>Ціна:</h4>
                            <Typography id="range-slider" gutterBottom>
                            </Typography>
                            <p>{priceValue[0]} грн. - {priceValue[1]} грн.</p>
                            <div className="price-slider-container">
                            <SliderRange
                                value={priceValue}
                                onChange={rangeSelector}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                min={0}
                                max={35000}
                                step={50}
                            />
                            </div>
                        </div>
                        {/*    <h4>За призначенням: </h4>*/}
                        {/*<div className="check-container">*/}
                        {/*    <input type="checkbox" id="street" name="streetDoor" checked/>*/}
                        {/*    <label htmlFor="street">Двері на вулицю</label>*/}
                        {/*</div>*/}
                        {/*<div className="check-container">*/}
                        {/*    <input type="checkbox" id="flat" name="flatDoor"/>*/}
                        {/*    <label htmlFor="flat">Двері в квартиру</label>*/}
                        {/*</div>*/}
                        {/*<div className="check-container">*/}
                        {/*    <input type="checkbox" id="techD" name="techDoor"/>*/}
                        {/*    <label htmlFor="techD">Технічні двері</label>*/}
                        {/*</div>*/}
                        {/*<div className="check-container">*/}
                        {/*    <input type="checkbox" id="fire" name="fireDoor"/>*/}
                        {/*    <label htmlFor="fire">Протипожежні двері</label>*/}
                        {/*</div>*/}
                        <div className="checkbox-filter">
                            <div>
                                <h4>За серією: </h4>
                                <div className="check-container">
                                    <input type="checkbox" id="forza" name="forza" value="Forza" onChange={changeSeries}
                                           checked={series.includes("Forza")}/>
                                    <label htmlFor="forza">Forza</label>
                                </div>
                                <div className="check-container">
                                    <input type="checkbox" id="alta" name="alta" value="Alta" onChange={changeSeries}
                                           checked={series.includes("Alta")}/>
                                    <label htmlFor="alta">Alta</label>
                                </div>
                                <div className="check-container">
                                    <input type="checkbox" id="vella" name="vella" value="Vella" onChange={changeSeries}
                                           checked={series.includes("Vella")}/>
                                    <label htmlFor="vella">Vella</label>
                                </div>
                                <div className="check-container">
                                    <input type="checkbox" id="maxima" name="maxima" value="Maxima"
                                           onChange={changeSeries}
                                           checked={series.includes("Maxima")}/>
                                    <label htmlFor="maxima">Maxima</label>
                                </div>
                                <div className="check-container">
                                    <input type="checkbox" id="devi-u" name="devi-u" value="Devi-U"
                                           onChange={changeSeries}
                                           checked={series.includes("Devi-U")}/>
                                    <label htmlFor="devi-u">Devi-U</label>
                                </div>
                                <div className="check-container">
                                    <input type="checkbox" id="forte+" name="forte+" value="Forte+"
                                           onChange={changeSeries}
                                           checked={series.includes("Forte+")}/>
                                    <label htmlFor="forte+">Forte+</label>
                                </div>
                                <div className="check-container">
                                    <input type="checkbox" id="antifrost-10" name="antifrost-10" value="Antifrost-10"
                                           onChange={changeSeries} checked={series.includes("Antifrost-10")}/>
                                    <label htmlFor="antifrost-10">Antifrost-10</label>
                                </div>
                                <div className="check-container">
                                    <input type="checkbox" id="tech" name="tech" value="Tech" onChange={changeSeries}
                                           checked={series.includes("Tech")}/>
                                    <label htmlFor="tech">Tech</label>
                                </div>
                            </div>
                            <div>
                                <h4>За класом зламостійкості: </h4>
                                <div className="check-container">
                                    <input type="checkbox" id="RC-4" name="RC-4" value="RC-4"
                                           onChange={changeResistance}
                                           checked={resistance.includes("RC-4")}/>
                                    <label htmlFor="RC-4">4 клас зламостійкості RC-4</label>
                                </div>
                                <div className="check-container">
                                    <input type="checkbox" id="RC-3" name="RC-3" value="RC-3"
                                           onChange={changeResistance}
                                           checked={resistance.includes("RC-3")}/>
                                    <label htmlFor="RC-3">3 клас зламостійкості RC-3</label>
                                </div>
                                <div className="check-container">
                                    <input type="checkbox" id="RC-2" name="RC-2" value="RC-2"
                                           onChange={changeResistance}
                                           checked={resistance.includes("RC-2")}/>
                                    <label htmlFor="RC-2">2 клас зламостійкості RC-2</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filtered-catalog">
                    <div className="carousel-filter">
                        <div style={{width: '75%'}}>
                        <Slider {...settings}>
                            <img className="carousel-image" src={def2}/>
                            <img className="carousel-image" src={def1}/>
                        </Slider>
                        </div>
                        <div className="filter-carousel-text">
                            <article>Захисти свій дім</article>
                            <p>вибирай сертифіковані зламостійкі вхідні двері</p>
                            <Link exact to="/protected-door" className="protected-door-link">Детальніше</Link>
                        </div>
                    </div>
                    <div className="filtered-catalog-bottom">
                        <div className="sort-container">

                            <p>Знайдено {filteredProducts.length} дверей</p>

                            <div className="select">
                                <label>Сортування: </label>
                                <select value={sort} onChange={handleChange}
                                        name="sort">
                                    <option value={'ratingUp'}>Рейтинг (за зростанням)</option>
                                    <option value={'ratingDown'}>Рейтинг (за спаданням)</option>
                                    <option value={'nameAZ'}>Назва (А -> Я)</option>
                                    <option value={'nameZA'}>Назва (Я -> А)</option>
                                    <option value={'priceUp'}>Ціна (за зростанням)</option>
                                    <option value={'priceDown'}>Ціна (за спаданням)</option>
                                    <option value={'modelAZ'}>Модель (А -> Я)</option>
                                    <option value={'modelZA'}>Модель (Я -> А)</option>
                                </select>
                            </div>
                        </div>
                        {filteredProducts.length !== 0 ?
                            sortDoors(filteredProducts).map((product) => (
                            <ProductCard product={product}/>
                        )) : <p className="no-filter">Нічого не знайдено</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilteredCatalog;
