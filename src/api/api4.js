import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
const Myapi4 = () =>{
    let[userlist, updateUser] = useState([]);
    const getUser = () =>{
        fetch("http://localhost:1234/userlist")
        .then(response=>response.json())
        .then(userArray=>{
            updateUser(userArray);
        })
    }
    useEffect(()=>{
        getUser();
    },[1]);

    const deleteUser = (id) =>{
        let url = "http://localhost:1234/userlist/"+id;
        let postData = {
            method:"DELETE"
        }
        fetch(url, postData)
        .then(response=>response.json())
        .then(serverRes=>{
            alert("Item Details Deleted");
            getUser(); // to reload the list
        })
    }

    return(
        <section id="container">
            <h1 align="center"> User List : {userlist.length} </h1>
            <p>
                <Link to="/api6" className="btn"> Add New User </Link>
            </p>
            {
                userlist.map((user, index)=>{
                    return(
                        <fieldset key={index}>
                            <legend> {user.name} </legend>
                            <p> Mobile No : {user.mobile} </p>
                            <p> E-Mail : {user.email} </p>
                            <p> City : {user.city} </p>
                            <button onClick={deleteUser.bind(this, user.id)} className="btn1"> Delete </button>
                        </fieldset>
                    )
                })
            }
        </section>
    )
}

export default Myapi4;