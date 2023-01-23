import './DeleteMenu.css'
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
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


    let menuArr = Object.values(businessInfoObj?.menus)

    useEffect(() => {
        dispatch(getBusinessByIdThunk(businessId));
    }, [dispatch, businessId]);



    console.log(menuArr)

    function addDefaultSrc(ev) {
        ev.target.src = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'
    }

    const onClick = (e, id) => {
        e.preventDefault();

        dispatch(deleteMenuThunk(id))

        return setTimeout(function () { history.push(`/businesses/${businessId}`); }, 10);
    }

    return (
        <div>
            <h1>Which menu would you like to delete?</h1>
            {menuArr?.map((menu) => {
                return <Link key={menu.id} to={`/create/menu/${menu.id}`}><div><img onError={addDefaultSrc} className='additemtomenu-img' src={menu.menu_image} /> {menu.category}
                <button onClick={(event) => onClick(event, menu.id)}>Delete</button></div></Link>
            }
            )}
        </div>
    )
}

export default DeleteMenu;
