import {useState,useEffect} from 'react';
import { AiFillStar } from "react-icons/ai";
import axios from 'axios';
import './note.css';

export default function Note(){
    const [tools1, setTools1] = useState('true');
    const [tools2, setTools2] = useState('true');
    const [tools3, setTools3] = useState('true');
    const [tools4, setTools4] = useState('true');
    const [tools5, setTools5] = useState('true');
    const [colors, setColors] = useState('grey');
    const [primary, setPrimary] = useState('yellow');
    const [number , setNumber] = useState(0);
    const [numbers , setNumbers] = useState(0);
    useEffect(()=>{
        axios.get('http://localhost:4040/notes',{
        }).then((response)=>{
            /* console.log(response.data) */
            setNumber(response.data);
            if(number.length > 0){
                number.map((item)=>
                    setNumbers(parseInt(item.note) + parseInt(numbers)),
                    console.log(numbers)
                )
            }
            
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
         });
    },[10])
    const styleStyle = {
        fill: colors,
      };
    const styleHover = {
        fill: primary,
      };
      function handlerClickFF(e){
            if(e === '1') {
                setTools1(true);
                setTools2(true);
                setTools3(true);
                setTools4(true);
                setTools5(true);
            }
            if(e === '2') {
                setTools1(false);
                setTools2(true);
                setTools3(true);
                setTools4(true);
                setTools5(true);
            }
            if(e === '3') {
                setTools1(false);
                setTools2(false);
                setTools3(true);
                setTools4(true);
                setTools5(true);
            }
            if(e === '4') {
                setTools1(false);
                setTools2(false);
                setTools3(false);
                setTools4(true);
                setTools5(true);
            }
            else if(e === '5'){
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
                        onClick={() => handlerClickFF('1')}
                    />
                    <AiFillStar 
                        id ="2" 
                        style={tools2 ? styleStyle : styleHover}
                        onMouseEnter={() => setTools2(!tools2)}
                        onMouseLeave={() => setTools2(!tools2)}
                        onClick={() => handlerClickFF('2')}
                    />
                    <AiFillStar 
                        id ="3" 
                        style={tools3 ? styleStyle : styleHover}
                        onMouseEnter={() => setTools3(!tools3)}
                        onMouseLeave={() => setTools3(!tools3)}
                        onClick={() => handlerClickFF('3')}
                    />
                    <AiFillStar 
                        id ="4" 
                        style={tools4 ? styleStyle : styleHover}
                        onMouseEnter={() => setTools4(!tools4)}
                        onMouseLeave={() => setTools4(!tools4)}
                        onClick={() => handlerClickFF('4')}
                    />
                    <AiFillStar 
                        id ="5" 
                        style={tools5 ? styleStyle : styleHover}
                        onMouseEnter={() => setTools5(!tools5)}
                        onMouseLeave={() => setTools5(!tools5)}
                        onClick={() => handlerClickFF('5')}
                    />
                </section>
                <section className='section-note'>
                    <AiFillStar 
                        style={tools4 ? {color: 'grey'} : {color:'yellow'}}
                    />
                    <AiFillStar 
                        style={tools4 ? {color: 'grey'} : {color:'yellow'}}
                    />
                    <AiFillStar 
                        style={tools4 ? {color: 'grey'} : {color:'yellow'}}
                    />
                    <AiFillStar 
                        style={tools4 ? {color: 'grey'} : {color:'yellow'}}
                    />
                    <AiFillStar 
                        style={tools4 ? {color: 'grey'} : {color:'yellow'}}

                    />
                </section>
            </div>  
        </div>
    )
}