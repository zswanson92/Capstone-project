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
        if(errors.length > 0) return;
        const createdMenu = {
            userId,
            businessId,
            category,
            menu_image
        }

        const theNewMenu = await dispatch(createMenuThunk(createdMenu))

        // history.push(`/businesses/${businessId}`)
        if(theNewMenu){
            await history.push(`/create/menu/${theNewMenu.id}`)
        }
    }

    const onClose = () => {
        history.push(`/businesses/${businessId}`);
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Create a Menu</h1>
                <div>
                    <input
                    required={true}
                    type='text'
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    placeholder="Name of Menu Category"
                    />
                </div>
                <div>
                    <input
                    // required={true}
                    type='text'
                    onChange={(e) => setMenuImage(e.target.value)}
                    value={menu_image}
                    placeholder="Optional URL image for Menu Category"
                    />
                </div>
                <div>
                {errors.length ? "" : <button type='submit' className="submit-edited-review-button">Submit Menu</button>}
                <button onClick={onClose}>Return to Business</button>
                </div>
            </form>
        </div>
    )
}


export default CreateMenu
