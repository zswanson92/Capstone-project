import { useParams, useHistory, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBusinessByIdThunk, deleteBusinessThunk } from "../../store/business";
import './BusinessDetails.css'
import ReviewFormButton from "../review_form/ReviewForm";


const BusinessDetails = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { businessId } = useParams();

    const [users, setUsers] = useState([]);
    const [confirm, setConfirm] = useState(false)

    const sessionUser = useSelector((state) => state.session.user);

    const businessInfoObj = useSelector((state) => {
        return state.businessReducer.businesses[businessId];
    });
    // console.log("@@@@@@@", businessInfoObj)

    let newArr = []
    let sum = 0

    const eachReviewStarsArr = businessInfoObj?.reviews.forEach(obj => newArr.push(obj.stars))

    const reviewStarArrReduce = newArr?.reduce((accum, currVal) => accum + currVal, sum)

    const reviewStarAvg = (reviewStarArrReduce / businessInfoObj?.reviews.length).toFixed(2)
    // console.log("$$$$$$$$$$$", eachReviewStarsArr)
    // console.log("!!!!!!!!!!!", reviewStarAvg)

    useEffect(() => {
        dispatch(getBusinessByIdThunk(businessId));
    }, [dispatch, businessId]);


    const confirmDelete = (e) => {
        e.preventDefault();
        return alert("Are you sure you want to delete this business? You will lose access to all reviews and data associated with it.")
    }

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
    // const editLinkButton = () => {
    //     return history.push(`/edit/${businessId}/reviews/${reviewObj.id}`)
    // }
    // let date = new Date()
    // let time = date.toLocaleTimeString().split(":").splice(0, 2).join(':');
    // console.log("@@@@@@@@@", time)

    // console.log("!!!!!!!!!!!!!!!", businessInfoObj?.monday_hours.split(',')[0].split('-')[1])
    // const testTestTest = businessInfoObj?.monday_hours.split(',')[0].split('-')[1].split('').splice(0, 5).join('')
    // console.log("????????????????", testTestTest)
    // console.log("????????????????", testTestTest < time)


    const reviewFilter = businessInfoObj?.reviews.filter(obj => {
        return obj.user_id === sessionUser?.id
    })
    // console.log("THIS IS REVFILTER !!!!!", reviewFilter)

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


    return (
        <div className='omega-main-container'>
            {/* <div className="main-container-business-details"> */}
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
                                // onClick={(event) => confirmDelete(event)}
                            >
                                {" "}
                                Delete Business{" "}
                            </button>
                        ) : null)}
                </div>

            </div>

            <div className="bannerimage" style={{ backgroundImage: `url(${businessInfoObj?.preview_img})` }}>
                <div className="business-name-h1"> {businessInfoObj?.name} </div>
                {/* <h2>  </h2> */}
                <div className="business-name-h2"> {reviewStarAvg > 0 ?
                    (<p className="business-name-h2">{`Average Rating ${reviewStarAvg}`} • {starNumChecker(reviewStarAvg)} {businessInfoObj?.reviews.length} review(s)</p>)
                    : ""}</div>
                {/* <p></p> */}
                <div className="business-name-h2-two">{dollarNumChecker(businessInfoObj?.price)} &nbsp; &nbsp; • &nbsp; &nbsp; {businessInfoObj?.tags}  </div>
            </div>


            {/* <div className="contact-info-div"> */}

            <div className="daily-hours-div">
                {/* <h2>Location & Hours</h2> */}
                <div className="address-single-div">
                    {businessInfoObj?.address}
                </div>
                <span className="potential-map-location">
                    This is where Map will be!
                </span>
                {/* <div className="hours-info-ul">

                    {monCheck ? <li className="hours-li">Mon &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.monday_hours.split(',')[0]}</li> : <li className="hours-li">Mon &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.monday_hours}</li>}
                    {monCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.monday_hours.split(',')[1]}</li> : ""}
                    {tuesCheck ? <li className="hours-li">Tue &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.tuesday_hours.split(',')[0]}</li> : <li className="hours-li">Tue &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.tuesday_hours}</li>}
                    {tuesCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.tuesday_hours.split(',')[1]}</li> : ""}
                    {wedsCheck ? <li className="hours-li">Wed &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.wednesday_hours.split(',')[0]}</li> : <li className="hours-li">Wed &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.wednesday_hours}</li>}
                    {wedsCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.wednesday_hours.split(',')[1]}</li> : ""}
                    {thursCheck ? <li className="hours-li">Thu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.thursday_hours.split(',')[0]}</li> : <li className="hours-li">Thu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.thursday_hours}</li>}
                    {thursCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.thursday_hours.split(',')[1]}</li> : ""}
                    {friCheck ? <li className="hours-li">Fri &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.friday_hours.split(',')[0]}</li> : <li className="hours-li">Fri  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.friday_hours}</li>}
                    {friCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.friday_hours.split(',')[1]}</li> : ""}
                    {satCheck ? <li className="hours-li">Sat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.saturday_hours.split(',')[0]}</li> : <li className="hours-li">Sat  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.saturday_hours}</li>}
                    {satCheck ? <li className="hours-li"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.saturday_hours.split(',')[1]}</li> : ""}
                    {sunCheck ? <li className="hours-li">Sun &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.sunday_hours.split(',')[0]}</li> : <li className="hours-li">Sun &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.sunday_hours}</li>}
                    {sunCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.sunday_hours.split(',')[1]}</li> : ""}
                    <br></br>
                </div> */}
            </div>
            <div className="hours-info-ul">

                {monCheck ? <li className="abcd-test-div"><li className="hours-li">Mon &nbsp; &nbsp; &nbsp;{businessInfoObj?.monday_hours.split(',')[0]}</li>
                <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.monday_hours.split(',')[1]}</li>
                </li> : <li className="hours-li">Mon &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {'   '}{businessInfoObj?.monday_hours}</li>}
                {/* {monCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.monday_hours.split(',')[1]}</li> : ""} */}
                {/* {tuesCheck ? <li className="hours-li">Tue &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.tuesday_hours.split(',')[0]}</li> : <li className="hours-li">Tue &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.tuesday_hours}</li>}
                {tuesCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.tuesday_hours.split(',')[1]}</li> : ""} */}
                {tuesCheck ? <li className="abcd-test-div"><li className="hours-li">Tue &nbsp; &nbsp; &nbsp;{businessInfoObj?.tuesday_hours.split(',')[0]}</li>
                <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.tuesday_hours.split(',')[1]}</li>
                </li> : <li className="hours-li">Tue &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.tuesday_hours}</li>}
                {/* {wedsCheck ? <li className="hours-li">Wed &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.wednesday_hours.split(',')[0]}</li> : <li className="hours-li">Wed &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.wednesday_hours}</li>}
                {wedsCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.wednesday_hours.split(',')[1]}</li> : ""} */}
                {wedsCheck ? <li className="abcd-test-div"><li className="hours-li">Wed &nbsp; &nbsp; &nbsp;{businessInfoObj?.wednesday_hours.split(',')[0]}</li>
                <li className="hours-li">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.wednesday_hours.split(',')[1]}</li>
                </li> : <li className="hours-li">Wed &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.wednesday_hours}</li>}
                {/* {thursCheck ? <li className="hours-li">Thu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.thursday_hours.split(',')[0]}</li> : <li className="hours-li">Thu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.thursday_hours}</li>}
                {thursCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.thursday_hours.split(',')[1]}</li> : ""} */}
                {thursCheck ? <li className="abcd-test-div"><li className="hours-li">Thu &nbsp; &nbsp; &nbsp;{businessInfoObj?.thursday_hours.split(',')[0]}</li>
                <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.thursday_hours.split(',')[1]}</li>
                </li> : <li className="hours-li">Thu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {businessInfoObj?.thursday_hours}</li>}
                {/* {friCheck ? <li className="hours-li">Fri &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.friday_hours.split(',')[0]}</li> : <li className="hours-li">Fri  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.friday_hours}</li>}
                {friCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.friday_hours.split(',')[1]}</li> : ""} */}
                {friCheck ? <li className="abcd-test-div"><li className="hours-li">Fri &nbsp; &nbsp; {businessInfoObj?.friday_hours.split(',')[0]}</li>
                <li className="hours-li">&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.friday_hours.split(',')[1]}</li>
                </li> : <li className="hours-li">Fri &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {businessInfoObj?.friday_hours}</li>}
                {/* {satCheck ? <li className="hours-li">Sat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.saturday_hours.split(',')[0]}</li> : <li className="hours-li">Sat  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.saturday_hours}</li>}
                {satCheck ? <li className="hours-li"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.saturday_hours.split(',')[1]}</li> : ""} */}
                {satCheck ? <li className="abcd-test-div"><li className="hours-li">Sat &nbsp; &nbsp; &nbsp;{businessInfoObj?.saturday_hours.split(',')[0]}</li>
                <li className="hours-li"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.saturday_hours.split(',')[1]}</li>
                </li> : <li className="hours-li">Sat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.saturday_hours}</li>}
                {/* {sunCheck ? <li className="hours-li">Sun &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.sunday_hours.split(',')[0]}</li> : <li className="hours-li">Sun &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.sunday_hours}</li>}
                {sunCheck ? <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.sunday_hours.split(',')[1]}</li> : ""} */}
                {sunCheck ? <li className="abcd-test-div"><li className="hours-li">Sun&nbsp; &nbsp; &nbsp;{businessInfoObj?.sunday_hours.split(',')[0]}</li>
                <li className="hours-li">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.sunday_hours.split(',')[1]}</li>
                </li> : <li className="hours-li">Sun&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{businessInfoObj?.sunday_hours}</li>}
                <br></br>
            </div>
            {/* </div> */}
            {/* </div> */}
            {/* <div className="details-contact-info-div">
                        <h2 className="contact-info-h2">Contact Information</h2>
                        <hr />
                        <ul className="contact-info-ul">
                            <li className="contact-info-li">  <Link to={`/`}>{businessInfoObj?.business_website}</Link> &nbsp; &nbsp; &nbsp; <i class="fa fa-share" aria-hidden="true"></i></li>
                            <hr className="contact-info-ul-hr" />
                            <li className="contact-info-li"> {businessInfoObj?.phone_number} &nbsp; &nbsp; &nbsp;  <i class="fa fa-phone" aria-hidden="true"></i></li>
                            <hr className="contact-info-ul-hr" />
                            <li className="contact-info-li">  {businessInfoObj?.email} &nbsp; &nbsp; &nbsp;  <i class="fa fa-envelope-o" aria-hidden="true"></i></li>
                            <hr className="contact-info-ul-hr" />
                            <li className="contact-info-li">  {businessInfoObj?.address} &nbsp; &nbsp; &nbsp; <i class="fa fa-map-marker" aria-hidden="true"></i></li>
                        </ul>
                    </div> */}

            <div className={monCheck ? 'details-contact-info-div-two' : "details-contact-info-div"}>
                <h2 className="contact-info-h2">Contact Information</h2>
                <hr />
                <ul className="contact-info-ul">
                    <li className="contact-info-li">  <Link to={`/`}>{businessInfoObj?.business_website}</Link> &nbsp; &nbsp; &nbsp; <i class="fa fa-share" aria-hidden="true"></i></li>
                    <hr className="contact-info-ul-hr" />
                    <li className="contact-info-li"> {businessInfoObj?.phone_number} &nbsp; &nbsp; &nbsp;  <i class="fa fa-phone" aria-hidden="true"></i></li>
                    <hr className="contact-info-ul-hr" />
                    <li className="contact-info-li">  {businessInfoObj?.email} &nbsp; &nbsp; &nbsp;  <i class="fa fa-envelope-o" aria-hidden="true"></i></li>
                    <hr className="contact-info-ul-hr" />
                    <li className="contact-info-li">  {businessInfoObj?.address} &nbsp; &nbsp; &nbsp; <i class="fa fa-map-marker" aria-hidden="true"></i></li>
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
                    {/* {console.log("@@@@", businessInfoObj)} */}
                </div>
                <div className="testing-review-location">
                    {businessInfoObj?.reviews.map((reviewObj) => {
                        return (
                            <>
                                <div className="move-around-reviews-li-div">
                                    {/* {userComponents(reviewObj.user_id)} */}
                                    <p className="reviewer-name-p">{abcdef[reviewObj?.user_id - 1]?.split('').slice(1).join('')}</p>
                                    {reviewObj ? <p>{reviewObj?.updated_at.split('').slice(0, 16).join('')}</p> : <p>{reviewObj?.created_at.split('').slice(0, 16).join('')}</p>}
                                    <li className="business-details-reviews-stars-li">{starNumChecker(reviewObj?.stars)}</li>
                                    <li key={reviewObj.id} className="business-details-reviews-li">"{reviewObj?.body}"  &nbsp; &nbsp; &nbsp; </li>
                                    {console.log("!!!!!!!!!!!!!!!!", reviewObj)}
                                </div>
                                {reviewObj?.image_url ? <li className="business-details-reviews-li"><img className="review-prev-img" src={reviewObj?.image_url} alt="" /></li> : ""}
                                {sessionUser && (sessionUser.id === reviewObj.user_id) ? (
                                    <div className="edit-review-link-business-details-div"><Link className='edit-review-link-business-details' to={`/edit/${businessId}/reviews/${reviewObj.id}`}><button className="edit-review-link-business-details-button">Edit Review</button></Link></div>
                                ) : null}
                            </>
                        )
                        // {sessionUser && (sessionUser?.id === review?.User?.id ? <button className='remove-review-button' id={review.id} onClick={deleteAReview}>Remove Review</button> : null)}
                    })}
                </div>

            </div>

        </div>
    )
}

export default BusinessDetails;
