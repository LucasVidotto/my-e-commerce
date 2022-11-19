import {useState} from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import './card.css';

export default function CardPromo(){
    const [closed, setClosed] = useState(false);
    function handlerClosed(){
        setClosed(!closed);
        console.log(closed);
    }
    return(
       closed == false ? 
        <div className='container-cardPromo'>
            {/* <div className='icon-x'>

            </div> */}
            <button type="button" className='icon-x' onClick={() => handlerClosed()}>
                <AiOutlineCloseCircle />
            </button>
            <figure>
                <img src="https://www.pngall.com/wp-content/uploads/2016/04/T-Shirt-PNG-HD.png" alt="img" />
            </figure>
            <section>
                <span>Camiseta Tipo XX</span>
            </section>
        </div>
        :
        <div></div>
    )
}