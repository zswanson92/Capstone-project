import './EditMenuItem.css'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editMenuItemThunk } from '../../store/business';

const EditMenuItem = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const { businessId, menuItemId } = useParams();
    // const sessionUser = useSelector((state) => state.session.user);

    // let userId = sessionUser.id

    const menuItemState = useSelector(state => state.businessReducer.businesses[businessId]?.menus[0].menu_items)
    console.log("!!!!!", menuItemState)

    const menuItemFilter = menuItemState?.filter(obj => obj.id === +menuItemId)

    let editValOne;
    let editValTwo;
    let editValThree;

    const editValOneAssign = menuItemFilter ? editValOne = menuItemFilter[0]?.item_name : ""
    const editValTwoAssign = menuItemFilter ? editValTwo = menuItemFilter[0]?.price : ""
    const editValThreeAssign = menuItemFilter ? editValThree = menuItemFilter[0]?.description : ""

    const [item_name, setItemName] = useState(editValOne ? editValOne : "")
    const [price, setPrice] = useState(editValTwo ? editValTwo : "")
    const [description, setDescription] = useState(editValThree ? editValThree : "")
    const [menu_item_image, setMenuItemImage] = useState("")
    const [errors, setErrors] = useState([])


    const onSubmit = async (e) => {
        e.preventDefault()
        if(errors.length > 0) return;
        const editedMenuItem = {
            // userId,
            // businessId,
            // menuId,
            menuItemId,
            item_name,
            description,
            price,
            menu_item_image
        }

        await dispatch(editMenuItemThunk(editedMenuItem))

        // history.push(`/businesses/${businessId}`)
        // if(theEditedMenuItem){
        history.push(`/businesses/${businessId}`)
        // }
    }

    const onClose = () => {
        history.push(`/businesses/${businessId}`);
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setMenuItemImage(file);
    }

    return (
        <div className='main-menuitem-creation-container'>
            <h1>Edit item on your menu</h1>
            <form onSubmit={onSubmit}>
                <div className="menu-form-divs">
                    <input
                    required={true}
                    type='text'
                    onChange={(e) => setItemName(e.target.value)}
                    value={item_name}
                    placeholder="Name of Menu Item"
                    className="menu-category-input"
                    />
                    {item_name && (item_name.length < 3 ? <div>Menu item name must be longer than 3 characters.</div> : "")}
                    {item_name && (item_name.length > 25 ? <div>Menu item name cannot exceed 25 characters.</div> : "")}
                </div>
                <div className="menu-form-divs">
                    <textarea
                    required={true}
                    type='text'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="Description of Menu Item"
                    className="menuitem-description-ta"
                    />
                </div>
                <div className="menu-form-divs">
                    <input
                    required={true}
                    type='number'
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    placeholder="Item Price"
                    className="menuitem-price-input"
                    />
                </div>
                <div className="menu-form-divs">
                <input
                        type="file"
                        name='image'
                        accept="image/*"
                        onChange={updateImage}
                    />
                </div>
                <div className="create-menu-two-buttons-div">
                {errors.length ? "" : <button className='submit-edit-menu-item-button' type='submit'>Submit Menu Item Edit</button>}
                <button className='create-menu-return-button' onClick={onClose}>Return to Business</button>
                </div>
            </form>
        </div>
    )
}


export default EditMenuItem;
