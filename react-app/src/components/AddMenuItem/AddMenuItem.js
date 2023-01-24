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


    const menuArr = Object.values(businessInfoObj?.menus)

    useEffect(() => {
        dispatch(getBusinessByIdThunk(businessId));
    }, [dispatch, businessId]);



    // console.log(menuArr)

    function addDefaultSrc(ev) {
        ev.target.src = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'
    }

    return (
        <div>
            <h1>Which menu would you like to edit?</h1>
            {menuArr?.map((menu) => {
                return <Link key={menu.id} ><div><img onError={addDefaultSrc} className='additemtomenu-img' src={menu.menu_image} /> {menu.category}
                    <Link to={`/create/menu/${menu.id}`}><button>Add Items</button></Link>

                    <Link to={`/businesses/${businessId}/menu/items/${menu.id}`}><button>Remove Items</button></Link></div>
                </Link>
            }
            )}

        </div>
    )
}

export default AddMenuItem;
