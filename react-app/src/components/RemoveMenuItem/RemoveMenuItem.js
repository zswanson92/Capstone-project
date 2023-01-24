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

    console.log(businessId, menuId)


    const businessInfoObj = useSelector((state) => {
        return state.businessReducer.businesses[businessId];
    });


    let menuArr = Object.values(businessInfoObj?.menus)

    let specificMenuArr = menuArr.filter((submenu) => {
        console.log("SUBMENU", submenu)
        return submenu.id === +menuId
    })

    useEffect(() => {
        dispatch(getBusinessByIdThunk(businessId));
    }, [dispatch, businessId]);



    console.log(menuArr)
    console.log("SPECIFIC MENU ARR", specificMenuArr)

    function addDefaultSrc(ev) {
        ev.target.src = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'
    }

    const onClick = (e, id) => {
        e.preventDefault();

        dispatch(deleteMenuItemThunk(id))

        return setTimeout(function () { history.push(`/businesses/${businessId}`); }, 10);
    }

    return (
        <div>
            <h1>Which menu item would you like to edit?</h1>
            {specificMenuArr?.map((menu) => {
                return menu.menu_items?.map((menuitem) => {
                    {console.log("MENU ITEM", menuitem)}
                    return <div>
                        {menuitem.item_name}, {menuitem.description} - ${menuitem.price}
                        <button onClick={(event => onClick(event, menuitem.id))}>Delete</button>
                        <Link to={`/menuedit/item/${menuitem.id}`}><button>Edit Item</button></Link>
                    </div>
                })
                // <Link key={menu.id} to={`/create/menu/${menu.id}`}><div><img onError={addDefaultSrc} className='additemtomenu-img' src={menu.menu_image} /> {menu.category}
                // <button onClick={(event) => onClick(event, menu.id)}>Delete</button></div></Link>
            }
            )}
        </div>
    )
}

export default RemoveMenuItem;
