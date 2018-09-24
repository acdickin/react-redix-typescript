import * as React from 'react';
interface IState{
  disabled:boolean,
}
interface IProps{
  firstname:string,
  id:number,
  lastname:string,
  update:boolean,
  username:string,
}

export default class UserList extends React.Component<IProps,{}>{
  public state:IState={
    disabled:false
  }
  public handleChange=(e:any)=>{
    const {name, value} =e.target;
    const oldState=this.state;
    oldState[name]=value;
    this.isDisabled();
  }
  public isDisabled=()=>{
    const { firstname, lastname, username } = this.props
    const { disabled } = this.state
    if(firstname==="" || lastname==="" || username==="" && disabled===false){
      this.setState({disabled:true})
    } else {
        this.setState({disabled:false})
    }
  }
  public render(){
    const { firstname,lastname,username, update, id} = this.props;
    const { disabled } = this.state;
    if(update){
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
    else{
        return(
          <div/>
        )
    }
  }
}
