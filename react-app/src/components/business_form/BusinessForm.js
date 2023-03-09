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
    const [tuesday_hours_two_close, setTuesHoursTwoClose] = useState("");


    const [wednesday_hours, setWedsHours] = useState("");
    const [wednesday_hours_close, setWedsHoursClose] = useState("");

    const [wednesday_hours_two, setWedsHoursTwo] = useState("");
    const [wednesday_hours_two_close, setWedsHoursTwoClose] = useState("");

    const [thursday_hours, setThursHours] = useState("");
    const [thursday_hours_close, setThursHoursClose] = useState("");

    const [thursday_hours_two, setThursHoursTwo] = useState("");
    const [thursday_hours_two_close, setThursHoursTwoClose] = useState("");

    const [friday_hours, setFriHours] = useState("");
    const [friday_hours_close, setFriHoursClose] = useState("");

    const [friday_hours_two, setFriHoursTwo] = useState("");
    const [friday_hours_two_close, setFriHoursTwoClose] = useState("");

    const [saturday_hours, setSatHours] = useState("");
    const [saturday_hours_close, setSatHoursClose] = useState("");


    const [saturday_hours_two, setSatHoursTwo] = useState("");
    const [saturday_hours_two_close, setSatHoursTwoClose] = useState("");

    const [sunday_hours, setSunHours] = useState("");
    const [sunday_hours_close, setSunHoursClose] = useState("");

    const [sunday_hours_two, setSunHoursTwo] = useState("");
    const [sunday_hours_two_close, setSunHoursTwoClose] = useState("");

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

    const [tueTwoOpenAmPM, setTueTwoOpenAmPm] = useState("");
    const [tueTwoCloseAmPm, setTueTwoCloseAmPm] = useState("");

    const [wedOpenAmPM, setWedOpenAmPm] = useState("");
    const [wedCloseAmPm, setWedCloseAmPm] = useState("");

    const [wedTwoOpenAmPM, setWedTwoOpenAmPm] = useState("");
    const [wedTwoCloseAmPm, setWedTwoCloseAmPm] = useState("");


    const [thurOpenAmPM, setThurOpenAmPm] = useState("");
    const [thurCloseAmPm, setThurCloseAmPm] = useState("");

    const [thurTwoOpenAmPM, setThurTwoOpenAmPm] = useState("");
    const [thurTwoCloseAmPm, setThurTwoCloseAmPm] = useState("");


    const [friOpenAmPM, setFriOpenAmPm] = useState("");
    const [friCloseAmPm, setFriCloseAmPm] = useState("");

    const [friTwoOpenAmPM, setFriTwoOpenAmPm] = useState("");
    const [friTwoCloseAmPm, setFriTwoCloseAmPm] = useState("");


    const [satOpenAmPM, setSatOpenAmPm] = useState("");
    const [satCloseAmPm, setSatCloseAmPm] = useState("");

    const [satTwoOpenAmPM, setSatTwoOpenAmPm] = useState("");
    const [satTwoCloseAmPm, setSatTwoCloseAmPm] = useState("");


    const [sunOpenAmPM, setSunOpenAmPm] = useState("");
    const [sunCloseAmPm, setSunCloseAmPm] = useState("");

    const [sunTwoOpenAmPM, setSunTwoOpenAmPm] = useState("");
    const [sunTwoCloseAmPm, setSunTwoCloseAmPm] = useState("");

    const [errors, setErrors] = useState([]);
    const [renderErr, setRenderErr] = useState([])

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
        if (errors.length > 0){
            setRenderErr(errors)
            return
        };
        const createdBusiness = {
            name,
            preview_img,
            monday_hours: monday_hours + monOpenAmPM + monday_hours_close + monCloseAmPm + "," + monday_hours_two + monTwoOpenAmPM + monday_hours_two_close + monTwoCloseAmPm,
            tuesday_hours: tuesday_hours + tueOpenAmPM + tuesday_hours_close + tueCloseAmPm + "," + tuesday_hours_two + tueTwoOpenAmPM + tuesday_hours_two_close + tueTwoCloseAmPm,
            wednesday_hours: wednesday_hours + wedOpenAmPM + wednesday_hours_close + wedCloseAmPm + "," + wednesday_hours_two + wedTwoOpenAmPM + wednesday_hours_two_close + wedTwoCloseAmPm,
            thursday_hours: thursday_hours + thurOpenAmPM + thursday_hours_close + thurCloseAmPm + "," + thursday_hours_two + thurTwoOpenAmPM + thursday_hours_two_close + thurTwoCloseAmPm,
            friday_hours: friday_hours + friOpenAmPM + friday_hours_close + friCloseAmPm + "," + friday_hours_two + friTwoOpenAmPM + friday_hours_two_close + friTwoCloseAmPm,
            saturday_hours: saturday_hours + satOpenAmPM + saturday_hours_close + satCloseAmPm + "," + saturday_hours_two + satTwoOpenAmPM + saturday_hours_two_close + satTwoCloseAmPm,
            sunday_hours: sunday_hours + sunOpenAmPM + sunday_hours_close + sunCloseAmPm + "," + sunday_hours_two + sunTwoOpenAmPM + sunday_hours_two_close + sunTwoCloseAmPm,
            email,
            address,
            phone_number,
            business_website,
            about_us,
            price,
            tags
        };

        const addedBiz = await dispatch(createBusinessThunk(createdBusiness))

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
        phone.split('').forEach((letter) => {
            if (letter === '-' || letter === '1' || letter === '2' || letter === '3' || letter === '4' || letter === '5' || letter === '6' || letter === '7' || letter === '8' || letter === '9' || letter === '0') {
                i++
            }
        })
        return i
    }

    // function isValidTime(time) {
    //     let regexp = /^[aAmMpP0-9---:]+$/;
    //     return regexp.test(time)
    // }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }


    useEffect(() => {
        const err = [];
        if (name.length < 6) {
            err.push("Business name must be at least 6 characters long.")
        }
        if (name.length > 50) {
            err.push("Business must be less than 50 characters long. You can include further naming needs within your business description.")
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
        if ((monday_hours !== 'Closed' && (monday_hours === "" || monday_hours_close === "" || monOpenAmPM === "" || monCloseAmPm === ""))) {
            err.push("Must enter hours for Monday if not closed.")
        }
        if ((tuesday_hours !== 'Closed' && (tuesday_hours === "" || tuesday_hours_close === "" || tueOpenAmPM === "" || tueCloseAmPm === ""))) {
            err.push("Must enter hours for Tuesday if not closed.")
        }
        if ((wednesday_hours !== 'Closed' && (wednesday_hours === "" || wednesday_hours_close === "" || wedOpenAmPM === "" || wedCloseAmPm === ""))) {
            err.push("Must enter hours for Wednesday if not closed.")
        }
        if ((thursday_hours !== 'Closed' && (thursday_hours === "" || thursday_hours_close === "" || thurOpenAmPM === "" || thurCloseAmPm === ""))) {
            err.push("Must enter hours for Thursday if not closed.")
        }
        if ((friday_hours !== 'Closed' && (friday_hours === "" || friday_hours_close === "" || friOpenAmPM === "" || friCloseAmPm === ""))) {
            err.push("Must enter hours for Friday if not closed.")
        }
        if ((saturday_hours !== 'Closed' && (saturday_hours === "" || saturday_hours_close === "" || satOpenAmPM === "" || satCloseAmPm === ""))) {
            err.push("Must enter hours for Saturday if not closed.")
        }
        if ((sunday_hours !== 'Closed' && (sunday_hours === "" || sunday_hours_close === "" || sunOpenAmPM === "" || sunCloseAmPm === ""))) {
            err.push("Must enter hours for Sunday if not closed.")
        }

        if (!isValidEmail(email)) {
            err.push("Must enter a valid Email address")
        }
        if (price < 1 || price > 5) {
            err.push("Price must be between 1 and 5.")
        }
        if (about_us.length < 30) {
            err.push("Description must be at least 30 characters.")
        }
        setErrors(err)
    }, [name, phone_number, address, monday_hours, monday_hours_close, monOpenAmPM, monCloseAmPm, tuesday_hours, tuesday_hours_close, tueOpenAmPM, tueCloseAmPm, wednesday_hours,
        wednesday_hours_close, wedOpenAmPM, wedCloseAmPm, thursday_hours, thursday_hours_close, thurOpenAmPM, thurCloseAmPm, friday_hours, friday_hours_close, friOpenAmPM, friCloseAmPm,
        saturday_hours, saturday_hours_close, satOpenAmPM, satCloseAmPm, sunday_hours, sunday_hours_close, sunOpenAmPM, sunCloseAmPm, email, price, about_us, preview_img])



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
                    {name.length && name.length > 50 ? <div className="error-below-too-long-name">Business name must be less than 50 characters long.</div> : ""}
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
                    <h3 className="hoursofop-h3">Hours of operation:</h3>
                    <div className="bizform-hours-div">
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
                                onChange={() => [setMonHours("Closed"), setMonCheck(false)]}
                                checked={monday_hours === "Closed"}>
                            </input>

                        </div>
                        {monday_hours !== "Closed" ? <div className='openclosetime-div'>
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
                            <label>Closing time: &nbsp;</label>
                            {/* <div> */}
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
                        </div> : ""}
                        {(monday_hours === 'Closed' || monday_hours === 'closed') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Monday hours.</label>
                            <input
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onClick={monCheckBox}>
                            </input></div>}
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
                        </div>
                    </div> : ""}
                    <div className="bizform-hours-div">
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
                                onChange={() => [setTuesHours("Closed"), setTueCheck(false)]}
                                checked={tuesday_hours === "Closed"}>
                            </input>

                        </div>
                        {tuesday_hours !== "Closed" ? <div className='openclosetime-div'>
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
                        </div> : ""}
                        {(tuesday_hours === 'Closed' || tuesday_hours === 'closed') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Tuesday hours.</label>
                            <input
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onClick={tueCheckBox}>
                            </input></div>}
                    </div>
                    {tueCheck ? <div className='secondary-openclosetime-div'>
                        <label>Opening time: &nbsp;</label>
                        <select
                            value={tuesday_hours_two}
                            onChange={(e) => setTuesHoursTwo(e.target.value)}>
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
                            value={tueTwoOpenAmPM}
                            onChange={(e) => setTueTwoOpenAmPm(e.target.value)}
                        >
                            <option>Am/Pm</option>
                            <option value={"AM"}>AM</option>
                            <option value={"PM"}>PM</option>
                        </select>
                        &nbsp; &nbsp;
                        <label>Closing time: &nbsp;</label>
                        <div>
                            <select
                                value={tuesday_hours_two_close}
                                onChange={(e) => setTuesHoursTwoClose(e.target.value)}>
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
                                value={tueTwoCloseAmPm}
                                onChange={(e) => setTueTwoCloseAmPm(e.target.value)}>
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option vale={"PM"}>PM</option>
                            </select>
                        </div>
                    </div> : ""}

                    <div className="bizform-hours-div">
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
                                onChange={() => [setWedsHours("Closed"), setWedCheck(false)]}
                                checked={wednesday_hours === "Closed"}>
                            </input>

                        </div>
                        {wednesday_hours !== "Closed" ? < div className='openclosetime-div'>
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
                        </div> : ""}
                        {(wednesday_hours === 'Closed' || wednesday_hours === 'closed') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Wednesday hours.</label>
                            <input
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onClick={wedCheckBox}>
                            </input></div>}

                        {wedCheck ? <div className='secondary-openclosetime-div'>
                            <label>Opening time: &nbsp;</label>
                            <select
                                value={wednesday_hours_two}
                                onChange={(e) => setWedsHoursTwo(e.target.value)}>
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
                                value={wedTwoOpenAmPM}
                                onChange={(e) => setWedTwoOpenAmPm(e.target.value)}
                            >
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option value={"PM"}>PM</option>
                            </select>
                            &nbsp; &nbsp;
                            <label>Closing time: &nbsp;</label>
                            <div>
                                <select
                                    value={wednesday_hours_two_close}
                                    onChange={(e) => setWedsHoursTwoClose(e.target.value)}>
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
                                    value={wedTwoCloseAmPm}
                                    onChange={(e) => setWedTwoCloseAmPm(e.target.value)}>
                                    <option>Am/Pm</option>
                                    <option value={"AM"}>AM</option>
                                    <option vale={"PM"}>PM</option>
                                </select>
                            </div>
                        </div> : ""}

                    </div>
                    <div className="bizform-hours-div">
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
                                onChange={() => [setThursHours("Closed"), setThuCheck(false)]}
                                checked={thursday_hours === "Closed"}>
                            </input>
                        </div>
                        {thursday_hours !== "Closed" ? <div className='openclosetime-div'>
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
                        </div> : ""}
                        {(thursday_hours === 'Closed' || thursday_hours === 'closed') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Thursday hours.</label>
                            <input
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onClick={thuCheckBox}>
                            </input></div>}
                    </div>
                    {thuCheck ? <div className='secondary-openclosetime-div'>
                        <label>Opening time: &nbsp;</label>
                        <select
                            value={thursday_hours_two}
                            onChange={(e) => setThursHoursTwo(e.target.value)}>
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
                            value={thurTwoOpenAmPM}
                            onChange={(e) => setThurTwoOpenAmPm(e.target.value)}
                        >
                            <option>Am/Pm</option>
                            <option value={"AM"}>AM</option>
                            <option value={"PM"}>PM</option>
                        </select>
                        &nbsp; &nbsp;
                        <label>Closing time: &nbsp;</label>
                        <div>
                            <select
                                value={thursday_hours_two_close}
                                onChange={(e) => setThursHoursTwoClose(e.target.value)}>
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
                                value={thurTwoCloseAmPm}
                                onChange={(e) => setThurTwoCloseAmPm(e.target.value)}>
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option vale={"PM"}>PM</option>
                            </select>
                        </div>
                    </div> : ""}
                    <div className="bizform-hours-div">
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
                                onChange={() => [setFriHours("Closed"), setFriCheck(false)]}
                                checked={friday_hours === "Closed"}>
                            </input>
                        </div>
                        {friday_hours !== "Closed" ? <div className='openclosetime-div'>
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
                        </div> : ""}

                        {(friday_hours === 'Closed' || friday_hours === 'closed') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Friday hours.</label>
                            <input
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onClick={friCheckBox}>
                            </input></div>}
                    </div>
                    {friCheck ? <div className='secondary-openclosetime-div'>
                        <label>Opening time: &nbsp;</label>
                        <select
                            value={friday_hours_two}
                            onChange={(e) => setFriHoursTwo(e.target.value)}>
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
                            value={friTwoOpenAmPM}
                            onChange={(e) => setFriTwoOpenAmPm(e.target.value)}
                        >
                            <option>Am/Pm</option>
                            <option value={"AM"}>AM</option>
                            <option value={"PM"}>PM</option>
                        </select>
                        &nbsp; &nbsp;
                        <label>Closing time: &nbsp;</label>
                        <div>
                            <select
                                value={friday_hours_two_close}
                                onChange={(e) => setFriHoursTwoClose(e.target.value)}>
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
                                value={friTwoCloseAmPm}
                                onChange={(e) => setFriTwoCloseAmPm(e.target.value)}>
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option vale={"PM"}>PM</option>
                            </select>
                        </div>
                    </div> : ""}
                    <div className="bizform-hours-div">
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
                                onChange={() => [setSatHours("Closed"), setSatCheck(false)]}
                                checked={saturday_hours === "Closed"}>
                            </input>

                        </div>
                        {saturday_hours !== "Closed" ? <div className='openclosetime-div'>
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
                        </div> : ""}

                        {(saturday_hours === 'Closed' || saturday_hours === 'closed') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Saturday hours.</label>
                            <input
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onClick={satCheckBox}>
                            </input></div>}
                    </div>
                    {satCheck ? <div className='secondary-openclosetime-div'>
                        <label>Opening time: &nbsp;</label>
                        <select
                            value={saturday_hours_two}
                            onChange={(e) => setSatHoursTwo(e.target.value)}>
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
                            value={satTwoOpenAmPM}
                            onChange={(e) => setSatTwoOpenAmPm(e.target.value)}
                        >
                            <option>Am/Pm</option>
                            <option value={"AM"}>AM</option>
                            <option value={"PM"}>PM</option>
                        </select>
                        &nbsp; &nbsp;
                        <label>Closing time: &nbsp;</label>
                        <div>
                            <select
                                value={saturday_hours_two_close}
                                onChange={(e) => setSatHoursTwoClose(e.target.value)}>
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
                                value={satTwoCloseAmPm}
                                onChange={(e) => setSatTwoCloseAmPm(e.target.value)}>
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option vale={"PM"}>PM</option>
                            </select>
                        </div>
                    </div> : ""}
                    <div className={sunCheck ? "bizform-hours-div-last-secondary" : "bizform-hours-div-last"}>
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
                                onChange={() => [setSunHours("Closed"), setSunCheck(false)]}
                                checked={sunday_hours === "Closed"}>
                            </input>
                        </div>
                        {sunday_hours !== "Closed" ? <div className='openclosetime-div'>
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
                        </div> : ""}

                        {(sunday_hours === 'Closed' || sunday_hours === 'closed') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Sunday hours.</label>
                            <input
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onClick={sunCheckBox}>
                            </input></div>}
                    </div>
                    {sunCheck ? <div className='secondary-openclosetime-div-last'>
                        <label>Opening time: &nbsp;</label>
                        <select
                            value={sunday_hours_two}
                            onChange={(e) => setSunHoursTwo(e.target.value)}>
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
                            value={sunTwoOpenAmPM}
                            onChange={(e) => setSunTwoOpenAmPm(e.target.value)}
                        >
                            <option>Am/Pm</option>
                            <option value={"AM"}>AM</option>
                            <option value={"PM"}>PM</option>
                        </select>
                        &nbsp; &nbsp;
                        <label>Closing time: &nbsp;</label>
                        <div>
                            <select
                                value={sunday_hours_two_close}
                                onChange={(e) => setSunHoursTwoClose(e.target.value)}>
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
                                value={sunTwoCloseAmPm}
                                onChange={(e) => setSunTwoCloseAmPm(e.target.value)}>
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option vale={"PM"}>PM</option>
                            </select>
                        </div>
                    </div> : ""}
                </div>
                <div className="business-form-email-input-div">
                    <input
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
                        placeholder="Business Phone #"
                        className={phone_number.length && isValidPhone(phone_number) !== 12 ? "falsey-business-form-phone-input" : "business-form-phone-input"}
                        name='phone_number'
                        type='text'
                        onChange={phoneSet}
                        value={phone_number}></input>
                    {phone_number.length && isValidPhone(phone_number) !== 12 ? <div className="error-below-inputs-divs"> Must be a valid formatted phone number. </div> : ""}
                </div>
                <div className="business-form-website-input-div">
                    <input
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
                <ul>
                    {renderErr?.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <div className="create-business-form-two-button-div">
                    {/* {errors.length ? "" : <button className='business-form-button-submit' type="submit">Submit Business</button>} */}
                    <button className='business-form-button-submit' type="submit">Submit Business</button>
                    <button className='business-form-button-close' onClick={onClose}>Close</button>
                </div>
            </form >
        </div >
    )
}


export default BusinessForm;
