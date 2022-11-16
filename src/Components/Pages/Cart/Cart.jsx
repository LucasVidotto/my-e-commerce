import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DataHome } from '../../Functionality';
import '../home.css';
export default function Cart() {
    const [cart, setCart] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:4040/stoque',{
        }).then((response)=>{
            /* console.log(response.data) */
            setCart(response.data);
            console.log(cart);
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
         });
    },[10])
    return (
        cart.length > 0 ? 
        <div className="container-home">
            <div className='section-home'>
            {cart.map((item) => (
                
                    <div className="container-image">
                        <img src={item.url} key={item.idprod}/>
                        <span>{item.nome}</span>
                        <div className='btn-class'>
                            <button name="more" className="btn-home btn btn--stripe" type="button" onClick={() => {handlerClick(2, item.name);hanlderClickSave(item.name)}}> + </button>
                            <button name="less" className="btn-home btn btn--stripe" type="button" onClick={() => {handlerClick(1)}}> - </button> 
                        </div>
                    </div> 
                

            ))} 
            </div>
        </div >:
        <div>
            <img scr="https://www.freeiconspng.com/thumbs/shopping-cart-icon/shopping-cart-icon-2.png" alt="imagem cart"/>
        </div>
    )
}