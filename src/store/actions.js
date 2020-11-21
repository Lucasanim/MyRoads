import uuid from 'react-uuid'

export const saveRoads = (location) => async(dispatch) => {
    dispatch({type:'SAVE_ROAD', payload:location})
}

export const clearCurrentRoad = () => (dispatch) => {
    dispatch({type:'CLEAR_CURRENY_ROAD'})
}

export const storeCurrentRoad = (title) => async(dispatch) => {

    var old_date = new Date()
    var date = old_date.toString().replace(/GMT.*/g,"")
    console.log('date: ', date)
        
    await dispatch({type:'STORE_CURRENT_ROAD',payload:{title, id: uuid(), date}})
    dispatch(clearCurrentRoad())
}