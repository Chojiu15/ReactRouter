
import {useLocation} from 'react-router-dom'

const Contact = () => {
    let location = useLocation()
    console.log(location)
    const myData = location.state.contacts
    return(
        <div style={{textAlign :'center'}}>
        <h1>Contact page</h1>
        { myData && myData.map(e => {
            return(
                <>
                    <p>{e.name}</p>
                    <p>{e.age}</p>
                    <p>{e.passion}</p>
                </>
            )
        })}
        </div>
    )
}

export default Contact