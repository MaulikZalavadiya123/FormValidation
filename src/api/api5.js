import React, {useState} from "react";
const Myapi5 = () =>{
    let[itemname, pickName] = useState("");
    let[itemprice, pickPrice] = useState("");
    let[itemqty, pickQty] = useState("");
    let[itemphoto, pickPhoto] = useState("");
    let[msg, updateMsg] = useState("");

    const save = () =>{
        let url = "http://localhost:1234/itemlist";
        var itemdetails = {
            name:itemname,
            price:itemprice,
            qty:itemqty,
            photo:itemphoto
        };

        let postData = {
            headers:{'content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(itemdetails)
        }
        fetch(url, postData)
        .then(response=>response.json())
        .then(serverRes =>{
            updateMsg(itemname + "Save and Item id is :"+ serverRes.id);
        })
    }

    return(
        <div id="container">
            <h1 align="center"> Add Item </h1>
            <p align="center"> Enter Item Details </p>
            <p align="center"> {msg} </p>
            <table cellPadding={10} align="center">
                <tbody>
                    <tr>
                        <th> Item Name </th>
                        <td><input type="text" size="40" onChange={obj=>pickName(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th> Item Price </th>
                        <td><input type="text" size="40" onChange={obj=>pickPrice(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th> Item Quantity </th>
                        <td><input type="text" size="40" onChange={obj=>pickQty(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th> Item Photo URL </th>
                        <td><input type="text" size="40" onChange={obj=>pickPhoto(obj.target.value)}/></td>
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

export default Myapi5;