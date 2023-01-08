import logo from '../../assets/blinkyguy.gif'
import './FourOhFour.css'

const FourOhFour = () => {
    return (
        <div className='fourohfour-div'>
            <h1>404 Error, Page Not Found</h1>
            <img className='fourohfour-img' src={logo} alt='Loading...'></img>
        </div>
    )
}

export default FourOhFour;
