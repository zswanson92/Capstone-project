import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import Geocode from "react-geocode";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllBusinessesThunk } from '../../store/business';

const HomeMap = () => {
  const dispatch = useDispatch()
  Geocode.setApiKey("AIzaSyCyXndDAAzF_I8RQZ2B4zkJk8PLkqa2U8Y");

  const [locations, setLocations] = useState([])

  const businessesObj = useSelector(state => {
    return state
  })


  const aBusiness = Object.values(businessesObj.businessReducer.businesses)
  // console.log("@@@@@", aBusiness)

  useEffect(() => {
    dispatch(getAllBusinessesThunk())

  }, [dispatch], locations.length)


  let addressArr = []

  aBusiness.forEach(obj => addressArr.push({ name: `${obj.name}`, location: `${obj.address}` }))

  // console.log("ADDY ARRAY", addressArr)

  addressArr.forEach((ele) => {
    Geocode.fromAddress(ele?.location).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        // console.log("TESTTESTESTEST!!!!!!", lat, lng);
        // geoTestArr.push({'name': ele.name, location: {'lat': lat, 'lng': lng }})
        locations.push({'name': ele.name, location: {'lat': lat, 'lng': lng }})
      },
      (error) => {
        console.error(error);
      }
    );
  })


  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 45.5152, lng: -122.6784
  }

  // const pipsCenter = {
  //   lat: 45.5483793, lng: -122.6138045
  // }

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyCyXndDAAzF_I8RQZ2B4zkJk8PLkqa2U8Y'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        // onClick={onClick}
      >
        {/* <Marker key={'pips'} position={pipsCenter} /> */}
        {locations?.map((item) => {
          return (
            <Marker key={item.name} position={item.location} />
          )
        })}
      </GoogleMap>
    </LoadScript>
  )
}

export default HomeMap
