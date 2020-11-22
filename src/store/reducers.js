initialState={
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
                        date: action.payload.date,
                        roads: state.currentRoad
                    }
                ]
            }) 

        case 'FIRST_STORE_CURRENT_ROAD':
            return {
                locations:[
                    {
                        title: action.payload.title,
                        id: action.payload.id ,
                        date: action.payload.date,
                        roads: state.currentRoad
                    }
                ]
            }
            

        case 'FETCH_LOCAL_STORAGE':
            return Object.assign({}, state, {
                locations: action.payload
            })
        
        case 'DELETE_ROAD':
            return Object.assign({}, state, {
                locations:[
                    ...state.locations.filter((road) => road.id !== action.payload)
                ]
            })

        default:
            return state
    }
}

// return Object.assign({}, state, {
//     locations:[
//         ...state.locations, {
//             title: action.payload.title,
//             id: action.payload.id ,
//             date: action.payload.date,
//             roads: state.currentRoad
//         }
//     ]
// }) 

