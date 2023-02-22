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

    const currentMenu = useSelector(state => state.businessReducer.businesses)
    const currentMenuArr = Object.values(currentMenu)
    const menuFilter = currentMenuArr[0]?.menus.filter(obj => obj.id === +menuId)

    let editValOne;
    // let editValTwo;

    const workAround = menuFilter ? editValOne = menuFilter[0]?.category : ""
    // const workAroundTwo = menuFilter ? editValTwo = menuFilter[0]?.menu_image : ""

    // console.log("the thingy", menuFilter)
    // console.log(Object.values(currentMenu))

    const [category, setCategory] = useState(editValOne ? editValOne : "")
    const [menu_image, setMenuImage] = useState("")
    const [errors, setErrors] = useState([])

    const onSubmit = async (e) => {
        e.preventDefault()
        if (errors.length > 0) return;
        const editedMenu = {
            // userId,
            // businessId,
            menuId,
            category,
            menu_image
        }

        const theEditedMenu = await dispatch(editMenuThunk(editedMenu))

        // history.push(`/businesses/${businessId}`)
        // if (theEditedMenu) {
        await history.goBack()
        // }
    }

    const onClose = () => {
        history.push(`/businesses`);
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setMenuImage(file);
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
                        type="file"
                        name='image'
                        accept="image/*"
                        onChange={updateImage}
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
