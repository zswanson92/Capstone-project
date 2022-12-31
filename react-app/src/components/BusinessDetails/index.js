import { useParams, useHistory, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBusinessByIdThunk, deleteBusinessThunk } from "../../store/business";
import './BusinessDetails.css'
import ReviewFormButton from "../review_form/ReviewForm";


const BusinessDetails = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { businessId } = useParams();

    const sessionUser = useSelector((state) => state.session.user);

    const businessInfoObj = useSelector((state) => {
        return state.businessReducer.businesses[businessId];
    });

    useEffect(() => {
        dispatch(getBusinessByIdThunk(businessId));
    }, [dispatch, businessId]);

    const deleteABusiness = (e, id) => {
        e.preventDefault();
        dispatch(deleteBusinessThunk(id))
        return setTimeout(function () { history.push('/businesses'); }, 10);
    }

    let monCheck = false
    let tuesCheck = false
    let wedsCheck = false
    let thursCheck = false
    let friCheck = false
    let satCheck = false
    let sunCheck = false

    if (businessInfoObj?.monday_hours.split('').includes(',')) {
        monCheck = true
    }

    if (businessInfoObj?.tuesday_hours.split('').includes(',')) {
        tuesCheck = true
    }

    if (businessInfoObj?.wednesday_hours.split('').includes(',')) {
        wedsCheck = true
    }

    if (businessInfoObj?.thursday_hours.split('').includes(',')) {
        thursCheck = true
    }

    if (businessInfoObj?.friday_hours.split('').includes(',')) {
        friCheck = true
    }

    if (businessInfoObj?.saturday_hours.split('').includes(',')) {
        satCheck = true
    }

    if (businessInfoObj?.sunday_hours.split('').includes(',')) {
        sunCheck = true
    }

    // const currReview = Object.values(businessInfoObj)
    // console.log("THIS IS CURRREVIEW", currReview)


    const reviewFilter = businessInfoObj?.reviews.filter(obj => {
        return obj.user_id === sessionUser?.id
    })
    console.log("THIS IS REVFILTER !!!!!", reviewFilter)


    return (
        <>
            <div className="main-container-business-details">
                <div className="delete-edit-business-buttons-div">
                    <div>
                        {sessionUser &&
                            (sessionUser.id === businessInfoObj?.user_id && (
                                <Link exact="true" to={`/edit/businesses/${businessId}`}>
                                    <button className="edit-business-button">
                                        Edit Business
                                    </button>
                                </Link>
                            ))}
                    </div>
                    <div>
                        {sessionUser &&
                            (sessionUser.id === businessInfoObj?.user_id ? (
                                <button
                                    className="business-delete-button"
                                    onClick={(event) => deleteABusiness(event, businessId)}
                                >
                                    {" "}
                                    Delete Business{" "}
                                </button>
                            ) : null)}
                    </div>

                </div>
                <div className="bannerimage" style={{ backgroundImage: `url(${businessInfoObj?.preview_img})` }}>
                    <h1 className="business-name-h1"> {businessInfoObj?.name} </h1>
                    <h2 className="business-name-h2"> {businessInfoObj?.tags} </h2>
                </div>
                <div className="contact-info-div">
                    <h2>Location & Hours</h2>
                    <div className="daily-hours-div">

                        <div className="address-single-div">
                            {businessInfoObj?.address}
                        </div>
                        {/* <div className="potential-map-location">
                            This is where Map will be!
                        </div> */}
                        <span className="potential-map-location">
                            This is where Map will be!
                        </span>
                        <ul className="contact-info-ul">
                            {monCheck ? <li className="hours-li">Mon&nbsp; &nbsp; &nbsp;{businessInfoObj?.monday_hours.split(',')[0]}</li> : <li className="hours-li">Mon&nbsp; &nbsp; &nbsp;{businessInfoObj?.monday_hours}</li>}
                            {monCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.monday_hours.split(',')[1]}</li> : ""}
                            {tuesCheck ? <li className="hours-li">Tue&nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.tuesday_hours.split(',')[0]}</li> : <li className="hours-li">Tue&nbsp; &nbsp; &nbsp;{businessInfoObj?.tuesday_hours}</li>}
                            {tuesCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.tuesday_hours.split(',')[1]}</li> : ""}
                            {wedsCheck ? <li className="hours-li">Wed&nbsp; &nbsp; &nbsp;{businessInfoObj?.wednesday_hours.split(',')[0]}</li> : <li className="hours-li">Wed&nbsp; &nbsp; &nbsp;{businessInfoObj?.wednesday_hours}</li>}
                            {wedsCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.wednesday_hours.split(',')[1]}</li> : ""}
                            {thursCheck ? <li className="hours-li">Thur&nbsp; &nbsp; &nbsp;{businessInfoObj?.thursday_hours.split(',')[0]}</li> : <li className="hours-li">Thur&nbsp; &nbsp; &nbsp;{businessInfoObj?.thursday_hours}</li>}
                            {thursCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.thursday_hours.split(',')[1]}</li> : ""}
                            {friCheck ? <li className="hours-li">Fri &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.friday_hours.split(',')[0]}</li> : <li className="hours-li">Fri&nbsp; &nbsp; &nbsp;{businessInfoObj?.friday_hours}</li>}
                            {friCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.friday_hours.split(',')[1]}</li> : ""}
                            {satCheck ? <li className="hours-li">Sat&nbsp; &nbsp; &nbsp;{businessInfoObj?.saturday_hours.split(',')[0]}</li> : <li className="hours-li">Sat&nbsp; &nbsp; &nbsp;{businessInfoObj?.saturday_hours}</li>}
                            {satCheck ? <li className="hours-li"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.saturday_hours.split(',')[1]}</li> : ""}
                            {sunCheck ? <li className="hours-li">Sun&nbsp; &nbsp; &nbsp;{businessInfoObj?.sunday_hours.split(',')[0]}</li> : <li className="hours-li">Sun&nbsp; &nbsp; &nbsp;{businessInfoObj?.sunday_hours}</li>}
                            {sunCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.sunday_hours.split(',')[1]}</li> : ""}
                            <br></br>
                        </ul>
                    </div>
                    <div className="details-contact-info-div">
                        <h2 className="contact-info-h2">Contact Information</h2>
                        <hr />
                        <ul className="contact-info-ul">
                            <li className="contact-info-li">Website: <Link to={`/`}>{businessInfoObj?.business_website}</Link></li>
                            <hr className="contact-info-ul-hr" />
                            <li className="contact-info-li">Phone Number: {businessInfoObj?.phone_number}</li>
                            <hr className="contact-info-ul-hr" />
                            <li className="contact-info-li">Email Address: {businessInfoObj?.email}</li>
                            <hr className="contact-info-ul-hr" />
                            <li className="contact-info-li">Address: {businessInfoObj?.address}</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* <div className="services-div">
                <h2>TESTING SERVICES</h2>
                <p>{businessInfoObj?.services}</p>
            </div> */}

            <div className="where-reviews-will-go-probably">
                <div className="leave-review-button-div">
                    {sessionUser && reviewFilter?.length < 1 && (sessionUser.id !== businessInfoObj?.user_id ? <ReviewFormButton /> : null)}
                    {/* {console.log("@@@@", businessInfoObj)} */}
                </div>
                <div className="testing-review-location">
                    {businessInfoObj?.reviews.map((reviewObj) => {
                        return (
                            <>
                                <li key={reviewObj.id} className="business-details-reviews-li">"{reviewObj?.body}"  &nbsp; &nbsp; &nbsp; {reviewObj.stars}⭐</li>
                                {sessionUser && (sessionUser.id === reviewObj.user_id) ? (
                                    <Link to={`/edit/${businessId}/reviews/${reviewObj.id}`}>Edit Review</Link>
                                ) : null}
                            </>
                        )
                        // {sessionUser && (sessionUser?.id === review?.User?.id ? <button className='remove-review-button' id={review.id} onClick={deleteAReview}>Remove Review</button> : null)}
                    })}

                </div>
            </div>
        </>
    )
}

export default BusinessDetails;
