import { combineReducers } from 'redux'
import {  Action, ActionTypes } from '../actions'
import IUser from '../models/User'


export interface IState{
  list:IUser[]
}

export const UserState:IState ={
  list:[
    {'firstname':'Andrew', id:1, 'lastname':'Cosmic', 'username':'acosmic'},
    {'firstname':'Krystaal', id:2, 'lastname':'Cosmic', 'username':'kcosmic'},
    {'firstname':'John', id:3, 'lastname':'Smith', 'username':'jsmith'},
  ]
}

const users=(state:IState =UserState, action:Action)=>{
  switch(action.type){
    case ActionTypes.CREATE_USER:
        return({...state, list:action.payload })

    // case ActionTypes.UPDATE_USER:
    //   return state.map((user)=>user.id === action.payload.id ? {...user}:user)
    // case ActionTypes.DELETE_USER:
    //   return state.filter((user)=>user.id !==action.payload.id)
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
