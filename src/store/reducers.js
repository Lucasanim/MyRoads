import { act } from "react-test-renderer"

initialState={
    coords: {},
    shouldTrack:false,
    currentRoad:[],
    locations:[]
}

export const locationReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SAVE_ROAD':
            return Object.assign({}, state, {
                currentRoad:[
                    ...state.currentRoad, action.payload
                ]
            })
        case 'CLEAR_CURRENY_ROAD':
            return Object.assign({}, state,{
                currentRoad:[]
            })

        case 'STORE_CURRENT_ROAD':
            return Object.assign({}, state, {
                locations:[
                    ...state.locations, {
                        title: action.payload.title,
                        id: action.payload.id ,
                        roads: state.currentRoad
                    }
                ]
            })
        default:
            return state
    }
}

