import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import './EditMenu.css'
import { editMenuThunk } from "../../store/business";



const EditMenu = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    let { menuId } = useParams();
    const sessionUser = useSelector((state) => state.session.user);

    let userId = sessionUser.id

    const [category, setCategory] = useState("")
    const [menu_image, setMenuImage] = useState("")
    const [errors, setErrors] = useState([])

    const onSubmit = async (e) => {
        e.preventDefault()
        if(errors.length > 0) return;
        const editedMenu = {
            // userId,
            // businessId,
            menuId,
            category,
            menu_image
        }

        const theEditedMenu = await dispatch(editMenuThunk(editedMenu))

        // history.push(`/businesses/${businessId}`)
        if(theEditedMenu){
            await history.push(`/businesses`)
        }
    }

    const onClose = () => {
        history.push(`/businesses`);
    }


    return (
        <div className="main-menu-form-container">
            <form onSubmit={onSubmit}>
                <h1>Edit Menu</h1>
                <div className="menu-form-divs">
                    <input
                    required={true}
                    type='text'
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    placeholder="Name of Menu Category"
                    className="menu-category-input"
                    />
                </div>
                <div className="menu-form-divs">
                    <input
                    type='text'
                    onChange={(e) => setMenuImage(e.target.value)}
                    value={menu_image}
                    placeholder="Optional URL image for Menu Category"
                    className="menu-category-input"
                    />
                </div>
                <div className="create-menu-two-buttons-div">
                {errors.length ? "" : <button type='submit' className="create-menu-return-button">Submit Edited Menu</button>}
                <button className="create-menu-return-button" onClick={onClose}>Return to Business</button>
                </div>
            </form>
        </div>
    )
}


export default EditMenu
