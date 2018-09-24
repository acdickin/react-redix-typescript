import * as React from 'react';

interface IState{
    disabled:boolean,
    firstname:string,
    id:number,
    lastname:string,
    username:string,
    visable:boolean,
}

export default class UserList extends React.Component{
  public state :IState={
    disabled:true,
    firstname:'',
    id:0,
    lastname:'',
    username:'',
    visable:false,
  }
  public handleChange=(e:any)=>{
    const {name, value} =e.target;
    const oldState=this.state;
    oldState[name]=value;
    this.isDisabled();
  }
  public isDisabled=()=>{
    const { disabled, firstname, lastname, username } = this.state
    if(firstname==="" || lastname==="" || username==="" && disabled===false){
      this.setState({disabled:true})
    } else {
        this.setState({disabled:false})
    }
  }
  public render(){
    const { firstname,lastname,username, id, disabled } = this.state;
    return(
      <React.Fragment>
      <label>First Name</label>
      <input name="firstname" value={ firstname } onChange={this.handleChange}/>
      <label>Last Name</label>
      <input name="lastname" value={ lastname } onChange={this.handleChange}/>

      <label >Username</label>
      <input name="username" value={ username } onChange={this.handleChange}/>
      <button disabled ={disabled} className='update' id={""+id+""} > Update User </button>
    </React.Fragment>
    )
  }
}
