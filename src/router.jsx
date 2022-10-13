import {  Router, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Cart from './Components/Pages/Cart/Cart';
import Main from './Components/Pages/Main/index';
import Login from "./Components/Pages/Log/login";
const Routers = () => {
    return (
        <>

                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/cart' element={< Cart />} />
                    <Route path='/main' element={< Main />} />
                    <Route path='/login' element={< Login />} />
                </Routes>

        </>
    )
}

export default Routers;