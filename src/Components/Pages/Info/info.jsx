import React from 'react';
import './info.css';

export default function Info(){
    return(
        <div className="info-all">
            <div className='info-containerleft'>
                <section className='info-section'>
                    <p>
                        <span>
                            Name Shoes
                        </span>
                    </p>
                    <p>
                        <span>
                            Info Shoes
                        </span>
                    </p>
                </section>
            </div>
            <div className='info-containermid'>
                <figure>
                    <img src="https://ae01.alicdn.com/kf/H36aa950bb77a4ac588c37fe847b41f68a/Cal-ados-esportivos-leves-e-s-lidos-para-mulheres-t-nis-de-malha-com-cadar-o.jpg" alt="Imagem" />
                </figure>
            </div>
            <div className='info-containeritgh'>
                <section className='info-section'>
                    <p>
                        <span>
                            R$ 888.88
                        </span>
                    </p>
                </section>
            </div>
        </div>
    )
}