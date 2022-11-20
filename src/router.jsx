import {  Router, Routes, Route } from "react-router-dom";
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart/Cart';
import Main from './Components/Pages/Main/index';
import Login from "./Components/Pages/Log/login";
import Feed from "./Components/Pages/Feed/Feed";
import Info from './Components/Pages/Info/info';
import NotFound from "./Components/Pages/Error/NotFound";
const Routers = () => {
    return (
        <>

                <Routes>
                    <Route exact path='/' element={< Main />} />
                    <Route  path='/tshort' element={<Product />} />
                    <Route path='/cart' element={< Cart />} />
                    <Route path='/login' element={< Login />} />
                    <Route path='/feed' element={< Feed />} />
                    <Route path='/info' element={< Info />} />
                    <Route path='*' element={<NotFound />}/>
                </Routes>

        </>
    )
}

export default Routers;