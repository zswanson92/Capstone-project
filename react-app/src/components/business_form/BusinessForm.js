import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./BusinessForm.css";
import { createBusinessThunk } from "../../store/business";
// import Multiselect from 'multiselect-react-dropdown';


const BusinessForm = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const data = [
        { Service: "Dine-In" },
        { Service: "Take Out" },
        { Service: "In House Delivery" },
        { Service: "Pick Up" },
        { Service: "App Based Delivery" },
        { Service: "Takes Reservations" },
        { Service: "Vegan Friendly" },
        { Service: "Gluten Free Friendly" },
        { Service: "Keto Friendly" },
    ]

    // console.log(data)


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
    const [tags, setTags] = useState("");
    const [errors, setErrors] = useState([]);
    // const [submitted, setSubmitted] = useState(false);

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

    // function checkAvailability(arr, val) {
    //     return arr.some((arrVal) => val === arrVal);
    //   }


    // const serviceSet = (e) => {
        // services.push(e.target.value)
        // if(checkAvailability(theservices, e.target.value) === false) theservices.push(e.target.value)
        // setServices(e.target.option)
        // setServices(e.target.value)
    // }
    // "Dine-In", "Take Out", "In House Delivery", "Pick Up", "App Based Delivery", "Takes Reservations", "Vegan Friendly", "Gluten Free Friendly", "Keto Friendly"

    // let services = "";
    // console.log("!!!!!!!!!", theservices)
    // const abc = theservices.forEach((item) => {
    //     services += item + " "
    // })
    // console.log("!!!!!!!!!", services)

    // console.log("@@@@@@@", services)
    const onSubmit = async (e) => {
        e.preventDefault();
        // setSubmitted(true);
        // if (errors.length > 0) return;
        const createdBusiness = {
            name, preview_img,
            monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours,
            saturday_hours, sunday_hours, email, address, phone_number, business_website, tags
        };

        await dispatch(createBusinessThunk(createdBusiness));

        let path = `/`;
        await history.push(path);
        // setSubmitted(false);
    };

    const onClose = () => {
        history.push('/');
    }




    return (
        <div className="main-business-form-div">
            <form onSubmit={onSubmit}>
                <h1>Create a New Business</h1>
                <div className="business-form-name-input-div">
                    {/* <label>Name: </label> */}
                    <input
                        className="business-form-name-input"
                        type='text'
                        name='name'
                        onChange={nameSet}
                        value={name}
                        placeholder="Business Name"></input>
                </div>
                <div className="business-form-previmg-input-div">
                    {/* <label>Preview Image: </label> */}
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
                    <p>Business Hours &#40;Please enter in xx:xx am/pm - yy:yy am/pm format&#41;</p>
                        {/* <label> Monday Hours of Operation: </label> */}
                        <input
                            className="business-form-hours-input"
                            placeholder="Monday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={monSet}
                            value={monday_hours}>

                        </input>
                    </div>
                    <div>
                        {/* <label> Tuesday Hours of Operation: </label> */}
                        <input
                            className="business-form-hours-input"
                            placeholder="Tuesday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={tuesSet}
                            value={tuesday_hours}>

                        </input>
                    </div>
                    <div>
                        {/* <label> Wedsnesday Hours of Operation: </label> */}
                        <input
                            className="business-form-hours-input"
                            placeholder="Wedsnesday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={wedsSet}
                            value={wednesday_hours}>

                        </input>
                    </div>
                    <div>
                        {/* <label> Thursday Hours of Operation: </label> */}
                        <input
                            className="business-form-hours-input"
                            placeholder="Thursday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={thursSet}
                            value={thursday_hours}>

                        </input>
                    </div>
                    <div>
                        {/* <label> Friday Hours of Operation: </label> */}
                        <input
                            className="business-form-hours-input"
                            placeholder="Friday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={friSet}
                            value={friday_hours}>

                        </input>
                    </div>
                    <div>
                        {/* <label> Saturday Hours of Operation: </label> */}
                        <input
                            className="business-form-hours-input"
                            placeholder="Saturday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={satSet}
                            value={saturday_hours}>

                        </input>
                    </div>
                    <div>
                        {/* <label> Sunday Hours of Operation: </label> */}
                        <input
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
                    {/* <label>Email: </label> */}
                    <input
                        placeholder="Email Address"
                        className="business-form-email-input"
                        name='email'
                        type='text'
                        onChange={emailSet}
                        value={email}></input>
                </div>
                <div className="business-form-address-input-div">
                    {/* <label>Address: </label> */}
                    <input
                        placeholder="Business Address"
                        className="business-form-address-input"
                        name='address'
                        type='text'
                        onChange={addressSet}
                        value={address}></input>
                </div>
                <div className="business-form-phone-input-div">
                    {/* <label>Phone Number: </label> */}
                    <input
                        placeholder="Business Phone Number"
                        className="business-form-phone-input"
                        name='phone_number'
                        type='text'
                        onChange={phoneSet}
                        value={phone_number}></input>
                </div>
                <div className="business-form-website-input-div">
                    {/* <label>Business Website: </label> */}
                    <input
                        placeholder="Business Website Link"
                        className="business-form-website-input"
                        type='text'
                        name='business_website'
                        onChange={websiteSet}
                        value={business_website}>
                    </input>
                </div>
                <div className="business-form-tags-input-div">
                    {/* <label>Tags: </label> */}
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
                    <button className='business-form-button-submit' type="submit">Submit Business</button>
                    <button className='business-form-button-close' onClick={onClose}>Close</button>
                </div>
            </form>
        </div>
    )
}


export default BusinessForm;
