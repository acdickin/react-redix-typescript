import * as React from 'react';
import UpdateUser from './UpdateUser'
interface IState{
  update:boolean,
  userId:number
}
interface IProps{
  DeleteUser:(id:number)=>void,
  users:any,
}

export default class UserList extends React.Component <IProps,IState>{
  public state: IState={
    update:false,
    userId:0
  }
  public stopUpdate=()=>{
    this.setState({update:false})
  }
  public RemoveUser =(e:any)=>{
    const {id} =e.target;
    this.props.DeleteUser(id)
  }
  public EditUser =(e:any)=>{
    const {id} = e.target;
    this.setState({update:true, userId:id})
  }
  public renderUsers =()=>{
    const {users}=this.props
    if (users !== null){
      const userList =users.map((user:any, i:number)=>{
        return(
          <div key={i} id ={""+i+""} onClick={this.EditUser}>
            {user.firstname} {user.lastname} : {user.username} <span className="remove" id={user.id} onClick={this.RemoveUser} >X</span>
          </div>
        )
      })
      return userList;
    }
  }
  public render(){

    const{firstname, lastname, id, username} = this.props.users[this.state.userId]
    return(
      <div id='UserList'>
        <h3>User List</h3>
        {this.renderUsers()}
        <UpdateUser update={this.state.update} close={this.stopUpdate} firstname={firstname} lastname={lastname} id={id} username={username} />
      </div>
    )
  }
}
