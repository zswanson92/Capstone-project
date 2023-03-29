import { useEffect, useState } from 'react';
import { getAllBusinessesThunk } from '../../store/business';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";


const SplashBusinessList = () => {
    const dispatch = useDispatch();

    const businessesObj = useSelector(state => {
        return state
    })

    const aBusiness = Object.values(businessesObj.businessReducer.businesses)



    const [hovered, setHovered] = useState(0)
    const [showIndex, setShowIndex] = useState(null);



    function addDefaultSrc(ev) {
        ev.target.src = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'
    }

    useEffect(() => {
        dispatch(getAllBusinessesThunk());

    }, [dispatch]);



    return (
        <div className='mapped-suggest-businesses-div'>
                {aBusiness.splice(0, 6)?.map((business, i) => {
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
    )

}





export default SplashBusinessList;
