import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import './EditMenu.css'
import { editMenuThunk } from "../../store/business";



const EditMenu = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    let { menuId } = useParams();


    const currentMenu = useSelector(state => state.businessReducer.businesses)
    const currentMenuArr = Object.values(currentMenu)
    const menuFilter = currentMenuArr[0]?.menus.filter(obj => obj.id === +menuId)

    let editValOne;

    menuFilter ? editValOne = menuFilter[0]?.category : editValOne = ""


    const [category, setCategory] = useState(editValOne ? editValOne : "")
    const [menu_image, setMenuImage] = useState("")
    const [errors, setErrors] = useState([])

    const onSubmit = async (e) => {
        e.preventDefault()
        if (errors.length > 0) return;
        const editedMenu = {
            menuId,
            category,
            menu_image
        }

        await dispatch(editMenuThunk(editedMenu))


        await history.goBack()
    }

    useEffect(() => {

        let err = [];

        if (category.length > 40) {
            err.push("Name of menu must be less than 40 characters.")
        }

        setErrors(err)
    }, [category])

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
                    {category.length > 40 ? <div>Name of menu must be less than 40 characters.</div> : ""}
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
