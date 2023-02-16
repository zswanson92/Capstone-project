const ADD_REVIEW = 'add/NEW_REVIEW'
const DELETE_REVIEW = 'delete/REVIEW'
const EDIT_REVIEW = 'edit/REVIEW'
const GET_REVIEWS = 'get/REVIEWS'
const GET_BUSINESS_REVIEWS = 'get/BUSINESS_REVIEWS'
const ADD_USEFUL = 'add/USEFUL'
const ADD_FUNNY = 'add/FUNNY'
const ADD_COOL = 'add/COOL'


const addReview = (review) => ({
    type: ADD_REVIEW,
    payload: review
})

const deleteReview = (review) => ({
    type: DELETE_REVIEW,
    payload: review
})

const editReview = (review) => ({
    type: EDIT_REVIEW,
    payload: review
})

const getAllReviews = (review) => ({
    type: GET_REVIEWS,
    payload: review
})

const getReviewsByBusinessId = (review) => ({
    type: GET_BUSINESS_REVIEWS,
    payload: review
})

const addUseful = (useful) => ({
    type: ADD_USEFUL,
    payload: useful
})

const addFunny = (funny) => ({
    type: ADD_FUNNY,
    payload: funny
})

const addCool = (cool) => ({
    type: ADD_COOL,
    payload: cool
})






export const addUsefulThunk = (reviewid, userId) => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewid}/useful`)

    if(response.ok){
        const useful = await response.json()
        dispatch(addUseful(useful))
        return useful
    }
}


export const addFunnyThunk = (reviewid, userId) => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewid}/funny`)

    if(response.ok){
        const funny = await response.json()
        dispatch(addFunny(funny))
        return funny
    }
}


export const addCoolThunk = (reviewid, userId) => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewid}/cool`)

    if(response.ok){
        const cool = await response.json()
        dispatch(addCool(cool))
        return cool
    }
}



export const getAllReviewsThunk = () => async dispatch => {
    const response = await fetch('/api/reviews')

    if(response.ok){
        const review = await response.json()
        dispatch(getAllReviews(review))
        return review
    }
}


export const getReviewsByBusinessIdThunk = (businessId) => async dispatch => {
    const response = await fetch(`/api/reviews/${businessId}`)

    if(response.ok){
        const review = await response.json()
        dispatch(getReviewsByBusinessId(review))
        return review
    }
}

export const editReviewThunk = (payload) => async dispatch => {
    const { reviewId, body, stars, image_url } = payload

    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ body, stars, image_url })
    })

    if(response.ok){
        const review = await response.json()

        dispatch(editReview(review))
    }
}



export const deleteReviewThunk = (reviewId) => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if(response.ok){
        const review = await response.json()

        dispatch(deleteReview(review))
    }
}


export const createReviewThunk = (payload) => async dispatch => {
    // console.log("!!!!!!!", payload)
    // for (var key of payload.entries()) {
    //     console.log("FRONT END PAYLOAD TWO", key[0] + ', ' + key[1]);
    // }
    // let businessId = payload.businessId
    // console.log("!!!!!!!", businessId)
    const { businessId, user_id, body, stars, image } = payload

    const response = await fetch(`/api/create/${businessId}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ businessId, user_id, body, stars, image })
        // body: payload
    })

    if (response.ok) {
        const review = await response.json()

        dispatch(addReview(review))
        return review
    }
}















const initialState = { allReviews: {} }
const reviewsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_REVIEW:{

            if(!state[action.id]){
                const newState = {
                    ...state,
                    [action.payload.id]: {
                        id: action.payload.id,
                        body: action.payload.body,
                        stars: action.payload.stars,
                        image_url: action.payload.image_url
                    }
                };
                return newState
            }
            break
        }

        case GET_REVIEWS: {
            const newState = Object.assign({}, state)
            newState.allReviews = {}
            const review = (action.payload)
            newState.allReviews = review
            return newState
        }

        case GET_BUSINESS_REVIEWS: {
            const newState = { ...state }
            newState.allReviews = {}
            const reviews = action.payload
            newState.allReviews = reviews
            return newState
        }

        case DELETE_REVIEW: {
            const newState = { ...state, allReviews: { ...state.allReviews}}
            delete newState.allReviews[action.payload]
            return newState;
        }

        case EDIT_REVIEW:
            return {
                ...state,
                [action.payload.id]: action.payload
            }


        default:
            return state;
    }
}

export default reviewsReducer;
