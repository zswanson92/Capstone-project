import './FullMenu.css'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getBusinessByIdThunk } from '../../store/business'

const FullMenu = () => {
  const dispatch = useDispatch()
  const { businessId } = useParams()

  const [disableCheck, setDisableCheck] = useState(false)

  const businessInfoObj = useSelector(state => {
    return state.businessReducer.businesses[businessId]
  })

  let menuArr;

  if (businessInfoObj) {
    menuArr = Object.values(businessInfoObj?.menus)
  }


  useEffect(() => {
    dispatch(getBusinessByIdThunk(businessId))
  }, [dispatch, disableCheck, businessId])

  function addDefaultSrc(ev) {
    ev.target.src = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'
}



function enlargeImg(id) {
    let img = document.getElementById(id);

    if (img.className.match(/\bactive\b/)) {
      img.classList.remove("active");
      setDisableCheck(true)
    } else {
      img.classList.add("active");
      setDisableCheck(false)
    }
  }


  function xClick(){
    let img = document.getElementsByClassName("active");
    if (img) {
        setDisableCheck(true)
        img[0].classList.remove("active");
      }
  }


  let xTruth = document.getElementsByClassName("active").length > 0 ? false : true


  return (
    <div className='full-menu-primary-container'>
      <h1>
        Menu for{' '}
        <Link
          className='biz-name-link'
          to={`/businesses/${businessInfoObj?.id}`}
        >
          {businessInfoObj?.name}
        </Link>
      </h1>
      {menuArr?.map(menu => {
        return (
          <div className='outer-fullmenu-div' key={menu.id}>
            <p className='outer-category'>{menu.category}</p>
            {menu.menu_items?.map(menuitem => {
              return (
                <div key={menuitem.id} className='inner-fullmenu-div'>
                  {menuitem.menu_item_image ? <div><div onClick={() => enlargeImg(menuitem.id)}><img  id={menuitem.id} className='fullmenu-item-img' onError={addDefaultSrc} src={menuitem.menu_item_image} alt="Loading..."/></div><button hidden={xTruth} disabled={disableCheck} onClick={() => xClick()} className='textxbutt'>x</button></div> : <div><img src='https://cdn-icons-png.flaticon.com/512/168/168812.png' alt='Loading...'/></div>}
                  {' '}
                  {menuitem.item_name}:
                  <br/>
                  {menuitem.description} - $
                  {menuitem.price}
                </div>
              )
            })}
          </div>
        )
      })}
      <div>
        <Link to={`/businesses/${businessInfoObj?.id}`}>
          <button className='return-biz-button'>Return to business</button>{' '}
        </Link>
      </div>
    </div>
  )
}

export default FullMenu
