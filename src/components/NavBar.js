import {Link} from 'react-router-dom'
import {useState} from 'react'


const NavBar = () => {
    const [contacts, setContacts] = useState([
        {
            name : 'John',
            age : 32,
            passion : 'moto'
        },
        {
            name : 'Jenny',
            age: 30,
            passion : 'chess'
        }
    ])

    const handleClick = () => {
        setContacts('Some data')
    }
    return(
        <div style={{textAlign :'center', display :'flex', justifyContent: 'space-around'}}>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/contact' state={{contacts}}   >
                Contact
                </Link>
        </div>
    )
}

export default NavBar