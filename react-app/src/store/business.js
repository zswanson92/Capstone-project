const ADD_BUSINESS = 'create/NEW_BUSINESS'
const GET_BUSINESSES = 'get/BUSINESSES'
const GET_BUSINESS = 'get/BUSINESS'
const DELETE_BUSINESS = 'delete/BUSINESS'
const EDIT_BUSINESS = 'edit/BUSINESS'
const ADD_MENU = 'add/MENU'
const ADD_MENU_ITEM = 'add/MENUITEM'
const DELETE_MENU = 'delete/MENU'
const DELETE_MENUITEM = 'delete/MENUITEM'
const EDIT_MENU = 'edit/MENU'
const EDIT_MENUITEM = 'edit/MENUITEM'


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

const addMenu = (menu) => ({
    type: ADD_MENU,
    payload: menu
})

const addMenuItem = (menuitem) => ({
    type: ADD_MENU_ITEM,
    payload: menuitem
})

const deleteMenu = (menu) => ({
    type: DELETE_MENU,
    payload: menu
})

const deleteMenuItem = (menuitem) => ({
    type: DELETE_MENUITEM,
    payload: menuitem
})

const editMenu = (menu) => ({
    type: EDIT_MENU,
    payload: menu
})

const editMenuItem = (menuitem) => ({
    type: EDIT_MENUITEM,
    payload: menuitem
})


export const deleteMenuItemThunk = (menuItemId) => async dispatch => {
    const response = await fetch(`/api/businesses/menu/items/${menuItemId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(deleteMenuItem(menuItemId))
    }
}


export const deleteMenuThunk = (menuId) => async dispatch => {
    const response = await fetch(`/api/businesses/menu/${menuId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(deleteMenu(menuId))
    }
}

export const editMenuItemThunk = (payload) => async dispatch => {
    const { menuItemId, item_name, description, price, menu_item_image } = payload
    const response = await fetch(`/api/menuedit/item/${menuItemId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item_name, description, price, menu_item_image })
    })

    if(menu_item_image){
        if (response.ok) {
            const editedMenuItem = await response.json()

            const formData = new FormData()

            formData.append("menu_item_image", menu_item_image)
            formData.append("menuitem_id", editedMenuItem.id)

            const imageRes = await fetch('/api/images/menuitem/edit', {
                method: "POST",
                body: formData,
            });

            if (imageRes.ok) {
                const editImage = await imageRes.json()

                editedMenuItem.menu_item_image = editImage.url
                dispatch(editMenu(editedMenuItem))
            }
        }
    }

    else if (response.ok) {
        const editedMenuItem = await response.json()
        dispatch(editMenuItem(editedMenuItem))
        return editedMenuItem
    }
}

export const createMenuItemThunk = (payload) => async dispatch => {
    const { userId, menuId, item_name, description, price, menu_item_image } = payload

    const response = await fetch(`/api/create/menu/${menuId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, menuId, item_name, description, price, menu_item_image })
    })

    if (response.ok) {
        const menuitem = await response.json()

        const formData = new FormData()

        formData.append("menu_item_image", menu_item_image)
        formData.append("menuitem_id", menuitem.id)

        const imageRes = await fetch('/api/images/menuitem', {
            method: "POST",
            body: formData
        });

        if (imageRes.ok) {
            const image = await imageRes.json()

            menuitem.menu_item_image = image.url

            dispatch(addMenuItem(menuitem))
        }

        dispatch(addMenuItem(menuitem))
        return menuitem
    }
}


export const editMenuThunk = (payload) => async dispatch => {
    const { category, menu_image, menuId } = payload

    const response = await fetch(`/api/menuedit/${menuId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ category, menu_image, menuId })
    })

    if(menu_image){
        if (response.ok) {
            const editedMenu = await response.json()

            const formData = new FormData()

            formData.append("menu_image", menu_image)
            formData.append("menu_id", editedMenu.id)

            const imageRes = await fetch('/api/images/menu/edit', {
                method: "POST",
                body: formData,
            });

            if (imageRes.ok) {
                const editImage = await imageRes.json()

                editedMenu.menu_image = editImage.url
                dispatch(editMenu(editedMenu))
            }
        }
    }


    else if (response.ok) {
        const editedMenu = await response.json()
        dispatch(editMenu(editedMenu))
        return editedMenu
    }
}

export const createMenuThunk = (payload) => async dispatch => {
    const { userId, businessId, category, menu_image } = payload

    const response = await fetch(`/api/create/${businessId}/menu`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, businessId, category, menu_image })
    })

    if (response.ok) {
        const menu = await response.json()

        const formData = new FormData()

        formData.append("menu_image", menu_image)
        formData.append("menu_id", menu.id)


        const imageRes = await fetch('/api/images/menu', {
            method: "POST",
            body: formData
        });

        if (imageRes.ok) {
            const image = await imageRes.json()

            menu.menu_image = image.url

            dispatch(addMenu(menu))
        }


        dispatch(addMenu(menu))
        return menu
    }
}



export const editBusinessThunk = (payload) => async dispatch => {

    const {
        businessId, name, preview_img,
        monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours,
        saturday_hours, sunday_hours, email, address, phone_number, business_website, about_us, price, tags
    } = payload
    // console.log("@@@@@@@@@@", businessId)
    const response = await fetch(`/api/businesses/${businessId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name, preview_img,
            monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours,
            saturday_hours, sunday_hours, email, address, phone_number, business_website, about_us, price, tags
        })
    })


    if (preview_img) {
        if (response.ok) {
            const editedBusiness = await response.json()

            const formData = new FormData()

            formData.append("preview_img", preview_img)
            formData.append("business_id", editedBusiness.id)

            const imageRes = await fetch('/api/images/business/edit', {
                method: "POST",
                body: formData,
            });

            if (imageRes.ok) {
                const editImage = await imageRes.json()
                editedBusiness.preview_img = editImage.url
                dispatch(editBusiness(editedBusiness))
            }
        }
    }

    else if (response.ok) {
        const editedBusiness = await response.json()
        dispatch(editBusiness(editedBusiness))
        return editedBusiness
    }
}


export const deleteBusinessThunk = (businessId) => async dispatch => {
    const response = await fetch(`/api/businesses/${businessId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(deleteBusiness(businessId))
    }
}




export const getBusinessByIdThunk = (businessId) => async dispatch => {
    const response = await fetch(`/api/businesses/${businessId}`)

    if (response.ok) {
        const business = await response.json()
        dispatch(getBusinessById(business))
        return business
    }
}



export const getAllBusinessesThunk = () => async dispatch => {
    const response = await fetch('/api/businesses');

    if (response.ok) {
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
        body: JSON.stringify({
            name, preview_img,
            monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours,
            saturday_hours, sunday_hours, email, address, phone_number, business_website, about_us, price, tags
        })
    })

    if (response.ok) {
        const business = await response.json()

        const formData = new FormData()

        formData.append("preview_img", preview_img)
        formData.append("business_id", business.id)


        const imageRes = await fetch('/api/images/business', {
            method: "POST",
            body: formData
        });

        if (imageRes.ok) {
            const image = await imageRes.json()

            business.preview_img = image.url

            dispatch(addBusiness(business))
        }

        dispatch(addBusiness(business))
        return business
    }
    // return
}



// const initialState = { businesses: {}, reviews: {} }
const initialState = { businesses: {} }

const businessReducer = (state = initialState, action) => {
    switch (action.type) {

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
