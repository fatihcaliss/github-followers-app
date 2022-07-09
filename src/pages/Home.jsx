import React, { useEffect, useState } from 'react'
// import axios from "axios"
import SearchUser from "../components/SearchUser"
import Followers from "../components/Followers"

const Home = ({allFollowers}) => {

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    // const [allFollowers, setAllFollowers] = useState([]);
    // const [allFollowing, setAllFollowing] = useState([]);
    
    // const [userName, setUsername] = useState(sessionStorage.getItem("userName"))

    // const getFollowers = async () => {
    //     const { data } = await axios.get(`https://api.github.com/users/${userName}/followers?per_page=100`)
    //     setAllFollowers(data)
    //     console.log(data)
    // }
    // const getFollowing = async () => {
    //     const { data } = await axios.get(`https://api.github.com/users/${userName}/following?per_page=100`)
    //     setAllFollowing(data)
    //     console.log(data)
    // }


    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        // getFollowers();
        // getFollowing();
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const followersList = allFollowers.filter(follower => follower.login.includes(search))

    return (
        <div>
            <SearchUser handleChange={handleChange} />
            <Followers followers={{ loading, followersList }} />
        </div>
    )
}

export default Home