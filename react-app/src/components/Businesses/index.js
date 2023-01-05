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


    return (
        <div className='main-container-div-all-businesses'>
            <div className='total-business-count-div'>
                <h2>{aBusiness?.length} Businesses</h2>
            </div>
            {/* <div className='businesses-h1-div'>
                <h1>Businesses</h1>
            </div> */}
            <div className='first-sub-container-businesses'>
                {aBusiness.map((obj) => {
                    return (
                        <div key={obj?.id} className="business-detail">
                            <div className="details-image-div">
                                <Link to={`/businesses/${obj?.id}`}>
                                {obj?.preview_img ? <img className='business-prev-img' src={obj?.preview_img} alt='Loading...' style={{height: '9em', width: '19em'}}/> : ""}
                                </Link>
                            </div>
                            <div className='business-list-info-div'>
                            <Link className='business-links' to={`/businesses/${obj?.id}`} style={{ textDecoration: 'none' }} >
                                <p className='business-id-name-p'>{obj?.id}. {obj.name}</p>
                                <p className='business-id-tags-p'>Tags: {obj?.tags} / Address: {obj?.address}</p>
                                <hr className='businesses-hr' />
                            </Link>
                            {/* <div className="line-4"> */}

                            {/* </div> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Businesses;
