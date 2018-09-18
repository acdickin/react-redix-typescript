import { connect } from 'react-redux'
import UserList from '../components/UserList'

const mapStateToProps = (state:any) =>{
  return{
    users:state.users
  }
}
export default connect (mapStateToProps)(UserList);
