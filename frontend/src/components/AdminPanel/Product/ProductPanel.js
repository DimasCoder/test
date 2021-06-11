import React, {Component} from 'react';
import axios from "axios";
import './ProductPanel.css'
import AuthService from "../../../services/auth.service";
import AdminData from "../AdminData/AdminData";

class ProductPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doorName: '',
            doorType: '',
            price: null,
            code: '',
            count: '',
            deviator: '',
            canvasMetal: 0,
            frameMetal: 0,
            canvasThickness: 0,
            frameThickness: 0,
            canvasFrameFilling: '',
            externalInternalFinishing: '',
            nightValve: '',
            hinges: 0,
            antiRemovableLedgers: 0,
            sealant: 0,
            mainLock: '',
            additionalLock: '',
            doorSill: '',
            series: '',
            burglaryResistance: '',
            file: '',
            image: "https://image.flaticon.com/icons/png/512/37/37543.png",
            isLoading: true,
            products: [],
            brandID: 602
        }
        this.inputChange = this.inputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.handleChangeSill = this.handleChangeSill.bind(this);

    }

    componentDidMount() {
        this.findAllProducts();
    }

    inputChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    onFileChangeHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({image: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
        e.preventDefault();
        this.setState({
            file: e.target.files[0]
        });

    };

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    findAllProducts() {
        axios.get("http://localhost:8080/api/doors/all")
            .then(response => response.data)
            .then((data) => {
                this.setState({products: data, isLoading: false})
            });
    }

    postProduct = () => {
        let data = new FormData();
        data.append('doorName', this.state.doorName);
        data.append('doorType', this.state.doorType);
        data.append('price', this.state.price);
        data.append('code', this.state.code);
        data.append('count', this.state.count);
        data.append('deviator', this.state.deviator);
        data.append('canvasMetal', this.state.canvasMetal);
        data.append('frameMetal', this.state.frameMetal);
        data.append('canvasThickness', this.state.canvasThickness);
        data.append('frameThickness', this.state.frameThickness);
        data.append('canvasFrameFilling', this.state.canvasFrameFilling);
        data.append('externalInternalFinishing', this.state.externalInternalFinishing);
        data.append('nightValve', this.state.nightValve);
        data.append('hinges', this.state.hinges);
        data.append('antiRemovableLedgers', this.state.antiRemovableLedgers);
        data.append('sealant', this.state.sealant);
        data.append('mainLock', this.state.mainLock);
        data.append('additionalLock', this.state.additionalLock);
        data.append('doorSill', this.state.doorSill);
        data.append('series', this.state.series);
        data.append('burglaryResistance', this.state.burglaryResistance);
        data.append('file', this.state.file);
        axios.post("/api/doors/",
            data
        )
        //window.location.reload(true);
    }

    deleteProduct = (id) => {
        axios.delete("api/door/" + id)
            .then(respone => {
                if (respone.data != null) {
                    this.setState({
                        products: this.state.products.filter(product => product.id !== id)
                    })
                }
            })
    }

    render() {
        const {
            products, doorName, price, code, count,
            deviator, canvasMetal, frameMetal, canvasThickness,
            frameThickness, canvasFrameFilling, externalInternalFinishing,
            nightValve, hinges, antiRemovableLedgers, sealant,
            mainLock, additionalLock, doorSill, image, series, burglaryResistance,doorType
        } = this.state;
        let img = 'data:image/png;base64,';
        return (
            <div>
                <div className="add-brand">
                    <h3>Добавити товар</h3>
                    <div className="add-brand_inner">
                        <div className="row-group">
                            <div className="add-brand-group">
                                <label>Назва дверей</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={doorName}
                                       name="doorName"
                                       onChange={this.inputChange} placeholder="Назва дверей"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Ціна дверей</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={price}
                                       name="price"
                                       onChange={this.inputChange} placeholder="Ціна дверей"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Код дверей</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={code}
                                       name="code"
                                       onChange={this.inputChange} placeholder="Код дверей"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Девіатор</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={deviator}
                                       name="deviator"
                                       onChange={this.inputChange} placeholder="Девіатор"/>
                            </div>
                        </div>
                        <div className="row-group">
                            <div className="add-brand-group">
                                <label>Метал полотна</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={canvasMetal}
                                       name="canvasMetal"
                                       onChange={this.inputChange} placeholder="Метал полотна"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Метал рами</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={frameMetal}
                                       name="frameMetal"
                                       onChange={this.inputChange} placeholder="Метал рами"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Товщина полотна</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={canvasThickness}
                                       name="canvasThickness"
                                       onChange={this.inputChange} placeholder="Товщина полотна"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Товщина рами</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={frameThickness}
                                       name="frameThickness"
                                       onChange={this.inputChange} placeholder="Товщина рами"/>
                            </div>
                        </div>
                        <div className="row-group">
                            <div className="add-brand-group">
                                <label>Запов. полот. і рами</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={canvasFrameFilling}
                                       name="canvasFrameFilling"
                                       onChange={this.inputChange} placeholder="Заповнення полотна і рами"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Зовн./внутр. обробка</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={externalInternalFinishing}
                                       name="externalInternalFinishing"
                                       onChange={this.inputChange} placeholder="Зовнішня / внутрішня обробка"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Нічний клапан</label>
                                <select value={nightValve} onChange={this.handleChange}
                                        name="nightValve">
                                    <option value={'true'}>Присутній</option>
                                    <option value={'false'}>Відсутній</option>
                                </select>
                            </div>
                            <div className="add-brand-group">
                                <label>Петлі</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={hinges}
                                       name="hinges"
                                       onChange={this.inputChange} placeholder="Петлі"/>
                            </div>
                        </div>
                        <div className="row-group">
                            <div className="add-brand-group">
                                <label>Протизнімні ригелі</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={antiRemovableLedgers}
                                       name="antiRemovableLedgers"
                                       onChange={this.inputChange} placeholder="Протизнімні ригелі"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Ущільнювач</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={sealant}
                                       name="sealant"
                                       onChange={this.inputChange} placeholder="Ущільнювач"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Основний замок</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={mainLock}
                                       name="mainLock"
                                       onChange={this.inputChange} placeholder="Основний замок"/>
                            </div>
                            <div className="add-brand-group">
                                <label>Додатковий замок</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={additionalLock}
                                       name="additionalLock"
                                       onChange={this.inputChange} placeholder="Додатковий замок"/>
                            </div>
                        </div>

                        <div className="row-group">
                            <div className="add-brand-group">
                                <label>Накл. поріг. нерж. сталь</label>
                                <select value={doorSill} onChange={this.handleChange}
                                        name="doorSill">
                                    <option value={'true'}>Присутня</option>
                                    <option value={'false'}>Відсутня</option>
                                </select>
                            </div>
                            <div className="add-brand-group">
                                <label>Серія</label>
                                <select value={series} onChange={this.handleChange}
                                        name="series">
                                    <option value={'Forza'}>Forza</option>
                                    <option value={'Alta'}>Alta</option>
                                    <option value={'Vella'}>Vella</option>
                                    <option value={'Maxima'}>Maxima</option>
                                    <option value={'Devi-U'}>Devi-U</option>
                                    <option value={'Forte+'}>Forte+</option>
                                    <option value={'Antifrost-10'}>Antifrost-10</option>
                                    <option value={'Tech'}>Tech</option>
                                </select>
                            </div>
                            <div className="add-brand-group">
                                <label>Клас зламостійкості</label>
                                <select value={burglaryResistance} onChange={this.handleChange}
                                        name="burglaryResistance">
                                    <option value={'RC-2'}>RC-2</option>
                                    <option value={'RC-3'}>RC-3</option>
                                    <option value={'RC-4'}>RC-4</option>
                                </select>
                            </div>

                            <div className="add-brand-group">
                                <label>Тип дверей</label>
                                <select value={doorType} onChange={this.handleChange}
                                        name="doorType">
                                    <option value={'wareHouse'}>Складська програма</option>
                                    <option value={'streetDoor'}>Вуличні</option>
                                    <option value={'flatDoor'}>Квартирні</option>
                                    <option value={'techDoor'}>Технічні</option>
                                    <option value={'fireDoor'}>Протипожежні</option>
                                    <option value={'interiorDoor'}>Міжкімнатні</option>
                                </select>
                            </div>


                        </div>
                        <div className="row-group">
                            <div className="add-brand-group">
                                <label>Кількість на складі</label>
                                <input className="review-form-input" required={true} type="input"
                                       value={count}
                                       name="count"
                                       onChange={this.inputChange} placeholder="Кількість на складі"/>
                            </div>
                            <div className="add-brand-group">
                                <label className="choose-image" htmlFor="file">Вибрати фото</label>
                                <input type="file" name="file" id="file" hidden
                                       onChange={this.onFileChangeHandler}/>
                            </div>
                            <div className="add-brand-group">
                                <img
                                    className="add-brand-image"
                                    src={image}
                                />
                            </div>
                        </div>
                        <button className="btn-add-brand" type="submit"
                                onClick={this.postProduct}>
                            <a>Добавити</a>
                        </button>
                    </div>
                </div>
                <table className="data-table">
                    <tr>
                        <th>ID</th>
                        <th>Зображення</th>
                        <th>Назва</th>
                        <th>Ціна</th>
                        <th>Код</th>
                        <th>Наявність</th>
                        <th>Продано</th>
                        <th>Видалити</th>
                    </tr>
                    {products.map((product, index) => (
                        <tr key={index}>
                            {console.log(product)}
                            <td>{product.id}</td>
                            <td><img
                                className="data-image"
                                src={`data:image/png;base64,${product.file.data}`}
                                alt="Admin data"
                            /></td>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                            <td>{product.code}</td>
                            <td>{product.available ? "Наявно" : "Відсутньо"}</td>
                            <td>{product.countOfSold}</td>
                            <td><input type="button" value="X"
                                       onClick={this.deleteProduct.bind(this, product.id)}
                                       className="btn-cancel"/>
                            </td>
                        </tr>
                    ))}
                </table>

            </div>
        );
    }
}


export default ProductPanel;
