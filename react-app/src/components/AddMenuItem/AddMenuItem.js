import './AddMenuItem.css'
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getBusinessByIdThunk } from '../../store/business';

const AddMenuItem = () => {
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



    function addDefaultSrc(ev) {
        ev.target.src = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'
    }

    return (
        <div className='primary-container-menuedit'>
            <h1>Which menu would you like to edit?</h1>
            {menuArr?.map((menu) => {
                return <div className='mapped-menuedit-div' key={menu.id} ><div className='mapped-menuedit-div'><img onError={addDefaultSrc} className='additemtomenu-img' src={menu.menu_image} alt='Loading...'/> {menu.category}
                    <Link to={`/create/menu/${menu.id}`}><button className='add-item-button'>Add Item</button></Link>

                    <Link to={`/businesses/${businessId}/menu/items/${menu.id}`}><button className='edit-remove-item-button'>Edit/Remove Items</button></Link>
                    <Link to={`/menuedit/${menu.id}`}><button className='edit-menu-button'>Edit Menu</button></Link>
                </div>
                </div>
            }
            )}
            <div className='return-to-biz-button-div'>
            <Link to={`/businesses/${businessId}`}><button className='edit-remove-item-button'>Go back to business</button></Link>
            </div>
        </div>
    )
}

export default AddMenuItem;
