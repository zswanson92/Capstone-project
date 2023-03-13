import './RemoveMenuItem.css'
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { getBusinessByIdThunk } from '../../store/business';
import { deleteMenuItemThunk } from '../../store/business';

const RemoveMenuItem = () => {
    const dispatch = useDispatch();
    const { businessId, menuId } = useParams();
    const history = useHistory();

    const businessInfoObj = useSelector((state) => {
        return state.businessReducer.businesses[businessId];
    });


    let menuArr;

    if (businessInfoObj) {
        menuArr = Object.values(businessInfoObj?.menus)
    }


    let specificMenuArr

    if (menuArr) {
        specificMenuArr = menuArr.filter((submenu) => {
            return submenu.id === +menuId
        })
    }


    useEffect(() => {
        dispatch(getBusinessByIdThunk(businessId));
    }, [dispatch, businessId]);


    const onClick = (e, id) => {
        e.preventDefault();

        dispatch(deleteMenuItemThunk(id))

        return setTimeout(function () { history.push(`/businesses/${businessId}`); }, 10);
    }

    const goToBusiness = () => {
        return history.push(`/businesses/${businessId}`)
    }

    const goBack = () => {
        return history.goBack()
    }

    return (
        <div className='menu-item-edit-main-container'>
            <h1>Which item from the {specificMenuArr[0]?.category} menu would you like to edit?</h1>
            {specificMenuArr?.map((menu) => {
                return menu.menu_items?.map((menuitem) => {
                    return <div className='mapped-menuitems-div'>
                        <div className='prefix-label-div'>{menuitem.menu_item_image ? <img className='removeitem-item-img' src={menuitem.menu_item_image} alt="Loading..."/> : ""} Name:</div> {menuitem.item_name}  &nbsp;<div className='prefix-label-div'>Description:</div> {menuitem.description}   &nbsp;<div className='prefix-label-div'>Price:</div> ${menuitem.price}
                        <div className='two-buttons-div-menuitems'>
                            <button className='delete-item-button' onClick={(event => onClick(event, menuitem.id))}>Delete</button>
                            <Link to={`/businesses/${businessId}/menuedit/item/${menuitem.id}`}><button className='edit-item-button'>Edit Item</button></Link>
                        </div>
                    </div>
                })
            }
            )}
            <div className='goback-returnbiz-button-div'>
            <button className='goback-button' onClick={() => goBack()}>Back to Menu Selection</button>
            <button className='returntobiz-button' onClick={() => goToBusiness()}>Return to Business</button>
            </div>
        </div>
    )
}

export default RemoveMenuItem;
