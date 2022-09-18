import './carousel.css';
import { plansData } from '../Functionality';
export function Carousel() {
    return (
        < >
            <div className="pic-ctn" >
                {plansData.map((plan, i) => (
                    <img src={plan.image} className="pic" key={i} />

                ))}
            </div>
        </>
    )
}

{/* <div className="pic-ctn">
            <img src="https://www.showmetech.com.br/wp-content/uploads//2020/12/miles-morales-4k-1024x576.jpg" alt="" className="pic" />
            <img src="https://wallpapercrafter.com/desktop/45526-agony-2018-games-games-hd-4k-5k-hell.jpg" alt="" className="pic" />
            <img src="https://c4.wallpaperflare.com/wallpaper/150/694/443/fantasy-world-planets-sci-fi-snow-wallpaper-preview.jpg" alt="" className="pic" />
            <img src="https://wallpaper.dog/large/974202.jpg" alt="" className="pic" />
            <img src="https://newevolutiondesigns.com/images/freebies/cool-4k-wallpaper-3.jpg" alt="" className="pic" />
        </div> */}