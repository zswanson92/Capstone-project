import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { getAllBusinessesThunk } from '../../store/business';

const Businesses = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const businessesObj = useSelector(state => {
        return state
    })

    const aBusiness = Object.values(businessesObj.businessReducer.businesses)


    console.log("@@@@@@@@@@ BIZZ OBJ", businessesObj)
    console.log("@@@@@@@@@@ AAA BISSSS", aBusiness)

    useEffect(() => {
        dispatch(getAllBusinessesThunk())
    }, [dispatch])


    if (!aBusiness.length) {
        return null
    }


    return (
        <div className='main-container-div-all-businesses'>
            <div>
                <h1>TEST!!</h1>
            </div>
            <div>
                <span>{aBusiness.length} Businesses</span>
            </div>
            <div>
                {aBusiness.map((obj) => {
                    return (
                        <div key={obj.id} className="business-detail">
                            <Link style={{ textDecoration: 'none' }} to={`/businesses/${obj.id}`}>
                                <p>{obj.id}. {obj.name}</p>
                                <p>{obj.tags}, {obj.address}</p>
                                <div className="details-image-div">
                                    <img src={obj?.preview_img}/>
                                </div>
                            </Link>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Businesses;
