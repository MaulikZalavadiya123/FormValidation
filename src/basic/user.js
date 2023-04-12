import Details from "./empdetails";
import Citylist from "./city";

function Myuser(){
    var alluser = ["Krishana", "Ganesh", "Karn", "Arjun", "Mahadev"];
    return(
        <div id="container">
            <h1> User List : {alluser.length} </h1>
            {
                alluser.map((username, index)=>{
                    return(
                        <p key={index}> {index} # {username} </p>
                    )
                })
            }
            <Details fullname="Alex" age="40 Years" edu="Mtech" city="Bangalore" mobile="8585858585"/>
            <Citylist/>
        </div>
    )
}

export default Myuser;