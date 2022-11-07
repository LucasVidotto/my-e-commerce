import './home.css';
import { BsCart4 } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './text3d.css';


export default function Home(){
    return(
            <>
            <div className='container-top' data-aos="fade-up">
                <Link to="/"  data-title="Back to Menu" >
                <span>This is the CSS tooltip showing up when you mouse over the link</span>
                    <h1>AriStore</h1>
                </Link>
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