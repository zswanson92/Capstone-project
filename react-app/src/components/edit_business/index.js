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


    const [monday_hours, setMonHours] = useState(currentBiz?.monday_hours.slice(0, 5));
    const [monday_hours_close, setMonHoursClose] = useState(currentBiz?.monday_hours.slice(7, 13));

    const [monOpenAmPM, setMonOpenAmPm] = useState(currentBiz?.monday_hours.slice(5, 7).toUpperCase());
    const [monCloseAmPm, setMonCloseAmPm] = useState(currentBiz?.monday_hours.slice(13, 15).toUpperCase());


    const [monday_hours_two, setMonHoursTwo] = useState(currentBiz?.monday_hours.split(',').length > 1 ? currentBiz?.monday_hours.slice(16, 21) : "");
    const [monday_hours_two_close, setMonHoursTwoClose] = useState(currentBiz?.monday_hours.split(',').length > 1 ? currentBiz?.monday_hours.slice(23, 29) : "");


    const [monTwoOpenAmPM, setMonTwoOpenAmPm] = useState(currentBiz?.monday_hours.split(',').length > 1 ? currentBiz.monday_hours.slice(21, 23).toUpperCase() : "");
    const [monTwoCloseAmPm, setMonTwoCloseAmPm] = useState(currentBiz?.monday_hours.split(',').length > 1 ? currentBiz?.monday_hours.slice(29, 31).toUpperCase() : "");

    const [monCheck, setMonCheck] = useState(currentBiz?.monday_hours.split('').length > 20 ? true : false)


    const monCloseSet = (e) => {
        setMonHoursClose(e.target.value)
    }

    const monCheckBox = () => {
        setMonCheck(!monCheck)
    }



    const [tuesday_hours, setTuesHours] = useState(currentBiz?.tuesday_hours.slice(0, 5));
    const [tuesday_hours_close, setTuesHoursClose] = useState(currentBiz?.tuesday_hours.slice(7, 13));

    const [tueOpenAmPM, setTueOpenAmPm] = useState(currentBiz?.tuesday_hours.slice(5, 7).toUpperCase());
    const [tueCloseAmPm, setTueCloseAmPm] = useState(currentBiz?.tuesday_hours.slice(13, 15).toUpperCase());

    const [tuesday_hours_two, setTuesHoursTwo] = useState(currentBiz?.tuesday_hours.split(',').length > 1 ? currentBiz?.tuesday_hours.slice(16, 21) : "");
    const [tuesday_hours_two_close, setTuesHoursTwoClose] = useState(currentBiz?.tuesday_hours.split(',').length > 1 ? currentBiz?.tuesday_hours.slice(23, 29) : "");

    const [tueTwoOpenAmPM, setTueTwoOpenAmPm] = useState(currentBiz?.tuesday_hours.split(',').length > 1 ? currentBiz?.tuesday_hours.slice(21, 23).toUpperCase() : "");
    const [tueTwoCloseAmPm, setTueTwoCloseAmPm] = useState(currentBiz?.tuesday_hours.split(',').length > 1 ? currentBiz?.tuesday_hours.slice(29, 31).toUpperCase() : "");


    const [tueCheck, setTueCheck] = useState(currentBiz?.tuesday_hours.split('').length > 20 ? true : false)

    const tueCheckBox = () => {
        setTueCheck(!tueCheck)
    }



    const [wednesday_hours, setWedsHours] = useState(currentBiz?.wednesday_hours.slice(0, 5));
    const [wednesday_hours_close, setWedsHoursClose] = useState(currentBiz?.wednesday_hours.slice(7, 13));

    const [wedOpenAmPM, setWedOpenAmPm] = useState(currentBiz?.wednesday_hours.slice(5, 7).toUpperCase());
    const [wedCloseAmPm, setWedCloseAmPm] = useState(currentBiz?.wednesday_hours.slice(13, 15).toUpperCase());


    const [wednesday_hours_two, setWedsHoursTwo] = useState(currentBiz?.wednesday_hours.split(',').length > 1 ? currentBiz?.wednesday_hours.slice(16, 21) : "");
    const [wednesday_hours_two_close, setWedsHoursTwoClose] = useState(currentBiz?.wednesday_hours.split(',').length > 1 ? currentBiz?.wednesday_hours.slice(23, 29) : "");

    const [wedTwoOpenAmPM, setWedTwoOpenAmPm] = useState(currentBiz?.wednesday_hours.split(',').length > 1 ? currentBiz?.wednesday_hours.slice(21, 23).toUpperCase() : "");
    const [wedTwoCloseAmPm, setWedTwoCloseAmPm] = useState(currentBiz?.wednesday_hours.split(',').length > 1 ? currentBiz?.wednesday_hours.slice(29, 31).toUpperCase() : "");

    const [wedCheck, setWedCheck] = useState(currentBiz?.wednesday_hours.split('').length > 20 ? true : false)

    const wedCheckBox = () => {
        setWedCheck(!wedCheck)
    }




    const [thursday_hours, setThursHours] = useState(currentBiz?.thursday_hours.slice(0, 5));
    const [thursday_hours_close, setThursHoursClose] = useState(currentBiz?.thursday_hours.slice(7, 13));


    const [thurOpenAmPM, setThurOpenAmPm] = useState(currentBiz?.thursday_hours.slice(5, 7).toUpperCase());
    const [thurCloseAmPm, setThurCloseAmPm] = useState(currentBiz?.thursday_hours.slice(13, 15).toUpperCase());

    const [thursday_hours_two, setThursHoursTwo] = useState(currentBiz?.thursday_hours.split(',').length > 1 ? currentBiz?.thursday_hours.slice(16, 21) : "");
    const [thursday_hours_two_close, setThursHoursTwoClose] = useState(currentBiz?.thursday_hours.split(',').length > 1 ? currentBiz?.thursday_hours.slice(23, 29) : "");


    const [thurTwoOpenAmPM, setThurTwoOpenAmPm] = useState(currentBiz?.thursday_hours.split(',').length > 1 ? currentBiz?.thursday_hours.slice(21, 23).toUpperCase() : "");
    const [thurTwoCloseAmPm, setThurTwoCloseAmPm] = useState(currentBiz?.thursday_hours.split(',').length > 1 ? currentBiz?.thursday_hours.slice(29, 31).toUpperCase() : "");

    const [thuCheck, setThuCheck] = useState(currentBiz?.thursday_hours.split('').length > 20 ? true : false)

    const thuCheckBox = () => {
        setThuCheck(!thuCheck)
    }



    const [friday_hours, setFriHours] = useState(currentBiz?.friday_hours.slice(0, 5));
    const [friday_hours_close, setFriHoursClose] = useState(currentBiz?.friday_hours.slice(7, 13));


    const [friOpenAmPM, setFriOpenAmPm] = useState(currentBiz?.friday_hours.slice(5, 7).toUpperCase());
    const [friCloseAmPm, setFriCloseAmPm] = useState(currentBiz?.friday_hours.slice(13, 15).toUpperCase());

    const [friday_hours_two, setFriHoursTwo] = useState(currentBiz?.friday_hours.split(',').length > 1 ? currentBiz?.friday_hours.slice(16, 21) : "");
    const [friday_hours_two_close, setFriHoursTwoClose] = useState(currentBiz?.friday_hours.split(',').length > 1 ? currentBiz?.friday_hours.slice(23, 29) : "");


    const [friTwoOpenAmPM, setFriTwoOpenAmPm] = useState(currentBiz?.friday_hours.split(',').length > 1 ? currentBiz?.friday_hours.slice(21, 23).toUpperCase() : "");
    const [friTwoCloseAmPm, setFriTwoCloseAmPm] = useState(currentBiz?.friday_hours.split(',').length > 1 ? currentBiz?.friday_hours.slice(29, 31).toUpperCase() : "");


    const [friCheck, setFriCheck] = useState(currentBiz?.friday_hours.split('').length > 20 ? true : false)

    const friCheckBox = () => {
        setFriCheck(!friCheck)
    }


    const [saturday_hours, setSatHours] = useState(currentBiz?.saturday_hours.slice(0, 5));
    const [saturday_hours_close, setSatHoursClose] = useState(currentBiz?.saturday_hours.slice(7, 13));


    const [satOpenAmPM, setSatOpenAmPm] = useState(currentBiz?.saturday_hours.slice(5, 7).toUpperCase());
    const [satCloseAmPm, setSatCloseAmPm] = useState(currentBiz?.saturday_hours.slice(13, 15).toUpperCase());

    const [saturday_hours_two, setSatHoursTwo] = useState(currentBiz?.saturday_hours.split(',').length > 1 ? currentBiz?.saturday_hours.slice(16, 21) : "");
    const [saturday_hours_two_close, setSatHoursTwoClose] = useState(currentBiz?.saturday_hours.split(',').length > 1 ? currentBiz?.saturday_hours.slice(23, 29) : "");


    const [satTwoOpenAmPM, setSatTwoOpenAmPm] = useState(currentBiz?.saturday_hours.split(',').length > 1 ? currentBiz?.saturday_hours.slice(21, 23).toUpperCase() : "");
    const [satTwoCloseAmPm, setSatTwoCloseAmPm] = useState(currentBiz?.saturday_hours.split(',').length > 1 ? currentBiz?.saturday_hours.slice(29, 31).toUpperCase() : "");

    const [satCheck, setSatCheck] = useState(currentBiz?.saturday_hours.split('').length > 20 ? true : false)

    const satCheckBox = () => {
        setSatCheck(!satCheck)
    }


    const [sunday_hours, setSunHours] = useState(currentBiz?.sunday_hours.slice(0, 5));
    const [sunday_hours_close, setSunHoursClose] = useState(currentBiz?.sunday_hours.slice(7, 13));


    const [sunOpenAmPM, setSunOpenAmPm] = useState(currentBiz?.sunday_hours.slice(5, 7).toUpperCase());
    const [sunCloseAmPm, setSunCloseAmPm] = useState(currentBiz?.sunday_hours.slice(13, 15).toUpperCase());


    const [sunday_hours_two, setSunHoursTwo] = useState(currentBiz?.sunday_hours.split(',').length > 1 ? currentBiz?.sunday_hours.slice(16, 21) : "");
    const [sunday_hours_two_close, setSunHoursTwoClose] = useState(currentBiz?.sunday_hours.split(',').length > 1 ? currentBiz?.sunday_hours.slice(23, 29) : "");


    const [sunTwoOpenAmPM, setSunTwoOpenAmPm] = useState(currentBiz?.sunday_hours.split(',').length > 1 ? currentBiz?.sunday_hours.slice(21, 23).toUpperCase() : "");
    const [sunTwoCloseAmPm, setSunTwoCloseAmPm] = useState(currentBiz?.sunday_hours.split(',').length > 1 ? currentBiz?.sunday_hours.slice(29, 31).toUpperCase() : "");

    const [sunCheck, setSunCheck] = useState(currentBiz?.sunday_hours.split('').length > 20 ? true : false)

    const sunCheckBox = () => {
        setSunCheck(!sunCheck)
    }


    const [email, setEmail] = useState(currentBiz?.email);
    const [address, setAddress] = useState(currentBiz?.address);
    const [phone_number, setPhone] = useState(currentBiz?.phone_number);
    const [business_website, setWebsite] = useState(currentBiz?.business_website);
    const [about_us, setAbout] = useState(currentBiz?.about_us);
    const [price, setPrice] = useState(currentBiz?.price);
    const [tags, setTags] = useState(currentBiz?.tags);
    const [errors, setErrors] = useState([]);
    const [renderErr, setRenderErr] = useState([])



    const nameSet = (e) => {
        setName(e.target.value)
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
        if (errors.length > 0){
            setRenderErr(errors)
            return
        };

        const updatedBusiness = {
            businessId,
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

        await dispatch(editBusinessThunk(updatedBusiness))
        history.push(`/businesses/${businessId}`)

    }

    const cancelEdit = () => {
        history.push(`/businesses/${businessId}`)
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
            err.push("Business must be less than 50 characters long. You can include further naming needs within your business description")
        }
        if (isValidPhone(phone_number) !== 12) {
            err.push("Must be a valid formatted phone number.")
        }
        if (address.length < 15) {
            err.push("Address must be at least 15 characters long")
        }
        if (address.length > 100) {
            err.push("Address must not exceed 100 characters.")
        }
        if ((monday_hours !== 'Close' && (monday_hours === "" || monday_hours_close === "" || monOpenAmPM === "" || monCloseAmPm === ""))) {
            err.push("Must enter hours for Monday if not closed.")
        }
        if ((tuesday_hours !== 'Close' && (tuesday_hours === "" || tuesday_hours_close === "" || tueOpenAmPM === "" || tueCloseAmPm === ""))) {
            err.push("Must enter hours for Tuesday if not closed.")
        }
        if ((wednesday_hours !== 'Close' && (wednesday_hours === "" || wednesday_hours_close === "" || wedOpenAmPM === "" || wedCloseAmPm === ""))) {
            err.push("Must enter hours for Wednesday if not closed.")
        }
        if ((thursday_hours !== 'Close' && (thursday_hours === "" || thursday_hours_close === "" || thurOpenAmPM === "" || thurCloseAmPm === ""))) {
            err.push("Must enter hours for Thursday if not closed.")
        }
        if ((friday_hours !== 'Close' && (friday_hours === "" || friday_hours_close === "" || friOpenAmPM === "" || friCloseAmPm === ""))) {
            err.push("Must enter hours for Friday if not closed.")
        }
        if ((saturday_hours !== 'Close' && (saturday_hours === "" || saturday_hours_close === "" || satOpenAmPM === "" || satCloseAmPm === ""))) {
            err.push("Must enter hours for Saturday if not closed.")
        }
        if ((sunday_hours !== 'Close' && (sunday_hours === "" || sunday_hours_close === "" || sunOpenAmPM === "" || sunCloseAmPm === ""))) {
            err.push("Must enter hours for Sunday if not closed.")
        }

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
    }, [name, phone_number, address, monday_hours, monday_hours_close, monOpenAmPM, monCloseAmPm, tuesday_hours, tuesday_hours_close, tueOpenAmPM, tueCloseAmPm, wednesday_hours,
        wednesday_hours_close, wedOpenAmPM, wedCloseAmPm, thursday_hours, thursday_hours_close, thurOpenAmPM, thurCloseAmPm, friday_hours, friday_hours_close, friOpenAmPM, friCloseAmPm,
        saturday_hours, saturday_hours_close, satOpenAmPM, satCloseAmPm, sunday_hours, sunday_hours_close, sunOpenAmPM, sunCloseAmPm, email, price, about_us, preview_img])



    const updateImage = (e) => {
        const file = e.target.files[0];
        setPreviewImage(file);
    }


    return (
        <div className="edit-business-main-container">
            <div className="first-inner-container-edit-business">
                <form className="bizform-form" onSubmit={onSubmit}>
                    {/* <ul>
                        {errors?.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul> */}
                    <h1>Edit Business Information</h1>
                    <div className="edit-business-name-div">
                        <input
                            className={(name.length < 6 || name.length > 50) ? "falsey-business-form-name-input" : "business-form-name-input"}
                            type='text'
                            name='name'
                            onChange={nameSet}
                            value={name}
                            placeholder="Business Name"></input>
                        {name.length < 6 ? <div className="error-below-inputs-divs">Business name must be at least 6 characters long.</div> : ""}
                        {name.length > 50 ? <div className="error-below-too-long-name">Business name must be less than 50 characters long. You can include further naming needs within your business description.</div> : ""}
                    </div>
                    <div className="edit-business-previewimage-div">
                        <p>Upload a preview image for your business.</p>
                        <input
                            type="file"
                            name='image'
                            accept="image/*"
                            onChange={updateImage}
                        />

                    </div>
                    <div className="edit-business-hours-div">
                        <p>Business Hours &#40;Must enter in xx:xxam/pm-yy:yyam/pm format&#41;</p>
                        <div className="bizform-hours-div">
                        <div className="openclose-radio-div">
                            <div>Open/Closed Monday?</div>
                            &nbsp; &nbsp;
                            <label>Open</label>
                            <input
                                type='radio'
                                onChange={() => setMonHours("")}
                                checked={monday_hours !== "Close"}>
                            </input>
                            &nbsp;
                            <label>Closed</label>
                            <input

                                type='radio'
                                onChange={() => [setMonHours("Close"), setMonOpenAmPm(""), setMonHoursClose(""), setMonCloseAmPm(""), setMonHoursTwo(""), setMonHoursTwoClose(""), setMonTwoOpenAmPm(""), setMonTwoCloseAmPm(""), setMonCheck(false)]}
                                checked={monday_hours === "Close"}>
                            </input>

                        </div>
                        {monday_hours !== "Close" ? <div className='openclosetime-div'>
                            <label>Opening time: &nbsp;</label>
                            <select
                                value={monday_hours}
                                onChange={monSet}>
                                <option>Hour</option>
                                <option value={"01:00"}>1</option>
                                <option value={"01:30"}>1:30</option>
                                <option value={"02:00"}>2</option>
                                <option value={"02:30"}>2:30</option>
                                <option value={"03:00"}>3</option>
                                <option value={"03:30"}>3:30</option>
                                <option value={"04:00"}>4</option>
                                <option value={"04:30"}>4:30</option>
                                <option value={"05:00"}>5</option>
                                <option value={"05:30"}>5:30</option>
                                <option value={"06:00"}>6</option>
                                <option value={"06:30"}>6:30</option>
                                <option value={"07:00"}>7</option>
                                <option value={"07:30"}>7:30</option>
                                <option value={"08:00"}>8</option>
                                <option value={"08:30"}>8:30</option>
                                <option value={"09:00"}>9</option>
                                <option value={"09:30"}>9:30</option>
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
                                <option value={"-01:00"}>1</option>
                                <option value={"-01:30"}>1:30</option>
                                <option value={"-02:00"}>2</option>
                                <option value={"-02:30"}>2:30</option>
                                <option value={"-03:00"}>3</option>
                                <option value={"-03:30"}>3:30</option>
                                <option value={"-04:00"}>4</option>
                                <option value={"-04:30"}>4:30</option>
                                <option value={"-05:00"}>5</option>
                                <option value={"-05:30"}>5:30</option>
                                <option value={"-06:00"}>6</option>
                                <option value={"-06:30"}>6:30</option>
                                <option value={"-07:00"}>7</option>
                                <option value={"-07:30"}>7:30</option>
                                <option value={"-08:00"}>8</option>
                                <option value={"-08:30"}>8:30</option>
                                <option value={"-09:00"}>9</option>
                                <option value={"-09:30"}>9:30</option>
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
                        {(monday_hours === 'Close' || monday_hours === 'close') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Monday hours.</label>
                            <input
                                checked={monCheck}
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onChange={monCheckBox}>
                            </input></div>}
                    </div>
                    {monCheck ? <div className='secondary-openclosetime-div'>
                        <label>Opening time: &nbsp;</label>
                        <select
                            value={monday_hours_two}
                            onChange={(e) => setMonHoursTwo(e.target.value)}>
                            <option>Hour</option>
                            <option value={"01:00"}>1</option>
                            <option value={"01:30"}>1:30</option>
                            <option value={"02:00"}>2</option>
                            <option value={"02:30"}>2:30</option>
                            <option value={"03:00"}>3</option>
                            <option value={"03:30"}>3:30</option>
                            <option value={"04:00"}>4</option>
                            <option value={"04:30"}>4:30</option>
                            <option value={"05:00"}>5</option>
                            <option value={"05:30"}>5:30</option>
                            <option value={"06:00"}>6</option>
                            <option value={"06:30"}>6:30</option>
                            <option value={"07:00"}>7</option>
                            <option value={"07:30"}>7:30</option>
                            <option value={"08:00"}>8</option>
                            <option value={"08:30"}>8:30</option>
                            <option value={"09:00"}>9</option>
                            <option value={"09:30"}>9:30</option>
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
                                <option value={"-01:00"}>1</option>
                                <option value={"-01:30"}>1:30</option>
                                <option value={"-02:00"}>2</option>
                                <option value={"-02:30"}>2:30</option>
                                <option value={"-03:00"}>3</option>
                                <option value={"-03:30"}>3:30</option>
                                <option value={"-04:00"}>4</option>
                                <option value={"-04:30"}>4:30</option>
                                <option value={"-05:00"}>5</option>
                                <option value={"-05:30"}>5:30</option>
                                <option value={"-06:00"}>6</option>
                                <option value={"-06:30"}>6:30</option>
                                <option value={"-07:00"}>7</option>
                                <option value={"-07:30"}>7:30</option>
                                <option value={"-08:00"}>8</option>
                                <option value={"-08:30"}>8:30</option>
                                <option value={"-09:00"}>9</option>
                                <option value={"-09:30"}>9:30</option>
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
                                checked={tuesday_hours !== "Close"}>
                            </input>
                            &nbsp;
                            <label>Closed</label>
                            <input

                                type='radio'
                                onChange={() => [setTuesHours("Close"), setTueOpenAmPm(""), setTuesHoursClose(""), setTueCloseAmPm(""), setTuesHoursTwo(""), setTuesHoursTwoClose(""), setTueTwoOpenAmPm(""), setTueTwoCloseAmPm(""), setTueCheck(false)]}
                                checked={tuesday_hours === "Close"}>
                            </input>

                        </div>
                        {tuesday_hours !== "Close" ? <div className='openclosetime-div'>
                            <label>Opening time:  &nbsp;</label>
                            <select
                                value={tuesday_hours}
                                onChange={tuesSet}>
                                <option>Hour</option>
                                <option value={"01:00"}>1</option>
                                <option value={"01:30"}>1:30</option>
                                <option value={"02:00"}>2</option>
                                <option value={"02:30"}>2:30</option>
                                <option value={"03:00"}>3</option>
                                <option value={"03:30"}>3:30</option>
                                <option value={"04:00"}>4</option>
                                <option value={"04:30"}>4:30</option>
                                <option value={"05:00"}>5</option>
                                <option value={"05:30"}>5:30</option>
                                <option value={"06:00"}>6</option>
                                <option value={"06:30"}>6:30</option>
                                <option value={"07:00"}>7</option>
                                <option value={"07:30"}>7:30</option>
                                <option value={"08:00"}>8</option>
                                <option value={"08:30"}>8:30</option>
                                <option value={"09:00"}>9</option>
                                <option value={"09:30"}>9:30</option>
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
                                <option value={"-01:00"}>1</option>
                                <option value={"-01:30"}>1:30</option>
                                <option value={"-02:00"}>2</option>
                                <option value={"-02:30"}>2:30</option>
                                <option value={"-03:00"}>3</option>
                                <option value={"-03:30"}>3:30</option>
                                <option value={"-04:00"}>4</option>
                                <option value={"-04:30"}>4:30</option>
                                <option value={"-05:00"}>5</option>
                                <option value={"-05:30"}>5:30</option>
                                <option value={"-06:00"}>6</option>
                                <option value={"-06:30"}>6:30</option>
                                <option value={"-07:00"}>7</option>
                                <option value={"-07:30"}>7:30</option>
                                <option value={"-08:00"}>8</option>
                                <option value={"-08:30"}>8:30</option>
                                <option value={"-09:00"}>9</option>
                                <option value={"-09:30"}>9:30</option>
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
                        {(tuesday_hours === 'Close' || tuesday_hours === 'close') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Tuesday hours.</label>
                            <input
                                checked={tueCheck}
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onChange={tueCheckBox}>
                            </input></div>}
                    </div>
                    {tueCheck ? <div className='secondary-openclosetime-div'>
                        <label>Opening time: &nbsp;</label>
                        <select
                            value={tuesday_hours_two}
                            onChange={(e) => setTuesHoursTwo(e.target.value)}>
                            <option>Hour</option>
                            <option value={"01:00"}>1</option>
                            <option value={"01:30"}>1:30</option>
                            <option value={"02:00"}>2</option>
                            <option value={"02:30"}>2:30</option>
                            <option value={"03:00"}>3</option>
                            <option value={"03:30"}>3:30</option>
                            <option value={"04:00"}>4</option>
                            <option value={"04:30"}>4:30</option>
                            <option value={"05:00"}>5</option>
                            <option value={"05:30"}>5:30</option>
                            <option value={"06:00"}>6</option>
                            <option value={"06:30"}>6:30</option>
                            <option value={"07:00"}>7</option>
                            <option value={"07:30"}>7:30</option>
                            <option value={"08:00"}>8</option>
                            <option value={"08:30"}>8:30</option>
                            <option value={"09:00"}>9</option>
                            <option value={"09:30"}>9:30</option>
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
                                <option value={"-01:00"}>1</option>
                                <option value={"-01:30"}>1:30</option>
                                <option value={"-02:00"}>2</option>
                                <option value={"-02:30"}>2:30</option>
                                <option value={"-03:00"}>3</option>
                                <option value={"-03:30"}>3:30</option>
                                <option value={"-04:00"}>4</option>
                                <option value={"-04:30"}>4:30</option>
                                <option value={"-05:00"}>5</option>
                                <option value={"-05:30"}>5:30</option>
                                <option value={"-06:00"}>6</option>
                                <option value={"-06:30"}>6:30</option>
                                <option value={"-07:00"}>7</option>
                                <option value={"-07:30"}>7:30</option>
                                <option value={"-08:00"}>8</option>
                                <option value={"-08:30"}>8:30</option>
                                <option value={"-09:00"}>9</option>
                                <option value={"-09:30"}>9:30</option>
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
                                checked={wednesday_hours !== "Close"}>
                            </input>
                            &nbsp;
                            <label>Closed</label>
                            <input

                                type='radio'
                                onChange={() => [setWedsHours("Close"), setWedOpenAmPm(""), setWedsHoursClose(""), setWedCloseAmPm(""), setWedsHoursTwo(""), setWedsHoursTwoClose(""), setWedTwoOpenAmPm(""), setWedTwoCloseAmPm(""), setWedCheck(false)]}
                                checked={wednesday_hours === "Close"}>
                            </input>

                        </div>
                        {wednesday_hours !== "Close" ? < div className='openclosetime-div'>
                            <label>Opening time: &nbsp;</label>
                            <select
                                value={wednesday_hours}
                                onChange={wedsSet}>
                                <option>Hour</option>
                                <option value={"01:00"}>1</option>
                                <option value={"01:30"}>1:30</option>
                                <option value={"02:00"}>2</option>
                                <option value={"02:30"}>2:30</option>
                                <option value={"03:00"}>3</option>
                                <option value={"03:30"}>3:30</option>
                                <option value={"04:00"}>4</option>
                                <option value={"04:30"}>4:30</option>
                                <option value={"05:00"}>5</option>
                                <option value={"05:30"}>5:30</option>
                                <option value={"06:00"}>6</option>
                                <option value={"06:30"}>6:30</option>
                                <option value={"07:00"}>7</option>
                                <option value={"07:30"}>7:30</option>
                                <option value={"08:00"}>8</option>
                                <option value={"08:30"}>8:30</option>
                                <option value={"09:00"}>9</option>
                                <option value={"09:30"}>9:30</option>
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
                                onChange={(e) => setWedsHoursClose(e.target.value)}
                                >
                                <option>Hour</option>
                                <option value={"-01:00"}>1</option>
                                <option value={"-01:30"}>1:30</option>
                                <option value={"-02:00"}>2</option>
                                <option value={"-02:30"}>2:30</option>
                                <option value={"-03:00"}>3</option>
                                <option value={"-03:30"}>3:30</option>
                                <option value={"-04:00"}>4</option>
                                <option value={"-04:30"}>4:30</option>
                                <option value={"-05:00"}>5</option>
                                <option value={"-05:30"}>5:30</option>
                                <option value={"-06:00"}>6</option>
                                <option value={"-06:30"}>6:30</option>
                                <option value={"-07:00"}>7</option>
                                <option value={"-07:30"}>7:30</option>
                                <option value={"-08:00"}>8</option>
                                <option value={"-08:30"}>8:30</option>
                                <option value={"-09:00"}>9</option>
                                <option value={"-09:30"}>9:30</option>
                                <option value={"-10:00"}>10</option>
                                <option value={"-10:30"}>10:30</option>
                                <option value={"-11:00"}>11</option>
                                <option value={"-11:30"}>11:30</option>
                                <option value={"-12:00"}>12</option>
                                <option value={"-12:30"}>12:30</option>
                            </select>
                            <select
                                value={wedCloseAmPm}
                                onChange={(e) => setWedCloseAmPm(e.target.value)}
                                >
                                <option>Am/Pm</option>
                                <option value={"AM"}>AM</option>
                                <option vale={"PM"}>PM</option>
                            </select>
                        </div> : ""}
                        {(wednesday_hours === 'Close' || wednesday_hours === 'close') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Wednesday hours.</label>
                            <input
                                className='extra-day-input-checkbox'
                                type='checkbox'
                                onClick={wedCheckBox}
                                >
                            </input></div>}

                        {wednesday_hours_two ? <div className='secondary-openclosetime-div'>
                            <label>Opening time: &nbsp;</label>
                            <select
                                value={wednesday_hours_two}
                                onChange={(e) => setWedsHoursTwo(e.target.value)}
                                >
                                <option>Hour</option>
                                <option value={"01:00"}>1</option>
                                <option value={"01:30"}>1:30</option>
                                <option value={"02:00"}>2</option>
                                <option value={"02:30"}>2:30</option>
                                <option value={"03:00"}>3</option>
                                <option value={"03:30"}>3:30</option>
                                <option value={"04:00"}>4</option>
                                <option value={"04:30"}>4:30</option>
                                <option value={"05:00"}>5</option>
                                <option value={"05:30"}>5:30</option>
                                <option value={"06:00"}>6</option>
                                <option value={"06:30"}>6:30</option>
                                <option value={"07:00"}>7</option>
                                <option value={"07:30"}>7:30</option>
                                <option value={"08:00"}>8</option>
                                <option value={"08:30"}>8:30</option>
                                <option value={"09:00"}>9</option>
                                <option value={"09:30"}>9:30</option>
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
                                    onChange={(e) => setWedsHoursTwoClose(e.target.value)}
                                    >
                                    <option>Hour</option>
                                    <option value={"-01:00"}>1</option>
                                    <option value={"-01:30"}>1:30</option>
                                    <option value={"-02:00"}>2</option>
                                    <option value={"-02:30"}>2:30</option>
                                    <option value={"-03:00"}>3</option>
                                    <option value={"-03:30"}>3:30</option>
                                    <option value={"-04:00"}>4</option>
                                    <option value={"-04:30"}>4:30</option>
                                    <option value={"-05:00"}>5</option>
                                    <option value={"-05:30"}>5:30</option>
                                    <option value={"-06:00"}>6</option>
                                    <option value={"-06:30"}>6:30</option>
                                    <option value={"-07:00"}>7</option>
                                    <option value={"-07:30"}>7:30</option>
                                    <option value={"-08:00"}>8</option>
                                    <option value={"-08:30"}>8:30</option>
                                    <option value={"-09:00"}>9</option>
                                    <option value={"-09:30"}>9:30</option>
                                    <option value={"-10:00"}>10</option>
                                    <option value={"-10:30"}>10:30</option>
                                    <option value={"-11:00"}>11</option>
                                    <option value={"-11:30"}>11:30</option>
                                    <option value={"-12:00"}>12</option>
                                    <option value={"-12:30"}>12:30</option>
                                </select>
                                <select
                                    value={wedTwoCloseAmPm}
                                    onChange={(e) => setWedTwoCloseAmPm(e.target.value)}
                                    >
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
                                checked={thursday_hours !== "Close"}>
                            </input>
                            &nbsp;
                            <label>Closed</label>
                            <input
                                type='radio'
                                onChange={() => [setThursHours("Close"), setThurOpenAmPm(""), setThursHoursClose(""), setThurCloseAmPm(""), setThursHoursTwo(""), setThursHoursTwoClose(""), setThurTwoOpenAmPm(""), setThurTwoCloseAmPm(""), setThuCheck(false)]}
                                checked={thursday_hours === "Close"}>
                            </input>
                        </div>
                        {thursday_hours !== "Close" ? <div className='openclosetime-div'>
                            <label>Opening time: &nbsp;</label>
                            <select
                                value={thursday_hours}
                                onChange={thursSet}>
                                <option>Hour</option>
                                <option value={"01:00"}>1</option>
                                <option value={"01:30"}>1:30</option>
                                <option value={"02:00"}>2</option>
                                <option value={"02:30"}>2:30</option>
                                <option value={"03:00"}>3</option>
                                <option value={"03:30"}>3:30</option>
                                <option value={"04:00"}>4</option>
                                <option value={"04:30"}>4:30</option>
                                <option value={"05:00"}>5</option>
                                <option value={"05:30"}>5:30</option>
                                <option value={"06:00"}>6</option>
                                <option value={"06:30"}>6:30</option>
                                <option value={"07:00"}>7</option>
                                <option value={"07:30"}>7:30</option>
                                <option value={"08:00"}>8</option>
                                <option value={"08:30"}>8:30</option>
                                <option value={"09:00"}>9</option>
                                <option value={"09:30"}>9:30</option>
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
                                <option value={"-01:00"}>1</option>
                                <option value={"-01:30"}>1:30</option>
                                <option value={"-02:00"}>2</option>
                                <option value={"-02:30"}>2:30</option>
                                <option value={"-03:00"}>3</option>
                                <option value={"-03:30"}>3:30</option>
                                <option value={"-04:00"}>4</option>
                                <option value={"-04:30"}>4:30</option>
                                <option value={"-05:00"}>5</option>
                                <option value={"-05:30"}>5:30</option>
                                <option value={"-06:00"}>6</option>
                                <option value={"-06:30"}>6:30</option>
                                <option value={"-07:00"}>7</option>
                                <option value={"-07:30"}>7:30</option>
                                <option value={"-08:00"}>8</option>
                                <option value={"-08:30"}>8:30</option>
                                <option value={"-09:00"}>9</option>
                                <option value={"-09:30"}>9:30</option>
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
                        {(thursday_hours === 'Close' || thursday_hours === 'close') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Thursday hours.</label>
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
                            <option value={"01:00"}>1</option>
                            <option value={"01:30"}>1:30</option>
                            <option value={"02:00"}>2</option>
                            <option value={"02:30"}>2:30</option>
                            <option value={"03:00"}>3</option>
                            <option value={"03:30"}>3:30</option>
                            <option value={"04:00"}>4</option>
                            <option value={"04:30"}>4:30</option>
                            <option value={"05:00"}>5</option>
                            <option value={"05:30"}>5:30</option>
                            <option value={"06:00"}>6</option>
                            <option value={"06:30"}>6:30</option>
                            <option value={"07:00"}>7</option>
                            <option value={"07:30"}>7:30</option>
                            <option value={"08:00"}>8</option>
                            <option value={"08:30"}>8:30</option>
                            <option value={"09:00"}>9</option>
                            <option value={"09:30"}>9:30</option>
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
                                <option value={"-01:00"}>1</option>
                                <option value={"-01:30"}>1:30</option>
                                <option value={"-02:00"}>2</option>
                                <option value={"-02:30"}>2:30</option>
                                <option value={"-03:00"}>3</option>
                                <option value={"-03:30"}>3:30</option>
                                <option value={"-04:00"}>4</option>
                                <option value={"-04:30"}>4:30</option>
                                <option value={"-05:00"}>5</option>
                                <option value={"-05:30"}>5:30</option>
                                <option value={"-06:00"}>6</option>
                                <option value={"-06:30"}>6:30</option>
                                <option value={"-07:00"}>7</option>
                                <option value={"-07:30"}>7:30</option>
                                <option value={"-08:00"}>8</option>
                                <option value={"-08:30"}>8:30</option>
                                <option value={"-09:00"}>9</option>
                                <option value={"-09:30"}>9:30</option>
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
                                checked={friday_hours !== "Close"}>
                            </input>
                            &nbsp;
                            <label>Closed</label>
                            <input
                                type='radio'
                                onChange={() => [setFriHours("Close"), setFriOpenAmPm(""), setFriHoursClose(""), setFriCloseAmPm(""), setFriHoursTwo(""), setFriHoursTwoClose(""), setFriTwoOpenAmPm(""), setFriTwoCloseAmPm(""), setFriCheck(false)]}
                                checked={friday_hours === "Close"}>
                            </input>
                        </div>
                        {friday_hours !== "Close" ? <div className='openclosetime-div'>
                            <label>Opening time: &nbsp;</label>
                            <select
                                value={friday_hours}
                                onChange={friSet}>
                                <option>Hour</option>
                                <option value={"01:00"}>1</option>
                                <option value={"01:30"}>1:30</option>
                                <option value={"02:00"}>2</option>
                                <option value={"02:30"}>2:30</option>
                                <option value={"03:00"}>3</option>
                                <option value={"03:30"}>3:30</option>
                                <option value={"04:00"}>4</option>
                                <option value={"04:30"}>4:30</option>
                                <option value={"05:00"}>5</option>
                                <option value={"05:30"}>5:30</option>
                                <option value={"06:00"}>6</option>
                                <option value={"06:30"}>6:30</option>
                                <option value={"07:00"}>7</option>
                                <option value={"07:30"}>7:30</option>
                                <option value={"08:00"}>8</option>
                                <option value={"08:30"}>8:30</option>
                                <option value={"09:00"}>9</option>
                                <option value={"09:30"}>9:30</option>
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
                                <option value={"-01:00"}>1</option>
                                <option value={"-01:30"}>1:30</option>
                                <option value={"-02:00"}>2</option>
                                <option value={"-02:30"}>2:30</option>
                                <option value={"-03:00"}>3</option>
                                <option value={"-03:30"}>3:30</option>
                                <option value={"-04:00"}>4</option>
                                <option value={"-04:30"}>4:30</option>
                                <option value={"-05:00"}>5</option>
                                <option value={"-05:30"}>5:30</option>
                                <option value={"-06:00"}>6</option>
                                <option value={"-06:30"}>6:30</option>
                                <option value={"-07:00"}>7</option>
                                <option value={"-07:30"}>7:30</option>
                                <option value={"-08:00"}>8</option>
                                <option value={"-08:30"}>8:30</option>
                                <option value={"-09:00"}>9</option>
                                <option value={"-09:30"}>9:30</option>
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

                        {(friday_hours === 'Close' || friday_hours === 'close') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Friday hours.</label>
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
                            <option value={"01:00"}>1</option>
                            <option value={"01:30"}>1:30</option>
                            <option value={"02:00"}>2</option>
                            <option value={"02:30"}>2:30</option>
                            <option value={"03:00"}>3</option>
                            <option value={"03:30"}>3:30</option>
                            <option value={"04:00"}>4</option>
                            <option value={"04:30"}>4:30</option>
                            <option value={"05:00"}>5</option>
                            <option value={"05:30"}>5:30</option>
                            <option value={"06:00"}>6</option>
                            <option value={"06:30"}>6:30</option>
                            <option value={"07:00"}>7</option>
                            <option value={"07:30"}>7:30</option>
                            <option value={"08:00"}>8</option>
                            <option value={"08:30"}>8:30</option>
                            <option value={"09:00"}>9</option>
                            <option value={"09:30"}>9:30</option>
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
                                <option value={"-01:00"}>1</option>
                                <option value={"-01:30"}>1:30</option>
                                <option value={"-02:00"}>2</option>
                                <option value={"-02:30"}>2:30</option>
                                <option value={"-03:00"}>3</option>
                                <option value={"-03:30"}>3:30</option>
                                <option value={"-04:00"}>4</option>
                                <option value={"-04:30"}>4:30</option>
                                <option value={"-05:00"}>5</option>
                                <option value={"-05:30"}>5:30</option>
                                <option value={"-06:00"}>6</option>
                                <option value={"-06:30"}>6:30</option>
                                <option value={"-07:00"}>7</option>
                                <option value={"-07:30"}>7:30</option>
                                <option value={"-08:00"}>8</option>
                                <option value={"-08:30"}>8:30</option>
                                <option value={"-09:00"}>9</option>
                                <option value={"-09:30"}>9:30</option>
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
                                checked={saturday_hours !== "Close"}>
                            </input>
                            &nbsp;
                            <label>Closed</label>
                            <input

                                type='radio'
                                onChange={() => [setSatHours("Close"), setSatOpenAmPm(""), setSatHoursClose(""), setSatCloseAmPm(""), setSatHoursTwo(""), setSatHoursTwoClose(""), setSatTwoOpenAmPm(""), setSatTwoCloseAmPm(""), setSatCheck(false)]}
                                checked={saturday_hours === "Close"}>
                            </input>
                        </div>
                        {saturday_hours !== "Close" ? <div className='openclosetime-div'>
                            <label>Opening time: &nbsp;</label>
                            <select
                                value={saturday_hours}
                                onChange={satSet}>
                                <option>Hour</option>
                                <option value={"01:00"}>1</option>
                                <option value={"01:30"}>1:30</option>
                                <option value={"02:00"}>2</option>
                                <option value={"02:30"}>2:30</option>
                                <option value={"03:00"}>3</option>
                                <option value={"03:30"}>3:30</option>
                                <option value={"04:00"}>4</option>
                                <option value={"04:30"}>4:30</option>
                                <option value={"05:00"}>5</option>
                                <option value={"05:30"}>5:30</option>
                                <option value={"06:00"}>6</option>
                                <option value={"06:30"}>6:30</option>
                                <option value={"07:00"}>7</option>
                                <option value={"07:30"}>7:30</option>
                                <option value={"08:00"}>8</option>
                                <option value={"08:30"}>8:30</option>
                                <option value={"09:00"}>9</option>
                                <option value={"09:30"}>9:30</option>
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
                                <option value={"-01:00"}>1</option>
                                <option value={"-01:30"}>1:30</option>
                                <option value={"-02:00"}>2</option>
                                <option value={"-02:30"}>2:30</option>
                                <option value={"-03:00"}>3</option>
                                <option value={"-03:30"}>3:30</option>
                                <option value={"-04:00"}>4</option>
                                <option value={"-04:30"}>4:30</option>
                                <option value={"-05:00"}>5</option>
                                <option value={"-05:30"}>5:30</option>
                                <option value={"-06:00"}>6</option>
                                <option value={"-06:30"}>6:30</option>
                                <option value={"-07:00"}>7</option>
                                <option value={"-07:30"}>7:30</option>
                                <option value={"-08:00"}>8</option>
                                <option value={"-08:30"}>8:30</option>
                                <option value={"-09:00"}>9</option>
                                <option value={"-09:30"}>9:30</option>
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

                        {(saturday_hours === 'Close' || saturday_hours === 'close') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Saturday hours.</label>
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
                            <option value={"01:00"}>1</option>
                            <option value={"01:30"}>1:30</option>
                            <option value={"02:00"}>2</option>
                            <option value={"02:30"}>2:30</option>
                            <option value={"03:00"}>3</option>
                            <option value={"03:30"}>3:30</option>
                            <option value={"04:00"}>4</option>
                            <option value={"04:30"}>4:30</option>
                            <option value={"05:00"}>5</option>
                            <option value={"05:30"}>5:30</option>
                            <option value={"06:00"}>6</option>
                            <option value={"06:30"}>6:30</option>
                            <option value={"07:00"}>7</option>
                            <option value={"07:30"}>7:30</option>
                            <option value={"08:00"}>8</option>
                            <option value={"08:30"}>8:30</option>
                            <option value={"09:00"}>9</option>
                            <option value={"09:30"}>9:30</option>
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
                                <option value={"-01:00"}>1</option>
                                <option value={"-01:30"}>1:30</option>
                                <option value={"-02:00"}>2</option>
                                <option value={"-02:30"}>2:30</option>
                                <option value={"-03:00"}>3</option>
                                <option value={"-03:30"}>3:30</option>
                                <option value={"-04:00"}>4</option>
                                <option value={"-04:30"}>4:30</option>
                                <option value={"-05:00"}>5</option>
                                <option value={"-05:30"}>5:30</option>
                                <option value={"-06:00"}>6</option>
                                <option value={"-06:30"}>6:30</option>
                                <option value={"-07:00"}>7</option>
                                <option value={"-07:30"}>7:30</option>
                                <option value={"-08:00"}>8</option>
                                <option value={"-08:30"}>8:30</option>
                                <option value={"-09:00"}>9</option>
                                <option value={"-09:30"}>9:30</option>
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
                                checked={sunday_hours !== "Close"}>
                            </input>
                            &nbsp;
                            <label>Closed</label>
                            <input
                                type='radio'
                                onChange={() => [setSunHours("Close"), setSunOpenAmPm(""), setSunHoursClose(""), setSunCloseAmPm(""), setSunHoursTwo(""), setSunHoursTwoClose(""), setSunTwoOpenAmPm(""), setSunTwoCloseAmPm(""), setSunCheck(false)]}
                                checked={sunday_hours === "Close"}>
                            </input>
                        </div>
                        {sunday_hours !== "Close" ? <div className='openclosetime-div'>
                            <label>Opening time: &nbsp;</label>
                            <select
                                value={sunday_hours}
                                onChange={sunSet}>
                                <option>Hour</option>
                                <option value={"01:00"}>1</option>
                                <option value={"01:30"}>1:30</option>
                                <option value={"02:00"}>2</option>
                                <option value={"02:30"}>2:30</option>
                                <option value={"03:00"}>3</option>
                                <option value={"03:30"}>3:30</option>
                                <option value={"04:00"}>4</option>
                                <option value={"04:30"}>4:30</option>
                                <option value={"05:00"}>5</option>
                                <option value={"05:30"}>5:30</option>
                                <option value={"06:00"}>6</option>
                                <option value={"06:30"}>6:30</option>
                                <option value={"07:00"}>7</option>
                                <option value={"07:30"}>7:30</option>
                                <option value={"08:00"}>8</option>
                                <option value={"08:30"}>8:30</option>
                                <option value={"09:00"}>9</option>
                                <option value={"09:30"}>9:30</option>
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
                                <option value={"-01:00"}>1</option>
                                <option value={"-01:30"}>1:30</option>
                                <option value={"-02:00"}>2</option>
                                <option value={"-02:30"}>2:30</option>
                                <option value={"-03:00"}>3</option>
                                <option value={"-03:30"}>3:30</option>
                                <option value={"-04:00"}>4</option>
                                <option value={"-04:30"}>4:30</option>
                                <option value={"-05:00"}>5</option>
                                <option value={"-05:30"}>5:30</option>
                                <option value={"-06:00"}>6</option>
                                <option value={"-06:30"}>6:30</option>
                                <option value={"-07:00"}>7</option>
                                <option value={"-07:30"}>7:30</option>
                                <option value={"-08:00"}>8</option>
                                <option value={"-08:30"}>8:30</option>
                                <option value={"-09:00"}>9</option>
                                <option value={"-09:30"}>9:30</option>
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

                        {(sunday_hours === 'Close' || sunday_hours === 'close') ? "" : <div className='div-containing-secondary-check'><label>Click checkbox for secondary Sunday hours.</label>
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
                            <option value={"01:00"}>1</option>
                            <option value={"01:30"}>1:30</option>
                            <option value={"02:00"}>2</option>
                            <option value={"02:30"}>2:30</option>
                            <option value={"03:00"}>3</option>
                            <option value={"03:30"}>3:30</option>
                            <option value={"04:00"}>4</option>
                            <option value={"04:30"}>4:30</option>
                            <option value={"05:00"}>5</option>
                            <option value={"05:30"}>5:30</option>
                            <option value={"06:00"}>6</option>
                            <option value={"06:30"}>6:30</option>
                            <option value={"07:00"}>7</option>
                            <option value={"07:30"}>7:30</option>
                            <option value={"08:00"}>8</option>
                            <option value={"08:30"}>8:30</option>
                            <option value={"09:00"}>9</option>
                            <option value={"09:30"}>9:30</option>
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
                                <option value={"-01:00"}>1</option>
                                <option value={"-01:30"}>1:30</option>
                                <option value={"-02:00"}>2</option>
                                <option value={"-02:30"}>2:30</option>
                                <option value={"-03:00"}>3</option>
                                <option value={"-03:30"}>3:30</option>
                                <option value={"-04:00"}>4</option>
                                <option value={"-04:30"}>4:30</option>
                                <option value={"-05:00"}>5</option>
                                <option value={"-05:30"}>5:30</option>
                                <option value={"-06:00"}>6</option>
                                <option value={"-06:30"}>6:30</option>
                                <option value={"-07:00"}>7</option>
                                <option value={"-07:30"}>7:30</option>
                                <option value={"-08:00"}>8</option>
                                <option value={"-08:30"}>8:30</option>
                                <option value={"-09:00"}>9</option>
                                <option value={"-09:30"}>9:30</option>
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

                    <div className="edit-business-email-div">
                        <input
                            className={!isValidEmail(email) ? "falsey-business-form-email-input" : "business-form-email-input"}
                            name='email'
                            type='text'
                            onChange={emailSet}
                            value={email}></input>
                        {!isValidEmail(email) ? <div className="error-below-inputs-divs"> Must be a valid Email address. </div> : ""}
                    </div>
                    <div className="edit-business-address-div">
                        <input
                            className={(address.length < 15 || address.length > 100) ? "falsey-business-form-address-input" : "business-form-address-input"}
                            name='address'
                            type='text'
                            onChange={addressSet}
                            value={address}></input>
                        {address.length < 15 ? <div className="error-below-inputs-divs"> Address must be at least 15 characters long. </div> : ""}
                        {address.length > 100 ? <div className="error-below-inputs-divs"> Address cannot exceed 100 characters. </div> : ""}
                    </div>
                    <div className="edit-business-phone-div">
                        <input
                            className={isValidPhone(phone_number) !== 12 ? "falsey-business-form-phone-input" : "business-form-phone-input"}
                            name='phone_number'
                            type='text'
                            onChange={phoneSet}
                            value={phone_number}></input>
                        {isValidPhone(phone_number) !== 12 ? <div className="error-below-inputs-divs"> Must be a valid formatted phone number. </div> : ""}
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
                            className={about_us.length < 30 ? "falsey-business-form-aboutus-input" : "business-form-aboutus-input"}
                            type='text'
                            name='aboutus'
                            onChange={(e) => setAbout(e.target.value)}
                            value={about_us}>
                        </textarea>
                        {about_us.length < 30 ? <div className="error-below-inputs-divs"> Description must be at least 30 characters. </div> : ""}
                    </div>
                    <div className="edit-business-price-input-div">
                        <input
                            required={true}
                            placeholder="1-5 $'s"
                            className={(price < 1 || price > 5) ? "falsey-business-form-price-input" : "business-form-price-input"}
                            type='number'
                            name='price'
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}>
                        </input>
                        {(price < 1 || price > 5) ? <div className="error-below-inputs-divs"> Price must be between 1 and 5. </div> : ""}
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
                    <ul>
                    {renderErr?.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                     </ul>
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
