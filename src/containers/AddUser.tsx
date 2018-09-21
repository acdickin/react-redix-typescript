import { connect } from 'react-redux'
import { CreateUser } from '../actions'
import AddUser from '../components/AddUser'
// import IUser from '../models/User'

const mapDispatchToProps = (dispatch:(user:any)=>void)  =>{
  return{
    CreateUser: (user:any) => dispatch(CreateUser(user))
  }
}
export default connect (null, mapDispatchToProps)(AddUser);
