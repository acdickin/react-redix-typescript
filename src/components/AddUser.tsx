import * as React from 'react';
import IUser from '../models/User'

interface IDispatchProps{
  CreateUser: (user:IUser)=>void
}
interface IState{
  disabled:boolean,
  firstname:string,
  lastname:string,
  username:string,
}

class AddUser extends React.Component<IDispatchProps,IState>{
  public state :IState={
    disabled:true,
    firstname:'',
    lastname:'',
    username:'',
  }
  public handleChange=(e:any)=>{
    const {name, value} =e.target;
    const oldState=this.state;
    oldState[name]=value;
    this.isDisabled();
  }
  public isDisabled=()=>{
    const {firstname,lastname,username, disabled} = this.state
    if(firstname==="" || lastname==="" || username==="" && disabled===false){
      this.setState({disabled:true})
    } else {
        this.setState({disabled:false})
    }
  }
  public AddUser=()=>{
    const {firstname,lastname,username} = this.state
    this.props.CreateUser({'firstname':firstname,'lastname':lastname,'id':0,'username':username});
  }

  public render(){
    const {firstname,lastname,username, disabled} = this.state
    return(
    <div id="adduser">
      <label>First Name</label>

      <input name="firstname" value={ firstname } onChange={this.handleChange}/>
      <label>Last Name</label>
      <input name="lastname" value={ lastname } onChange={this.handleChange}/>

      <label >Username</label>
      <input name="username" value={ username } onChange={this.handleChange}/>

      <button disabled={disabled} onClick={this.AddUser}> Add User </button>
    </div>
    )
  }
}
export default AddUser
