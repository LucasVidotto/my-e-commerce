import { useState } from 'react';
import './home.css';

export function Home() {
    const [quanti, setQuanti] = useState(10);
    const [mensagem, setMensagem] = useState('faltando itens');
    function handlerClick(number) {

        if (number === 1) {
            /* if (quanti <= 0) {
                setMensagem('sem produtos no estoque');
            } else */
            setQuanti(quanti - 1);
        } else if (number === 2) {
            setQuanti(quanti + 1);
        }

    }
    return (
        <div className="container-home">
            <div className='section-home'>
                <div className="container-image">
                    <img src="https://wallpaper.dog/large/20509487.jpg" alt="" />
                    <span>Descrição do item</span>
                </div>
                <div className="container-image">
                    <img src="https://wallpaper.dog/large/20509487.jpg" alt="" />
                    <span>Descrição do item </span>
                </div>
                <div className="container-image">
                    <img src="https://wallpaper.dog/large/20509487.jpg" alt="" />
                    <div className='span-center'>
                        <span className='span-home'>Descrição do item</span>
                        <span>Quantidade : {quanti}</span>
                        {quanti <= 0 ? <span>{mensagem}</span> : null}

                    </div>
                    <div className='btn-class'>
                        <button name="more" className="btn-home" type="button" onClick={() => handlerClick(2)}> + </button>
                        <button name="less" className="btn-home" type="button" onClick={() => handlerClick(1)}> - </button>
                    </div>
                </div>

            </div>

            <div className='section-home'>
                <div className="container-image">
                    <img src="https://wallpaper.dog/large/20509487.jpg" alt="" />
                    <span>Descrição do item</span>
                </div>
                <div className="container-image">
                    <img src="https://wallpaper.dog/large/20509487.jpg" alt="" />
                    <span>Descrição do item</span>
                </div>
                <div className="container-image">
                    <img src="https://wallpaper.dog/large/20509487.jpg" alt="" />
                    <span>Descrição do item</span>
                </div>

            </div>
            <div className='section-home'>
                <div className="container-image">
                    <img src="https://wallpaper.dog/large/20509487.jpg" alt="" />
                    <span>Descrição do item</span>
                </div>
                <div className="container-image">
                    <img src="https://wallpaper.dog/large/20509487.jpg" alt="" />
                    <span>Descrição do item</span>
                </div>
                <div className="container-image">
                    <img src="https://wallpaper.dog/large/20509487.jpg" alt="" />
                    <span>Descrição do item</span>
                </div>

            </div>
        </div >
    )
}