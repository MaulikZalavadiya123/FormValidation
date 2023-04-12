const Details = (allprops) =>{
    return(
        <fieldset>
            <legend> About {allprops.fullname} </legend>
            <p> Age : {allprops.age} </p>
            <p> Mobile : {allprops.mobile} </p>
            <p> Education : {allprops.edu} </p>
            <p> City : {allprops.city} </p>
        </fieldset>
    )
}

export default Details;
// allprops = {name:'aaaa', age:'30 years', Mobile:'9999999999', edu:'BCA', city:'Bangalore'}