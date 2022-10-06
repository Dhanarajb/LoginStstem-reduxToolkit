
import { useSelector } from 'react-redux';
import './App.css';
import Login from './component/Login';
import Logout from './component/Logout';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App"> 
      {user? <Logout />: <Login />} 
    </div>
  );
}

export default App;
//if the user is present show  logout 
//if the user is not present show login