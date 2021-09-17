import React,{useState,useEffect} from 'react'
import Loading from '../Loading/Loading';

const User = props => {
    const [singleuser, setSingleuser] = useState(null)
    useEffect(() => {
        fetch(`https://api.github.com/users/${props.match.params.id}`)
        .then(res=>res.json())
        .then(rs=>setSingleuser(rs))
    }, []);

    if(singleuser==null){
        return(
            <Loading/>
        )
    }else{

    return (
        <div>
            <h1>{singleuser.Login}</h1>
            <img src={singleuser.avatar_url}/>
            {/* <a target="_blank" href={singleUser.html_url}>Github Link</a> */}
        </div>
    )
}
}
export default User;
