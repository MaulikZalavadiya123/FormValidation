import React, { useState } from "react";

const Contactus = () =>{
    let[fullname, pickName] = useState("");
    let[nameerror, updateNameError] = useState("");

    let[mobile, pickMobile] = useState("");
    let[mobileerror, updateMobileError] = useState("");

    let[email, pickEmail] = useState("");
    let[emailerror, updateEmailError] = useState("");

    let[city, pickCity] = useState("");
    let[cityerror, updateCityError] = useState("");

    let[pincode, pickPincode] = useState("");
    let[pincodeerror, updatePincodeError] = useState("");

    let[address, pickAddress] = useState("");
    let[addresserror, updateAddressError] = useState("");

    const save = () =>{
        let formstatus = true;
        if(fullname==""){
            updateNameError("Invalid Name !");
            formstatus = false;
        }else{
            updateNameError("");
        }

        //mobile no validation
        var mpattern = /^[0]?[6789]\d{9}$/;
        if( ! mpattern.test(mobile) )
        {
            updateMobileError("Invalid Mobile No !");
            formstatus = false;
        }else{
            updateMobileError("");
        }

        //email validation
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if( !filter.test(email) )
        {
            updateEmailError("Invalid e-mail id !");
            formstatus = false;
        }else{
            updateEmailError("");
        }

        //city validation
        if(city==""){
            updateCityError("Invalid Your City !");
            formstatus = false;
        }else{
            updateCityError("");
        }

        //pincode validation
        if(pincode==""){
            updatePincodeError("Invalid Pincode !");
            formstatus = false;
        }else{
            updatePincodeError("");
        }

        //address validation
        if(address==""){
            updateAddressError("Invalid Address !");
            formstatus = false;
        }else{
            updateAddressError("");
        }
        if( formstatus == true )
        {
            alert("Please wait Submitting to server...");
        }
    }
    return(
        <div id="container">
            <h1 align="center"> Validation React </h1>
            <table align="center" cellPadding={10} id="contact">
                <tr>
                    <th> Full Name </th>
                    <td> <input type="text" onChange={obj=>pickName(obj.target.value)} className="inputbox"/> </td>
                    <td> <small> {nameerror} </small> </td>
                </tr>
                <tr>
                    <th> Mobie No </th>
                    <td> <input type="number" onChange={obj=>pickMobile(obj.target.value)} className="inputbox"/> </td>
                    <td> <small> {mobileerror} </small> </td>
                </tr>
                <tr>
                    <th> Email Id </th>
                    <td> <input type="email" onChange={obj=>pickEmail(obj.target.value)} className="inputbox"/> </td>
                    <td> <small> {emailerror} </small> </td>
                </tr>
                <tr>
                    <th> Your City </th>
                    <td>
                        <select onChange={obj=>pickCity(obj.target.value)} className="inputbox">
                            <option value=""> Choose Your City </option>
                            <option> Mumbail </option>
                            <option> Bangalore </option>
                            <option> Surat </option>
                        </select>
                    </td>
                    <td> <small> {cityerror} </small> </td>
                </tr>
                <tr>
                    <th> Pincode </th>
                    <td> <input type="number" onChange={obj=>pickPincode(obj.target.value)} className="inputbox"/> </td>
                    <td> <small> {pincodeerror} </small> </td>
                </tr>
                <tr>
                    <th> Your Address </th>
                    <td> <textarea type="address" onChange={obj=>pickAddress(obj.target.value)} className="inputbox"></textarea> </td>
                    <td> <small> {addresserror} </small> </td>
                </tr>
                <tr>
                    <th colSpan={3}>
                        <button onClick={save} className="btn"> Send Message </button>
                    </th>
                </tr>
            </table>
        </div>
    )
}

export default Contactus;