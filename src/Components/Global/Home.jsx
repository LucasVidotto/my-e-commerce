import './home.css';
import { BsCart4 } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './text3d.css';


export default function Home(){
    return(
            <>
            <div className='container-top'>
                <h1>AriStore</h1>
                <Link to='/cart'>
                    <BsCart4 size={40}  className='icon-cart icons'/>
                </Link>
                <Link to='/cart'>
                    <AiOutlineShopping size={40}  className='icon-shop icons'/>
                </Link>
            </div>
            </>
    )
}