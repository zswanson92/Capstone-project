import './FullMenu.css'
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { getBusinessByIdThunk } from '../../store/business';
// import { deleteMenuItemThunk } from '../../store/business';

const FullMenu = () => {
    const dispatch = useDispatch();
    const { businessId, menuId } = useParams();
    const history = useHistory();

    console.log(businessId, menuId)


    const businessInfoObj = useSelector((state) => {
        return state.businessReducer.businesses[businessId];
    });


    let menuArr;

    if(businessInfoObj){
        menuArr = Object.values(businessInfoObj?.menus)
    }


    useEffect(() => {
        dispatch(getBusinessByIdThunk(businessId));
    }, [dispatch, businessId]);



    function addDefaultSrc(ev) {
        ev.target.src = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'
    }


    return (
        <div className='full-menu-primary-container'>
            <h1>Menu for <Link className='biz-name-link' to={`/businesses/${businessInfoObj?.id}`}>{businessInfoObj?.name}</Link></h1>
            {menuArr?.map((menu) => {
                return <div className='outer-fullmenu-div'>
                    <p className='outer-category'>{menu.category}</p>
                    {menu.menu_items?.map((menuitem) => {
                        { console.log("MENU ITEM", menuitem) }
                        return <div className='inner-fullmenu-div'>{menuitem.item_name}, {menuitem.description}, ${menuitem.price}</div>
                    })}
                </div>
            }
            )}
            <div><Link to={`/businesses/${businessInfoObj?.id}`}><button className='return-biz-button'>Return to business</button> </Link></div>
        </div>
    )
}

export default FullMenu;
