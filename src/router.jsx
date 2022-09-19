import Reacrt from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Cart from './Components/Pages/Cart/Cart';
const Routers = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/cart' element={< Cart />} />
                </Routes>
            </Router>
        </>
    )
}

export default Routers;