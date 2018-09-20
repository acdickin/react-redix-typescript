import { connect } from 'react-redux'
import { CreateUser } from '../actions'
import AddUser from '../components/AddUser'
import IUser from '../models/User'


const mapDispatchToProps = (dispatch: any) =>{
  return{
    CreateUser:(user:IUser) => dispatch(CreateUser(user)),
    dispatch
  }
}
export default connect (mapDispatchToProps)(AddUser);
