import React from 'react';
import { Link } from 'react-router-dom';
import CardPromo from '../../Global/CardPromo/card';
import './main.css';
import './carousel.css';
 import './caroucelMid.css'; 
 import './home.nav.css';

function Main() {
  return (
    <div >
        <CardPromo />
        <div className='container-top-sec' >
            
            <div className='sec-top-one'>
                <div class="slider">
                    <div class="slide-track">
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='sec-top-two'>
                <h1>Frete gratis a partir de R$ 99.99</h1>
            </div>
        </div>
        <div className="container-wrapper">
            <div className="wrapper">
                <img src="https://www.pinclipart.com/picdir/big/420-4207455_black-shirt-template-png-clipart.png"/>
                <img src="https://imgstatic.soldoutservice.com/65ahKcdE/150856a4977/s2000/adidas-yeezy-boost-350-turtle-dove.jpg"/>
                <img src="https://wallpapercave.com/wp/wp4676576.jpg"/>
                <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F11%2Fcoco_c330_56b_pub-pub16n-186_rgb-2000.jpg"/>
            </div>
        </div>
         <div className='nav-bar-noti'> 
             <section>
                <nav>   
                    <ul class="menuItems">
                    <li><Link to="/tshort" data-item='TSHIRT'>TSHIRT</Link></li>
                    <li><a href='#' data-item='SHOES'>SHOES</a></li>
                    <li><a href='#' data-item='Projects'>Projects</a></li>
                    <li><a href='#' data-item='Blog'>Blog</a></li>
                    <li><a href='#' data-item='Contact'>Contact</a></li>
                    </ul>
                </nav>
            </section> 
         </div> 
        <div className='teste'>
                <div className='promoO container-promo'>
                    <h1>Promoção</h1>
                    <span>Produto Tipo</span>
                    <div className='promo-img type-one'></div>

                </div>
                <div className='promoT container-promo'>
                    <h1>Promoção</h1>
                    <span>Produto Tipo</span>
                    <div className='promo-img type-two'></div>
                </div>
                <div className='promoOTR container-promo '>
                    <h1>Promoção</h1>
                    <span>Produto Tipo</span>
                    <div className='promo-img type-three'></div>
                </div>
        </div>
    </div>
  )
}

export default Main;