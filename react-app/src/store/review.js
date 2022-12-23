const ADD_REVIEW = 'add/NEW_REVIEW'


const addReview = (review) => ({
    type: ADD_REVIEW,
    payload: review
})




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


        default:
            return state;
    }
}

export default reviewsReducer;
