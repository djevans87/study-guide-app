import "react";
import {readData, writeData}   from "../../dataService/dataService.jsx";
import {useDispatch} from "react-redux";
import {logout} from "../../state_management/reducers/CurrentUserSlice.jsx";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    const data = readData();
    if (data) {
      data.users = [];
      writeData(data);
    }
    dispatch(logout());
  };


  return (
      <div>
        <button onClick={handleLogout}>Logout</button>
    <div>You are now logged out. Come back soon!</div>
      </div>  )
}

export default Logout;
