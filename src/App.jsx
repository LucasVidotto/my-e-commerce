import Routers from "./router"; 
import Footer from './Components/Global/Footer';
import Home from "./Components/Global/Home";
import Feed from "./Components/Pages/Feed/Feed";
import CardPromo from "./Components/Global/CardPromo/card";
function App() {


  return (
    <>
      <Home />
      <Routers />
      <Footer /> 

    </>
  )
}

export default App
