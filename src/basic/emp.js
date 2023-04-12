import Details from "./empdetails";
import Citylist from "./city";

const Emplist = () =>{
    return(
        <div id="container">
            <h1> Employee List </h1>
            <Details fullname="Krishan" age="20 Years" edu="MCA" city="Pune" mobile="6767676767"/>
            <Details fullname="Mahesh" age="25 Years" edu="MA" city="Delhi" mobile="8989898989"/>
            <Details fullname="Raj" age="21 Years" edu="CA" city="Chennai" mobile="6666666666"/>
            <Citylist/>
        </div>
    )
}

export default Emplist;