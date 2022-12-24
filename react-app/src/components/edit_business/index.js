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
    const [monday_hours, setMonHours] = useState(currentBiz?.monday_hours.split(',')[0]);
    const [monday_hours_two, setMonHoursTwo] = useState(currentBiz?.monday_hours.split(',')[1]);
    const [tuesday_hours, setTuesHours] = useState(currentBiz?.tuesday_hours.split(',')[0]);
    const [tuesday_hours_two, setTuesHoursTwo] = useState(currentBiz?.tuesday_hours.split(',')[1]);
    const [wednesday_hours, setWedsHours] = useState(currentBiz?.wednesday_hours.split(',')[0]);
    const [wednesday_hours_two, setWedsHoursTwo] = useState(currentBiz?.wednesday_hours.split(',')[1]);
    const [thursday_hours, setThursHours] = useState(currentBiz?.thursday_hours.split(',')[0]);
    const [thursday_hours_two, setThursHoursTwo] = useState(currentBiz?.thursday_hours.split(',')[1]);
    const [friday_hours, setFriHours] = useState(currentBiz?.friday_hours.split(',')[0]);
    const [friday_hours_two, setFriHoursTwo] = useState(currentBiz?.friday_hours.split(',')[1]);
    const [saturday_hours, setSatHours] = useState(currentBiz?.saturday_hours.split(',')[0]);
    const [saturday_hours_two, setSatHoursTwo] = useState(currentBiz?.saturday_hours.split(',')[1]);
    const [sunday_hours, setSunHours] = useState(currentBiz?.sunday_hours.split(',')[0]);
    const [sunday_hours_two, setSunHoursTwo] = useState(currentBiz?.sunday_hours.split(',')[1]);
    const [email, setEmail] = useState(currentBiz?.email);
    const [address, setAddress] = useState(currentBiz?.address);
    const [phone_number, setPhone] = useState(currentBiz?.phone_number);
    const [business_website, setWebsite] = useState(currentBiz?.business_website);
    const [about_us, setAbout] = useState(currentBiz?.about_us);
    const [price, setPrice] = useState(currentBiz?.price);
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

        // const updatedBusiness = {
        //     businessId, name, preview_img,
        //     monday_hours, tuesday_hours, wednesday_hours, thursday_hours, friday_hours,
        //     saturday_hours, sunday_hours, email, address, phone_number, business_website, tags
        // }
        const updatedBusiness = {
            businessId,
            name,
            preview_img,
            monday_hours: monday_hours + "," + monday_hours_two,
            tuesday_hours: tuesday_hours + "," + tuesday_hours_two,
            wednesday_hours: wednesday_hours + "," + wednesday_hours_two,
            thursday_hours: thursday_hours + "," + thursday_hours_two,
            friday_hours: friday_hours + "," + friday_hours_two,
            saturday_hours: saturday_hours + "," + saturday_hours_two,
            sunday_hours: sunday_hours + "," + sunday_hours_two,
            email,
            address,
            phone_number,
            business_website,
            about_us,
            price,
            tags
        };

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
                        <input
                            className="business-form-name-input"
                            type='text'
                            name='name'
                            onChange={nameSet}
                            value={name}
                            placeholder="Business Name"></input>
                    </div>
                    <div className="edit-business-previewimage-div">
                        <input
                            className="business-form-previmg-input"
                            type='text'
                            name='preview_image'
                            onChange={imageSet}
                            value={preview_img}
                        ></input>
                    </div>
                    <div className="edit-business-hours-div">
                    <p>Business Hours &#40;Must enter in xx:xxam/pm-yy:yyam/pm format&#41;</p>
                        <div>
                            <input
                                className="business-form-hours-input"
                                name='hours'
                                type='text'
                                onChange={monSet}
                                value={monday_hours}>

                            </input>
                        </div>
                        <div className="secondary-hours-input-div">
                        <input
                            className="business-form-hours-input"
                            placeholder="Secondary Monday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={(e) => setMonHoursTwo(e.target.value)}
                            value={monday_hours_two}>
                        </input>
                    </div>
                        <div>
                            <input
                                className="business-form-hours-input"
                                name='hours'
                                type='text'
                                onChange={tuesSet}
                                value={tuesday_hours}>

                            </input>
                        </div>
                        <div className="secondary-hours-input-div">
                        <input
                            className="business-form-hours-input"
                            placeholder="Secondary Tuesday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={(e) => setTuesHoursTwo(e.target.value)}
                            value={tuesday_hours_two}>
                        </input>
                    </div>
                        <div>
                            <input
                                className="business-form-hours-input"
                                name='hours'
                                type='text'
                                onChange={wedsSet}
                                value={wednesday_hours}>

                            </input>
                        </div>
                        <div className="secondary-hours-input-div">
                        <input
                            className="business-form-hours-input"
                            placeholder="Secondary Wednesday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={(e) => setWedsHoursTwo(e.target.value)}
                            value={wednesday_hours_two}>
                        </input>
                    </div>
                        <div>
                            <input
                                className="business-form-hours-input"
                                name='hours'
                                type='text'
                                onChange={thursSet}
                                value={thursday_hours}>

                            </input>
                        </div>
                        <div className="secondary-hours-input-div">
                        <input
                            className="business-form-hours-input"
                            placeholder="Secondary Thursday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={(e) => setThursHoursTwo(e.target.value)}
                            value={thursday_hours_two}>
                        </input>
                    </div>
                        <div>
                            <input
                                className="business-form-hours-input"
                                name='hours'
                                type='text'
                                onChange={friSet}
                                value={friday_hours}>

                            </input>
                        </div>
                        <div className="secondary-hours-input-div">
                        <input
                            className="business-form-hours-input"
                            placeholder="Secondary Friday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={(e) => setFriHoursTwo(e.target.value)}
                            value={friday_hours_two}>
                        </input>
                    </div>
                        <div>
                            <input
                                className="business-form-hours-input"
                                name='hours'
                                type='text'
                                onChange={satSet}
                                value={saturday_hours}>

                            </input>
                        </div>
                        <div className="secondary-hours-input-div">
                        <input
                            className="business-form-hours-input"
                            placeholder="Secondary Saturday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={(e) => setSatHoursTwo(e.target.value)}
                            value={saturday_hours_two}>
                        </input>
                    </div>
                        <div>
                        <input
                            className="business-form-hours-input"
                            name='hours'
                            type='text'
                            onChange={sunSet}
                            value={sunday_hours}>
                        </input>
                    </div>
                    <div className="secondary-hours-input-div">
                        <input
                            className="business-form-hours-input"
                            placeholder="Secondary Sunday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={(e) => setSunHoursTwo(e.target.value)}
                            value={sunday_hours_two}>
                        </input>
                    </div>
                    </div>

                    <div className="edit-business-email-div">
                        <input
                            className="business-form-email-input"
                            name='email'
                            type='text'
                            onChange={emailSet}
                            value={email}></input>
                    </div>
                    <div className="edit-business-address-div">
                        <input
                            className="business-form-address-input"
                            name='address'
                            type='text'
                            onChange={addressSet}
                            value={address}></input>
                    </div>
                    <div className="edit-business-phone-div">
                        <input
                            className="business-form-phone-input"
                            name='phone_number'
                            type='text'
                            onChange={phoneSet}
                            value={phone_number}></input>
                    </div>
                    <div className="edit-business-website-div">
                        <input
                            className="business-form-website-input"
                            type='text'
                            name='business_website'
                            onChange={websiteSet}
                            value={business_website}>
                        </input>
                    </div>
                    <div className="edit-business-aboutus-input-div">
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
                <div className="edit-business-price-input-div">
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
                    <div className="edit-business-tags-div">
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
