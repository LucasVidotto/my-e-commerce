import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DataHome } from '../../Functionality'
export default function Cart() {
    const location = useLocation();
    const data = location.state.id;
    useEffect(()=>{
        console.log([data]);
    })
    return (
        <div className="container-home">

            {DataHome.map((item, key) => (
                <div className='section-home'>
                    {item.name === data ? <div className="container-image">
                        <img src={item.image} />
                        <span>{item.name}</span>
                    </div> :

                        null
                    }
                </div>

            ))}

        </div >
    )
}