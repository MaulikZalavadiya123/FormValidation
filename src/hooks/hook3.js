import React, {useState} from "react";

const Myhook3 = () =>{
    let temp = {name:"Maulik", mobile:8899889988};
    let[userlist, updateUser] = useState( [temp] );
    let[fullname, pickName] = useState("");
    let[mobileno, pickMobile] = useState("");
    let[msg, updateMsg] = useState("Enter User Details...");
    let[userindex, updateIndex] = useState(-1);

    const save = () =>{
        let newuser = {name:fullname, mobile:mobileno};
        if(userindex == -1){
            updateUser(userlist = [...userlist, newuser]);
            updateMsg(fullname + "Save Successfully !");
        }else{
            let newuser = {name:fullname, mobile:mobileno};
            userlist[userindex] = newuser;
            updateIndex(-1);
            updateMsg(newuser.name + "Updated Successfully !");
        }
        pickName("");
        pickMobile("");
    }

    const deleteuser = (index) =>{
        userlist.splice(index, 1); // delete from array
        updateUser(userlist = [...userlist]); // remaining element updating under state
    }

    const editUser = (index) =>{
        pickName( userlist[index].name );
        pickMobile( userlist[index].mobile );
        updateIndex(index);
    }

    return(
        <div id="container">
            <h1 align="center"> useState(), [...] spread operator Example </h1>
            <p align="center"> {msg} </p>
            <p align="center">
                <input type="text" placeholder='Enter Name' onChange={obj=>pickName(obj.target.value)} value={fullname}/>
                <input type="text" placeholder='Enter Mobile No' onChange={obj=>pickMobile(obj.target.value)} value={mobileno}/>
                <button onClick={save} className="btn"> Save User </button>
            </p>
            <p> {userindex} </p>
            <table align="center" cellPadding={10}>
                <thead>
                    <tr>
                        <th> SI No </th>
                        <th> Full Name </th>
                        <th> Mobile No </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.map((user, index)=>{
                            return(
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {user.name} </td>
                                    <td> {user.mobile} </td>
                                    <td>
                                        <button onClick={editUser.bind(this, index)} className="btn"> Edit </button>
                                    </td>
                                    <td>
                                        <button onClick={deleteuser.bind(this, index)} className="btn1"> Delete </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Myhook3;