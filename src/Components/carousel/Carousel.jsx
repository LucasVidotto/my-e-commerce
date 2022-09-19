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