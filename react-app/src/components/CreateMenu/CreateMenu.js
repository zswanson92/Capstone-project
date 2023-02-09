import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import './CreateMenu.css'
import { createMenuThunk } from "../../store/business";

const CreateMenu = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    let { businessId } = useParams();
    const sessionUser = useSelector((state) => state.session.user);

    let userId = sessionUser.id

    const [category, setCategory] = useState("")
    const [menu_image, setMenuImage] = useState("")
    const [errors, setErrors] = useState([])

    const onSubmit = async (e) => {
        e.preventDefault()
        if (errors.length > 0) return;
        const createdMenu = {
            userId,
            businessId,
            category,
            menu_image
        }

        const theNewMenu = await dispatch(createMenuThunk(createdMenu))

        // history.push(`/businesses/${businessId}`)
        if (theNewMenu) {
            await history.push(`/create/menu/${theNewMenu.id}`)
        }
    }

    const onClose = () => {
        history.push(`/businesses/${businessId}`);
    }

    useEffect(() => {

        let err = [];

        if (menu_image.length > 0 && !validImageUrl(menu_image)) {
            errors.push("Please submit as jpg, jpeg, or png.")
        }

        setErrors(err)
    }, [menu_image, errors])

    function validImageUrl(url) {
        let falseycheck;
        let lastThree = url.split('').slice(url.length - 3)
        // console.log(lastThree.join(''))
        if (lastThree.join('') === 'png' || lastThree.join('') === 'jpg' || lastThree.join('') === 'peg') {
            falseycheck = true
        } else {
            falseycheck = false
        }
        // console.log(falseycheck)
        return falseycheck
    }


    return (
        <div className="main-menu-form-container">
            <form onSubmit={onSubmit}>
                <h1>Create a Menu</h1>
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
                        type='text'
                        onChange={(e) => setMenuImage(e.target.value)}
                        value={menu_image}
                        placeholder="Optional URL image for Menu Category"
                        className="menu-category-input"
                    />
                    {menu_image.length > 0 && !validImageUrl(menu_image) ? <div>If submitting an image, it must be jpg, jpeg, or png format.</div> : ""}
                </div>
                <div className="create-menu-two-buttons-div">
                    {errors.length ? "" : <button type='submit' className="create-menu-return-button">Submit Menu</button>}
                    <button className="create-menu-return-button" onClick={onClose}>Return to Business</button>
                </div>
            </form>
        </div>
    )
}


export default CreateMenu
