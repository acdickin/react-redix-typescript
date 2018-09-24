import IUser from '../models/User'

export const CREATE_USER = 'CREATE_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'

export enum ActionTypes{
  CREATE_USER = 'CREATE_USER',
  UPDATE_USER = 'UPDATE_USER',
  DELETE_USER = 'DELETE_USER',
}

export interface ICreateUser{
  type: ActionTypes.CREATE_USER,
  payload:IUser
}

export interface IUpdateUser{
  type: ActionTypes.UPDATE_USER,
  payload:IUser
}

export interface IDeleteUser{
  type: ActionTypes.DELETE_USER,
  payload:{id:number}
}



let nextTodoId=3;
// Create user
export function CreateUser(user:IUser):ICreateUser{
const newUser={ 'firstname':user.firstname, 'id':nextTodoId++, 'lastname':user.lastname,'username':user.username }
  return({
    payload: newUser,
    type: ActionTypes.CREATE_USER,

    })
}
// Update User
export function UpdateUser(user:IUser):IUpdateUser{
  return({
    payload:user,
    type: ActionTypes.UPDATE_USER,
  })
}
// Delete User

export function DeleteUser(id:number):IDeleteUser{
  return( {
    payload:{'id':id},
    type: ActionTypes.DELETE_USER,
  })
}

// Define Action
export type Action = ICreateUser | IUpdateUser | IDeleteUser;
