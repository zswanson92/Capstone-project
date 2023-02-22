const GET_RESULTS = "search/GET_RESULTS";

const getResults = (data) => {
  return {
    type: GET_RESULTS,
    data
  }
}


export const getResultsThunk = (filter, searchInput) => async (dispatch) => {
  const response = await fetch(`/api/search?business=${searchInput}&%20filter=${filter}`, {
    method: "GET",
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getResults(data));
    return response;
  }
};

const initialState = {allResults:{}};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULTS:{
      const newState = {allResults:{}};
      console.log("THIS IS ACTION", action)
      for(const key in action.data){
        newState.allResults[key] = action.data[key];
      }
      return newState;
    }
    default:
      return state;
  }
};

export default searchReducer;
