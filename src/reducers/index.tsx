import { combineReducers } from 'redux'
import {  Action, ActionTypes } from '../actions'
export const UserState:any =
  [
    {'firstname':'Andrew', id:0, 'lastname':'Cosmic', 'username':'acosmic'},
    {'firstname':'Krystaal', id:1, 'lastname':'Cosmic', 'username':'kcosmic'},
    {'firstname':'John', id:2, 'lastname':'Smith', 'username':'jsmith'},
  ];

const users=(state:any =UserState, action:Action)=>{
  switch(action.type){
    case ActionTypes.CREATE_USER:
        return([...state].concat(action.payload) )

    // case ActionTypes.UPDATE_USER:
    //   return state.map((user)=>user.id === action.payload.id ? {...user}:user)
    case ActionTypes.DELETE_USER:
      const id=parseInt(""+action.payload.id+"",10)
      return [...state].filter((user:any,i:number) =>i !==id )

    default:
      return state
  }
}
const defaultReducers = {
  users,
}

const reducers =combineReducers({
  ...defaultReducers,
})
export default reducers
