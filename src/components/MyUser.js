import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MyUser = () => {
  let { userID } = useParams();
  let navigate = useNavigate()
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() =>  {
     fetchUser()
  }, []);

  const fetchUser = async () => {
    await axios
    .get(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then((response) => {
      setMyData(response.data);
      setLoading(true);
    })
    .catch(err => console.log(err))
  }

  return (
    <div style={{ textAlign: "center" }}>
      {loading && myData && (
        <>
          <p>User ID : {userID}</p>
          <ul>
            <li>{myData.name}</li>
            <li>{myData.address.city}</li>
            <li>{myData.address.street}</li>
            <li>{myData.address.zipcode}</li>
          </ul>
          <button onClick={() => navigate('/')}>
            Go Home
          </button>
        </>
      )}
    </div>
  );
};

export default MyUser;
