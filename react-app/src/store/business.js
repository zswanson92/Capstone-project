const ADD_BUSINESS = 'create/NEW_BUSINESS'
const GET_BUSINESSES = 'get/BUSINESSES'



const addBusiness = (business) => ({
    type: ADD_BUSINESS,
    payload: business
})

const allBusinesses = (businesses) => ({
    type: GET_BUSINESSES,
    payload: businesses
})


export const getAllBusinessesThunk = () => async dispatch => {
    const response = await fetch('/api/businesses');

    if(response.ok){
        const data = await response.json()
        dispatch(allBusinesses(data))
        return data
    }
}



export const createBusinessThunk = (payload) => async dispatch => {
    const {
        name, preview_img,
        monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours,
        saturday_hours, sunday_hours, email, address, phone_number, business_website, tags
    } = payload
    const response = await fetch('/api/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, preview_img,
            monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours,
            saturday_hours, sunday_hours, email, address, phone_number, business_website, tags })
    })

    if(response.ok){
        const business = await response.json()

        dispatch(addBusiness(business))
    }
}



const initialState = { businesses: {}, reviews: {} }
const businessReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_BUSINESS: {
            console.log("THIS IS ACTION", action)
            // if(!state[action.id]){
                const newState = {
                    ...state,
                    [action.payload.id]: {
                        name: action.payload.name,
                        previewImage: action.payload.preview_img,
                        // services: action.payload.services,
                        monHours: action.payload.monday_hours,
                        tuesHours: action.payload.tuesday_hours,
                        wedsHours: action.payload.wednesday_hours,
                        thursHours: action.payload.thursday_hours,
                        friHours: action.payload.friday_hours,
                        satHours: action.payload.saturday_hours,
                        sunHours: action.payload.sunday_hours,
                        email: action.payload.email,
                        address: action.payload.address,
                        phone: action.payload.phone_number,
                        website: action.payload.business_website,
                        tags: action.payload.tags
                    }
                }
                return newState
            // }
            // break
        }

        case GET_BUSINESSES: {
            const newState = Object.assign({}, state)
            newState.businesses = {}
            const business = (action.payload)
            newState.allQuestions = business
            return newState
        }





        default:
            return state;
    }
}

export default businessReducer;
