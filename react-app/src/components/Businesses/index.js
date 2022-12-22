import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { getAllBusinessesThunk } from '../../store/business';
import './Businesses.css'

const Businesses = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const businessesObj = useSelector(state => {
        return state
    })

    const aBusiness = Object.values(businessesObj.businessReducer.businesses)


    // console.log("@@@@@@@@@@ BIZZ OBJ", businessesObj)
    // console.log("@@@@@@@@@@ AAA BISSSS", aBusiness)

    useEffect(() => {
        dispatch(getAllBusinessesThunk())
    }, [dispatch])


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
                                <img className='business-prev-img' src={obj?.preview_img} style={{height: '9em', width: '19em'}}/>
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
