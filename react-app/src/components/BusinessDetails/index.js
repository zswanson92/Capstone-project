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
        <div className="main-container-business-details">
            <h1> {businessInfoObj?.name} </h1>
            <div className="contact-info-div">
                <div className="daily-hours-div">
                    <h2>Hours of Operation</h2>
                    <ul>
                        <li>Monday: {businessInfoObj?.monday_hours}</li>
                        <li>Tuesday: {businessInfoObj?.tuesday_hours}</li>
                        <li>Wednesday: {businessInfoObj?.wednesday_hours}</li>
                        <li>Thursday: {businessInfoObj?.thursday_hours}</li>
                        <li>Friday: {businessInfoObj?.friday_hours}</li>
                        <li>Saturday: {businessInfoObj?.saturday_hours}</li>
                        <li>Sunday: {businessInfoObj?.sunday_hours}</li>
                    </ul>
                </div>

                <div className="details-contact-info-div">
                    <h2>Contact Information</h2>
                    <ul>
                        <li>Address: {businessInfoObj?.address}</li>
                        <li>Phone Number: {businessInfoObj?.phone_number}</li>
                        <li>Email Address: {businessInfoObj?.email}</li>
                        <li>Website: <Link>{businessInfoObj?.business_website}</Link></li>
                    </ul>
                </div>
                <div>
                    <h2>TESTING SERVICES</h2>
                    <p>{businessInfoObj?.services}</p>
                </div>

                <div className="question-buttons">
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
                    <div className="where-reviews-will-go-probably">



                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessDetails;
