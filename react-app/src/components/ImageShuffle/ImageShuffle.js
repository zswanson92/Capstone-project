import { useEffect, useState, useCallback, useMemo } from 'react';
import { getAllBusinessesThunk } from '../../store/business';
import { useSelector, useDispatch } from 'react-redux';
// import './SplashPage.css'






const ImageShuffle = () => {
    const dispatch = useDispatch();

    const businessesObj = useSelector(state => {
        return state
    })

    const aBusiness = Object.values(businessesObj.businessReducer.businesses)

    const [arrTitles, setArrTitles] = useState("https://images4.alphacoders.com/150/1506.jpg");

    let imgs = useMemo(() => ['https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1',
    'https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000',
    'https://images3.alphacoders.com/295/2957.jpg',
    'https://images7.alphacoders.com/421/421534.jpg',
    'https://images4.alphacoders.com/150/1506.jpg',
    'https://images.alphacoders.com/153/153783.jpg',
    'https://images2.alphacoders.com/970/97040.jpg',
    'https://images4.alphacoders.com/151/1514.jpg',
    'https://images.alphacoders.com/337/33751.jpg',
    'https://images.alphacoders.com/997/9973.jpg',
    'https://images4.alphacoders.com/988/988128.jpg'
    ], [])

    aBusiness?.map((business) => {
        return imgs.push(business.preview_img)
    })

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * imgs.length);
        setArrTitles(imgs[index]);
    }, [imgs]);

    useEffect(() => {
        dispatch(getAllBusinessesThunk());

        const intervalID = setInterval(shuffle, 5000);
        return () => clearInterval(intervalID);
    }, [shuffle])


    return (
        <div className='splash-image-div'>
                <img className='splash-header-img' src={arrTitles} alt='' />
        </div>
    )

}

export default ImageShuffle;
