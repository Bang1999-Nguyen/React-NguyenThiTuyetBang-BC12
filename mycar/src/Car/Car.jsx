import React, { Component } from 'react'
import CarData from '../carData.json';
import Wheel from '../wheel.json';


export class Car extends Component {
    state = {
        srcImg:  "/images-black/images-black-1/civic-1.jpg",
        color: "Black",
        price: "19,550",
        engineType:  "In-Line 4-Cylinder",
        displacement: "1996 cc",
        horsepower: "158 @ 6500 rpm",
        torque: "138 lb-ft @ 4200 rpm",
        redline: "6700 rpm",
        img:  "images-black/images-black-1/",
        idWheel: 1,
    }
    handleChangeColor = (srcImg, color, price, idWheel) => {
        this.setState({
            srcImg,
            color,
            price,
            idWheel
        })
    }
    chooseWheel = (srcImg, item) => {
        this.setState({
            srcImg: `images-${this.state.color}/images-${this.state.color}-${item.idWheel}/civic-1.jpg`,
            idWheel: item.idWheel,
        })
    }
    render() {
        const {srcImg, color, idWheel} = this.state;
        return (
            <div className="container-fluid">
                <div className="row">
                {/* <button className="btn btn-dark View-360" onClick={() => this.view360()}>View 360</button> */}
                 <div className="col-7">
                    <img src={`./images/${this.state.srcImg}`} className="w-100 car-image" />
                    <div className="detailCar">
                            <div className="card-header">
                                Exterior Color
                            </div>
                            <table className="table table-striped"> 
                                <tbody>
                                    <tr>
                                        <td>Color</td>
                                        <td>{`${this.state.color}`}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>{`${this.state.price}`}</td>
                                    </tr>
                                    <tr>
                                        <td>Engine Type</td>
                                        <td>{`${this.state.engineType}`}</td>
                                    </tr>
                                    <tr>
                                        <td>Displacement</td>
                                        <td>{`${this.state.displacement}`}</td>
                                    </tr>
                                    <tr>
                                        <td>Horsepower(SAE net)</td>
                                        <td>{`${this.state.horsepower}`}</td>
                                    </tr>
                                    <tr>
                                        <td>Torque(SAE net)</td>
                                        <td>{`${this.state.torque}`}</td>
                                    </tr>
                                    <tr>
                                        <td>Redline</td>
                                        <td>{`${this.state.redline}`}</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
                <div className="col-5">
                 <div className="card">
                     <div className="card-header">
                        Exterior Color
                    </div>
                <ul className="list-group list-group-flush">
                    {
                        CarData.map((car, index) =>{
                            const {id, title, type, img, srcImg, color, price, engineType} = car;
                            return(<li className="list-group-item" key={index} onClick={() => this.handleChangeColor(`images-${color}/images-${color}-${idWheel}/civic-1.jpg`, color, price, idWheel)} >
                            <div className="item d-flex">
                                    <img src={img} className="crystalImage"/>
                            <div className="title">
                                <p>{title}</p>
                                <p className="name">{type}</p>
                            </div>
                            </div>
                            </li>
                            )
                        })
                    }
             </ul>
            </div>
            <div className="card">
                     <div className="card-header">
                        Wheels
                    </div>
                    <ul className="list-group list-group-flush" >
                        {
                            Wheel.map((item, index) =>{
                                return ( <div>
                                    <li className="list-group-item" key={index} onClick={() => this.chooseWheel(srcImg, item)} item={item}>
                                    <div className="item d-flex">
                                          <img src={item.img} className="crystalImage"/>
                                    <div className="title">
                                       <p>{item.title}</p>
                                    </div>
                                    </div>  
                                    </li>
                                </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
        )
    }
}
