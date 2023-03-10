import './CreateMenuItem.css'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createMenuItemThunk } from '../../store/business';

const CreateMenuItem = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const { menuId } = useParams();
    const sessionUser = useSelector((state) => state.session.user);

    let userId = sessionUser.id

    const [item_name, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [menu_item_image, setMenuItemImage] = useState("")
    const [errors, setErrors] = useState([])


    const onSubmit = async (e) => {
        e.preventDefault()
        if (errors.length > 0) return;
        const createdMenuItem = {
            userId,
            menuId,
            item_name,
            description,
            price,
            menu_item_image
        }

        await dispatch(createMenuItemThunk(createdMenuItem))


        await history.goBack()
    }

    const onClose = () => {
        history.push(`/businesses`);
    }

    useEffect(() => {

        let err = [];

        if (item_name.length > 25) {
            errors.push("Menu Item name cannot be longer than 25 characters.")
        }
        if(description.length > 400){
            errors.push("Menu Item description cannot be longer than 400 characters.")
        }

        setErrors(err)
    }, [item_name, description, errors])


    const updateImage = (e) => {
        const file = e.target.files[0];
        setMenuItemImage(file);
    }

    return (
        <div className='main-menuitem-creation-container'>
            <h1>Add an item to your menu</h1>
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
                    {item_name.length > 25 ? <div>Menu Item name cannot be longer than 25 characters.</div> : ""}
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
                    {description.length > 400 ? <div>Menu Item description cannot be longer than 400 characters.</div> : ""}
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
                    {errors.length ? "" : <button className='create-menu-return-button' type='submit'>Submit Menu Item</button>}
                    <button className='create-menu-return-button' onClick={onClose}>Return to Business</button>
                </div>
            </form>
        </div>
    )
}


export default CreateMenuItem;
