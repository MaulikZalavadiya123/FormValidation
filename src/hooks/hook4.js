import React,{useState} from "react";

const Myhook4 = () =>{
    let[citylist, updateCity] = useState( ["Savarkundla", "surat", "junagadh", "rajkot" ,"Ahemdabad"] );
    let[msg,updateMsg] = useState("Enter city details...");
    let[newcity,pickCity] = useState("");

    const save = () =>{
        updateCity(citylist =>[...citylist,newcity]); // a - a+b
         updateMsg(newcity + "  add successfully!");
    }

    const deletecity = (index) =>{
        citylist.splice(index,1); //delete from array
        updateCity(citylist = [...citylist]); //remaining element updating under state
    }

    return(
        <div id="container" align="center">
            <h1> React useState() - Hook Example</h1>
            <p> {msg} </p>
            <p>
                Enter city Name : <input type="text" onChange={obj =>pickCity(obj.target.value)}/>
                <button onClick={save} className="btn"> Save city </button>
            </p>
        
            <p> Total city : {citylist.length} </p>
            {
                citylist.map((cityname, index)=>{
                    return(
                        <p key={index}> {cityname} <button onClick={deletecity.bind(this,index)} className="btn1"> Delete </button></p>
                        
                    )
                })
            }
        </div>
    )
}


export default Myhook4;