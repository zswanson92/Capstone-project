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
            // businessId,
            menuId,
            item_name,
            description,
            price,
            menu_item_image
        }

        const theNewMenuItem = await dispatch(createMenuItemThunk(createdMenuItem))

        // history.push(`/businesses/${businessId}`)
        // if (theNewMenuItem) {
        await history.goBack()
        // }

    }

    const onClose = () => {
        history.push(`/businesses`);
    }

    // useEffect(() => {

    //     let err = [];

    //     if (menu_item_image.length > 0 && !validImageUrl(menu_item_image)) {
    //         errors.push("Please submit as jpg, jpeg, or png.")
    //     }

    //     setErrors(err)
    // }, [menu_item_image, errors])

    // function validImageUrl(url) {
    //     let falseycheck;
    //     let lastThree = url.split('').slice(url.length - 3)
    //     // console.log(lastThree.join(''))
    //     if (lastThree.join('') === 'png' || lastThree.join('') === 'jpg' || lastThree.join('') === 'peg') {
    //         falseycheck = true
    //     } else {
    //         falseycheck = false
    //     }
    //     // console.log(falseycheck)
    //     return falseycheck
    // }

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
                    {/* <input
                        // required={true}
                        type='text'
                        onChange={(e) => setMenuItemImage(e.target.value)}
                        value={menu_item_image}
                        placeholder="Optional URL image for Menu Item"
                        className="menu-category-input"
                    />
                    {menu_item_image.length > 0 && !validImageUrl(menu_item_image) ? <div>If submitting an image, it must be jpg, jpeg, or png format.</div> : ""} */}
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
