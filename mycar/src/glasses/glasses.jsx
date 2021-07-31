import React, { Component } from 'react'
import Data from '../data.json'
import Classes from '../style.css'

export default class glasses extends Component {
    state = {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v9.png",
    }
    handleChangeGlasses = (url, name, price) => {
        document.querySelector('.Glasses').style.display = "block";
        this.setState({
            url,
            name,
            price
        })
    }
    render() {
        return (
            <div className="content">
                <div className="Glasses">
                    <img src={`${this.state.url}`} alt=" " className="img-fluid glasses" />
                    <div className="background">
                        <div className="detail">
                                <p>{this.state.name}</p>
                                <p>{this.state.price}$</p>
                        </div>
                    </div>
                </div>
                <div className="row selectItem">
                {Data.map((item, index) => {
                    const {id, price, name, url} = item;
                     return(
                        <div className="col-2" key={index}>
                            <img src={item.srcImg} className="img-fluid image" onClick={() => this.handleChangeGlasses(`${item.url}`, `${item.name}`, `${item.price}`)}/>
                        </div>
                        )
                })}
                </div>
            </div>
        )
    }
}
