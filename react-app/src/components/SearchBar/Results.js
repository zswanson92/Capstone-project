import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Results.css'
import HomeMap from "../MapsApi";

const Results = () => {
    const searchObj = useSelector((state) => {
        return state;
    });

    const search = Object.values(searchObj.searchReducer.allResults);

    const fillerImg = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'

    function addDefaultSrc(ev) {
        ev.target.src = 'https://cdn-icons-png.flaticon.com/512/168/168812.png'
    }

    const avgFinder = (arr) => {
        let sum = 0
        arr.forEach((obj) => {
            sum += obj.stars
        })
        if (arr.length > 0) {
            return sum / arr.length
        }
        return sum
    }

    const starNumChecker = (stars) => {
        let abc;

        if (stars === 1.00 || (stars > 0 && stars < 2)) {
            abc = "⭐"
        }
        if (stars === 2.00 || (stars > 1 && stars < 3)) {
            abc = "⭐⭐"
        }
        if (stars === 3.00 || (stars > 2 && stars < 4)) {
            abc = "⭐⭐⭐"
        }
        if (stars === 4.00 || (stars > 3 && stars < 5)) {
            abc = "⭐⭐⭐⭐"
        }
        if (stars === 5.00) {
            abc = "⭐⭐⭐⭐⭐"
        }
        return abc
    }

    const dollarNumChecker = (price) => {
        let dollar;

        if (price === 1) {
            dollar = "$"
        }
        if (price === 2) {
            dollar = "$$"
        }
        if (price === 3) {
            dollar = "$$$"
        }
        if (price === 4) {
            dollar = "$$$$"
        }
        if (price === 5) {
            dollar = "$$$$$"
        }
        return dollar
    }

    if (search.length === 0) {
        return (
            <div className="main-container-no-results">
                <h2>
                    <div className="error-text-on-search">
                        <span className="icon-for-no-results">
                            <i className="fa-solid fa-triangle-exclamation fa-10x"></i>
                        </span>
                        <h1>No Results Found</h1>
                        <h2>Please Check Your Search </h2>
                        <h2> and Try Again</h2>
                    </div>
                </h2>
            </div>
        );
    } else {
        return (
            <>

                <div className='total-business-count-div'>
                    <h2 className="businesses-count-h2">{search?.length} Businesses</h2>
                </div>
                <div className='main-container-div-all-businesses'>
                    <div className='a-map-div'> <HomeMap /> </div>
                    <div className='first-sub-container-businesses'>
                        {search.map((obj) => {
                            return (
                                <div key={obj?.id} className="business-detail">
                                    <Link className='business-links' to={`/businesses/${obj?.id}`} style={{ textDecoration: 'none' }} >
                                        {obj?.preview_img ? <img className='business-prev-img' onError={addDefaultSrc} src={obj?.preview_img} alt='https://cdn-icons-png.flaticon.com/512/168/168812.png' /> : <img className='business-prev-img' src={fillerImg} alt={fillerImg} />}
                                        <div>
                                            <div className='business-id-name-p-name'>{obj?.id}. {obj.name}</div>
                                            <p>{starNumChecker(avgFinder(obj?.reviews))} {obj?.reviews.length} Reviews</p>
                                            <div className='business-id-tags-p'>{obj?.tags.split(',').map((tag) => {

                                                return (

                                                    <div key={tag} className='mapped-tag-buttons-businesses-div'>
                                                        {obj?.tags ? <button className='mapped-tag-buttons-businesses'>{tag}</button> : ""}
                                                    </div>
                                                )
                                            })} {dollarNumChecker(obj?.price)}</div>
                                            <p className='testtextdiv'>{obj?.reviews[obj?.reviews.length - 1]?.body} </p>
                                        </div>
                                    </Link>
                                    <Link className='more-link-on-businesses' to={`/businesses/${obj?.id}`}>more</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <footer className='splash-footer'>
                    <div className="splash-footer-div">
                        <div className="corp-div">© 2022 Zelp Corp</div>
                        <div className='foot-name-div'>

                            <div className='href-div'><a className='splash-github-link' href='https://github.com/zswanson92'>  Zack Swanson</a></div>
                            <div><img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='Logo' className='splash-logo-img'></img></div>
                        </div>
                    </div>
                </footer>


            </>
        )
    }
};

export default Results;
