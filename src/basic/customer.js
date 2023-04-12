const Mycustomer = () =>{
    var customer = [
        {city:"Bangalore", user:["Keishana", "Radha", "Ganesh"]},
        {city:"Pune", user:["Mahadev", "Madhav"]},
        {city:"Surat", user:["Mahakal", "Parth", "Arjun"]},
        {city:"Pune", user:["Govind", "Murlidhar"]}
    ];
    return(
        <div  id="container">
            <h1> {customer.length} :Customer List </h1>
            {
                customer.map((customerinfo, index)=>{
                    return(
                        <fieldset key={index}>
                            <legend> {customerinfo.city} </legend>
                            {
                                customerinfo.user.map((name, index2)=>{
                                    return(
                                        <p key={index2}> {name} </p>
                                    )
                                })
                            }
                        </fieldset>
                    )
                })
            }
        </div>
    )
}

export default Mycustomer;