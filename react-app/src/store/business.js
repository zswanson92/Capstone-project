const ADD_BUSINESS = 'create/NEW_BUSINESS'
const GET_BUSINESSES = 'get/BUSINESSES'
const GET_BUSINESS = 'get/BUSINESS'
const DELETE_BUSINESS = 'delete/BUSINESS'
const EDIT_BUSINESS = 'edit/BUSINESS'


const addBusiness = (business) => ({
    type: ADD_BUSINESS,
    payload: business
})

const allBusinesses = (businesses) => ({
    type: GET_BUSINESSES,
    payload: businesses
})

const getBusinessById = (business) => ({
    type: GET_BUSINESS,
    payload: business
})

const deleteBusiness = (business) => ({
    type: DELETE_BUSINESS,
    payload: business
})

const editBusiness = (business) => ({
    type: EDIT_BUSINESS,
    payload: business
})



export const editBusinessThunk = (payload) => async dispatch => {

    const {
        businessId, name, preview_img,
        monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours,
        saturday_hours, sunday_hours, email, address, phone_number, business_website, about_us, price, tags
    } = payload
    // console.log("@@@@@@@@@@", businessId)
    const response = await fetch(`/api/businesses/${businessId}`, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, preview_img,
            monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours,
            saturday_hours, sunday_hours, email, address, phone_number, business_website, about_us, price, tags })
    })

    if(response.ok){
        const business = await response.json()
        dispatch(editBusiness(business))
        return business
    }
}


export const deleteBusinessThunk = (businessId) => async dispatch => {
    const response = await fetch(`/api/businesses/${businessId}`, {
        method: 'DELETE'
    })

    if(response.ok){
        dispatch(deleteBusiness(businessId))
    }
}




export const getBusinessByIdThunk = (businessId) => async dispatch => {
    const response = await fetch(`/api/businesses/${businessId}`)

    if(response.ok){
        const business = await response.json()
        dispatch(getBusinessById(business))
        return business
    }
}



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
        saturday_hours, sunday_hours, email, address, phone_number, business_website, about_us, price, tags
    } = payload
    const response = await fetch('/api/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, preview_img,
            monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours,
            saturday_hours, sunday_hours, email, address, phone_number, business_website, about_us, price, tags })
    })

    if(response.ok){
        const business = await response.json()

        dispatch(addBusiness(business))
    }
}



// const initialState = { businesses: {}, reviews: {} }
const initialState = { businesses: {} }

const businessReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_BUSINESS: {
            // console.log("THIS IS ACTION", action)
            // if(!state[action.id]){
                const newState = {
                    ...state,
                    [action.payload.id]: {
                        name: action.payload.name,
                        previewImage: action.payload.preview_img,
                        services: action.payload.services,
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
                        about_us: action.payload.about_us,
                        price: action.payload.price,
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
            newState.businesses = business
            return newState
        }

        case GET_BUSINESS: {
            const newState = { ...state }
            newState.businesses = {}
            const business = action.payload
            newState.businesses = business
            return newState
        }

        case DELETE_BUSINESS: {
            const newState = { ...state }
            delete newState.businesses[action.payload]
            return newState
        }

        case EDIT_BUSINESS:
            return {
            ...state,
            [action.payload.id]: action.payload
            }



        default:
            return state;
    }
}

export default businessReducer;
