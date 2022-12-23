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

    // const [name, setName] = useState("");
    // const [preview_img, setPreviewImage] = useState("");
    // // const [services, setServices] = useState("");
    // const [monday_hours, setMonHours] = useState("");
    // const [tuesday_hours, setTuesHours] = useState("");
    // const [wednesday_hours, setWedsHours] = useState("");
    // const [thursday_hours, setThursHours] = useState("");
    // const [friday_hours, setFriHours] = useState("");
    // const [saturday_hours, setSatHours] = useState("");
    // const [sunday_hours, setSunHours] = useState("");
    // const [email, setEmail] = useState("");
    // const [address, setAddress] = useState("");
    // const [phone_number, setPhone] = useState("");
    // const [business_website, setWebsite] = useState("");
    // const [tags, setTags] = useState("");
    // const [errors, setErrors] = useState([]);

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

        await dispatch(editBusinessThunk(updatedBusiness))
        history.push(`/businesses/${businessId}`)
        // const editedBusiness = await dispatch(editBusinessThunk(updatedBusiness))
        // if (editedBusiness) {
        //     history.push(`/businesses/${businessId}`)
        // }
    }

    const cancelEdit = () => {
        history.push(`/businesses/${businessId}`)
    }

    function isValidPhone(phone) {
        let i = 0
        phone.split('').forEach((letter) => {
            if (letter === '-') {
                i++
            }
        })
        return i
    }

    function isValidTime(time){
        let regexp = /^[aAmMpP0-9---:]+$/;
        return regexp.test(time)
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    useEffect(() => {
        const err = [];
        if (name.length < 6) {
            err.push("Business name must be at least 6 characters long.")
        }
        if (isValidPhone(phone_number) !== 2 || phone_number.length !== 12) {
            err.push("Must be a valid formatted phone number.")
        }
        if(address.length < 15){
            err.push("Address must be at least 15 characters long")
        }
        if(monday_hours.length !== 15 || (!isValidTime(monday_hours))){
            err.push("Must be valid time format for Monday.")
        }
        if(tuesday_hours.length !== 15 || (!isValidTime(tuesday_hours))){
            err.push("Must be valid time format for Tuesday.")
        }
        if(wednesday_hours.length !== 15 || (!isValidTime(wednesday_hours))){
            err.push("Must be valid time format for Wednesday.")
        }
        if(thursday_hours.length !== 15 || (!isValidTime(thursday_hours))){
            err.push("Must be valid time format for Thursday.")
        }
        if(friday_hours.length !== 15 || (!isValidTime(friday_hours))){
            err.push("Must be valid time format for Friday.")
        }
        if(saturday_hours.length !== 15 || (!isValidTime(saturday_hours))){
            err.push("Must be valid time format for Saturday.")
        }
        if(sunday_hours.length !== 15 || (!isValidTime(sunday_hours))){
            err.push("Must be valid time format for Sunday.")
        }
        if(!isValidEmail(email)){
            err.push("Must be a valid Email address")
        }
        setErrors(err)
    }, [name, phone_number, address, monday_hours, tuesday_hours, wednesday_hours,
        thursday_hours, friday_hours, saturday_hours, sunday_hours, email])

    return (
        <div className="edit-business-main-container">
            <div className="first-inner-container-edit-business">
                <form onSubmit={onSubmit}>
                <ul>
                    {errors?.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                    <h1>Edit Business Information</h1>
                    <div className="edit-business-name-div">
                        {/* <label>Name</label> */}
                        <input
                            className="business-form-name-input"
                            type='text'
                            name='name'
                            onChange={nameSet}
                            value={name}
                            placeholder="Business Name"></input>
                    </div>
                    <div className="edit-business-previewimage-div">
                        {/* <label>Preview Image</label> */}
                        <input
                            className="business-form-previmg-input"
                            type='text'
                            name='preview_image'
                            onChange={imageSet}
                            value={preview_img}
                        ></input>
                    </div>
                    <div className="edit-business-hours-div">
                    <p>Business Hours &#40;Please enter in xx:xx am/pm-yy:yy am/pm format&#41;</p>
                        <div>
                            {/* <label> Monday Hours</label> */}
                            <input
                                className="business-form-hours-input"
                                name='hours'
                                type='text'
                                onChange={monSet}
                                value={monday_hours}>

                            </input>
                        </div>
                        <div>
                            {/* <label> Tuesday Hours</label> */}
                            <input
                                className="business-form-hours-input"
                                name='hours'
                                type='text'
                                onChange={tuesSet}
                                value={tuesday_hours}>

                            </input>
                        </div>
                        <div>
                            {/* <label> Wedsnesday Hours</label> */}
                            <input
                                className="business-form-hours-input"
                                name='hours'
                                type='text'
                                onChange={wedsSet}
                                value={wednesday_hours}>

                            </input>
                        </div>
                        <div>
                            {/* <label> Thursday Hours</label> */}
                            <input
                                className="business-form-hours-input"
                                name='hours'
                                type='text'
                                onChange={thursSet}
                                value={thursday_hours}>

                            </input>
                        </div>
                        <div>
                            {/* <label> Friday Hours</label> */}
                            <input
                                className="business-form-hours-input"
                                name='hours'
                                type='text'
                                onChange={friSet}
                                value={friday_hours}>

                            </input>
                        </div>
                        <div>
                            {/* <label> Saturday Hours</label> */}
                            <input
                                className="business-form-hours-input"
                                name='hours'
                                type='text'
                                onChange={satSet}
                                value={saturday_hours}>

                            </input>
                        </div>
                        <div>
                        {/* <label> Sunday Hours</label> */}
                        <input
                            className="business-form-hours-input"
                            name='hours'
                            type='text'
                            onChange={sunSet}
                            value={sunday_hours}>
                        </input>
                    </div>
                    </div>

                    <div className="edit-business-email-div">
                        {/* <label>Email</label> */}
                        <input
                            className="business-form-email-input"
                            name='email'
                            type='text'
                            onChange={emailSet}
                            value={email}></input>
                    </div>
                    <div className="edit-business-address-div">
                        {/* <label>Address</label> */}
                        <input
                            className="business-form-address-input"
                            name='address'
                            type='text'
                            onChange={addressSet}
                            value={address}></input>
                    </div>
                    <div className="edit-business-phone-div">
                        {/* <label>Phone Number</label> */}
                        <input
                            className="business-form-phone-input"
                            name='phone_number'
                            type='text'
                            onChange={phoneSet}
                            value={phone_number}></input>
                    </div>
                    <div className="edit-business-website-div">
                        {/* <label>Business Website</label> */}
                        <input
                            className="business-form-website-input"
                            type='text'
                            name='business_website'
                            onChange={websiteSet}
                            value={business_website}>
                        </input>
                    </div>
                    <div className="edit-business-tags-div">
                        {/* <label>Tags</label> */}
                        <input
                            className="business-form-tags-input"
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
