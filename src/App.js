import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Myuser from "./basic/user";
import Myproduct from "./basic/product";
import Mycustomer from "./basic/customer";
import Mybook from "./basic/book";
import Emplist from "./basic/emp";
import Myhook1 from "./hooks/hook1";
import Myhook2 from "./hooks/hook2";
import Myhook3 from "./hooks/hook3";
import Myhook4 from "./hooks/hook4";
import Myhook5 from "./hooks/hook5";
import Myapi1 from "./api/api1";
import Myapi2 from "./api/api2";
import Myapi3 from "./api/api3";
import Myapi4 from "./api/api4";
import Myapi5 from "./api/api5";
import Myapi6 from "./api/api6";
import Myapi7 from "./api/api7";
import Contactus from "./hooks/contact";

function App() {
  return (
    <HashRouter>
      <ul id="topnav">
        <li> <Link to="/userlist" className="mylink"> User </Link> </li>
        <li> <Link to="/productlist" className="mylink"> Product </Link> </li>
        <li> <Link to="/booklist" className="mylink"> Book </Link> </li>
        <li> <Link to="/customerlist" className="mylink"> Customer </Link> </li>
        <li> <Link to="/" className="mylink"> Props </Link> </li>
        <li> <Link to="/hook1" className="mylink"> H-1 </Link> </li>
        <li> <Link to="/hook2" className="mylink"> H-2 </Link> </li>
        <li> <Link to="/hook3" className="mylink"> H-3 </Link> </li>
        <li> <Link to="/hook4" className="mylink"> H-4 </Link> </li>
        <li> <Link to="/hook5" className="mylink"> H-5 </Link> </li>
        <li> <Link to="/api1" className="mylink"> Api-1 </Link> </li>
        <li> <Link to="/api2" className="mylink"> Api-2 </Link> </li>
        <li> <Link to="/api3" className="mylink"> Api-3 </Link> </li>
        <li> <Link to="/api4" className="mylink"> Api-4 </Link> </li>
        <li> <Link to="/contact" className="mylink"> Validation </Link> </li>
      </ul>

    <Routes>
      <Route exact path="/api1" element={ <Myapi1/> } />
      <Route exact path="/api2" element={ <Myapi2/> } />
      <Route exact path="/api3" element={ <Myapi3/> } />
      <Route exact path="/api4" element={ <Myapi4/> } />
      <Route exact path="/api5" element={ <Myapi5/> } />
      <Route exact path="/api6" element={ <Myapi6/> } />
      <Route exact path="/api7/:itemid" element={ <Myapi7/> } />
      <Route exact path="/contact" element={ <Contactus/> } />
      <Route exact path="/hook1" element={ <Myhook1/> } />
      <Route exact path="/hook2" element={ <Myhook2/> } />
      <Route exact path="/hook3" element={ <Myhook3/> } />
      <Route exact path="/hook4" element={ <Myhook4/> } />
      <Route exact path="/hook5" element={ <Myhook5/> } />
      <Route exact path="/" element={ <Emplist/> } />
      <Route exact path="/userlist" element={ <Myuser/> } />
      <Route exact path="/productlist" element={ <Myproduct/> } />
      <Route exact path="/customerlist" element={ <Mycustomer/> } />
      <Route exact path="/booklist" element={ <Mybook/> } />
    </Routes>

    </HashRouter>
  );
}

export default App;

// npm install react-router-dom (go terminal in new terminal)