import './EditMenuItem.css'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
// import { createMenuItemThunk } from '../../store/business';

const EditMenuItem = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const { menuId } = useParams();
    // const sessionUser = useSelector((state) => state.session.user);

    // let userId = sessionUser.id

    const [item_name, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [menu_item_image, setMenuItemImage] = useState("")
    const [errors, setErrors] = useState([])


    const onSubmit = async (e) => {
        e.preventDefault()
        if(errors.length > 0) return;
        const editedMenuItem = {
            // userId,
            // businessId,
            menuId,
            item_name,
            description,
            price,
            menu_item_image
        }

        const theEditedMenuItem = await dispatch()

        // history.push(`/businesses/${businessId}`)
        if(theNewMenuItem){
            history.push(`/businesses`)
        }
    }

    const onClose = () => {
        history.push(`/businesses`);
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
                    // required={true}
                    type='text'
                    onChange={(e) => setMenuItemImage(e.target.value)}
                    value={menu_item_image}
                    placeholder="Optional URL image for Menu Item"
                    className="menu-category-input"
                    />
                </div>
                <div className="create-menu-two-buttons-div">
                {errors.length ? "" : <button className='create-menu-return-button' type='submit'>Submit Menu Item Edit</button>}
                <button className='create-menu-return-button' onClick={onClose}>Return to Business</button>
                </div>
            </form>
        </div>
    )
}


export default EditMenuItem;
