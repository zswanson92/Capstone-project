import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { editReviewThunk, deleteReviewThunk } from "../../store/review";


const EditReviewButton = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { reviewId, businessId } = useParams()

    const [body, setBody] = useState("")
    const [stars, setStars] = useState("")
    const [image_url, setImage_Url] = useState("")
    // const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState([])


    const currBusiness = useSelector(state => {
        return state.businessReducer.businesses
    })

    // console.log("THIS IS CURRBUSINESS", currBusiness)

    const currReview = Object.values(currBusiness)[0]?.reviews
    // console.log("THIS IS CURRREVIEW", currReview)


    const reviewFilter = currReview?.filter(obj => {
        return obj.id === +reviewId
    })


    useEffect(() => {
        const err = []

        if(body.length < 10){
            err.push("Review must be at least 10 characters long.")
        }
        if(stars < 1 || stars > 5){
            err.push("Stars must be a value between 1 and 5.")
        }
        setErrors(err)
    }, [body, stars])


    const editCurrReview = async (e) => {
        e.preventDefault();

        if(errors.length > 0) return;

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


    return (
        <div className="edit-review-container-div">
            <form onSubmit={editCurrReview} className="edit-review-form">
                {errors.length > 0 && (
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                )}
                <div className="edit-review-input-divs-container">
                    <div className="edit-review-text-area-div">
                        <textarea
                            placeholder="Review"
                            className="edit-review-text-area"
                            type='text'
                            name='review-body'
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="stars-edit-review-input-div">
                        <input
                        placeholder="Stars"
                        type='number'
                        className="stars-edit-review-input"
                        value={stars}
                        onChange={(e) => setStars(e.target.value)} />
                    </div>
                    <div className="image-url-edit-review-input-div">
                        <input
                        placeholder="Image URL (optional)"
                        type='text'
                        className="image-url-edit-review-input"
                        value={image_url}
                        onChange={(e) => setImage_Url(e.target.value)}
                        />
                    </div>
                </div>
                <div className="edit-review-button-duo">
                    <button type='submit' className="submit-edited-review-button">Submit Edited Review</button>
                    <button onClick={deleteCurrReview} className='delete-edited-review-button'> Delete Review </button>
                </div>
            </form>
        </div>
    )
}

export default EditReviewButton;
