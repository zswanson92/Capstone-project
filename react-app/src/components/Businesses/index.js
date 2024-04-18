import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllBusinessesThunk } from '../../store/business';
import './Businesses.css'
import HomeMap from '../MapsApi';
import { getKey } from '../../store/map'



const Businesses = () => {
    const dispatch = useDispatch()

    const [start, setStart] = useState(0)
    const [page, setPage] = useState(8)

    const businessesObj = useSelector(state => {
        return state
    })


    let aBusiness = Object.values(businessesObj?.businessReducer?.businesses)
    const testTest = aBusiness.length
    aBusiness = aBusiness.slice(start, page)


    useEffect(() => {
        dispatch(getAllBusinessesThunk())
        dispatch(getKey())
    }, [dispatch])


    if (!aBusiness.length) {
        return null
    }

    const dollarNumChecker = (price) => {
        let dollar;

        if (price === 1) {
            dollar = "$"
        }
        if (price === 2) {
            dollar = "$$"
        }
        if (price === 3) {
            dollar = "$$$"
        }
        if (price === 4) {
            dollar = "$$$$"
        }
        if (price === 5) {
            dollar = "$$$$$"
        }
        return dollar
    }

    const starNumChecker = (stars) => {
        let abc;

        if (stars === 1.00 || (stars > 0 && stars < 2)) {
            abc = "⭐"
        }
        if (stars === 2.00 || (stars > 1 && stars < 3)) {
            abc = "⭐⭐"
        }
        if (stars === 3.00 || (stars > 2 && stars < 4)) {
            abc = "⭐⭐⭐"
        }
        if (stars === 4.00 || (stars > 3 && stars < 5)) {
            abc = "⭐⭐⭐⭐"
        }
        if (stars === 5.00) {
            abc = "⭐⭐⭐⭐⭐"
        }
        return abc
    }

    const avgFinder = (arr) => {
        let sum = 0
        arr.forEach((obj) => {
            sum += obj.stars
        })
        if (arr.length > 0) {
            return sum / arr.length
        }
        return sum
    }

    const fillerImg = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'

    function addDefaultSrc(ev) {
        ev.target.src = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'
    }

    return (
        <>
            <div className='total-business-count-div'>
                <h2 className='businesses-count-h2'>{aBusiness?.length} Businesses</h2>
            </div>
            <div className='main-container-div-all-businesses'>
                <div className='a-map-div'> <HomeMap /> </div>
                <div className='first-sub-container-businesses'>
                    {aBusiness.map((obj) => {
                        return (
                            <div key={obj?.id} className="business-detail">
                                <Link className='business-links' to={`/businesses/${obj?.id}`} style={{ textDecoration: 'none' }} >
                                    {obj?.preview_img ? <img className='business-prev-img' onError={addDefaultSrc} src={obj?.preview_img} alt='https://cdn-icons-png.flaticon.com/512/168/168812.png' /> : <img className='business-prev-img' src={fillerImg} alt={fillerImg} />}
                                    <div>
                                        <div className='business-id-name-p-name'>{obj?.id}. {obj.name}</div>
                                        <p>{starNumChecker(avgFinder(obj?.reviews))} {obj?.reviews.length} Reviews</p>
                                        <div className='business-id-tags-p'>{obj?.tags.split(',').map((tag) => {

                                            return (

                                                <div key={tag} className='mapped-tag-buttons-businesses-div'>
                                                    {obj?.tags ? <button className='mapped-tag-buttons-businesses'>{tag}</button> : ""}
                                                </div>
                                            )
                                        })} {dollarNumChecker(obj?.price)}</div>
                                        <p className='testtextdiv'>"{obj?.reviews[obj?.reviews.length - 1]?.body}" </p>
                                    </div>
                                </Link>
                                <Link className='more-link-on-businesses' to={`/businesses/${obj?.id}`}>more</Link>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className='back-forward-page-buttons-div'>
            <button disabled={start >= 8 ? false : true} className='page-button' onClick={() => [setStart(start - 8), setPage(page -8)]}>Previous Page</button>
            <button disabled={start < testTest / 2 ? false : true} className='page-button' onClick={() => [setStart(start + 8), setPage(page + 8)]}>Next Page</button>
            </div>
            <div className='businesses-footer-div'>

                <div className="splash-footer-div">
                    <div className="corp-div">© 2022 Zelp Corp</div>
                    <div className='foot-name-div'>

                        <div className='href-div'><a className='splash-github-link' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/zack-swanson-90697b261/'>  Zack Swanson</a></div>
                        <div><a target="_blank" rel="noreferrer" href='https://github.com/zswanson92/Capstone-project'> <img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='Logo' className='splash-logo-img'></img></a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Businesses;
