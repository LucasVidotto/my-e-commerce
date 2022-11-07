import { useState,useEffect } from 'react';
import { DataHome } from '../Functionality';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from "react-icons/ai";
import Axios from 'axios';
import './home.css';

export default function Product() {
    /* useEffect(() =>{
        Axios.get('http://localhost:4040/stoque').then(() =>{
            console.log("only date");
        })
    }) */
    const [testev, setTestev] = useState({});

    function handlerShoes(name,urls){
        console.log(name,urls);
        Axios.post('http://localhost:4040/estoque',{
            nome: name,
            url:urls,
        }).then(()=>{
            console.log('feito');
        })
    }
    function hanlderClickSave(Name){
        /* Axios.post('http://localhost:4040/stoque',{
            User: 'LucasVidotto',
            Name
        }).then(()=>{
            console.log('feito');
        }) */
        Axios.get('http://localhost:4040/users',{
        }).then((response)=>{
            console.log(response.data)
            setTestev(response.data);
            testev.map((item) =>{
                console.log(item.nome)
            })
        })
    }
    const [quanti, setQuanti] = useState(10);
    const [mensagem, setMensagem] = useState('faltando itens');
    const [ids, setId] = useState([]);
    function handlerClick(number, tipo) {
        if (number === 1) {
            /* if (quanti <= 0) {
                setMensagem('sem produtos no estoque');
            } else */
            setQuanti(quanti - 1);
        } else if (number === 2) {
            setQuanti(quanti + 1);
        }
        handlerClickNext(tipo);
    }
    function handlerClickNext(tipo) {
        setId(tipo);
        console.log(ids)
    }
    return (
        <div className="container-home">
            <div className='section-home'>
                {DataHome.map((item, key) => (
                    <div className="container-image">
                        <Link className="link-image" to="/" >
                            <img src={item.image} alt="" key={key} />
                        </Link>
                        <span>{item.name}</span>
                        <div className='span-center'>
                            <span className='span-home'>Descrição do item</span>
                            <span>Quantidade : {quanti}</span>

                        </div>
                        <div className="error-container">
                            {quanti <= 0 ? <span className="error">{mensagem}</span> : null}
                        </div>
                        <div className='btn-class'>
                           {/*  <button name="more" className="btn-home btn btn--stripe" type="button" onClick={() => {handlerClick(2, item.name);hanlderClickSave(item.name)}}> + </button>
                            <button name="less" className="btn-home btn btn--stripe" type="button" onClick={() => {handlerClick(1)}}> - </button> */}
                           {/* <Link to='/cart'> */}
                                <button name="moreinfo" className="btn-home btn btn--stripe" type="button" onClick={() =>handlerShoes(item.name, item.image)} >More info </button>
                           {/* </Link> */}
                        </div>
                        <Link to='/'>
                            <AiOutlineHeart className="icon-like"/>
                        </Link>
                    </div>

                ))}
              
            </div>
            {/* {testev} */}
{/*             <button className="btn-home btn btn--stripe" type="button" onClick={() => {hanlderClickSave()}}> - </button>
 */}            {/* <Link to='/cart' state={{ id: ids }} className="links" >CLick Next Page</Link> */}
        </div >
    )
}