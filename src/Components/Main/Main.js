import React,{useState,useEffect} from 'react'
import UserCard from '../UserCard/UserCard';
import {Row} from 'react-bootstrap'
import Loading from '../Loading/Loading';

const Main = () => {
    const [List, setList] = useState([])
 
    useEffect(() => {
    setTimeout(() => {
        fetch(`https://api.github.com/users?since=135`)
        .then(res=>res.json())
        .then(rs=>setList(rs))
    }, 3000);  
}, []); 



if(List.length===0){
    return(
        <Loading/>
    )
}
else{
    return (
        <Row>
            {
                List.map(user=>{
                    return(
                        <UserCard key={user.id} id={user.id} login={user.login} avatar={user.avatar_url}   />
                    )
                })
            }
            
        </Row>
    )
}
}

export default Main;
