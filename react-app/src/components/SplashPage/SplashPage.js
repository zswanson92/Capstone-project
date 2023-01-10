import { useEffect, useState, useCallback } from 'react';
import { getAllBusinessesThunk } from '../../store/business';
import { getAllReviewsThunk } from '../../store/review';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import './SplashPage.css'
import logo from '../../assets/githublogo.png'

const SplashPage = () => {
    // const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();

    const businessesObj = useSelector(state => {
        return state
    })

    const aBusiness = Object.values(businessesObj.businessReducer.businesses)


    let imgs = ['https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1',
        'https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000',
        'https://images3.alphacoders.com/295/2957.jpg',
        'https://images7.alphacoders.com/421/421534.jpg',
        'https://images4.alphacoders.com/150/1506.jpg',
        'https://images.alphacoders.com/153/153783.jpg',
        'https://images2.alphacoders.com/970/97040.jpg',
        'https://images4.alphacoders.com/151/1514.jpg',
        'https://images.alphacoders.com/337/33751.jpg',
        'https://images.alphacoders.com/997/9973.jpg',
        'https://images4.alphacoders.com/988/988128.jpg'
    ]

    const imgsFill = aBusiness?.map((business) => {
        return imgs.push(business.preview_img)
    })


    useEffect(() => {
        dispatch(getAllBusinessesThunk());
        dispatch(getAllReviewsThunk());
    }, [dispatch]);

    const [arrTitles, setArrTitles] = useState("https://images4.alphacoders.com/150/1506.jpg");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * imgs.length);
        setArrTitles(imgs[index]);
    }, [imgs]);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 5000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    function addDefaultSrc(ev) {
        ev.target.src = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'
    }

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
                        <Link key={business.id} to={`/businesses/${business.id}`} className='suggested-reviews-links'>
                            <div className='suggested-reviews-div'>
                                <div className='abcdef-div'><img onError={addDefaultSrc} className='suggested-reviews-img' src={business.preview_img} alt='https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' /></div>
                                <div className='agddgaddga-div'>
                                    <p className='sugg-review-business-name'>{business.name}</p>
                                    <p>Do you recommend this business?</p>
                                    <button className="star-buttons-sugg-review" type='button'
                                    > <i className="fa fa-star-o" aria-hidden="true"></i> 1</button>
                                    <button className="star-buttons-sugg-review" type='button'
                                    > <i className="fa fa-star-o" aria-hidden="true"></i> 2</button>
                                    <button className="star-buttons-sugg-review" type='button'
                                    > <i className="fa fa-star-o" aria-hidden="true"></i> 3</button>
                                    <button className="star-buttons-sugg-review" type='button'
                                    > <i className="fa fa-star-o" aria-hidden="true"></i> 4</button>
                                    <button className="star-buttons-sugg-review" type='button'
                                    > <i className="fa fa-star-o" aria-hidden="true"></i> 5</button>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
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
            <footer className='splash-footer'>
                <p>© 2022 Zelp Corp</p>
                <a className='splash-github-link' href='https://github.com/zswanson92'> <img src={logo} alt='Logo' className='splash-logo-img'></img> Zack Swanson</a>
            </footer>
        </div>
    )
}

export default SplashPage;
