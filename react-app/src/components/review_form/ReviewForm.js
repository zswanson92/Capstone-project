import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ReviewForm.css";
import { createReviewThunk, getReviewsByBusinessIdThunk } from "../../store/review";
import { getBusinessByIdThunk } from "../../store/business";
import UploadPicture from "../UploadPicture/UploadPicture";


const ReviewFormButton = () => {
  const dispatch = useDispatch();
  // let history = useHistory();
  const sessionUser = useSelector(state => state.session.user)
  const { businessId } = useParams()

  const [body, setBody] = useState("");
  const [stars, setStars] = useState(0);
  const [image_url, setImage_url] = useState("");
  const [showReviewForm, setReviewForm] = useState(false)
  const [starOne, setStarOne] = useState(false)
  const [starTwo, setStarTwo] = useState(false)
  const [starThree, setStarThree] = useState(false)
  const [starFour, setStarFour] = useState(false)
  const [starFive, setStarFive] = useState(false)
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

    // await dispatch(getBusinessByIdThunk(businessId))
    await dispatch(getReviewsByBusinessIdThunk(businessId))
    // let imageOne;
    // let theRvId = +theCreatedRev.id
    // const formData = new FormData();

    // console.log("AGGDADGDGADGAGD", theRvId)
    // await formData.append("image_url", image_url);
    // await formData.append("review_id", theRvId)


    // const res = await fetch('/api/images', {
    //   method: "POST",
    //   body: formData,
    // });
    // if (res.ok) {
    //   imageOne = await res.json();
    //   return imageOne
    // }
    // else {
    //   console.log("error");
    // }


    // await dispatch(getBusinessByIdThunk(businessId))
  };

  const starOneClick = () => {
    if (stars < 2) {
      setStarOne(!starOne)
      setStars(1) // what is this doing
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

  useEffect(() => {
    const err = []

    if (body.length < 10) {
      err.push("Review must be at least 10 characters long.")
    }
    if (stars < 1 || stars > 5) {
      err.push("Review rating must be on a 1-5 scale.")
    }

    setErrors(err)
  }, [body, stars])

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

  const updateImage = (e) => {
    const file = e.target.files[0];
    console.log("FILE!!", file)
    setImage_url(file);
  }

  return (
    <>

      {showReviewForm ?
        <div className="create-review-div">
          <form onSubmit={onSubmit}>
            {/* {errors.length > 0 && (
              <ul>
                {errors?.map((error, idx) => <li key={idx}>{error}</li>)}
              </ul>
            )} */}
            <div>
              <div className="create-review-textarea-input-div">
                {/* <br></br> */}
                <textarea
                  className={body.length < 10 ? "falsey-create-review-inputfield" : "create-review-inputfield"}
                  type="text"
                  placeholder="Please be detailed in your Review"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  required
                ></textarea>
                {body.length < 10 ? <div className="falsey-review-form-body-input">Review must be at least 10 characters long.</div> : ""}
              </div>
              <div className="create-review-stars-input-div">
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
              <div>
                {/* <input
                  className="image-url-create-review-input"
                  type="text"
                  value={image_url}
                  onChange={(e) => setImage_url(e.target.value)}
                  placeholder="Optional Image URL"
                /> */}
                <input
                  type="file"
                  name='image'
                  accept="image/*"
                  onChange={updateImage}

                />
                {/* <UploadPicture /> */}
                {/* {image_url.length > 0 && !validImageUrl(image_url) ? <div className="error-below-inputs-divs">If submitting an image, it must be jpg, jpeg, or png format.</div> : ""} */}
              </div>
              <div className="two-review-form-button-div">
                {errors.length ? "" : <button type="submit" className="submitreview-button">Submit Review</button>}
                <button onClick={() => setReviewForm(false)} className='discardreviewform-button'>Close Form</button>
              </div>
            </div>
          </form>
        </div> : (<button onClick={() => setReviewForm(true)} className='createreview-button'> ⭐ Write a Review </button>)}
    </>
  );
}

export default ReviewFormButton;
