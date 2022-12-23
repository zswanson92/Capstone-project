import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./BusinessForm.css";
import { createBusinessThunk } from "../../store/business";
// import Multiselect from 'multiselect-react-dropdown';


const BusinessForm = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    // const data = [
    //     { Service: "Dine-In" },
    //     { Service: "Take Out" },
    //     { Service: "In House Delivery" },
    //     { Service: "Pick Up" },
    //     { Service: "App Based Delivery" },
    //     { Service: "Takes Reservations" },
    //     { Service: "Vegan Friendly" },
    //     { Service: "Gluten Free Friendly" },
    //     { Service: "Keto Friendly" },
    // ]

    const [name, setName] = useState("");
    const [preview_img, setPreviewImage] = useState("");
    // const [services, setServices] = useState("");
    // const [services, setServices] = useState(data);
    const [monday_hours, setMonHours] = useState("");
    // const [selectValue, setSelectValue] = useState("")
    const [tuesday_hours, setTuesHours] = useState("");
    const [wednesday_hours, setWedsHours] = useState("");
    const [thursday_hours, setThursHours] = useState("");
    const [friday_hours, setFriHours] = useState("");
    const [saturday_hours, setSatHours] = useState("");
    const [sunday_hours, setSunHours] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone_number, setPhone] = useState("");
    const [business_website, setWebsite] = useState("");
    const [about_us, setAbout] = useState("");
    const [price, setPrice] = useState("");
    const [tags, setTags] = useState("");
    const [errors, setErrors] = useState([]);

    const nameSet = (e) => {
        setName(e.target.value)
    }

    const imageSet = (e) => {
        setPreviewImage(e.target.value)
    }

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
        if (errors.length > 0) return;
        const createdBusiness = {
            name, preview_img,
            monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours,
            saturday_hours, sunday_hours, email, address, phone_number, business_website, about_us, price, tags
        };

        await dispatch(createBusinessThunk(createdBusiness));

        let path = `/`;
        await history.push(path);
    };

    const onClose = () => {
        history.push('/');
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
        <div className="main-business-form-div">
            <form onSubmit={onSubmit}>
                <ul>
                    {errors?.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <h1>Create a New Business</h1>
                <div className="business-form-name-input-div">
                    <input
                        required={true}
                        className="business-form-name-input"
                        type='text'
                        name='name'
                        onChange={nameSet}
                        value={name}
                        placeholder="Business Name"></input>
                </div>
                <div className="business-form-previmg-input-div">
                    <input
                        placeholder="Preview image link - must be a png or jpg format"
                        className="business-form-previmg-input"
                        type='text'
                        name='preview_image'
                        onChange={imageSet}
                        value={preview_img}
                    ></input>
                </div>
                {/* <div className="custom-select">
                    <label className="custom-selector">Services: </label>
                    <select name="services" value={services} onChange={serviceSet}> */}
                {/* <input type='radio' value='Dine-In' onClick={serviceSet} />
                        <label>Dine-In</label>
                        <input type='radio' value='Take Out' onClick={serviceSet} />
                        <label>Take Out</label> */}
                {/* <option value='Take Out'>Take Out</option>
                        <option value='In House Delivery'>In House Delivery</option>
                        <option value='Pick Up'>Pick Up</option>
                    </select>
                </div> */}
                {/* <div>
                    <label>Services Offered</label>
                    <Multiselect options={services} displayValue="Service" onChange={serviceSet} />
                </div> */}
                <div className="business-form-hours-inputs-div">
                    <div>
                        <p>Business Hours &#40;Please enter in xx:xx am/pm-yy:yy am/pm format&#41;</p>
                        <input
                            required={true}
                            className="business-form-hours-input"
                            placeholder="Monday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={monSet}
                            value={monday_hours}>

                        </input>
                    </div>
                    <div>
                        <input
                            required={true}
                            className="business-form-hours-input"
                            placeholder="Tuesday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={tuesSet}
                            value={tuesday_hours}>

                        </input>
                    </div>
                    <div>
                        <input
                            required={true}
                            className="business-form-hours-input"
                            placeholder="Wedsnesday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={wedsSet}
                            value={wednesday_hours}>

                        </input>
                    </div>
                    <div>
                        <input
                            required={true}
                            className="business-form-hours-input"
                            placeholder="Thursday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={thursSet}
                            value={thursday_hours}>

                        </input>
                    </div>
                    <div>
                        <input
                            required={true}
                            className="business-form-hours-input"
                            placeholder="Friday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={friSet}
                            value={friday_hours}>

                        </input>
                    </div>
                    <div>
                        <input
                            required={true}
                            className="business-form-hours-input"
                            placeholder="Saturday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={satSet}
                            value={saturday_hours}>

                        </input>
                    </div>
                    <div>
                        <input
                            required={true}
                            className="business-form-hours-input"
                            placeholder="Sunday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={sunSet}
                            value={sunday_hours}>

                        </input>
                    </div>
                </div>
                <div className="business-form-email-input-div">
                    <input
                        required={true}
                        placeholder="Email Address"
                        className="business-form-email-input"
                        name='email'
                        type='text'
                        onChange={emailSet}
                        value={email}></input>
                </div>
                <div className="business-form-address-input-div">
                    <input
                        required={true}
                        placeholder="Business Address"
                        className="business-form-address-input"
                        name='address'
                        type='text'
                        onChange={addressSet}
                        value={address}></input>
                </div>
                <div className="business-form-phone-input-div">
                    <input
                        required={true}
                        placeholder="Business Phone Number"
                        className="business-form-phone-input"
                        name='phone_number'
                        type='text'
                        onChange={phoneSet}
                        value={phone_number}></input>
                </div>
                <div className="business-form-website-input-div">
                    <input
                        required={true}
                        placeholder="Business Website Link"
                        className="business-form-website-input"
                        type='text'
                        name='business_website'
                        onChange={websiteSet}
                        value={business_website}>
                    </input>
                </div>
                <div className="business-form-aboutus-input-div">
                    <textarea
                        required={true}
                        placeholder="Description of your business and offerings."
                        className="business-form-aboutus-input"
                        type='text'
                        name='aboutus'
                        onChange={(e) => setAbout(e.target.value)}
                        value={about_us}>
                    </textarea>
                </div>
                <div className="business-form-price-input-div">
                    <input
                        required={true}
                        placeholder="1-5 $'s"
                        className="business-form-price-input"
                        type='number'
                        name='price'
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}>
                    </input>
                </div>
                <div className="business-form-tags-input-div">
                    <input
                        placeholder="Tags related to Business"
                        className="business-form-tags-input"
                        type='text'
                        name='tags'
                        onChange={tagSet}
                        value={tags}>
                    </input>
                </div>
                <div className="create-business-form-two-button-div">
                    {errors.length ? "" : <button className='business-form-button-submit' type="submit">Submit Business</button>}
                    <button className='business-form-button-close' onClick={onClose}>Close</button>
                </div>
            </form>
        </div>
    )
}


export default BusinessForm;
