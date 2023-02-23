import './RemoveMenuItem.css'
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { getBusinessByIdThunk } from '../../store/business';
import { deleteMenuItemThunk } from '../../store/business';
// import EditMenuItem from '../EditMenuItem/EditMenuItem';

const RemoveMenuItem = () => {
    const dispatch = useDispatch();
    const { businessId, menuId } = useParams();
    const history = useHistory();

    console.log(businessId, menuId)


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
            // console.log("SUBMENU", submenu)
            return submenu.id === +menuId
        })
    }


    useEffect(() => {
        dispatch(getBusinessByIdThunk(businessId));
    }, [dispatch, businessId]);



    // console.log(menuArr)
    // console.log("SPECIFIC MENU ARR", specificMenuArr)

    // function addDefaultSrc(ev) {
    //     ev.target.src = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'
    // }

    const onClick = (e, id) => {
        e.preventDefault();

        dispatch(deleteMenuItemThunk(id))

        return setTimeout(function () { history.push(`/businesses/${businessId}`); }, 10);
    }

    return (
        <div className='menu-item-edit-main-container'>
            <h1>Which menu item would you like to edit?</h1>
            {specificMenuArr?.map((menu) => {
                return menu.menu_items?.map((menuitem) => {
                    // { console.log("MENU ITEM", menuitem) }
                    return <div className='mapped-menuitems-div'>
                        <div className='prefix-label-div'>Name:</div> {menuitem.item_name}  &nbsp;<div className='prefix-label-div'>Description:</div> {menuitem.description}   &nbsp;<div className='prefix-label-div'>Price:</div> ${menuitem.price}
                        <div className='two-buttons-div-menuitems'>
                            <button className='delete-item-button' onClick={(event => onClick(event, menuitem.id))}>Delete</button>
                            <Link to={`/businesses/${businessId}/menuedit/item/${menuitem.id}`}><button className='edit-item-button'>Edit Item</button></Link>
                            {/* <button onClick={<EditMenuItem />} className='edit-item-button'>Edit Item</button> */}
                        </div>
                    </div>
                })
            }
            )}
        </div>
    )
}

export default RemoveMenuItem;
