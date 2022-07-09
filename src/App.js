import './App.css';
import AppRouter from './router/AppRouter';
import {useEffect,useState} from "react";
import axios from "axios";

function App() {
  const [allFollowers, setAllFollowers] = useState([]);
  const [allFollowing, setAllFollowing] = useState([]);
  
  const [userName, setUsername] = useState(sessionStorage.getItem("userName"))

  const getFollowers = async () => {
      const { data } = await axios.get(`https://api.github.com/users/${userName}/followers?per_page=100`)
      setAllFollowers(data)
  }
  const getFollowing = async () => {
      const { data } = await axios.get(`https://api.github.com/users/${userName}/following?per_page=100`)
      setAllFollowing(data)
  }

useEffect(() => {
  getFollowers();
  getFollowing();
}, [])


  return (
    <div className="container">
      <AppRouter allFollowers={allFollowers} allFollowing={allFollowing}/>
    </div>
  );
}

export default App;
