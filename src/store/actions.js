import uuid from 'react-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const fetchLocalStorage = () => async (dispatch) => {

    try {
        const data = await AsyncStorage.getItem('locations')
        const roads = JSON.parse(data)
        dispatch({type:'FETCH_LOCAL_STORAGE', payload:roads})
    } catch (error) {
        alert('error al obtener sus rutas.')
    }
}

export const saveRoads = (location) => async(dispatch) => {
    dispatch({type:'SAVE_ROAD', payload:location})
}

export const clearCurrentRoad = () => (dispatch) => {
    dispatch({type:'CLEAR_CURRENY_ROAD'})
}

export const storeCurrentRoad = (title, callback) => async(dispatch, getState) => {

    var old_date = new Date()
    var date = old_date.toString().replace(/GMT.*/g,"")
    //console.log('date: ', date)

    try {
        const check = await AsyncStorage.getItem('locations')

        if(check){
            await dispatch({type:'STORE_CURRENT_ROAD',payload:{title, id: uuid(), date}})
        }else{
            await dispatch({type:'FIRST_STORE_CURRENT_ROAD',payload:{title, id: uuid(), date}})
        }

    } catch (error) {
        alert(error)
    }
        
    dispatch(clearCurrentRoad())

    const state = getState()
    const locs = state.locations
    //console.log('store: ', locs)

    try {
        await AsyncStorage.setItem('locations', JSON.stringify(locs))
    } catch (error) {
        //console.warn(error)
        alert('error al guardar la ruta.')
    }

    if(callback){
        callback()
    }

}

export const deleteRoad = (id) => async(dispatch, getState) => {
    dispatch({type:'DELETE_ROAD', payload: id})

    const state = getState()
    const locs = state.locations
    //console.log('store: ', locs)


    try {
        await AsyncStorage.setItem('locations', JSON.stringify(locs))
    } catch (error) {
        //console.warn(error)
        alert('error al guardar la ruta.')
    }

}