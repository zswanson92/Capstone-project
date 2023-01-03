import { useEffect, useState, useCallback } from 'react';
import { getAllBusinessesThunk } from '../../store/business';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import './SplashPage.css'

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
                {aBusiness.map((business) => {
                    return (
                        <Link className='suggested-reviews-links'>
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
                <div className='splash-page-category-divs'>Restaurants</div>
                <div className='splash-page-category-divs'>Shopping</div>
                <div className='splash-page-category-divs'>Nightlife</div>
                <div className='splash-page-category-divs'>Active Life</div>
                <div className='splash-page-category-divs'>Beauty & Spas</div>
                <div className='splash-page-category-divs'>Automotive</div>
                <div className='splash-page-category-divs'>Home Services</div>
                <div className='splash-page-category-divs'>More</div>
            </div>
            <footer className='splash-footer'>
                <p>About</p>

            </footer>
        </div>
    )
}

export default SplashPage;
