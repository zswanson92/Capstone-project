import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { editReviewThunk, deleteReviewThunk } from "../../store/review";
import './EditReview.css'


const EditReviewButton = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { reviewId, businessId } = useParams()

    const currentBiz = useSelector(state => state.businessReducer.businesses[businessId])

    const revFilter = currentBiz?.reviews.filter(obj => obj.id === +reviewId)

    let editValOne;
    let editValTwo;

    const workAround = revFilter ? editValOne = revFilter[0]?.body : ""
    const workAroundTwo = revFilter ? editValTwo = revFilter[0]?.stars : ""


    const [body, setBody] = useState(editValOne ? editValOne : "")
    const [stars, setStars] = useState(editValTwo ? editValTwo : "")
    const [image_url, setImage_Url] = useState("")
    // const [submitted, setSubmitted] = useState(false)
    const [starOne, setStarOne] = useState(false)
    const [starTwo, setStarTwo] = useState(false)
    const [starThree, setStarThree] = useState(false)
    const [starFour, setStarFour] = useState(false)
    const [starFive, setStarFive] = useState(false)
    const [errors, setErrors] = useState([])

    // console.log("CURRENT BIZ", stars)
    // setStars(editValTwo)





    // const currBusiness = useSelector(state => {
    //     return state.businessReducer.businesses
    // })

    // console.log("THIS IS CURRBUSINESS", currBusiness)

    // const currReview = Object.values(currBusiness)[0]?.reviews
    // console.log("THIS IS CURRREVIEW", currReview)


    // const reviewFilter = currReview?.filter(obj => {
    //     return obj.id === +reviewId
    // })


    // useEffect(() => {
    //     (async () => {
    //       const res = await fetch(`/api/reviews/${reviewId}`)
    //       const data = await res.json()
    //       setStars(data.stars)
    //       setBody(data.body)
    //     })()
    //   }, [reviewId])
    // this needs a get review by Id thunk to work

    useEffect(() => {
        const err = []

        if (body?.length < 10) {
            err.push("Review must be at least 10 characters long.")
        }
        if (stars < 1 || stars > 5) {
            err.push("Stars must be a value between 1 and 5.")
        }
        setErrors(err)
    }, [body, stars])

    const starOneClick = () => {
        if (stars < 2) {
            setStarOne(!starOne)
            setStars(1)
        }
        if (stars === 1) {
            setStars(0)
        }
        if (stars > 1) {
            setStars(1)
            setStarTwo(false)
            setStarThree(false)
            setStarFour(false)
            setStarFive(false)
        }
    }

    const starTwoClick = () => {

        if (stars < 3) {
            setStarOne(true)
            setStarTwo(!starTwo)
            setStars(2)
        }
        if (stars === 2) {
            setStars(0)
            setStarOne(false)
        }
        if (stars > 2) {
            setStars(2)
            setStarThree(false)
            setStarFour(false)
            setStarFive(false)
        }
    }

    const starThreeClick = () => {

        if (stars < 4) {
            setStars(3)
            setStarOne(true)
            setStarTwo(true)
            setStarThree(!starThree)
        }
        if (stars === 3) {
            setStars(0)
            setStarOne(false)
            setStarTwo(false)
        }
        if (stars > 3) {
            setStars(3)
            setStarFour(false)
            setStarFive(false)
        }
    }

    const starFourClick = () => {

        if (stars < 5) {
            setStars(4)
            setStarOne(true)
            setStarTwo(true)
            setStarThree(true)
            setStarFour(!starFour)
        }
        if (stars === 4) {
            setStars(0)
            setStarOne(false)
            setStarTwo(false)
            setStarThree(false)
        }
        if (stars > 4) {
            setStars(4)
            setStarFive(false)
        }
    }

    const starFiveClick = () => {
        if (stars < 6) {
            setStarOne(true)
            setStarTwo(true)
            setStarThree(true)
            setStarFour(true)
            setStarFive(!starFive)
            setStars(5)
        }
        if (stars === 5) {
            setStars(0)
            setStarOne(false)
            setStarTwo(false)
            setStarThree(false)
            setStarFour(false)
        }
    }

    const editCurrReview = async (e) => {
        e.preventDefault();

        if (errors.length > 0) return;

        const editedReview = {
            body,
            stars,
            image_url,
            reviewId
        }

        await dispatch(editReviewThunk(editedReview))

        return history.push(`/businesses/${businessId}`)
    }


    const deleteCurrReview = async (e) => {
        e.preventDefault();

        await dispatch(deleteReviewThunk(reviewId))

        return history.push(`/businesses/${businessId}`)
    }

    const backRoute = () => {
        return history.push(`/businesses/${businessId}`)
    }

    function validImageUrl(url) {
        let falseycheck;
        let lastThree = url.split('').slice(url.length - 3)
        // console.log(lastThree.join(''))
        if (lastThree.join('') === 'png' || lastThree.join('') === 'jpg' || lastThree.join('') === 'peg') {
            falseycheck = true
        } else {
            falseycheck = false
        }
        // console.log(falseycheck)
        return falseycheck
    }

    return (
        <div className="edit-review-container-div">
            <form onSubmit={editCurrReview} className="edit-review-form">
                {/* {errors.length > 0 && (
                    <ul className="edit-review-ul-errors">
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                )} */}
                <div className="edit-review-input-divs-container">
                    <div className="edit-review-text-area-div">
                        <textarea
                            placeholder="Review"
                            className={body?.length < 10 ? "falsey-create-review-inputfield" : "edit-review-text-area"}
                            type='text'
                            name='review-body'
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                        {body?.length < 10 ? <div className="falsey-review-form-body-input">Review must be at least 10 characters long.</div> : ""}
                    </div>
                    <div className="stars-edit-review-input-div">
                        <button className="star-buttons" type='button' onClick={starOneClick}
                        > <i className="fa fa-star-o" aria-hidden="true" style={{ backgroundColor: starOne ? "yellow" : "" }}></i> 1</button>
                        <button className="star-buttons" type='button' onClick={starTwoClick}
                        > <i className="fa fa-star-o" aria-hidden="true" style={{ backgroundColor: starTwo ? "yellow" : "" }}></i> 2</button>
                        <button className="star-buttons" type='button' onClick={starThreeClick}
                        > <i className="fa fa-star-o" aria-hidden="true" style={{ backgroundColor: starThree ? "yellow" : "" }}></i> 3</button>
                        <button className="star-buttons" type='button' onClick={starFourClick}
                        > <i className="fa fa-star-o" aria-hidden="true" style={{ backgroundColor: starFour ? "yellow" : "" }}></i> 4</button>
                        <button className="star-buttons" type='button' onClick={starFiveClick}
                        > <i className="fa fa-star-o" aria-hidden="true" style={{ backgroundColor: starFive ? "yellow" : "" }}></i> 5</button>
                        {stars < 1 || stars > 5 ? <div className="falsey-review-form-stars-input">Must click on a star value.</div> : ""}
                    </div>
                    <div className="image-url-edit-review-input-div">
                        <input
                            placeholder="Image URL (optional)"
                            type='text'
                            className="image-url-edit-review-input"
                            value={image_url}
                            onChange={(e) => setImage_Url(e.target.value)}
                        />
                        {image_url.length > 0 && !validImageUrl(image_url) ? <div className="error-below-inputs-divs-review-edit">If submitting an image, it must be jpg, jpeg, or png format.</div> : ""}
                    </div>
                </div>
                <div className="edit-review-button-duo">
                    {errors.length ? "" : <button type='submit' className="submit-edited-review-button">Submit Edited Review</button>}
                    <button onClick={deleteCurrReview} className='delete-edited-review-button'> Delete Review </button>
                    <button className="return-button-edit-review" onClick={backRoute}>Return to Business</button>
                </div>
            </form>
        </div>
    )
}

export default EditReviewButton;
