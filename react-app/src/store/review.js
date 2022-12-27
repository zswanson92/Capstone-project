const ADD_REVIEW = 'add/NEW_REVIEW'
const DELETE_REVIEW = 'delete/REVIEW'
const EDIT_REVIEW = 'edit/REVIEW'


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
    const { businessId, user_id, body, stars, image_url } = payload

    const response = await fetch(`/api/create/${businessId}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ businessId, user_id, body, stars, image_url })
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
