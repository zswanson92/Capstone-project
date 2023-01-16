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
        if(errors.length > 0) return;
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
        if(theNewMenuItem){
            history.push(`/businesses`)
        }

    }

    const onClose = () => {
        history.push(`/businesses`);
    }

    return (
        <div>
            <h1>HI TESTT SURPRISE</h1>
            <form onSubmit={onSubmit}>
                <h1>Create a Menu</h1>
                <div>
                    <input
                    required={true}
                    type='text'
                    onChange={(e) => setItemName(e.target.value)}
                    value={item_name}
                    placeholder="Name of Menu Item"
                    />
                </div>
                <div>
                    <textarea
                    required={true}
                    type='text'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="Description of Menu Item"
                    />
                </div>
                <div>
                    <input
                    required={true}
                    type='number'
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    placeholder="Item Price"
                    />
                </div>
                <div>
                    <input
                    // required={true}
                    type='text'
                    onChange={(e) => setMenuItemImage(e.target.value)}
                    value={menu_item_image}
                    placeholder="Optional URL image for Menu Item"
                    />
                </div>
                <div>
                {errors.length ? "" : <button type='submit'>Submit Menu Item</button>}
                <button onClick={onClose}>Return to Business</button>
                </div>
            </form>
        </div>
    )
}


export default CreateMenuItem;