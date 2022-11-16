import { useState,useEffect } from 'react';
import './home.css';
import { BsCart4 } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './text3d.css';
import axios from 'axios';

export default function Home(){
    const [numberCart, setNumberCart] = useState(0);

    useEffect(()=>{
        axios.get('http://localhost:4040/stoque',{
        }).then((response)=>{
            /* console.log(response.data) */
            setNumberCart((response.data).length);
            console.log(numberCart);
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
         });
    },numberCart)

    return(
            <>
            <div className='container-top' data-aos="fade-up">
                <Link to="/"  data-title="Back to Menu" className="link-menu">
                    <h1>LDVStore</h1>
                </Link>
                <Link to='/cart'>
                    <BsCart4 size={40}  className='icon-cart icons'/>
                </Link>
                <Link to='/cart'>
                    <AiOutlineShopping size={40}  className='icon-shop icons'/>
                </Link>
                {numberCart > 0 ? 
                <span className="number-icon">{numberCart}</span>
                : 
                <span className="number-icon">0</span>
                }
            </div>
            </>
    )
}