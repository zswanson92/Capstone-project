import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Results.css'

const Results = () => {
    const searchObj = useSelector((state) => {
        return state;
    });

    //   const history = useHistory()
    const search = Object.values(searchObj.searchReducer.allResults);
    //   console.log("this is search", search)

    if (search.length === 0) {
        return (
            <>
                <h2>
                    <div className="no-results-found">
                        <div className="no-results-found-icon-and-h1">
                            <span className="icon-for-no-results">
                                <i className="fa-solid fa-triangle-exclamation fa-10x"></i>
                            </span>
                            <h1>No Results Found</h1>
                        </div>
                        <div className="error-text-on-search">
                            <h2>Please Check Your Search </h2>
                            <h2> and Try Again</h2>
                        </div>
                    </div>
                </h2>
            </>
        );
    } else {
        return (
            <div className='main-container'>
                    <div className='top-container'>
                        <div className='all-businesses'>
                            <span className='all-businesses-header'>Results</span>
                        </div>

                        <span className='business-count'>{search.length} businesses</span>
                    </div>
                    {search.map((obj) => {
                        return (
                            <div key={obj.id} className="business-detail-results">
                                <div className='business-detail-container'>
                                    <Link className='title-link' style={{ textDecoration: 'none' }} to={`/businesses/${obj.id}`}>
                                        <p>{obj.name}</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
            </div>
        )
    }
};

export default Results;
