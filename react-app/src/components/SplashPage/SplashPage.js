import { useEffect, useState, useCallback, useMemo } from 'react';
import { getAllBusinessesThunk } from '../../store/business';
import { getAllReviewsThunk } from '../../store/review';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import './SplashPage.css'
import { getKey } from '../../store/map'
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";



const SplashPage = () => {
    const dispatch = useDispatch();

    const businessesObj = useSelector(state => {
        return state
    })

    const aBusiness = Object.values(businessesObj.businessReducer.businesses)

    const [arrTitles, setArrTitles] = useState("https://images4.alphacoders.com/150/1506.jpg");
    const [hovered, setHovered] = useState(0)
    const [showIndex, setShowIndex] = useState(null);
    const [start, setStart] = useState(Math.random() * (aBusiness?.length - 0) + 0)
    const [end, setEnd] = useState(aBusiness?.length)
    // const [hoverTip, setHoverTip] = useState(false)

    // const tooltipStyle = {
    //     display: 'block',
    //     position: 'relative',
    //     bottom: '30px',
    //     border: '1px solid black',
    //     zIndex: '2'
    // }





    let imgs = useMemo(() => ['https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1',
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
    ], [])


    aBusiness?.map((business) => {
        return imgs.push(business.preview_img)
    })





    useEffect(() => {
        dispatch(getAllBusinessesThunk());

        dispatch(getAllReviewsThunk());
        dispatch(getKey())

    }, []);




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
                <img className='splash-header-img' src={arrTitles} alt='' />
            </div>
            <div className='next-rev-div'>
                <p className='your-next-rev-text'>Your Next Review Awaits</p>
            </div>
            <div className='mapped-suggest-businesses-div'>
                {aBusiness?.map((business, i) => {
                    return (
                        <Link key={i} to={`/businesses/${business?.id}`} className='suggested-reviews-links'>
                            <div className='suggested-reviews-div'>
                                {business?.preview_img ? <div className='abcdef-div'><img onError={addDefaultSrc} className='suggested-reviews-img' src={business?.preview_img} alt="Loading..."  /></div> : ""}
                                <div className='agddgaddga-div'>
                                    <p className='sugg-review-business-name'>{business?.name}</p>
                                    <p>Do you recommend this business?</p>
                                    <div className='abcdefg-div'>
                                        <div id="a" onMouseEnter={() => [setShowIndex(i), setHovered(1)]} onMouseLeave={() => [setShowIndex(null), setHovered(null)]} className={(showIndex === i && hovered >= 1) ? 'test-splashbutton-div-two' : 'test-splashbutton-div'}>
                                            {/* <div style={(showIndex === i && hoverTip) ? tooltipStyle : {display: 'none'}}>this is the tooltip!!</div> */}
                                            <button className="star-buttons-sugg-review" type='radio'>
                                                <IconContext.Provider value={{ color: 'white', size: '16' }} >
                                                    <FaStar />
                                                </IconContext.Provider>
                                            </button>
                                        </div>
                                        <div id="b" onMouseEnter={() => [setShowIndex(i), setHovered(2)]} onMouseLeave={() => [setShowIndex(null), setHovered(null)]} className={(showIndex === i && hovered >= 2) ? 'test-splashbutton-div-two-two' : 'test-splashbutton-div'}>
                                            <button className="star-buttons-sugg-review" type='button'
                                            > <IconContext.Provider value={{ color: 'white', size: '16' }} >
                                                    <FaStar />
                                                </IconContext.Provider></button>

                                        </div>
                                        <div id="c" onMouseEnter={() => [setShowIndex(i), setHovered(3)]} onMouseLeave={() => [setShowIndex(null), setHovered(null)]} className={(showIndex === i && hovered >= 3) ? 'test-splashbutton-div-two-three' : 'test-splashbutton-div'} >
                                            <button className="star-buttons-sugg-review" type='button'
                                            > <IconContext.Provider value={{ color: 'white', size: '16' }} >
                                                    <FaStar />
                                                </IconContext.Provider></button>
                                        </div>
                                        <div id="d" onMouseEnter={() => [setShowIndex(i), setHovered(4)]} onMouseLeave={() => [setShowIndex(null), setHovered(null)]} className={(showIndex === i && hovered >= 4) ? 'test-splashbutton-div-two-four' : 'test-splashbutton-div'}>
                                            <button className="star-buttons-sugg-review" type='button'
                                            > <IconContext.Provider value={{ color: 'white', size: '16' }} >
                                                    <FaStar />
                                                </IconContext.Provider></button>
                                        </div>
                                        <div id="e" onMouseEnter={() => [setShowIndex(i), setHovered(5)]} onMouseLeave={() => [setShowIndex(null), setHovered(null)]} className={(showIndex === i && hovered >= 5) ? 'test-splashbutton-div-two-five' : 'test-splashbutton-div'}>
                                            <button className="star-buttons-sugg-review" type='button'
                                            > <IconContext.Provider value={{ color: 'white', size: '16' }} >
                                                    <FaStar />
                                                </IconContext.Provider></button>
                                        </div>
                                    </div>
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
