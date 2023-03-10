const LOAD_KEY = 'map/load_key'


const loadKey = (payload) => {
    return {
        type: LOAD_KEY,
        payload: payload
    }
}

export const getKey = () => async (dispatch) => {
    const res = await fetch('/api', {
        method: 'POST'
    })

    if (res.ok) {

        const data = await res.json()
        // console.log("MAPS API THUNK DATA", data)
        dispatch(loadKey(data.googleMapsAPIKey))

        return data.googleMapsAPIKey
    }
}

const initialState = {key: null}

const mapReducer= (state = initialState, action) => {
    switch(action.type){
        case LOAD_KEY:
            return {key: action.payload}

        default:
            return state
    }
}

export default mapReducer;
