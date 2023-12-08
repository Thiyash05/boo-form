import React, { useContext }  from "react";
import { LoginContext } from "./LoginContext";

import Form from 'react-bootstrap/Form';


function Login(){

const {setUsername ,setPrice , setQuantity , setDescription, setShowprofile}=useContext(LoginContext)

   
    
    return(
        <div>
            <Form className="input mx-auto mt-3 "  >
                <h2>Fruits</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter name"  
                    onChange={(e)=>{
                        setUsername(e.target.value)

                    }}
                  />
                </Form.Group>
            

              
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter price" 
                    onChange={(e)=>{
                        setPrice(e.target.value)

                    }}
                  />
                </Form.Group>
           

             
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter quantity" 
                    onChange={(e)=>{
                        setQuantity(e.target.value)

                    }}
                  />
                </Form.Group>
             

             
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter your description" 
                    onChange={(e)=>{
                        setDescription(e.target.value)

                    }}
                  />
                </Form.Group>
              
                <input class="btn btn-primary" 
                            onClick={()=>{
                        setShowprofile(true)
                        }} 
                        type="submit">
                </input>


             </Form>     
                    



              
        </div>
    )
}
export default Login;