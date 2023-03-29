import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import Geocode from "react-geocode";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllBusinessesThunk } from '../../store/business';

const BusinessDetailsMap = ({ addy }) => {
  const dispatch = useDispatch()

  const apiKey = useSelector(state => state.mapReducer.key)
  Geocode.setApiKey(apiKey);
  const [locations, setLocations] = useState([])
  const [clickedMark, setClickedMark] = useState(null);

  const handleClickedMark = (marker) => {
    if (marker === clickedMark) {
      return;
    }
    setClickedMark(marker);
  };

  const businessesObj = useSelector(state => {
    return state
  })


  const aBusiness = Object.values(businessesObj.businessReducer.businesses)




  useEffect(() => {
    dispatch(getAllBusinessesThunk())

  }, [dispatch], locations.length)


  let addressArr = []

  aBusiness.forEach(obj => addressArr.push({ name: `${obj.name}`, location: `${obj.address}` }))


  addressArr.forEach((ele) => {
    Geocode.fromAddress(ele?.location).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;

        locations.push({ 'name': ele.name, location: { 'lat': lat, 'lng': lng } })
      },
      (error) => {
        console.error(`address for ${ele?.name} cannot be found.`);
      }
    );
  })


  const mapStyles = {
    height: "100vh",
    width: "100%"
  };


  let addyLng;
  let addyLat;

  if(addy){
    Geocode.fromAddress(addy).then(
      (response) => {
        console.log("THIS IS RESPONSE", response)
        const {lat, lng} = response.results[0].geometry.location
        console.log("LAT", lat, "LNG", lng)
        addyLng = lng
        addyLat = lat
      }
    )
  }

  console.log("LNG", addyLng)
  console.log("LAT", addyLat)

  let defaultCenter = {lat: 45.5152, lng: -122.6784}

  if(addyLng && addyLat){
    defaultCenter = {lat: addyLat, lng: addyLng}
  }
  // const defaultCenterFinder = (addy) => {

  //   if (addy) {
  //     Geocode.fromAddress(addy).then(
  //       (response) => {
  //         const { lat, lng } = response.results[0].geometry.location;

  //         return { lat, lng }
  //       },
  //       (error) => {
  //         console.error(error);
  //       }

  //     )
  //   }
  //   else return defaultCenter
  // }




  return (
    <LoadScript
      googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        onClick={() => setClickedMark(null)}
      >
        {locations?.map((item, index) => {
          return (
            <Marker key={index} position={item.location} clickable={true} onClick={() => handleClickedMark(index)}>
              {clickedMark === index ? (
                <InfoWindow onCloseClick={() => setClickedMark(null)}>
                  <div>{item.name}</div>
                </InfoWindow>
              ) : null}
            </Marker>
          )
        })}
      </GoogleMap>
    </LoadScript>
  )
}

export default BusinessDetailsMap
