import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllBusinessesThunk } from '../../store/business';
import './Businesses.css'

const Businesses = () => {
    const dispatch = useDispatch()
    // const history = useHistory()
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPosts] = useState([])

    // const [postPerPage, setPostsPerPage] = useState(8)



    const businessesObj = useSelector(state => {
        return state
    })

    // const businessInfoObj = useSelector((state) => {
    //     return state.businessReducer.businesses[businessId];
    // });

    const aBusiness = Object.values(businessesObj.businessReducer.businesses)

    const lastPostIndex = currentPage * postPerPage;

    const firstPostIndex = lastPostIndex - postPerPage

    aBusiness.slice(firstPostIndex, lastPostIndex)

    const nextPage = () => setCurrentPage(prev => prev + 1)

    const prevPage = () => setCurrentPage(prev => prev - 1)

    // console.log("@@@@@@@@@@ BIZZ OBJ", businessesObj)
    // console.log("@@@@@@@@@@ AAA BISSSS", aBusiness)

    useEffect(() => {
        setPosts(dispatch(getAllBusinessesThunk()))

    }, [dispatch, currentPage])


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

    let newArr = []
    let sum = 0

    // const eachReviewStarsArr = businessInfoObj?.reviews.forEach(obj => newArr.push(obj.stars))

    // const reviewStarArrReduce = newArr?.reduce((accum, currVal) => accum + currVal, sum)

    // const reviewStarAvg = (reviewStarArrReduce / businessInfoObj?.reviews.length).toFixed(2)


    return (
        <>
            <div className='total-business-count-div'>
                <h2>{aBusiness?.length} Businesses</h2>
            </div>
            <div className='main-container-div-all-businesses'>

                <div className='first-sub-container-businesses'>
                    {aBusiness.map((obj) => {
                        return (
                            <div key={obj?.id} className="business-detail">
                                <div className="details-image-div">
                                    <Link to={`/businesses/${obj?.id}`}>
                                        {obj?.preview_img ? <img className='business-prev-img' src={obj?.preview_img} alt='Loading...' /> : ""}
                                    </Link>
                                </div>
                                {/* <div className='business-list-info-div'> */}
                                <Link className='business-links' to={`/businesses/${obj?.id}`} style={{ textDecoration: 'none' }} >
                                    <p className='business-id-name-p-name'>{obj?.id}. {obj.name}</p>
                                    <p className='business-id-tags-p'>{obj?.tags.split(',').map((tag) => {

                                        return (

                                            <div className='mapped-tag-buttons-businesses-div'>
                                            <button className='mapped-tag-buttons-businesses'>{tag}</button>
                                            {/* {"$$$$$$$$$$$", console.log(tag)} */}
                                            </div>
                                        )
                                    })} {dollarNumChecker(obj?.price)}</p>
                                    <p className='testtextdiv'>{obj?.reviews[obj?.reviews.length - 1].body} </p><Link className='more-link-on-businesses' to={`/businesses/${obj?.id}`}>more</Link>
                                    <hr className='businesses-hr' />
                                </Link>
                                {/* </div> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Businesses;
