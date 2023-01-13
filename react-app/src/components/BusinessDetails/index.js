import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBusinessByIdThunk } from "../../store/business";
import { getReviewsByBusinessIdThunk, addUsefulThunk, addCoolThunk, addFunnyThunk } from "../../store/review";
import './BusinessDetails.css'
import ReviewFormButton from "../review_form/ReviewForm";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";
import logo from '../../assets/githublogo.png'
// import NavBar from "../NavBar";


const BusinessDetails = () => {
    const dispatch = useDispatch();
    const { businessId } = useParams();

    const [users, setUsers] = useState([]);
    const [confirm, setConfirm] = useState(false)

    const sessionUser = useSelector((state) => state.session.user);

    const businessInfoObj = useSelector((state) => {
        return state.businessReducer.businesses[businessId];
    });


    const reviewObj = useSelector(state => {
        return state
    })

    const reviewsArr = Object.values(reviewObj.reviewsReducer.allReviews)


    let newArr = []
    let sum = 0

    const eachReviewStarsArr = businessInfoObj?.reviews.forEach(obj => newArr.push(obj.stars))

    const reviewStarArrReduce = newArr?.reduce((accum, currVal) => accum + currVal, sum)

    const reviewStarAvg = (reviewStarArrReduce / businessInfoObj?.reviews.length).toFixed(2)


    useEffect(() => {
        dispatch(getBusinessByIdThunk(businessId));
        dispatch(getReviewsByBusinessIdThunk(businessId));
    }, [dispatch, businessId]);


    const confirmDelete = (e) => {
        e.preventDefault();
        setConfirm(true)
    }

    const createUseful = async (e, reviewid) => {
        e.preventDefault();
        await dispatch(addUsefulThunk(reviewid, sessionUser.id))
        await dispatch(getReviewsByBusinessIdThunk(businessId));

    }

    const createFunny = async (e, reviewid) => {
        e.preventDefault();
        await dispatch(addFunnyThunk(reviewid, sessionUser.id))
        await dispatch(getReviewsByBusinessIdThunk(businessId));

    }

    const createCool = async (e, reviewid) => {
        e.preventDefault();
        await dispatch(addCoolThunk(reviewid, sessionUser.id))
        await dispatch(getReviewsByBusinessIdThunk(businessId));

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




    const reviewFilter = businessInfoObj?.reviews.filter(obj => {
        return obj.user_id === sessionUser?.id
    })

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

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/users/`);
            const responseData = await response.json();
            setUsers(responseData.users);
        }
        fetchData();
    }, []);



    let abcdef = []
    const userComponents = users?.map((user) => {
        return abcdef.push(user.id + user.fullname)
    });

    const theSetConfirm = () => {
        setConfirm(false)
    }

    function addDefaultSrc(ev) {
        ev.target.src = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'
    }




    return (
        <div className='omega-main-container'>
            {/* <div><NavBar /></div> */}
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
                                // onClick={(event) => deleteABusiness(event, businessId)}
                                onClick={(event) => confirmDelete(event)}
                            >
                                {" "}
                                Delete Business{" "}
                            </button>
                        ) : null)}
                    {confirm ? <ConfirmDelete confirm={confirm} setconfirm={theSetConfirm} /> : ""}
                </div>

            </div>

            <div className="bannerimage" style={{ backgroundImage: `url(${businessInfoObj?.preview_img})` }}>
                <div className="business-name-h1"> {businessInfoObj?.name} </div>
                <div className="business-name-h2"> {reviewStarAvg > 0 ?
                    (<p className="business-name-h2">{`Average Rating ${reviewStarAvg}`} • {starNumChecker(reviewStarAvg)} {businessInfoObj?.reviews.length} review(s)</p>)
                    : ""}</div>
                <div className="business-name-h2-two">{dollarNumChecker(businessInfoObj?.price)} &nbsp; &nbsp; • &nbsp; &nbsp; {businessInfoObj?.tags}  </div>
            </div>


            <div className="beta-container-test">
                <div className="daily-hours-div">
                    <div className="address-single-div">
                        {businessInfoObj?.address}
                    </div>
                    <div className="potential-map-location" style={{ backgroundImage: 'url(https://www.greenbot.com/wp-content/uploads/2017/03/google-maps-2.jpg)' }}>

                        <p className="maps-p">Maps API implementation coming soon.</p>
                    </div>
                </div>


                <div className="new-scratch-div-for-hours">
                    <div className="container-divs-inside-new-scratch">Mon: {businessInfoObj?.monday_hours.split(',').length > 1 ? <div className="two-piece-hours-div"> {businessInfoObj?.monday_hours.split(',')[0]} {businessInfoObj?.monday_hours.split(',')[1]} </div> : businessInfoObj?.monday_hours.split(',')[0]}</div>
                    <div className="container-divs-inside-new-scratch">Tue: {businessInfoObj?.tuesday_hours.split(',').length > 1 ? <div className="two-piece-hours-div"> {businessInfoObj?.tuesday_hours.split(',')[0]} {businessInfoObj?.tuesday_hours.split(',')[1]} </div> : businessInfoObj?.tuesday_hours.split(',')[0]}</div>
                    <div className="container-divs-inside-new-scratch">Wed: {businessInfoObj?.wednesday_hours.split(',').length > 1 ? <div className="two-piece-hours-div"> {businessInfoObj?.wednesday_hours.split(',')[0]} {businessInfoObj?.wednesday_hours.split(',')[1]} </div> : businessInfoObj?.wednesday_hours.split(',')[0]}</div>
                    <div className="container-divs-inside-new-scratch">Thu: {businessInfoObj?.thursday_hours.split(',').length > 1 ? <div className="two-piece-hours-div"> {businessInfoObj?.thursday_hours.split(',')[0]} {businessInfoObj?.thursday_hours.split(',')[1]} </div> : businessInfoObj?.thursday_hours.split(',')[0]}</div>
                    <div className="container-divs-inside-new-scratch">Fri: {businessInfoObj?.friday_hours.split(',').length > 1 ? <div className="two-piece-hours-div"> {businessInfoObj?.friday_hours.split(',')[0]} {businessInfoObj?.friday_hours.split(',')[1]} </div> : businessInfoObj?.friday_hours.split(',')[0]}</div>
                    <div className="container-divs-inside-new-scratch">Sat: {businessInfoObj?.saturday_hours.split(',').length > 1 ? <div className="two-piece-hours-div"> {businessInfoObj?.saturday_hours.split(',')[0]} {businessInfoObj?.saturday_hours.split(',')[1]} </div> : businessInfoObj?.saturday_hours.split(',')[0]}</div>
                    <div className="container-divs-inside-new-scratch">Sun: {businessInfoObj?.sunday_hours.split(',').length > 1 ? <div className="two-piece-hours-div"> {businessInfoObj?.sunday_hours.split(',')[0]} {businessInfoObj?.sunday_hours.split(',')[1]} </div> : businessInfoObj?.sunday_hours.split(',')[0]}</div>
                </div>

                <div className="details-contact-info-div">
                    <h2 className="contact-info-h2">Contact Information</h2>
                    <hr />
                    <ul className="contact-info-ul">
                        {businessInfoObj?.business_website ? <li className="contact-info-li">  <Link className="business-website-link-link" to={`/`}>{businessInfoObj?.business_website}</Link> &nbsp; &nbsp; &nbsp; <i className="fa fa-share" aria-hidden="true"></i></li> : ""}
                        {businessInfoObj?.business_website ? <hr className="contact-info-ul-hr" /> : ""}
                        <li className="contact-info-li"> {businessInfoObj?.phone_number} &nbsp; &nbsp; &nbsp;  <i className="fa fa-phone" aria-hidden="true"></i></li>
                        <hr className="contact-info-ul-hr" />
                        <li className="contact-info-li">  {businessInfoObj?.email} &nbsp; &nbsp; &nbsp;  <i className="fa fa-envelope-o" aria-hidden="true"></i></li>
                        <hr className="contact-info-ul-hr" />
                        <li className="contact-info-li">  {businessInfoObj?.address} &nbsp; &nbsp; &nbsp; <i className="fa fa-map-marker" aria-hidden="true"></i></li>
                    </ul>
                </div>

                <div className="where-reviews-will-go-probably">
                    <div className="about-the-biz-div">
                        <hr className="about-biz-hr-sep"></hr>
                        <h2 className="about-biz-h2">About the Business</h2>
                        {businessInfoObj?.about_us}
                        <hr className="about-biz-hr-sep-two"></hr>
                    </div>
                    <div className="leave-review-button-div">
                        {sessionUser && reviewFilter?.length < 1 && (sessionUser.id !== businessInfoObj?.user_id ? <ReviewFormButton /> : null)}
                    </div>
                    <div className="testing-review-location">
                        <div className="overall-rating-div-above-reviews">Overall rating
                            {businessInfoObj?.reviews.length > 0 ? <div>{reviewStarAvg} • {starNumChecker(reviewStarAvg)}</div> : ""}
                            <div>{businessInfoObj?.reviews.length} review(s)</div>
                        </div>

                        {/* {businessInfoObj?.reviews.map((reviewObj) => {
                            return (
                                <div key={reviewObj.id}>
                                    <div className="move-around-reviews-li-div">
                                        <p className="reviewer-name-p">{abcdef[reviewObj?.user_id - 1]?.split('').slice(1).join('')}</p>
                                        <div className="business-details-reviews-stars-li">{starNumChecker(reviewObj?.stars)} &nbsp; {reviewObj?.created_at.split('').slice(0, 16).join('')}</div>
                                        <div key={reviewObj.id} className="business-details-reviews-div">"{reviewObj?.body}" </div>
                                    </div>
                                    {reviewObj?.image_url ? <div className="business-details-reviews-li-image-holder"><img onError={addDefaultSrc} className="review-prev-img" src={reviewObj?.image_url} alt="" /></div> : ""}
                                    {sessionUser?.id !== reviewObj?.user_id ?
                                        <div className="three-review-buttons-div">
                                            <button className='review-voting-buttons'>💡 Useful</button>
                                            <button className='review-voting-buttons'>😁 Funny</button>
                                            <button className='review-voting-buttons'>😎 Cool</button>
                                        </div> : ""}
                                    {sessionUser && (sessionUser.id === reviewObj.user_id) ? (
                                        <div className="edit-review-link-business-details-div"><Link className='edit-review-link-business-details' to={`/edit/${businessId}/reviews/${reviewObj.id}`}><button className="edit-review-link-business-details-button">Edit Review</button></Link></div>
                                    ) : null}
                                </div>
                            )
                        })} */}
                        {reviewsArr.map((reviewObj) => {
                            return (
                                <div key={reviewObj.id}>
                                    <div className="move-around-reviews-li-div">
                                        <p className="reviewer-name-p">{abcdef[reviewObj?.user_id - 1]?.split('').slice(1).join('')}</p>
                                        <div className="business-details-reviews-stars-li">{starNumChecker(reviewObj?.stars)} &nbsp; {reviewObj?.created_at.split('').slice(0, 16).join('')}</div>
                                        <div key={reviewObj.id} className="business-details-reviews-div">"{reviewObj?.body}" </div>
                                    </div>
                                    {reviewObj?.image_url ? <div className="business-details-reviews-li-image-holder"><img onError={addDefaultSrc} className="review-prev-img" src={reviewObj?.image_url} alt="" /></div> : ""}
                                    {sessionUser?.id !== reviewObj?.user_id ?
                                        <div className="three-review-buttons-div">
                                            <button className='review-voting-buttons' disabled={sessionUser ? false : true} onClick={(e) => createUseful(e, reviewObj.id)}>💡 Useful {reviewObj?.useful}</button>
                                            <button className='review-voting-buttons' disabled={sessionUser ? false : true} onClick={(e) => createFunny(e, reviewObj.id)}>😁 Funny {reviewObj?.funny}</button>
                                            <button className='review-voting-buttons' disabled={sessionUser ? false : true} onClick={(e) => createCool(e, reviewObj.id)}>😎 Cool {reviewObj?.cool}</button>
                                        </div> : ""}
                                    {sessionUser && (sessionUser.id === reviewObj.user_id) ? (
                                        <div className="edit-review-link-business-details-div"><Link className='edit-review-link-business-details' to={`/edit/${businessId}/reviews/${reviewObj.id}`}><button className="edit-review-link-business-details-button">Edit Review</button></Link></div>
                                    ) : null}
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            <footer className='splash-footer'>
                <p>© 2022 Zelp Corp</p>
                <a className='splash-github-link' href='https://github.com/zswanson92'> <img src={logo} alt='Logo' className='splash-logo-img'></img> Zack Swanson</a>
            </footer>
        </div>
    )
}

export default BusinessDetails;
