import React, { useContext }  from "react";
import { LoginContext } from "./LoginContext";

import Card from 'react-bootstrap/Card';

function Profile(){

    const {userName , price , quantity , description}=useContext(LoginContext)
    return(
        <div>
            <Card className="profile-card mx-auto mt-3">

                <Card.Header className="title ">{userName} Product </Card.Header>
                
                <Card.Body>
                    <Card.Img  src="img/img1.jpg" style={{width:"250px"}} />
                    <Card.Text className="inner-text">User Name: {userName}</Card.Text>
                    <Card.Text className="inner-text">Price: {price}</Card.Text>
                    <Card.Text className="inner-text">Quantity: {quantity}</Card.Text>
                    <Card.Text className="inner-text">Description: {description}</Card.Text>
                </Card.Body>
            </Card>
    </div>
       
    )
}
export default Profile;