import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./ReviewForm.css";
import { createReviewThunk } from "../../store/review";


const ReviewFormButton = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const { businessId } = useParams()

    const [body, setBody] = useState("");
    const [stars, setStars] = useState(1);
    const [image_url, setImage_url] = useState("");
    const [showReviewForm, setReviewForm] = useState(false)
    const [errors, setErrors] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (errors.length > 0) return
        const newReview = {
          businessId,
          user_id: sessionUser.id,
          body,
          stars,
          image_url
        };

        await dispatch(createReviewThunk(newReview));
        setBody('');
        setReviewForm(false)
        history.push(`/businesses/${businessId}`)
        // return await dispatch(getBusinessByIdThunk(businessId))
    };

    return (
        <>

        { showReviewForm ?
        <div className="create-review-div">
        <form onSubmit={onSubmit}>
          {errors.length > 0 && (
          <ul>
            {errors?.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          )}
          <div>
          {/* <label>
            Review: */}
            <br></br>
            <textarea
              className="create-review-inputfield"
              type="text"
              placeholder="Please be detailed in your Review"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            ></textarea>
          {/* </label> */}
          <label className="stars-label">
            <input
            className="stars-create-review-input"
            type="number"
            min="1"
            max="5"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            required/>
            Stars (1-5)
          </label>
          {/* <label>
            Image URL: */}
            <input
            className="image-url-create-review-input"
            type="text"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
            placeholder="Optional Image URL"
            />
          {/* </label> */}
          <button type="submit" className="submitreview-button">Submit Review</button>
          <button onClick={() => setReviewForm(false)} className='discardreviewform-button'>Close Form</button>
          </div>
        </form>
        </div> : (<button onClick={() => setReviewForm(true)} className='createreview-button'> Leave a Review</button>) }
        </>
      );
}

export default ReviewFormButton;
