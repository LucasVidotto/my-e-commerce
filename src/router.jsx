import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Cart from './Components/Pages/Cart/Cart';
import Main from './Components/Pages/Main/index';
const Routers = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/cart' element={< Cart />} />
                    <Route path='/main' element={< Main />} />
                </Routes>
            </Router>
        </>
    )
}

export default Routers;