import React, {useState} from "react";

const Myhook2 = () =>{
    let[booklist, updateBook] = useState( ["html", "css", "javascript", "reactjs"] );
    let[newbook, pickBook] = useState("");
    const save = () =>{
        updateBook(booklist =>[...booklist, newbook]); // a = a+b
    }
    return(
        <div id="container">
            <h1> React useState() - Hook Example </h1>
            <p>
                Enter Book Name : <input type="text" onChange={obj =>pickBook(obj.target.value)}/>
                <button onClick={save} className="btn"> Save Book </button>
            </p>
            <i> You have entered - {newbook} </i>
            <p> Total Books : {booklist.length} </p>
            {
                booklist.map((bookname, index)=>{
                    return(
                        <p key={index}> {bookname}</p>
                    )
                })
            }
        </div>
    )
}

export default Myhook2;