import './DeleteMenu.css'
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { getBusinessByIdThunk } from '../../store/business';
import { deleteMenuThunk } from '../../store/business';

const DeleteMenu = () => {
    const dispatch = useDispatch();
    const { businessId } = useParams();
    const history = useHistory();

    const businessInfoObj = useSelector((state) => {
        return state.businessReducer.businesses[businessId];
    });


    let menuArr

    if(businessInfoObj){
        menuArr = Object.values(businessInfoObj?.menus)
    }


    useEffect(() => {
        dispatch(getBusinessByIdThunk(businessId));
    }, [dispatch, businessId]);




    function addDefaultSrc(ev) {
        ev.target.src = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'
    }

    const onClick = (e, id) => {
        e.preventDefault();

        dispatch(deleteMenuThunk(id))

        return setTimeout(function () { history.push(`/businesses/${businessId}`); }, 10);
    }

    return (
        <div className='deletemenu-main-container'>
            <h1>Which menu would you like to delete?</h1>
            {menuArr?.map((menu) => {
                return <div key={menu.id} className='deletemenu-div'><img onError={addDefaultSrc} className='additemtomenu-img' src={menu.menu_image} alt='Loading...' /> {menu.category}
                <button className='menu-delete-button' onClick={(event) => onClick(event, menu.id)}>Delete</button></div>
            }
            )}
        </div>
    )
}

export default DeleteMenu;
