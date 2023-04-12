import React, {useState} from "react";
const Myapi6 = () =>{
    let[username, pickUser] = useState("");
    let[usermobile, pickMobile] = useState("");
    let[useremail, pickEmail] = useState("");
    let[usercity, pickCity] = useState("");
    let[msg, updateMsg] = useState("");

    const save = () =>{
        let url = "http://localhost:1234/userlist";
        var userdetails = {
            name:username,
            mobile:usermobile,
            email:useremail,
            city:usercity
        };

        let postData = {
            headers:{'content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(userdetails)
        }
        fetch(url, postData)
        .then(response=>response.json())
        .then(serverRes =>{
            updateMsg(username + "Save and Item id is :"+ serverRes.id);
        })
    }

    return(
        <div id="container">
            <h1 align="center"> Add User </h1>
            <p align="center"> Enter User Details </p>
            <p align="center"> {msg} </p>
            <table cellPadding={10} align="center">
                <tbody>
                    <tr>
                        <th> User Name </th>
                        <td><input type="text" size="40" onChange={obj=>pickUser(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th> User Mobile </th>
                        <td><input type="text" size="40" onChange={obj=>pickMobile(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th> User Email </th>
                        <td><input type="text" size="40" onChange={obj=>pickEmail(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th> User City </th>
                        <td><input type="text" size="40" onChange={obj=>pickCity(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th colSpan={2}>
                            <button onClick={save} className="btn"> Save Item </button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Myapi6;