import { connect } from 'react-redux'
import { DeleteUser } from '../actions'
import UserList from '../components/UserList'
const mapStateToProps = (state:any) =>{
  return{
    users:state.users
  }
}

const mapDispatchToProps = (dispatch:(user:any)=>void)  =>{
  return{
    DeleteUser: (user:number) => dispatch(DeleteUser(user))
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(UserList);
