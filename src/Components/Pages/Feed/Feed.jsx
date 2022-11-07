import React from 'react';
import './feed.css';
import { AiOutlineMail, AiOutlineFileText, AiOutlineUser } from "react-icons/ai";
export default function Feed(){
    return(
        <>
        <div className='main-container-feed'>
            <main className="container-feed">
                <section className='section-feed right-feed'>
                    <h1>AriStore</h1>
                    <span>
                        Obrigado Pelo seu feedback!
                    </span>
                </section>
                <section className='section-feed left-feed'>
                    <div className='global-inputs-feed'>
                        <div className='input-feed'>
                            <AiOutlineUser />
                           
                            <input type="text" placeholder="Seu Nome"/>
                        </div>
                        <div className='input-feed' >
                        <AiOutlineMail />
                            
                            <input type="text" placeholder="Seu Email"/>
                        </div>
                        <div className='input-feed' >
                        <AiOutlineFileText />
                            <input type="textarea" placeholder="Seu Feed"/>
                        </div>
                        <button>Send</button>
                    </div>
                </section>
            </main>
        </div>
        </>
    )
}