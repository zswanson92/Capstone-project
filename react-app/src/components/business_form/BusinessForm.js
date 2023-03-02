import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./BusinessForm.css";
import { createBusinessThunk } from "../../store/business";


const BusinessForm = () => {
    const dispatch = useDispatch();
    let history = useHistory();


    const [name, setName] = useState("");
    const [preview_img, setPreviewImage] = useState("");
    const [monday_hours, setMonHours] = useState("");
    const [monday_hours_close, setMonHoursClose] = useState("");

    const [monday_hours_two, setMonHoursTwo] = useState("");
    const [monday_hours_two_close, setMonHoursTwoClose] = useState("");

    const [tuesday_hours, setTuesHours] = useState("");
    const [tuesday_hours_close, setTuesHoursClose] = useState("");

    const [tuesday_hours_two, setTuesHoursTwo] = useState("");


    const [wednesday_hours, setWedsHours] = useState("");
    const [wednesday_hours_close, setWedsHoursClose] = useState("");

    const [wednesday_hours_two, setWedsHoursTwo] = useState("");

    const [thursday_hours, setThursHours] = useState("");
    const [thursday_hours_two, setThursHoursTwo] = useState("");
    const [thursday_hours_close, setThursHoursClose] = useState("");
    const [friday_hours, setFriHours] = useState("");
    const [friday_hours_two, setFriHoursTwo] = useState("");
    const [friday_hours_close, setFriHoursClose] = useState("");
    const [saturday_hours, setSatHours] = useState("");
    const [saturday_hours_two, setSatHoursTwo] = useState("");
    const [saturday_hours_close, setSatHoursClose] = useState("");

    const [sunday_hours, setSunHours] = useState("");
    const [sunday_hours_two, setSunHoursTwo] = useState("");
    const [sunday_hours_close, setSunHoursClose] = useState("");

    const [monCheck, setMonCheck] = useState(false)
    const [tueCheck, setTueCheck] = useState(false)
    const [wedCheck, setWedCheck] = useState(false)
    const [thuCheck, setThuCheck] = useState(false)
    const [friCheck, setFriCheck] = useState(false)
    const [satCheck, setSatCheck] = useState(false)
    const [sunCheck, setSunCheck] = useState(false)
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone_number, setPhone] = useState("");
    const [business_website, setWebsite] = useState("");
    const [about_us, setAbout] = useState("");
    const [price, setPrice] = useState("");
    const [tags, setTags] = useState("");

    const [monOpenAmPM, setMonOpenAmPm] = useState("");
    const [monCloseAmPm, setMonCloseAmPm] = useState("");

    const [monTwoOpenAmPM, setMonTwoOpenAmPm] = useState("");
    const [monTwoCloseAmPm, setMonTwoCloseAmPm] = useState("");

    const [tueOpenAmPM, setTueOpenAmPm] = useState("");
    const [tueCloseAmPm, setTueCloseAmPm] = useState("");
    const [wedOpenAmPM, setWedOpenAmPm] = useState("");
    const [wedCloseAmPm, setWedCloseAmPm] = useState("");
    const [thurOpenAmPM, setThurOpenAmPm] = useState("");
    const [thurCloseAmPm, setThurCloseAmPm] = useState("");
    const [friOpenAmPM, setFriOpenAmPm] = useState("");
    const [friCloseAmPm, setFriCloseAmPm] = useState("");
    const [satOpenAmPM, setSatOpenAmPm] = useState("");
    const [satCloseAmPm, setSatCloseAmPm] = useState("");
    const [sunOpenAmPM, setSunOpenAmPm] = useState("");
    const [sunCloseAmPm, setSunCloseAmPm] = useState("");

    const [errors, setErrors] = useState([]);

    const nameSet = (e) => {
        setName(e.target.value)
    }

    const monSet = (e) => {
        setMonHours(e.target.value)
    }

    const monCloseSet = (e) => {
        setMonHoursClose(e.target.value)
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
            name,
            preview_img,
            monday_hours: monday_hours + monOpenAmPM + monday_hours_close + monCloseAmPm + "," + monday_hours_two + monTwoOpenAmPM + monday_hours_two_close + monTwoCloseAmPm,
            tuesday_hours: tuesday_hours + tueOpenAmPM + tuesday_hours_close + tueCloseAmPm + "," + tuesday_hours_two,
            wednesday_hours: wednesday_hours + wedOpenAmPM + wednesday_hours_close + wedCloseAmPm + "," + wednesday_hours_two,
            thursday_hours: thursday_hours + thurOpenAmPM + thursday_hours_close + thurCloseAmPm + "," + thursday_hours_two,
            friday_hours: friday_hours + friOpenAmPM + friday_hours_close + friCloseAmPm + "," + friday_hours_two,
            saturday_hours: saturday_hours + satOpenAmPM + saturday_hours_close + satCloseAmPm + "," + saturday_hours_two,
            sunday_hours: sunday_hours + sunOpenAmPM + sunday_hours_close + sunCloseAmPm + "," + sunday_hours_two,
            email,
            address,
            phone_number,
            business_website,
            about_us,
            price,
            tags
        };

        const addedBiz = await dispatch(createBusinessThunk(createdBusiness))

        // let path = ;
        console.log(addedBiz?.id)
        if (addedBiz) {
            await history.push(`/businesses/${addedBiz?.id}`);
        }
    };

    const onClose = () => {
        history.goBack();
    }

    function isValidPhone(phone) {
        let i = 0
        // console.log(phone.split(''))
        phone.split('').forEach((letter) => {
            if (letter === '-' || letter === '1' || letter === '2' || letter === '3' || letter === '4' || letter === '5' || letter === '6' || letter === '7' || letter === '8' || letter === '9' || letter === '0') {
                i++
            }
        })
        // console.log(i)
        return i
    }

    function isValidTime(time) {
        let regexp = /^[aAmMpP0-9---:]+$/;
        return regexp.test(time)
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // function validImageUrl(url) {
    //     let falseycheck;
    //     let lastThree = url.split('').slice(url.length - 3)
    //     // console.log(lastThree.join(''))
    //     if (lastThree.join('') === 'png' || lastThree.join('') === 'jpg' || lastThree.join('') === 'peg') {
    //         falseycheck = true
    //     } else {
    //         falseycheck = false
    //     }
    //     // console.log(falseycheck)
    //     return falseycheck
    // }

    useEffect(() => {
        const err = [];
        if (name.length < 6) {
            err.push("Business name must be at least 6 characters long.")
        }
        if (name.length > 50) {
            err.push("Business must be less than 50 characters long. You can include further naming needs within your business description")
        }
        if (isValidPhone(phone_number) !== 12) {
            err.push("Must be a valid formatted phone number.")
        }
        if (address.length < 15) {
            err.push("Address must be at least 15 characters long")
        }
        if (address.length > 100) {
            err.push("Address cannot exceed 100 characters")
        }
        // if ((monday_hours !== 'Closed' && monday_hours !== 'closed' && monday_hours.length < 7) || (monday_hours !== 'Closed' && monday_hours !== 'closed' && (!isValidTime(monday_hours)))) {
        //     err.push("Must be valid time format for Monday.")
        // }
        // if ((tuesday_hours !== 'Closed' && tuesday_hours !== 'closed' && tuesday_hours.length < 7) || (tuesday_hours !== 'Closed' && tuesday_hours !== 'closed' && (!isValidTime(tuesday_hours)))) {
        //     err.push("Must be valid time format for Tuesday.")
        // }
        // if ((wednesday_hours !== 'Closed' && wednesday_hours !== 'closed' && wednesday_hours.length < 7) || (wednesday_hours !== 'Closed' && wednesday_hours !== 'closed' && (!isValidTime(wednesday_hours)))) {
        //     err.push("Must be valid time format for Wednesday.")
        // }
        // if ((thursday_hours !== 'Closed' && thursday_hours !== 'closed' && thursday_hours.length < 7) || (thursday_hours !== 'Closed' && thursday_hours !== 'closed' && (!isValidTime(thursday_hours)))) {
        //     err.push("Must be valid time format for Thursday.")
        // }
        // if ((friday_hours !== 'Closed' && friday_hours !== 'closed' && friday_hours.length < 7) || (friday_hours !== 'Closed' && friday_hours !== 'closed' && (!isValidTime(friday_hours)))) {
        //     err.push("Must be valid time format for Friday.")
        // }
        // if ((saturday_hours !== 'Closed' && saturday_hours !== 'closed' && saturday_hours.length < 7) || (saturday_hours !== 'Closed' && saturday_hours !== 'closed' && (!isValidTime(saturday_hours)))) {
        //     err.push("Must be valid time format for Saturday.")
        // }
        // if ((sunday_hours !== 'Closed' && sunday_hours !== 'closed' && sunday_hours.length < 7) || (sunday_hours !== 'Closed' && sunday_hours !== 'closed' && (!isValidTime(sunday_hours)))) {
        //     err.push("Must be valid time format for Sunday.")
        // }
        if (!isValidEmail(email)) {
            err.push("Must be a valid Email address")
        }
        if (price < 1 || price > 5) {
            err.push("Price must be between 1 and 5.")
        }
        if (about_us.length < 30) {
            err.push("Description must be at least 30 characters.")
        }
        setErrors(err)
    }, [name, phone_number, address, monday_hours, tuesday_hours, wednesday_hours,
        thursday_hours, friday_hours, saturday_hours, sunday_hours, email, price, about_us, preview_img])


    let mon_falsey_check = (monday_hours !== 'Closed' && monday_hours !== 'closed' && monday_hours.length < 7) || (monday_hours !== 'Closed' && monday_hours !== 'closed' && (!isValidTime(monday_hours)))
    let tues_falsey_check = (tuesday_hours !== 'Closed' && tuesday_hours !== 'closed' && tuesday_hours.length < 7) || (tuesday_hours !== 'Closed' && tuesday_hours !== 'closed' && (!isValidTime(tuesday_hours)))
    let weds_falsey_check = (wednesday_hours !== 'Closed' && wednesday_hours !== 'closed' && wednesday_hours.length < 7) || (wednesday_hours !== 'Closed' && wednesday_hours !== 'closed' && (!isValidTime(wednesday_hours)))
    let thurs_falsey_check = (thursday_hours !== 'Closed' && thursday_hours !== 'closed' && thursday_hours.length < 7) || (thursday_hours !== 'Closed' && thursday_hours !== 'closed' && (!isValidTime(thursday_hours)))
    let fri_falsey_check = (friday_hours !== 'Closed' && friday_hours !== 'closed' && friday_hours.length < 7) || (friday_hours !== 'Closed' && friday_hours !== 'closed' && (!isValidTime(friday_hours)))
    let sat_falsey_check = (saturday_hours !== 'Closed' && saturday_hours !== 'closed' && saturday_hours.length < 7) || (saturday_hours !== 'Closed' && saturday_hours !== 'closed' && (!isValidTime(saturday_hours)))
    let sun_falsey_check = (sunday_hours !== 'Closed' && sunday_hours !== 'closed' && sunday_hours.length < 7) || (sunday_hours !== 'Closed' && sunday_hours !== 'closed' && (!isValidTime(sunday_hours)))

    const monCheckBox = () => {
        setMonCheck(!monCheck)
    }

    const tueCheckBox = () => {
        setTueCheck(!tueCheck)
    }

    const wedCheckBox = () => {
        setWedCheck(!wedCheck)
    }

    const thuCheckBox = () => {
        setThuCheck(!thuCheck)
    }

    const friCheckBox = () => {
        setFriCheck(!friCheck)
    }

    const satCheckBox = () => {
        setSatCheck(!satCheck)
    }

    const sunCheckBox = () => {
        setSunCheck(!sunCheck)
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        // console.log("FILE!!", file)
        setPreviewImage(file);
    }

    return (
        <div className="main-business-form-div">
            <form className="bizform-form" onSubmit={onSubmit}>
                {/* <ul>
                    {errors?.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul> */}
                <h1>Create a New Business</h1>
                <div className="business-form-name-input-div">
                    <input
                        required={true}
                        className={((name.length && name.length < 6) || (name.length && name.length > 50)) ? "falsey-business-form-name-input" : "business-form-name-input"}
                        type='text'
                        name='name'
                        onChange={nameSet}
                        value={name}
                        placeholder="Business Name"></input>
                    {name.length && name.length < 6 ? <div className="error-below-inputs-divs">Business name must be at least 6 characters long.</div> : ""}
                    {name.length && name.length > 50 ? <div className="error-below-too-long-name">Business name must be less than 50 characters long. You can include further naming needs within your business description.</div> : ""}
                </div>
                <div className="business-form-previmg-input-div">
                    Upload a preview image for your business.
                    <input
                        type="file"
                        name='image'
                        accept="image/*"
                        onChange={updateImage}
                    />
                </div>
                <div className="business-form-hours-inputs-div">
                    <h3>Hours of operation:</h3>
                    <div className="bizform-hours-div">

                        {/* <p>Business Hours &#40;Preferred format xx:xxam/pm-yy:yyam/pm, or "Closed"&#41;.</p> */}
                        {/* <input
                            required={true}
                            className={monday_hours.length && mon_falsey_check ? "falsey-form-hours-input" : "business-form-hours-input"}
                            placeholder="Monday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={monSet}
                            value={monday_hours}
                        >
                        </input>
                        {monday_hours.length && mon_falsey_check ? <div className="error-below-inputs-divs"> Must be valid time format for Monday. </div> : ""} */}
                        <div className="openclose-radio-div">
                            <div>Open/Closed Monday?</div>
                            &nbsp; &nbsp;
                            <label>Open</label>
                            <input
                                type='radio'
                                onChange={() => setMonHours("")}
                                checked={monday_hours !== "Closed"}>
                            </input>
                            &nbsp;
                            <label>Closed</label>
                            <input

                                type='radio'
                                onChange={() => setMonHours("Closed")}
                                checked={monday_hours === "Closed"}>
                            </input>

                        </div>
                        <div className='openclosetime-div'>
                            <label>Opening time: &nbsp;</label>
                            <select
                                value={monday_hours}
                                onChange={monSet}>
                                <option>Hour</option>
                                <option value={"1:00"}>1</option>
                                <option value={"1:30"}>1:30</option>
                                <option value={"2:00"}>2</option>
                                <option value={"2:30"}>2:30</option>
                                <option value={"3:00"}>3</option>
                                <option value={"3:30"}>3:30</option>
                                <option value={"4:00"}>4</option>
                                <option value={"4:30"}>4:30</option>
                                <option value={"5:00"}>5</option>
                                <option value={"5:30"}>5:30</option>
                                <option value={"6:00"}>6</option>
                                <option value={"6:30"}>6:30</option>
                                <option value={"7:00"}>7</option>
                                <option value={"7:30"}>7:30</option>
                                <option value={"8:00"}>8</option>
                                <option value={"8:30"}>8:30</option>
                                <option value={"9:00"}>9</option>
                                <option value={"9:30"}>9:30</option>
                                <option value={"10:00"}>10</option>
                                <option value={"10:30"}>10:30</option>
                                <option value={"11:00"}>11</option>
                                <option value={"11:30"}>11:30</option>
                                <option value={"12:00"}>12</option>
                                <option value={"12:30"}>12:30</option>
                            </select>
                            <select
                                value={monOpenAmPM}
                                onChange={(e) => setMonOpenAmPm(e.target.value)}
                            >
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option value={"PM"}>PM</option>
                            </select>
                            &nbsp; &nbsp;
                            {/* <div className="closetime-div"> */}
                            <label>Closing time: &nbsp;</label>
                            <div>
                                <select
                                    value={monday_hours_close}
                                    onChange={monCloseSet}>
                                    <option>Hour</option>
                                    <option value={"-1:00"}>1</option>
                                    <option value={"-1:30"}>1:30</option>
                                    <option value={"-2:00"}>2</option>
                                    <option value={"-2:30"}>2:30</option>
                                    <option value={"-3:00"}>3</option>
                                    <option value={"-3:30"}>3:30</option>
                                    <option value={"-4:00"}>4</option>
                                    <option value={"-4:30"}>4:30</option>
                                    <option value={"-5:00"}>5</option>
                                    <option value={"-5:30"}>5:30</option>
                                    <option value={"-6:00"}>6</option>
                                    <option value={"-6:30"}>6:30</option>
                                    <option value={"-7:00"}>7</option>
                                    <option value={"-7:30"}>7:30</option>
                                    <option value={"-8:00"}>8</option>
                                    <option value={"-8:30"}>8:30</option>
                                    <option value={"-9:00"}>9</option>
                                    <option value={"-9:30"}>9:30</option>
                                    <option value={"-10:00"}>10</option>
                                    <option value={"-10:30"}>10:30</option>
                                    <option value={"-11:00"}>11</option>
                                    <option value={"-11:30"}>11:30</option>
                                    <option value={"-12:00"}>12</option>
                                    <option value={"-12:30"}>12:30</option>
                                </select>
                                <select
                                    value={monCloseAmPm}
                                    onChange={(e) => setMonCloseAmPm(e.target.value)}>
                                    <option>Am/Pm</option>
                                    <option value={"AM"}>AM</option>
                                    <option vale={"PM"}>PM</option>
                                </select>
                                {/* </div> */}

                            </div>
                        </div>
                        <div>
                            {(monday_hours === 'Closed' || monday_hours === 'closed') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Monday hours.</label>
                                <input
                                    className='extra-day-input-checkbox'
                                    type='checkbox'
                                    onClick={monCheckBox}>
                                </input></div>}
                        </div>
                    </div>
                    {monCheck ? <div className='secondary-openclosetime-div'>
                        <label>Opening time: &nbsp;</label>
                        <select
                            value={monday_hours_two}
                            onChange={(e) => setMonHoursTwo(e.target.value)}>
                            <option>Hour</option>
                            <option value={"1:00"}>1</option>
                            <option value={"1:30"}>1:30</option>
                            <option value={"2:00"}>2</option>
                            <option value={"2:30"}>2:30</option>
                            <option value={"3:00"}>3</option>
                            <option value={"3:30"}>3:30</option>
                            <option value={"4:00"}>4</option>
                            <option value={"4:30"}>4:30</option>
                            <option value={"5:00"}>5</option>
                            <option value={"5:30"}>5:30</option>
                            <option value={"6:00"}>6</option>
                            <option value={"6:30"}>6:30</option>
                            <option value={"7:00"}>7</option>
                            <option value={"7:30"}>7:30</option>
                            <option value={"8:00"}>8</option>
                            <option value={"8:30"}>8:30</option>
                            <option value={"9:00"}>9</option>
                            <option value={"9:30"}>9:30</option>
                            <option value={"10:00"}>10</option>
                            <option value={"10:30"}>10:30</option>
                            <option value={"11:00"}>11</option>
                            <option value={"11:30"}>11:30</option>
                            <option value={"12:00"}>12</option>
                            <option value={"12:30"}>12:30</option>
                        </select>
                        <select
                            value={monTwoOpenAmPM}
                            onChange={(e) => setMonTwoOpenAmPm(e.target.value)}
                        >
                            <option>Am/Pm</option>
                            <option value={"AM"}>AM</option>
                            <option value={"PM"}>PM</option>
                        </select>
                        &nbsp; &nbsp;
                        {/* <div className="closetime-div"> */}
                        <label>Closing time: &nbsp;</label>
                        <div>
                            <select
                                value={monday_hours_two_close}
                                onChange={(e) => setMonHoursTwoClose(e.target.value)}>
                                <option>Hour</option>
                                <option value={"-1:00"}>1</option>
                                <option value={"-1:30"}>1:30</option>
                                <option value={"-2:00"}>2</option>
                                <option value={"-2:30"}>2:30</option>
                                <option value={"-3:00"}>3</option>
                                <option value={"-3:30"}>3:30</option>
                                <option value={"-4:00"}>4</option>
                                <option value={"-4:30"}>4:30</option>
                                <option value={"-5:00"}>5</option>
                                <option value={"-5:30"}>5:30</option>
                                <option value={"-6:00"}>6</option>
                                <option value={"-6:30"}>6:30</option>
                                <option value={"-7:00"}>7</option>
                                <option value={"-7:30"}>7:30</option>
                                <option value={"-8:00"}>8</option>
                                <option value={"-8:30"}>8:30</option>
                                <option value={"-9:00"}>9</option>
                                <option value={"-9:30"}>9:30</option>
                                <option value={"-10:00"}>10</option>
                                <option value={"-10:30"}>10:30</option>
                                <option value={"-11:00"}>11</option>
                                <option value={"-11:30"}>11:30</option>
                                <option value={"-12:00"}>12</option>
                                <option value={"-12:30"}>12:30</option>
                            </select>
                            <select
                                value={monTwoCloseAmPm}
                                onChange={(e) => setMonTwoCloseAmPm(e.target.value)}>
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option vale={"PM"}>PM</option>
                            </select>
                            {/* </div> */}

                        </div>
                    </div> : ""}
                    <div className="bizform-hours-div">
                        {/* <input
                            className={tuesday_hours.length && tues_falsey_check ? "falsey-form-hours-input" : "business-form-hours-input"}
                            placeholder="Tuesday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={tuesSet}
                            value={tuesday_hours}
                        >
                        </input>
                        {tuesday_hours.length && tues_falsey_check ? <div className="error-below-inputs-divs"> Must be valid time format for Tuesday. </div> : ""} */}
                        <div className="openclose-radio-div">
                            <div>Open/Closed Tuesday?</div>
                            &nbsp; &nbsp;
                            <label>Open</label>
                            <input
                                type='radio'
                                onChange={() => setTuesHours("")}
                                checked={tuesday_hours !== "Closed"}>
                            </input>
                            &nbsp;
                            <label>Closed</label>
                            <input

                                type='radio'
                                onChange={() => setTuesHours("Closed")}
                                checked={tuesday_hours === "Closed"}>
                            </input>

                        </div>
                        <div className='openclosetime-div'>
                            <label>Opening time:  &nbsp;</label>
                            <select
                                value={tuesday_hours}
                                onChange={tuesSet}>
                                <option>Hour</option>
                                <option value={"1:00"}>1</option>
                                <option value={"1:30"}>1:30</option>
                                <option value={"2:00"}>2</option>
                                <option value={"2:30"}>2:30</option>
                                <option value={"3:00"}>3</option>
                                <option value={"3:30"}>3:30</option>
                                <option value={"4:00"}>4</option>
                                <option value={"4:30"}>4:30</option>
                                <option value={"5:00"}>5</option>
                                <option value={"5:30"}>5:30</option>
                                <option value={"6:00"}>6</option>
                                <option value={"6:30"}>6:30</option>
                                <option value={"7:00"}>7</option>
                                <option value={"7:30"}>7:30</option>
                                <option value={"8:00"}>8</option>
                                <option value={"8:30"}>8:30</option>
                                <option value={"9:00"}>9</option>
                                <option value={"9:30"}>9:30</option>
                                <option value={"10:00"}>10</option>
                                <option value={"10:30"}>10:30</option>
                                <option value={"11:00"}>11</option>
                                <option value={"11:30"}>11:30</option>
                                <option value={"12:00"}>12</option>
                                <option value={"12:30"}>12:30</option>
                            </select>
                            <select
                                value={tueOpenAmPM}
                                onChange={(e) => setTueOpenAmPm(e.target.value)}
                            >
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option value={"PM"}>PM</option>
                            </select>
                            &nbsp; &nbsp;
                            <label>Closing time:  &nbsp;</label>
                            <div>
                                <select
                                    value={tuesday_hours_close}
                                    onChange={(e) => setTuesHoursClose(e.target.value)}>
                                    <option>Hour</option>
                                    <option value={"-1:00"}>1</option>
                                    <option value={"-1:30"}>1:30</option>
                                    <option value={"-2:00"}>2</option>
                                    <option value={"-2:30"}>2:30</option>
                                    <option value={"-3:00"}>3</option>
                                    <option value={"-3:30"}>3:30</option>
                                    <option value={"-4:00"}>4</option>
                                    <option value={"-4:30"}>4:30</option>
                                    <option value={"-5:00"}>5</option>
                                    <option value={"-5:30"}>5:30</option>
                                    <option value={"-6:00"}>6</option>
                                    <option value={"-6:30"}>6:30</option>
                                    <option value={"-7:00"}>7</option>
                                    <option value={"-7:30"}>7:30</option>
                                    <option value={"-8:00"}>8</option>
                                    <option value={"-8:30"}>8:30</option>
                                    <option value={"-9:00"}>9</option>
                                    <option value={"-9:30"}>9:30</option>
                                    <option value={"-10:00"}>10</option>
                                    <option value={"-10:30"}>10:30</option>
                                    <option value={"-11:00"}>11</option>
                                    <option value={"-11:30"}>11:30</option>
                                    <option value={"-12:00"}>12</option>
                                    <option value={"-12:30"}>12:30</option>
                                </select>
                                <select
                                    value={tueCloseAmPm}
                                    onChange={(e) => setTueCloseAmPm(e.target.value)}>
                                    <option>Am/Pm</option>
                                    <option value={"AM"}>AM</option>
                                    <option vale={"PM"}>PM</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            {(tuesday_hours === 'Closed' || tuesday_hours === 'closed') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Tuesday hours.</label>
                                <input
                                    className='extra-day-input-checkbox'
                                    type='checkbox'
                                    onClick={tueCheckBox}>
                                </input></div>}
                        </div>
                    </div>
                    {tueCheck ? <div className="secondary-hours-input-div">
                        <input
                            className="business-form-hours-input"
                            placeholder="Secondary Tuesday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={(e) => setTuesHoursTwo(e.target.value)}
                            value={tuesday_hours_two}>
                        </input>
                    </div> : ""}

                    <div className="bizform-hours-div">
                        {/* <input
                            required={true}
                            className={wednesday_hours.length && weds_falsey_check ? "falsey-form-hours-input" : "business-form-hours-input"}
                            placeholder="Wedsnesday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={wedsSet}
                            value={wednesday_hours}>
                        </input>
                        {wednesday_hours.length && weds_falsey_check ? <div className="error-below-inputs-divs"> Must be valid time format for Wednesday. </div> : ""} */}


                        <div className="openclose-radio-div">
                            <div>Open/Closed Wednesday?</div>
                            &nbsp; &nbsp;
                            <label>Open</label>
                            <input
                                type='radio'
                                onChange={() => setWedsHours("")}
                                checked={wednesday_hours !== "Closed"}>
                            </input>
                            &nbsp;
                            <label>Closed</label>
                            <input

                                type='radio'
                                onChange={() => setWedsHours("Closed")}
                                checked={wednesday_hours === "Closed"}>
                            </input>

                        </div>
                        <div className='openclosetime-div'>
                            <label>Opening time: &nbsp;</label>
                            <select
                                value={wednesday_hours}
                                onChange={wedsSet}>
                                <option>Hour</option>
                                <option value={"1:00"}>1</option>
                                <option value={"1:30"}>1:30</option>
                                <option value={"2:00"}>2</option>
                                <option value={"2:30"}>2:30</option>
                                <option value={"3:00"}>3</option>
                                <option value={"3:30"}>3:30</option>
                                <option value={"4:00"}>4</option>
                                <option value={"4:30"}>4:30</option>
                                <option value={"5:00"}>5</option>
                                <option value={"5:30"}>5:30</option>
                                <option value={"6:00"}>6</option>
                                <option value={"6:30"}>6:30</option>
                                <option value={"7:00"}>7</option>
                                <option value={"7:30"}>7:30</option>
                                <option value={"8:00"}>8</option>
                                <option value={"8:30"}>8:30</option>
                                <option value={"9:00"}>9</option>
                                <option value={"9:30"}>9:30</option>
                                <option value={"10:00"}>10</option>
                                <option value={"10:30"}>10:30</option>
                                <option value={"11:00"}>11</option>
                                <option value={"11:30"}>11:30</option>
                                <option value={"12:00"}>12</option>
                                <option value={"12:30"}>12:30</option>
                            </select>
                            <select
                                value={wedOpenAmPM}
                                onChange={(e) => setWedOpenAmPm(e.target.value)}
                            >
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option value={"PM"}>PM</option>
                            </select>
                            &nbsp; &nbsp;
                            <label>Closing time: &nbsp;</label>
                            <select
                                value={wednesday_hours_close}
                                onChange={(e) => setWedsHoursClose(e.target.value)}>
                                <option>Hour</option>
                                <option value={"-1:00"}>1</option>
                                <option value={"-1:30"}>1:30</option>
                                <option value={"-2:00"}>2</option>
                                <option value={"-2:30"}>2:30</option>
                                <option value={"-3:00"}>3</option>
                                <option value={"-3:30"}>3:30</option>
                                <option value={"-4:00"}>4</option>
                                <option value={"-4:30"}>4:30</option>
                                <option value={"-5:00"}>5</option>
                                <option value={"-5:30"}>5:30</option>
                                <option value={"-6:00"}>6</option>
                                <option value={"-6:30"}>6:30</option>
                                <option value={"-7:00"}>7</option>
                                <option value={"-7:30"}>7:30</option>
                                <option value={"-8:00"}>8</option>
                                <option value={"-8:30"}>8:30</option>
                                <option value={"-9:00"}>9</option>
                                <option value={"-9:30"}>9:30</option>
                                <option value={"-10:00"}>10</option>
                                <option value={"-10:30"}>10:30</option>
                                <option value={"-11:00"}>11</option>
                                <option value={"-11:30"}>11:30</option>
                                <option value={"-12:00"}>12</option>
                                <option value={"-12:30"}>12:30</option>
                            </select>
                            <select
                                value={wedCloseAmPm}
                                onChange={(e) => setWedCloseAmPm(e.target.value)}>
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option vale={"PM"}>PM</option>
                            </select>
                        </div>
                        {(wednesday_hours === 'Closed' || wednesday_hours === 'closed') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Wednesday hours.</label>
                            <input
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onClick={wedCheckBox}>
                            </input></div>}

                        {wedCheck ? <div className="secondary-hours-input-div">
                            <input
                                className="business-form-hours-input"
                                placeholder="Secondary Wednesday Hours of Operation"
                                name='hours'
                                type='text'
                                onChange={(e) => setWedsHoursTwo(e.target.value)}
                                value={wednesday_hours_two}>
                            </input>
                        </div> : ""}

                    </div>
                    <div className="bizform-hours-div">
                        {/* <input
                            required={true}
                            className={thursday_hours.length && thurs_falsey_check ? "falsey-form-hours-input" : "business-form-hours-input"}
                            placeholder="Thursday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={thursSet}
                            value={thursday_hours}>

                        </input>
                        {thursday_hours.length && thurs_falsey_check ? <div className="error-below-inputs-divs"> Must be valid time format for Thursday. </div> : ""} */}

                        <div className="openclose-radio-div">
                            <div>Open/Closed Thursday?</div>
                            &nbsp; &nbsp;
                            <label>Open</label>
                            <input
                                type='radio'
                                onChange={() => setThursHours("")}
                                checked={thursday_hours !== "Closed"}>
                            </input>
                            &nbsp;
                            <label>Closed</label>
                            <input
                                type='radio'
                                onChange={() => setThursHours("Closed")}
                                checked={thursday_hours === "Closed"}>
                            </input>
                        </div>
                        <div className='openclosetime-div'>
                            <label>Opening time: &nbsp;</label>
                            <select
                                value={thursday_hours}
                                onChange={thursSet}>
                                <option>Hour</option>
                                <option value={"1:00"}>1</option>
                                <option value={"1:30"}>1:30</option>
                                <option value={"2:00"}>2</option>
                                <option value={"2:30"}>2:30</option>
                                <option value={"3:00"}>3</option>
                                <option value={"3:30"}>3:30</option>
                                <option value={"4:00"}>4</option>
                                <option value={"4:30"}>4:30</option>
                                <option value={"5:00"}>5</option>
                                <option value={"5:30"}>5:30</option>
                                <option value={"6:00"}>6</option>
                                <option value={"6:30"}>6:30</option>
                                <option value={"7:00"}>7</option>
                                <option value={"7:30"}>7:30</option>
                                <option value={"8:00"}>8</option>
                                <option value={"8:30"}>8:30</option>
                                <option value={"9:00"}>9</option>
                                <option value={"9:30"}>9:30</option>
                                <option value={"10:00"}>10</option>
                                <option value={"10:30"}>10:30</option>
                                <option value={"11:00"}>11</option>
                                <option value={"11:30"}>11:30</option>
                                <option value={"12:00"}>12</option>
                                <option value={"12:30"}>12:30</option>
                            </select>
                            <select
                                value={thurOpenAmPM}
                                onChange={(e) => setThurOpenAmPm(e.target.value)}
                            >
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option value={"PM"}>PM</option>
                            </select>
                            &nbsp; &nbsp;
                            <label>Closing time: &nbsp;</label>
                            <select
                                value={thursday_hours_close}
                                onChange={(e) => setThursHoursClose(e.target.value)}>
                                <option>Hour</option>
                                <option value={"-1:00"}>1</option>
                                <option value={"-1:30"}>1:30</option>
                                <option value={"-2:00"}>2</option>
                                <option value={"-2:30"}>2:30</option>
                                <option value={"-3:00"}>3</option>
                                <option value={"-3:30"}>3:30</option>
                                <option value={"-4:00"}>4</option>
                                <option value={"-4:30"}>4:30</option>
                                <option value={"-5:00"}>5</option>
                                <option value={"-5:30"}>5:30</option>
                                <option value={"-6:00"}>6</option>
                                <option value={"-6:30"}>6:30</option>
                                <option value={"-7:00"}>7</option>
                                <option value={"-7:30"}>7:30</option>
                                <option value={"-8:00"}>8</option>
                                <option value={"-8:30"}>8:30</option>
                                <option value={"-9:00"}>9</option>
                                <option value={"-9:30"}>9:30</option>
                                <option value={"-10:00"}>10</option>
                                <option value={"-10:30"}>10:30</option>
                                <option value={"-11:00"}>11</option>
                                <option value={"-11:30"}>11:30</option>
                                <option value={"-12:00"}>12</option>
                                <option value={"-12:30"}>12:30</option>
                            </select>
                            <select
                                value={thurCloseAmPm}
                                onChange={(e) => setThurCloseAmPm(e.target.value)}>
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option vale={"PM"}>PM</option>
                            </select>
                        </div>
                        {(thursday_hours === 'Closed' || thursday_hours === 'closed') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Thursday hours.</label>
                            <input
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onClick={thuCheckBox}>
                            </input></div>}
                    </div>
                    {thuCheck ? <div className="secondary-hours-input-div">
                        <input
                            className="business-form-hours-input"
                            placeholder="Secondary Thursday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={(e) => setThursHoursTwo(e.target.value)}
                            value={thursday_hours_two}>
                        </input>
                    </div> : ""}
                    <div className="bizform-hours-div">
                        {/* <input
                            required={true}
                            className={friday_hours.length && fri_falsey_check ? "falsey-form-hours-input" : "business-form-hours-input"}
                            placeholder="Friday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={friSet}
                            value={friday_hours}>

                        </input>
                        {friday_hours.length && fri_falsey_check ? <div className="error-below-inputs-divs"> Must be valid time format for Friday. </div> : ""} */}

                        <div className="openclose-radio-div">
                            <div>Open/Closed Friday?</div>
                            &nbsp; &nbsp;
                            <label>Open</label>
                            <input
                                type='radio'
                                onChange={() => setFriHours("")}
                                checked={friday_hours !== "Closed"}>
                            </input>
                            &nbsp;
                            <label>Closed</label>
                            <input
                                type='radio'
                                onChange={() => setFriHours("Closed")}
                                checked={friday_hours === "Closed"}>
                            </input>
                        </div>
                        <div className='openclosetime-div'>
                            <label>Opening time: &nbsp;</label>
                            <select
                                value={friday_hours}
                                onChange={friSet}>
                                <option>Hour</option>
                                <option value={"1:00"}>1</option>
                                <option value={"1:30"}>1:30</option>
                                <option value={"2:00"}>2</option>
                                <option value={"2:30"}>2:30</option>
                                <option value={"3:00"}>3</option>
                                <option value={"3:30"}>3:30</option>
                                <option value={"4:00"}>4</option>
                                <option value={"4:30"}>4:30</option>
                                <option value={"5:00"}>5</option>
                                <option value={"5:30"}>5:30</option>
                                <option value={"6:00"}>6</option>
                                <option value={"6:30"}>6:30</option>
                                <option value={"7:00"}>7</option>
                                <option value={"7:30"}>7:30</option>
                                <option value={"8:00"}>8</option>
                                <option value={"8:30"}>8:30</option>
                                <option value={"9:00"}>9</option>
                                <option value={"9:30"}>9:30</option>
                                <option value={"10:00"}>10</option>
                                <option value={"10:30"}>10:30</option>
                                <option value={"11:00"}>11</option>
                                <option value={"11:30"}>11:30</option>
                                <option value={"12:00"}>12</option>
                                <option value={"12:30"}>12:30</option>
                            </select>
                            <select
                                value={friOpenAmPM}
                                onChange={(e) => setFriOpenAmPm(e.target.value)}
                            >
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option value={"PM"}>PM</option>
                            </select>
                            &nbsp; &nbsp;
                            <label>Closing time: &nbsp;</label>
                            <select
                                value={friday_hours_close}
                                onChange={(e) => setFriHoursClose(e.target.value)}>
                                <option>Hour</option>
                                <option value={"-1:00"}>1</option>
                                <option value={"-1:30"}>1:30</option>
                                <option value={"-2:00"}>2</option>
                                <option value={"-2:30"}>2:30</option>
                                <option value={"-3:00"}>3</option>
                                <option value={"-3:30"}>3:30</option>
                                <option value={"-4:00"}>4</option>
                                <option value={"-4:30"}>4:30</option>
                                <option value={"-5:00"}>5</option>
                                <option value={"-5:30"}>5:30</option>
                                <option value={"-6:00"}>6</option>
                                <option value={"-6:30"}>6:30</option>
                                <option value={"-7:00"}>7</option>
                                <option value={"-7:30"}>7:30</option>
                                <option value={"-8:00"}>8</option>
                                <option value={"-8:30"}>8:30</option>
                                <option value={"-9:00"}>9</option>
                                <option value={"-9:30"}>9:30</option>
                                <option value={"-10:00"}>10</option>
                                <option value={"-10:30"}>10:30</option>
                                <option value={"-11:00"}>11</option>
                                <option value={"-11:30"}>11:30</option>
                                <option value={"-12:00"}>12</option>
                                <option value={"-12:30"}>12:30</option>
                            </select>
                            <select
                                value={friCloseAmPm}
                                onChange={(e) => setFriCloseAmPm(e.target.value)}>
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option vale={"PM"}>PM</option>
                            </select>
                        </div>

                        {(friday_hours === 'Closed' || friday_hours === 'closed') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Friday hours.</label>
                            <input
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onClick={friCheckBox}>
                            </input></div>}
                    </div>
                    {friCheck ? <div className="secondary-hours-input-div">
                        <input
                            className="business-form-hours-input"
                            placeholder="Secondary Friday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={(e) => setFriHoursTwo(e.target.value)}
                            value={friday_hours_two}>
                        </input>
                    </div> : ""}
                    <div className="bizform-hours-div">
                        {/* <input
                            required={true}
                            className={saturday_hours.length && sat_falsey_check ? "falsey-form-hours-input" : "business-form-hours-input"}
                            placeholder="Saturday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={satSet}
                            value={saturday_hours}>

                        </input>
                        {saturday_hours.length && sat_falsey_check ? <div className="error-below-inputs-divs"> Must be valid time format for Saturday. </div> : ""} */}

                        <div className="openclose-radio-div">
                            <div>Open/Closed Saturday?</div>
                            &nbsp; &nbsp;
                            <label>Open</label>
                            <input
                                type='radio'
                                onChange={() => setSatHours("")}
                                checked={saturday_hours !== "Closed"}>
                            </input>
                            &nbsp;
                            <label>Closed</label>
                            <input

                                type='radio'
                                onChange={() => setSatHours("Closed")}
                                checked={saturday_hours === "Closed"}>
                            </input>

                        </div>
                        <div className='openclosetime-div'>
                            <label>Opening time: &nbsp;</label>
                            <select
                                value={saturday_hours}
                                onChange={satSet}>
                                <option>Hour</option>
                                <option value={"1:00"}>1</option>
                                <option value={"1:30"}>1:30</option>
                                <option value={"2:00"}>2</option>
                                <option value={"2:30"}>2:30</option>
                                <option value={"3:00"}>3</option>
                                <option value={"3:30"}>3:30</option>
                                <option value={"4:00"}>4</option>
                                <option value={"4:30"}>4:30</option>
                                <option value={"5:00"}>5</option>
                                <option value={"5:30"}>5:30</option>
                                <option value={"6:00"}>6</option>
                                <option value={"6:30"}>6:30</option>
                                <option value={"7:00"}>7</option>
                                <option value={"7:30"}>7:30</option>
                                <option value={"8:00"}>8</option>
                                <option value={"8:30"}>8:30</option>
                                <option value={"9:00"}>9</option>
                                <option value={"9:30"}>9:30</option>
                                <option value={"10:00"}>10</option>
                                <option value={"10:30"}>10:30</option>
                                <option value={"11:00"}>11</option>
                                <option value={"11:30"}>11:30</option>
                                <option value={"12:00"}>12</option>
                                <option value={"12:30"}>12:30</option>
                            </select>
                            <select
                                value={satOpenAmPM}
                                onChange={(e) => setSatOpenAmPm(e.target.value)}
                            >
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option value={"PM"}>PM</option>
                            </select>
                            &nbsp;
                            <label>Closing time: &nbsp;</label>
                            <select
                                value={saturday_hours_close}
                                onChange={(e) => setSatHoursClose(e.target.value)}>
                                <option>Hour</option>
                                <option value={"-1:00"}>1</option>
                                <option value={"-1:30"}>1:30</option>
                                <option value={"-2:00"}>2</option>
                                <option value={"-2:30"}>2:30</option>
                                <option value={"-3:00"}>3</option>
                                <option value={"-3:30"}>3:30</option>
                                <option value={"-4:00"}>4</option>
                                <option value={"-4:30"}>4:30</option>
                                <option value={"-5:00"}>5</option>
                                <option value={"-5:30"}>5:30</option>
                                <option value={"-6:00"}>6</option>
                                <option value={"-6:30"}>6:30</option>
                                <option value={"-7:00"}>7</option>
                                <option value={"-7:30"}>7:30</option>
                                <option value={"-8:00"}>8</option>
                                <option value={"-8:30"}>8:30</option>
                                <option value={"-9:00"}>9</option>
                                <option value={"-9:30"}>9:30</option>
                                <option value={"-10:00"}>10</option>
                                <option value={"-10:30"}>10:30</option>
                                <option value={"-11:00"}>11</option>
                                <option value={"-11:30"}>11:30</option>
                                <option value={"-12:00"}>12</option>
                                <option value={"-12:30"}>12:30</option>
                            </select>
                            <select
                                value={satCloseAmPm}
                                onChange={(e) => setSatCloseAmPm(e.target.value)}>
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option vale={"PM"}>PM</option>
                            </select>
                        </div>

                        {(saturday_hours === 'Closed' || saturday_hours === 'closed') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Saturday hours.</label>
                            <input
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onClick={satCheckBox}>
                            </input></div>}
                    </div>
                    {satCheck ? <div className="secondary-hours-input-div">
                        <input
                            className="business-form-hours-input"
                            placeholder="Secondary Saturday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={(e) => setSatHoursTwo(e.target.value)}
                            value={saturday_hours_two}>
                        </input>
                    </div> : ""}
                    <div className="bizform-hours-div-last">
                        {/* <input
                            required={true}
                            className={sunday_hours.length && sun_falsey_check ? "falsey-form-hours-input" : "business-form-hours-input"}
                            placeholder="Sunday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={sunSet}
                            value={sunday_hours}>

                        </input>
                        {sunday_hours.length && sun_falsey_check ? <div className="error-below-inputs-divs"> Must be valid time format for Sunday. </div> : ""} */}


                        <div className="openclose-radio-div">
                            <div>Open/Closed Sunday?</div>
                            &nbsp; &nbsp;
                            <label>Open</label>
                            <input
                                type='radio'
                                onChange={() => setSunHours("")}
                                checked={sunday_hours !== "Closed"}>
                            </input>
                            &nbsp;
                            <label>Closed</label>
                            <input
                                type='radio'
                                onChange={() => setSunHours("Closed")}
                                checked={sunday_hours === "Closed"}>
                            </input>
                        </div>
                        <div className='openclosetime-div'>
                            <label>Opening time: &nbsp;</label>
                            <select
                                value={sunday_hours}
                                onChange={sunSet}>
                                <option>Hour</option>
                                <option value={"1:00"}>1</option>
                                <option value={"1:30"}>1:30</option>
                                <option value={"2:00"}>2</option>
                                <option value={"2:30"}>2:30</option>
                                <option value={"3:00"}>3</option>
                                <option value={"3:30"}>3:30</option>
                                <option value={"4:00"}>4</option>
                                <option value={"4:30"}>4:30</option>
                                <option value={"5:00"}>5</option>
                                <option value={"5:30"}>5:30</option>
                                <option value={"6:00"}>6</option>
                                <option value={"6:30"}>6:30</option>
                                <option value={"7:00"}>7</option>
                                <option value={"7:30"}>7:30</option>
                                <option value={"8:00"}>8</option>
                                <option value={"8:30"}>8:30</option>
                                <option value={"9:00"}>9</option>
                                <option value={"9:30"}>9:30</option>
                                <option value={"10:00"}>10</option>
                                <option value={"10:30"}>10:30</option>
                                <option value={"11:00"}>11</option>
                                <option value={"11:30"}>11:30</option>
                                <option value={"12:00"}>12</option>
                                <option value={"12:30"}>12:30</option>
                            </select>
                            <select
                                value={sunOpenAmPM}
                                onChange={(e) => setSunOpenAmPm(e.target.value)}
                            >
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option value={"PM"}>PM</option>
                            </select>
                            &nbsp;
                            <label>Closing time: &nbsp;</label>
                            <select
                                value={sunday_hours_close}
                                onChange={(e) => setSunHoursClose(e.target.value)}>
                                <option>Hour</option>
                                <option value={"-1:00"}>1</option>
                                <option value={"-1:30"}>1:30</option>
                                <option value={"-2:00"}>2</option>
                                <option value={"-2:30"}>2:30</option>
                                <option value={"-3:00"}>3</option>
                                <option value={"-3:30"}>3:30</option>
                                <option value={"-4:00"}>4</option>
                                <option value={"-4:30"}>4:30</option>
                                <option value={"-5:00"}>5</option>
                                <option value={"-5:30"}>5:30</option>
                                <option value={"-6:00"}>6</option>
                                <option value={"-6:30"}>6:30</option>
                                <option value={"-7:00"}>7</option>
                                <option value={"-7:30"}>7:30</option>
                                <option value={"-8:00"}>8</option>
                                <option value={"-8:30"}>8:30</option>
                                <option value={"-9:00"}>9</option>
                                <option value={"-9:30"}>9:30</option>
                                <option value={"-10:00"}>10</option>
                                <option value={"-10:30"}>10:30</option>
                                <option value={"-11:00"}>11</option>
                                <option value={"-11:30"}>11:30</option>
                                <option value={"-12:00"}>12</option>
                                <option value={"-12:30"}>12:30</option>
                            </select>
                            <select
                                value={sunCloseAmPm}
                                onChange={(e) => setSunCloseAmPm(e.target.value)}>
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option vale={"PM"}>PM</option>
                            </select>
                        </div>

                        {(sunday_hours === 'Closed' || sunday_hours === 'closed') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Sunday hours.</label>
                            <input
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onClick={sunCheckBox}>
                            </input></div>}
                    </div>
                    {sunCheck ? <div className="secondary-hours-input-div">
                        <input
                            className="business-form-hours-input"
                            placeholder="Secondary Sunday Hours of Operation"
                            name='hours'
                            type='text'
                            onChange={(e) => setSunHoursTwo(e.target.value)}
                            value={sunday_hours_two}>
                        </input>
                    </div> : ""}
                </div>
                <div className="business-form-email-input-div">
                    <input
                        required={true}
                        placeholder="Email Address"
                        className={email.length && !isValidEmail(email) ? "falsey-business-form-email-input" : "business-form-email-input"}
                        name='email'
                        type='text'
                        onChange={emailSet}
                        value={email}></input>
                    {email.length && !isValidEmail(email) ? <div className="error-below-inputs-divs"> Must be a valid Email address. </div> : ""}

                </div>
                <div className="business-form-address-input-div">
                    <input
                        required={true}
                        placeholder="Business Address"
                        className={((address.length && address.length < 15) || (address.length && address.length > 100)) ? "falsey-business-form-address-input" : "business-form-address-input"}
                        name='address'
                        type='text'
                        onChange={addressSet}
                        value={address}></input>
                    {address.length && address.length < 15 ? <div className="error-below-inputs-divs"> Address must be at least 15 characters long. </div> : ""}
                    {address.length && address.length > 100 ? <div className="error-below-inputs-divs"> Address cannot exceed 100 characters. </div> : ""}
                </div>
                <div className="business-form-phone-input-div">
                    <label className="phone-num-input-label">Please enter in "xxx-xxx-xxxx" format.</label>
                    <input
                        required={true}
                        placeholder="Business Phone Number"
                        className={phone_number.length && isValidPhone(phone_number) !== 12 ? "falsey-business-form-phone-input" : "business-form-phone-input"}
                        name='phone_number'
                        type='text'
                        onChange={phoneSet}
                        value={phone_number}></input>
                    {phone_number.length && isValidPhone(phone_number) !== 12 ? <div className="error-below-inputs-divs"> Must be a valid formatted phone number. </div> : ""}
                </div>
                <div className="business-form-website-input-div">
                    <input
                        // required={true}
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
                        className={about_us.length && about_us.length < 30 ? "falsey-business-form-aboutus-input" : "business-form-aboutus-input"}
                        type='text'
                        name='aboutus'
                        onChange={(e) => setAbout(e.target.value)}
                        value={about_us}>
                    </textarea>
                    {about_us.length && about_us.length < 30 ? <div className="error-below-inputs-divs"> Description must be at least 30 characters. </div> : ""}
                </div>
                <div className="business-form-price-input-div">
                    <input
                        required={true}
                        placeholder="Price (1-5, represented by $'s)"
                        className={((price.length && price < 1) || (price.length && price > 5)) ? "falsey-business-form-price-input" : "business-form-price-input"}
                        type='number'
                        name='price'
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}>
                    </input>
                    {((price.length && price < 1) || (price.length && price > 5)) ? <div className="error-below-inputs-divs"> Price must be between 1 and 5. </div> : ""}
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
                    {/* {console.log(errors)} */}
                </div>
            </form>
        </div>
    )
}


export default BusinessForm;
