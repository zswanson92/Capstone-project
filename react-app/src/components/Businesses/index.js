import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllBusinessesThunk } from '../../store/business';
import './Businesses.css'
// import logo from '../../assets/yelp_logo.PNG'
import logo from '../../assets/githublogo.png'
import HomeMap from '../MapsApi';
// import { getKey } from '../../store/map'


const Businesses = () => {
    const dispatch = useDispatch()
    // const history = useHistory()



    const businessesObj = useSelector(state => {
        return state
    })



    const aBusiness = Object.values(businessesObj.businessReducer.businesses)


    useEffect(() => {
        dispatch(getAllBusinessesThunk())
        // dispatch()
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
        if (stars == 5.00) {
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

    // let newArr = []
    // let sum = 0

    // const eachReviewStarsArr = businessInfoObj?.reviews.forEach(obj => newArr.push(obj.stars))

    // const reviewStarArrReduce = newArr?.reduce((accum, currVal) => accum + currVal, sum)

    // const reviewStarAvg = (reviewStarArrReduce / businessInfoObj?.reviews.length).toFixed(2)
    const fillerImg = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'

    function addDefaultSrc(ev) {
        ev.target.src = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'
    }

    return (
        <>
            <div className='total-business-count-div'>
                <h2>{aBusiness?.length} Businesses</h2>
                {/* <div className='a-map-div'> <HomeMap /> </div> */}
            </div>
            <div className='main-container-div-all-businesses'>
                <div className='a-map-div'> <HomeMap /> </div>
                <div className='first-sub-container-businesses'>
                    {aBusiness.map((obj) => {
                        return (
                            <div key={obj?.id} className="business-detail">
                                {/* <div className="details-div-image"> */}
                                {/* <Link className="details-div-image" to={`/businesses/${obj?.id}`}> */}
                                {/* {obj?.preview_img ? <img className='business-prev-img' src={obj?.preview_img} alt='Loading...' /> : ""} */}
                                {/* </Link> */}
                                {/* </div> */}
                                {/* <div className='business-list-info-div'> */}
                                <Link className='business-links' to={`/businesses/${obj?.id}`} style={{ textDecoration: 'none' }} >
                                    {obj?.preview_img ? <img className='business-prev-img' onError={addDefaultSrc} src={obj?.preview_img} alt='https://cdn-icons-png.flaticon.com/512/168/168812.png' /> : <img className='business-prev-img' src={fillerImg} alt={fillerImg} />}
                                    <div>
                                        <div className='business-id-name-p-name'>{obj?.id}. {obj.name}</div>
                                        <p>{starNumChecker(avgFinder(obj?.reviews))} {obj?.reviews.length} Reviews</p>
                                        <div className='business-id-tags-p'>{obj?.tags.split(',').map((tag) => {

                                            return (

                                                <div key={tag} className='mapped-tag-buttons-businesses-div'>
                                                    {obj?.tags ? <button className='mapped-tag-buttons-businesses'>{tag}</button> : ""}
                                                    {/* {"$$$$$$$$$$$", console.log(tag)} */}
                                                </div>
                                            )
                                        })} {dollarNumChecker(obj?.price)}</div>
                                        <p className='testtextdiv'>{obj?.reviews[obj?.reviews.length - 1]?.body} </p>
                                    </div>
                                    {/* <hr className='businesses-hr' /> */}
                                </Link>
                                <Link className='more-link-on-businesses' to={`/businesses/${obj?.id}`}>more</Link>
                                {/* </div> */}
                                {/*  */}
                            </div>
                        )
                    })}
                </div>
            </div>
            <footer className='splash-footer'>
                <p>© 2022 Zelp Corp</p>
                <a className='splash-github-link' href='https://github.com/zswanson92'> <img src={logo} alt='Logo' className='splash-logo-img'></img> Zack Swanson</a>
            </footer>
        </>
    )
}

export default Businesses;
