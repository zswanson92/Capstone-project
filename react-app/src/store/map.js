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
        console.log("MAPS API THUNK DATA", data)
        dispatch(loadKey(data.googleMapsAPIKey))

        return data.googleMapsAPIKey
    }
}

const initialState = {key: null}

const mapReducer= (state = initialState, action) => {
    switch(action.type){
        case LOAD_KEY:
            console.log("!!!!!!!!!!", action)
            return {key: action.payload}
            // const newState = { ...state }
            // newState.key = {}
            // const apikey = action.payload
            // newState.key = apikey
            // console.log("NEW STATE", newState)
            // console.log(action)
            // return newState
            // const newState = {
            //     ...state,
            //     [action.payload]: {
            //         key: action.payload
            //     }
            // };
            // return newState
        default:
            return state
    }
}

export default mapReducer;
