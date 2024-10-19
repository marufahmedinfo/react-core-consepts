import { useEffect, useState } from "react"

export default function Users(){
    const [user, setUser] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    return (
        <div style={{border: '2px solid purple',
            margin: '15px',
            padding: '15px',
            borderRadius: '15px'}}>
                
            <h2>User Api length</h2>
            <h3>Users : {user.length}</h3>
        </div>
    )
}