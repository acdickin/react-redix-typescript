import * as React from 'react';

interface IProps{
  users:any
}

export default class UserList extends React.Component <IProps,{}>{
  constructor(props:IProps){
    super(props);
  }

  public renderUsers =()=>{

    const userList =this.props.users.list.map((user:any, i:number)=>{
      return(
        <div key={i}>
          {user.firstname} {user.lastname} : {user.username}
        </div>
      )
    })
    return userList;
  }
  public render(){

    return(
      <div id='UserList'>
        {this.renderUsers()}
      </div>
    )
  }
}
