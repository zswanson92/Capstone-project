import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './CreateMenu.css'


const CreateMenu = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const [category, setCategory] = useState("")
    // const [item_name, setItemName] = useState("")
    // const [description, setDescription] = useState("")
    // const [price, setPrice] = useState("")
    const [menu_image, setMenuImage] = useState("")
    const [errors, setErrors] = useState([])

    const onSubmit = async (e) => {
        e.preventDefault()
        if(errors.length > 0) return;
        const createdMenu = {
            category,
            item_name,
            description,
            price,
            menu_image
        }
    }

    const onClose = () => {
        history.push('/');
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Create a Menu</h1>
            </form>
        </div>
    )


}





export default CreateMenu
