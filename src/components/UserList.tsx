import * as React from 'react';

interface IProps{
  DeleteUser:(id:number)=>void,
  users:any,
}

export default class UserList extends React.Component <IProps,{}>{
  constructor(props:IProps){
    super(props);
  }
  public RemoveUser =(e:any)=>{
    const {id} =e.target;
    this.props.DeleteUser(id)
  }

  public renderUsers =()=>{
    const {users}=this.props
    if (users !== null){
      const userList =users.map((user:any, i:number)=>{
        return(
          <div key={i}>
            {user.firstname} {user.lastname} : {user.username} <span className="remove" id={user.id} onClick={this.RemoveUser} >X</span>
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
