import { useParams, useHistory } from "react-router-dom";
import { deleteBusinessThunk } from "../../store/business";
import { useDispatch } from "react-redux";
// import { useState } from 'react';
import './ConfirmDelete.css'

const ConfirmDelete = ({ confirm, setconfirm }) => {
    const dispatch = useDispatch();
    const { businessId } = useParams();
    const history = useHistory();


    const deleteABusiness = (e, id) => {
        e.preventDefault();


        dispatch(deleteBusinessThunk(id))
        return setTimeout(function () { history.push('/businesses'); }, 10);
    }

    return (
        <div className="main-modal-container-confirm-delete">
            <div className="inside-confirm-delete-div">
                <p className="p-on-confirm-delete-modal">Are you SURE you want to delete your business? This will destroy all data associated, and reviews permanently.</p>
            <div className="two-confirm-delete-buttons-div">
                <button className="confirm-delete-buttons" onClick={(event) => deleteABusiness(event, businessId)}>Yes</button>
                <button className="confirm-delete-buttons" onClick={setconfirm}>No</button>
            </div>
            </div>
        </div>
    )
}

export default ConfirmDelete;
