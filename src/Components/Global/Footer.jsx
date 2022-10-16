import React from 'react';
import { Link } from 'react-router-dom';
import 
    { 
        AiOutlineLinkedin,
        AiOutlineFacebook, 
        AiOutlineInstagram,
        AiOutlineGithub 
    } 
from "react-icons/ai";
import './footer.css';
export default function Footer(){
    return(
        <>
        <div className="footer-basic">
            <footer>
                <span>Contact Me!</span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/lucas-vidotto-58a4a0127/">
                        <AiOutlineLinkedin className='icons-footer'/>
                    </a>
                    <a href="#">
                        <AiOutlineFacebook className='icons-footer'/>
                    </a>
                    <a href="#">
                        <AiOutlineInstagram className='icons-footer icon-insta'/>
                    </a>
                    <a href="https://github.com/LucasVidotto">
                        <AiOutlineGithub className='icons-footer icon-git'/>
                    </a>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Link to="/main" className='links-footer'>Home</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/" className='links-footer'>Services</Link>
                    </li>
                   {/*  <li className="list-inline-item"><a href="#">About</a></li>
                    <li className="list-inline-item"><a href="#">Terms</a></li>
                    <li className="list-inline-item"><a href="#">Privacy Policy</a></li> */}
                    <li className="list-inline-item">
                        <Link to="/login" className='links-footer'>Login</Link>
                    </li>
                </ul>
                <p className="copyright">Company Lucas Vidotto © 2022</p>
            </footer>
        </div>
        </>
    )
}