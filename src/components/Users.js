
import User from './User'
import {Link} from 'react-router-dom'
 


const Users = (props) => {
    console.log(props)
    return(
        <>
        
        <Link to={`/my-user/${props.id}`}><h1>My name is : {props.name}</h1></Link>
        <p>{props.id}</p>
        <User {...props} />
        </>
    )
}

export default Users