import './notfound.css';

export default function NotFound(){
    const img = 'https://www.seekpng.com/png/detail/212-2123411_404-error-error-404.png';
    return (
        <>
        <div className='not-found'>
            <span>Page Not Found</span>
            <img src={img} alt="not found" />
        </div>
            
        </>
    )
}