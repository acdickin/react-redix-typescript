import * as React from 'react';

interface IProps{
  users:any
}

export default class UserList extends React.Component <IProps,{}>{
  constructor(props:IProps){
    super(props);
  }

  public renderUsers =()=>{
    const {users}=this.props
    if (users !== null){
      const userList =users.map((user:any, i:number)=>{
        return(
          <div key={i}>
            {user.firstname} {user.lastname} : {user.username}
          </div>
        )
      })
      return userList;
    }
  }
  public render(){

    return(
      <div id='UserList'>
        <h3>User List</h3>
        {this.renderUsers()}
      </div>
    )
  }
}
