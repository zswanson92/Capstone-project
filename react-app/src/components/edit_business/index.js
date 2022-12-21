import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editBusinessThunk } from "../../store/business";
import { useParams, useHistory } from 'react-router-dom';
import './EditBusiness.css'

const EditBusiness = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const { businessId } = useParams()

    const currentBiz = useSelector(state => state.businessReducer.businesses[businessId])


    const [name, setName] = useState(currentBiz?.name);
    const [preview_img, setPreviewImage] = useState(currentBiz?.preview_img);
    // const [services, setServices] = useState("");
    const [monday_hours, setMonHours] = useState(currentBiz?.monday_hours);
    const [tuesday_hours, setTuesHours] = useState(currentBiz?.tuesday_hours);
    const [wednesday_hours, setWedsHours] = useState(currentBiz?.wednesday_hours);
    const [thursday_hours, setThursHours] = useState(currentBiz?.thursday_hours);
    const [friday_hours, setFriHours] = useState(currentBiz?.friday_hours);
    const [saturday_hours, setSatHours] = useState(currentBiz?.saturday_hours);
    const [sunday_hours, setSunHours] = useState(currentBiz?.sunday_hours);
    const [email, setEmail] = useState(currentBiz?.email);
    const [address, setAddress] = useState(currentBiz?.address);
    const [phone_number, setPhone] = useState(currentBiz?.phone_number);
    const [business_website, setWebsite] = useState(currentBiz?.business_website);
    const [tags, setTags] = useState(currentBiz?.tags);
    const [errors, setErrors] = useState([]);

    const nameSet = (e) => {
        setName(e.target.value)
    }

    const imageSet = (e) => {
        setPreviewImage(e.target.value)
    }

    // const serviceSet = (e) => {
    //     setServices(e.target.value)
    // }

    const monSet = (e) => {
        setMonHours(e.target.value)
    }

    const tuesSet = (e) => {
        setTuesHours(e.target.value)
    }

    const wedsSet = (e) => {
        setWedsHours(e.target.value)
    }

    const thursSet = (e) => {
        setThursHours(e.target.value)
    }

    const friSet = (e) => {
        setFriHours(e.target.value)
    }

    const satSet = (e) => {
        setSatHours(e.target.value)
    }

    const sunSet = (e) => {
        setSunHours(e.target.value)
    }

    const emailSet = (e) => {
        setEmail(e.target.value)
    }

    const addressSet = (e) => {
        setAddress(e.target.value)
    }

    const phoneSet = (e) => {
        setPhone(e.target.value)
    }

    const websiteSet = (e) => {
        setWebsite(e.target.value)
    }

    const tagSet = (e) => {
        setTags(e.target.value)
    }


    const onSubmit = async (e) => {
        e.preventDefault();

        const updatedBusiness = {
            businessId, name, preview_img,
            monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours,
            saturday_hours, sunday_hours, email, address, phone_number, business_website, tags
        }

        const editedBusiness = await dispatch(editBusinessThunk(updatedBusiness))
        if (editedBusiness) {
            history.push(`/businesses/${businessId}`)
        }
    }

    const cancelEdit = () => {
        history.push(`/businesses/${businessId}`)
    }





    return (
        <div className="edit-business-main-container">
            <div className="first-inner-container-edit-business">
                <form onSubmit={onSubmit}>
                    <div className="edit-business-name-div">
                        <label>Name</label>
                        <input
                            type='text'
                            name='name'
                            onChange={nameSet}
                            value={name}
                            placeholder="Business Name"></input>
                    </div>
                    <div className="edit-business-previewimage-div">
                        <label>Preview Image</label>
                        <input type='text'
                            name='preview_image'
                            onChange={imageSet}
                            value={preview_img}
                        ></input>
                    </div>
                    <div className="edit-business-hours-div">
                        <div>
                            <label> Monday Hours</label>
                            <input name='hours'
                                type='text'
                                onChange={monSet}
                                value={monday_hours}>

                            </input>
                        </div>
                        <div>
                            <label> Tuesday Hours</label>
                            <input name='hours'
                                type='text'
                                onChange={tuesSet}
                                value={tuesday_hours}>

                            </input>
                        </div>
                        <div>
                            <label> Wedsnesday Hours</label>
                            <input name='hours'
                                type='text'
                                onChange={wedsSet}
                                value={wednesday_hours}>

                            </input>
                        </div>
                        <div>
                            <label> Thursday Hours</label>
                            <input name='hours'
                                type='text'
                                onChange={thursSet}
                                value={thursday_hours}>

                            </input>
                        </div>
                        <div>
                            <label> Friday Hours</label>
                            <input name='hours'
                                type='text'
                                onChange={friSet}
                                value={friday_hours}>

                            </input>
                        </div>
                        <div>
                            <label> Saturday Hours</label>
                            <input name='hours'
                                type='text'
                                onChange={satSet}
                                value={saturday_hours}>

                            </input>
                        </div>
                    </div>
                    <div>
                        <label> Sunday Hours</label>
                        <input name='hours'
                            type='text'
                            onChange={sunSet}
                            value={sunday_hours}>
                        </input>
                    </div>
                    <div className="edit-business-email-div">
                        <label>Email</label>
                        <input
                            name='email'
                            type='text'
                            onChange={emailSet}
                            value={email}></input>
                    </div>
                    <div className="edit-business-address-div">
                        <label>Address</label>
                        <input
                            name='address'
                            type='text'
                            onChange={addressSet}
                            value={address}></input>
                    </div>
                    <div className="edit-business-phone-div">
                        <label>Phone Number</label>
                        <input
                            name='phone_number'
                            type='text'
                            onChange={phoneSet}
                            value={phone_number}></input>
                    </div>
                    <div className="edit-business-website-div">
                        <label>Business Website</label>
                        <input
                            type='text'
                            name='business_website'
                            onChange={websiteSet}
                            value={business_website}>
                        </input>
                    </div>
                    <div className="edit-business-tags-div">
                        <label>Tags</label>
                        <input
                            type='text'
                            name='tags'
                            onChange={tagSet}
                            value={tags}>
                        </input>
                    </div>
                    <div className="two-edit-form-buttons-div">
                    <button type='submit' className="submit-edit-question-button">Submit Edited Business Info</button>
                    <button onClick={cancelEdit} className='close-edit-question-button'>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditBusiness;
