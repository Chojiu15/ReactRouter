import { Routes, Route } from "react-router-dom";
import App from "./components/UsersCall";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import UsersCall from "./components/UsersCall";
import Home from './components/Home'
import MyUser from "./components/MyUser";

const Router = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
            <Route path='/users' element={<UsersCall />} />
            <Route path="/contact" element={<Contact />} />

        </Route>
        
        <Route path='/my-user/:userID' element={<MyUser />} />
      </Routes>
    </>
  );
};

export default Router;
