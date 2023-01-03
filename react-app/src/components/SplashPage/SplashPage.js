import { useEffect, useState, useCallback } from 'react';
import { getAllBusinessesThunk } from '../../store/business';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import './SplashPage.css'
import logo from '../../assets/githublogo.png'

const SplashPage = () => {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();

    const businessesObj = useSelector(state => {
        return state
    })

    const aBusiness = Object.values(businessesObj.businessReducer.businesses)

    console.log(aBusiness)

    let imgs = []

    const imgsFill = aBusiness?.map((business) => {
        return imgs.push(business.preview_img)
    })

    console.log("@@@@@@@@@@@", imgs)

    useEffect(() => {
        dispatch(getAllBusinessesThunk());
    }, [dispatch]);

    const [arrTitles, setArrTitles] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * imgs.length);
        setArrTitles(imgs[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 5000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
        <div className='main-splashpage-div'>
            <div className='splash-image-div'>
                {/* <h1>testing splash export</h1> */}
                <img className='splash-header-img' src={arrTitles} alt='' />
            </div>
            <div className='next-rev-div'>
                <p className='your-next-rev-text'>Your Next Review Awaits</p>
            </div>
            <div className='mapped-suggest-businesses-div'>
                {aBusiness?.map((business) => {
                    return (
                        <Link to={`/businesses/${business.id}`} className='suggested-reviews-links'>
                            <div className='suggested-reviews-div'>
                                <div className='abcdef-div'><img className='suggested-reviews-img' src={business.preview_img} alt='' /></div>
                                <div className='agddgaddga-div'>
                                    <p className='sugg-review-business-name'>{business.name}</p>
                                    <p>Do you recommend this business?</p>
                                    <button className="star-buttons-sugg-review" type='button'
                                    > <i class="fa fa-star-o" aria-hidden="true"></i> 1</button>
                                    <button className="star-buttons-sugg-review" type='button'
                                    > <i class="fa fa-star-o" aria-hidden="true"></i> 2</button>
                                    <button className="star-buttons-sugg-review" type='button'
                                    > <i class="fa fa-star-o" aria-hidden="true"></i> 3</button>
                                    <button className="star-buttons-sugg-review" type='button'
                                    > <i class="fa fa-star-o" aria-hidden="true"></i> 4</button>
                                    <button className="star-buttons-sugg-review" type='button'
                                    > <i class="fa fa-star-o" aria-hidden="true"></i> 5</button>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <hr className='post-mapped-sugg-business-hr'></hr>
            <h2 className='splash-page-categories-h2'>Categories</h2>
            <div className='main-categories-div'>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>Restaurants</p> <i class="fa fa-cutlery" aria-hidden="true"></i></div></Link>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>Shopping</p> <i class="fa fa-shopping-cart" aria-hidden="true"></i></div></Link>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>Nightlife</p><i class="fa fa-moon-o" aria-hidden="true"></i></div></Link>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>Active Life</p> <i class="fa fa-bicycle" aria-hidden="true"></i></div></Link>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>Beauty & Spas</p> <i class="fa fa-scissors" aria-hidden="true"></i></div></Link>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>Automotive</p> <i class="fa fa-car" aria-hidden="true"></i></div></Link>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>Home Services</p> <i class="fa fa-home" aria-hidden="true"></i></div></Link>
                <Link to={'/production'} className='category-div-links'><div className='splash-page-category-divs'><p className='text-inside-category-div'>More</p> <i class="fa fa-expand" aria-hidden="true"></i></div></Link>
            </div>
            <footer className='splash-footer'>
                <p>© 2022 Zelp Corp</p>
                <a className='splash-github-link' href='https://github.com/zswanson92'> <img src={logo} alt='Logo' className='splash-logo-img'></img> Zack Swanson</a>
            </footer>
        </div>
    )
}

export default SplashPage;
