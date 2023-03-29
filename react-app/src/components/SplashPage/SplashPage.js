import { useEffect } from 'react';
// import { getAllBusinessesThunk } from '../../store/business';
// import { getAllReviewsThunk } from '../../store/review';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import './SplashPage.css'
import { getKey } from '../../store/map'
// import { FaStar } from "react-icons/fa";
// import { IconContext } from "react-icons";
import ImageShuffle from '../ImageShuffle/ImageShuffle';
import SplashBusinessList from '../SplashBusinessList/SplashBusinessList';





const SplashPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getKey())
    }, [dispatch]);



    return (
        <div className='main-splashpage-div'>
            <ImageShuffle />
            <div className='next-rev-div'>
                <p className='your-next-rev-text'>Your Next Review Awaits</p>
            </div>

            <SplashBusinessList />

            <hr className='post-mapped-sugg-business-hr'></hr>
            <h2 className='splash-page-categories-h2'>Categories</h2>
            <div className='main-categories-div'>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>Restaurants</p> <i className="fa fa-cutlery" aria-hidden="true"></i></div></Link>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>Shopping</p> <i className="fa fa-shopping-cart" aria-hidden="true"></i></div></Link>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>Nightlife</p><i className="fa fa-moon-o" aria-hidden="true"></i></div></Link>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>Active Life</p> <i className="fa fa-bicycle" aria-hidden="true"></i></div></Link>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>Beauty & Spas</p> <i className="fa fa-scissors" aria-hidden="true"></i></div></Link>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>Automotive</p> <i className="fa fa-car" aria-hidden="true"></i></div></Link>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>Home Services</p> <i className="fa fa-home" aria-hidden="true"></i></div></Link>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>More</p> <i className="fa fa-expand" aria-hidden="true"></i></div></Link>
            </div>
                <div className="splash-footer-div-splashpage">
                    <div className="corp-div">© 2022 Zelp Corp</div>
                    <div className='foot-name-div'>

                        <div className='href-div'><a className='splash-github-link' href='https://github.com/zswanson92'>  Zack Swanson</a></div>
                        <div><img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='Logo' className='splash-logo-img'></img></div>
                    </div>
                </div>
        </div>
    )
}

export default SplashPage;
