import React, {useState} from "react";

const Myhook5 = () =>{
    let user=[
        {city:"Bangalore", user:["Krishana", "Radha", "Ganesh"], photo:"1.png"},
        {city:"Pune", user:["Mahadev", "Madhav"], photo:"2.png"},
        {city:"Surat", user:["Mahakal", "Parth", "Arjun"], photo:"3.png"},
        {city:"Pune", user:["Govind", "Murlidhar"], photo:"4.png"}
    ];

    let[userinfo, updateInfo] = useState( user[0] );
    const getdetails = (index) =>{
        updateInfo(user[index]);
    }

    return(
        <div id="container">
            <h1> Total User : {user.length} </h1>
            <div id="leftblock">
                {
                    user.map((myuser, index)=>{
                        return(
                            <p key={index} onClick={getdetails.bind(this, index)}> {myuser.city} </p>
                        )
                    })
                }
            </div>
            <div id="rightblock">
                <h2> Customer From : {userinfo.city} </h2>
                <p> List of Users </p>
                {
                    userinfo.user.map((name, index2)=>{
                        return(
                            <p key={index2}> {name} </p>
                        )
                    })
                }
                <br/>
            </div>
            <div id="imageblock">
                <img src={userinfo.photo} height="200"/>
            </div>
        </div>
    )
}

export default Myhook5;