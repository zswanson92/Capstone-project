import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./BusinessForm.css";
import { createBusinessThunk } from "../../store/business";
import Multiselect from 'multiselect-react-dropdown';


const BusinessForm = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const data = [
        {Service: "Dine-In"},
        {Service: "Take Out"},
        {Service: "In House Delivery"},
        {Service: "Pick Up"},
        {Service: "App Based Delivery"},
        {Service: "Takes Reservations"},
        {Service: "Vegan Friendly"},
        {Service: "Gluten Free Friendly"},
        {Service: "Keto Friendly"},
    ]

    // console.log(data)


    const [name, setName] = useState("");
    const [preview_img, setPreviewImage] = useState("");
    const [services, setServices] = useState("");
    // const [services, setServices] = useState(data);
    const [monday_hours, setMonHours] = useState("");
    const [selectValue, setSelectValue] = useState("")
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


    const serviceSet = (e) => {
        // services.push(e.target.value)
        // if(checkAvailability(theservices, e.target.value) === false) theservices.push(e.target.value)
        // setServices(e.target.option)
        setServices(e.target.value)
    }
    // "Dine-In", "Take Out", "In House Delivery", "Pick Up", "App Based Delivery", "Takes Reservations", "Vegan Friendly", "Gluten Free Friendly", "Keto Friendly"

    // let services = "";
    // console.log("!!!!!!!!!", theservices)
    // const abc = theservices.forEach((item) => {
    //     services += item + " "
    // })
    // console.log("!!!!!!!!!", services)

    console.log("@@@@@@@", services)
    const onSubmit = async (e) => {
        e.preventDefault();
        // setSubmitted(true);
        // if (errors.length > 0) return;
        const createdBusiness = {
            name, preview_img, services,
            monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours,
            saturday_hours, sunday_hours, email, address, phone_number, business_website, tags
        };

        await dispatch(createBusinessThunk(createdBusiness));

        let path = `/`;
        await history.push(path);
        // setSubmitted(false);
    };





    return (
        <div className="main-business-form-div">
            <h1>This is a test H1 for creating a new Business!</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type='text'
                        name='name'
                        onChange={nameSet}
                        value={name}
                        placeholder="Business Name"></input>
                </div>
                <div>
                    <label>Preview Image</label>
                    <input type='text'
                        name='preview_image'
                        onChange={imageSet}
                        value={preview_img}
                        ></input>
                </div>
                <div>
                    <label>Services</label>
                    <select id="myform" name="services" value={services} onChange={serviceSet}>
                        {/* <input type='radio' value='Dine-In' onClick={serviceSet} />
                        <label>Dine-In</label>
                        <input type='radio' value='Take Out' onClick={serviceSet} />
                        <label>Take Out</label> */}
                        <option value='Take Out'>Take Out</option>
                        <option  value='In House Delivery'>In House Delivery</option>
                        <option  value='Pick Up'>Pick Up</option>
                    </select>
                </div>
                {/* <div>
                    <label>Services Offered</label>
                    <Multiselect options={services} displayValue="Service" onChange={serviceSet} />
                </div> */}
                <div>
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
                    <div>
                        <label> Sunday Hours</label>
                        <input name='hours'
                            type='text'
                            onChange={sunSet}
                            value={sunday_hours}>

                        </input>
                    </div>
                </div>


                <div>
                    <label>Email</label>
                    <input
                        name='email'
                        type='text'
                        onChange={emailSet}
                        value={email}></input>
                </div>
                <div>
                    <label>Address</label>
                    <input
                        name='address'
                        type='text'
                        onChange={addressSet}
                        value={address}></input>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input
                        name='phone_number'
                        type='text'
                        onChange={phoneSet}
                        value={phone_number}></input>
                </div>
                <div>
                    <label>Business Website</label>
                    <input
                        type='text'
                        name='business_website'
                        onChange={websiteSet}
                        value={business_website}>
                    </input>
                </div>
                <div>
                    <label>Tags</label>
                    <input
                        type='text'
                        name='tags'
                        onChange={tagSet}
                        value={tags}>
                    </input>
                </div>
                <div>
                    <button className='business-form-button-submit' type="submit">Submit Business</button>
                </div>
            </form>
        </div>
    )
}


export default BusinessForm;
