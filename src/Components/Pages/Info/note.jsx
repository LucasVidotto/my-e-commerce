import {useState} from 'react';
import { AiFillStar } from "react-icons/ai";
import './note.css';

export default function Note(){
    const [tools1, setTools1] = useState('true');
    const [tools2, setTools2] = useState('true');
    const [tools3, setTools3] = useState('true');
    const [tools4, setTools4] = useState('true');
    const [tools5, setTools5] = useState('true');
    const [colors, setColors] = useState('grey');
    const [primary, setPrimary] = useState('yellow');
    const styleStyle = {
        fill: colors,
      };
    const styleHover = {
        fill: primary,
      };
      function handlerClick(e){
        if(e.target.id == '2'){
            setTools1(false);
            setTools2(true);
        }else if(e.target.id=='3'){
            setTools1(false);
            setTools2(false);
            setTools3(true);
        }
        else if(e.target.id=='4'){
            setTools1(false);
            setTools2(false);
            setTools3(false);
            setTools4(true);
        }
        else if(e.target.id=='5'){
            setTools1(false);
            setTools2(false);
            setTools3(false);
            setTools4(false);
            setTools5(true);
        }
      }
    return(
        <div className='container-notes'>
            <div>
                <div className='notes-center'>
                    <span>Avaliações</span>
                </div>
                <section className='section-note'>
                    <AiFillStar 
                        id ="1" 
                        style={tools1 ? styleStyle : styleHover}
                        onMouseEnter={() => setTools1(!tools1)}
                        onMouseLeave={() => setTools1(!tools1)}
                        onClick={(e) => handlerClick(e)}
                    />
                    <AiFillStar 
                        id ="2" 
                        style={tools2 ? styleStyle : styleHover}
                        onMouseEnter={() => setTools2(!tools2)}
                        onMouseLeave={() => setTools2(!tools2)}
                        onClick={(e) => handlerClick(e)}
                    />
                    <AiFillStar 
                        id ="3" 
                        style={tools3 ? styleStyle : styleHover}
                        onMouseEnter={() => setTools3(!tools3)}
                        onMouseLeave={() => setTools3(!tools3)}
                        onClick={(e) => handlerClick(e)}
                    />
                    <AiFillStar 
                        id ="4" 
                        style={tools4 ? styleStyle : styleHover}
                        onMouseEnter={() => setTools4(!tools4)}
                        onMouseLeave={() => setTools4(!tools4)}
                        onClick={(e) => handlerClick(e)}
                    />
                    <AiFillStar 
                        id ="5" 
                        style={tools5 ? styleStyle : styleHover}
                        onMouseEnter={() => setTools5(!tools5)}
                        onMouseLeave={() => setTools5(!tools5)}
                        onClick={(e) => handlerClick(e)}
                    />
                </section>
            </div>  
        </div>
    )
}