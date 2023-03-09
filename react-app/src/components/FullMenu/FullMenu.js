import './FullMenu.css'
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getBusinessByIdThunk } from '../../store/business';
// import { deleteMenuItemThunk } from '../../store/business';

const FullMenu = () => {
    const dispatch = useDispatch();
    const { businessId } = useParams();


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



    return (
        <div className='full-menu-primary-container'>
            <h1>Menu for <Link className='biz-name-link' to={`/businesses/${businessInfoObj?.id}`}>{businessInfoObj?.name}</Link></h1>
            {menuArr?.map((menu) => {
                return <div className='outer-fullmenu-div' key={menu.id}>
                    <p className='outer-category'>{menu.category}</p>
                    {menu.menu_items?.map((menuitem) => {
                        return <div key={menuitem.id} className='inner-fullmenu-div'> {menuitem.item_name}, {menuitem.description}, ${menuitem.price}</div>
                    })}
                </div>
            }
            )}
            <div><Link to={`/businesses/${businessInfoObj?.id}`}><button className='return-biz-button'>Return to business</button> </Link></div>
        </div>
    )
}

export default FullMenu;
