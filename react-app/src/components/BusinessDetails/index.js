import { useParams, useHistory, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBusinessByIdThunk, deleteBusinessThunk } from "../../store/business";
import './BusinessDetails.css'


const BusinessDetails = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { businessId } = useParams();

    const sessionUser = useSelector((state) => state.session.user);

    const businessInfoObj = useSelector((state) => {
        return state.businessReducer.businesses[businessId];
    });

    useEffect(() => {
        dispatch(getBusinessByIdThunk(businessId));
    }, [dispatch, businessId]);

    const deleteABusiness = (e, id) => {
        e.preventDefault();
        dispatch(deleteBusinessThunk(id))
        return setTimeout(function () { history.push('/businesses'); }, 10);
    }


    return (
        <>
            <div className="main-container-business-details">
                <div className="delete-edit-business-buttons-div">
                    <div>
                        {sessionUser &&
                            (sessionUser.id === businessInfoObj?.user_id && (
                                <Link exact="true" to={`/edit/businesses/${businessId}`}>
                                    <button className="edit-business-button">
                                        Edit Business
                                    </button>
                                </Link>
                            ))}
                    </div>
                    <div>
                        {sessionUser &&
                            (sessionUser.id === businessInfoObj?.user_id ? (
                                <button
                                    className="business-delete-button"
                                    onClick={(event) => deleteABusiness(event, businessId)}
                                >
                                    {" "}
                                    Delete Business{" "}
                                </button>
                            ) : null)}
                    </div>

                </div>
                <div className="bannerimage" style={{ backgroundImage: `url(${businessInfoObj?.preview_img})` }}>
                    <h1 className="business-name-h1"> {businessInfoObj?.name} </h1>
                    <h2 className="business-name-h2"> {businessInfoObj?.tags} </h2>
                </div>
                <div className="contact-info-div">
                    <h2>Location & Hours</h2>
                    <div className="daily-hours-div">
                        <div className="address-single-div">
                            {businessInfoObj?.address}
                        </div>
                        <ul className="contact-info-ul">
                            <li className="hours-li">Mon  &nbsp; &nbsp; &nbsp;{businessInfoObj?.monday_hours}</li>
                            <li className="hours-li">Tue  &nbsp; &nbsp; &nbsp;{businessInfoObj?.tuesday_hours}</li>
                            <li className="hours-li">Wed  &nbsp; &nbsp; &nbsp;{businessInfoObj?.wednesday_hours}</li>
                            <li className="hours-li">Thu  &nbsp; &nbsp; &nbsp;{businessInfoObj?.thursday_hours}</li>
                            <li className="hours-li">Fri  &nbsp; &nbsp; &nbsp;{businessInfoObj?.friday_hours}</li>
                            <li className="hours-li">Sat  &nbsp; &nbsp; &nbsp;{businessInfoObj?.saturday_hours}</li>
                            <li className="hours-li">Sun  &nbsp; &nbsp; &nbsp;{businessInfoObj?.sunday_hours}</li>
                            <br></br>

                        </ul>

                    </div>
                    <div className="details-contact-info-div">
                        <h2 className="contact-info-h2">Contact Information</h2>
                        <hr />
                        <ul className="contact-info-ul">
                            <li>Website: <Link>{businessInfoObj?.business_website}</Link></li>
                            <hr className="contact-info-ul-hr" />
                            <li>Phone Number: {businessInfoObj?.phone_number}</li>
                            <hr className="contact-info-ul-hr" />
                            <li>Email Address: {businessInfoObj?.email}</li>
                            <hr className="contact-info-ul-hr" />
                            <li>Address: {businessInfoObj?.address}</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="services-div">
                <h2>TESTING SERVICES</h2>
                <p>{businessInfoObj?.services}</p>
            </div>
            <div className="where-reviews-will-go-probably">
            </div>
        </>
    )
}

export default BusinessDetails;
