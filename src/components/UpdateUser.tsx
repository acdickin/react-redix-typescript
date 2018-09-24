import * as React from 'react';
interface IState{
  disabled:boolean,
  firstname:string,
  id:number,
  lastname:string,
  update:boolean,
  username:string,
}
interface IProps{
  close:()=>void,
  firstname:string,
  id:number,
  lastname:string,
  update:boolean,
  username:string,
}

export default class UserList extends React.Component<IProps,IState>{
  public state:IState={
    disabled:false,
    firstname:"",
    id:0,
    lastname:"",
    update:false,
    username:"",
  }
  public componentDidUpdate(prevProps:any){
    if (this.props.id!==prevProps.id){
      this.setState({firstname:this.props.firstname,id:this.props.id,lastname:this.props.lastname, username: this.props.username})
    }
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
  public closeEdit=()=>{
    this.props.close()
  }
  public render(){
    const { update} = this.props;
    const { disabled,firstname,lastname,username, id } = this.state;
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
        <button className="cancel" onClick={this.closeEdit}>Cancel</button>
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
