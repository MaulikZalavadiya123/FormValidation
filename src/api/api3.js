import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
const Myapi3 = () =>{
    let[itemlist, updateItem] = useState([]);
    const getItem = () =>{
        fetch("http://localhost:1234/itemlist")
        .then(response=>response.json())
        .then(itemArray=>{
            updateItem(itemArray);
        })
    }
    useEffect(()=>{
        getItem();
    },[1]);

    const deleteItem = (id) =>{
        let url = "http://localhost:1234/itemlist/"+id;
        let postData = {
            method:"DELETE"
        }
        fetch(url, postData)
        .then(response=>response.json())
        .then(serverRes=>{
            alert("Item Details Deleted");
            getItem(); // to reload the list
        })
    }

    return(
        <section id="container">
            <h1 align="center"> Item List : {itemlist.length} </h1>
            <p>
                <Link to="/api5" className="btn"> Add New Product </Link>
            </p>
            {
                itemlist.map((item, index)=>{
                    return(
                        <fieldset key={index}>
                            <legend> {item.name} </legend>
                            <img src={item.photo} width="100%"/>
                            <p> Rs.{item.price} </p>
                            <p> in Stock : {item.qty} </p>
                            <button onClick={deleteItem.bind(this, item.id)} className="btn1"> Delete </button>
                            <Link to={`/api7/${item.id}`} className='floatr'> Edit </Link>
                        </fieldset>
                    )
                })
            }
        </section>
    )
}

export default Myapi3;