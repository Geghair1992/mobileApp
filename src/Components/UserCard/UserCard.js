import React from 'react'
import styles from './UserCard.module.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import {Col} from 'react-bootstrap'

const UserCard = (props) => {
    return (
        <Col xs={10} className={styles.Card}>
        <img src={props.avatar} alt="avatar"/>
        <h2>{props.login}</h2>
      
      
        <Link to={`/user/${props.id}`}>
        <Button variant="info">Read</Button> 
        </Link>
        

            
        </Col>
    )
}

export default UserCard;
