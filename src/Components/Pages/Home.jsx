import { useState } from 'react';
import { DataHome } from '../../Components/Functionality';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
    const [quanti, setQuanti] = useState(10);
    const [mensagem, setMensagem] = useState('faltando itens');
    const [ids, setId] = useState('hello');
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
    }
    return (
        <div className="container-home">
            <div className='section-home'>
                {DataHome.map((item, key) => (
                    <div className="container-image">
                        <img src={item.image} alt="" key="key" />
                        <span>{item.name}</span>
                        <div className='span-center'>
                            <span className='span-home'>Descrição do item</span>
                            <span>Quantidade : {quanti}</span>

                        </div>
                        <div className="error-container">
                            {quanti <= 0 ? <span className="error">{mensagem}</span> : null}
                        </div>
                        <div className='btn-class'>
                            <button name="more" className="btn-home" type="button" onClick={() => handlerClick(2, item.name)}> + </button>
                            <button name="less" className="btn-home" type="button" onClick={() => handlerClick(1)}> - </button>

                        </div>
                    </div>

                ))}
            </div>
            <Link to='/cart' state={{ id: ids }} >CLick Next Page</Link>
        </div >
    )
}