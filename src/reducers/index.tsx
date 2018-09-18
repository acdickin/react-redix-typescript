import { combineReducers } from 'redux'
import IUser from '../models/User'

export interface IState{
  list:IUser[]
}

export const UserState:IState ={
  list:[{firstname:'Andrew', lastname:'Cosmic', username:'acosmic'}]
}

const users=(state:IState =UserState, action:any)=>{
  switch(action.type){
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
