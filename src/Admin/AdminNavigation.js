 
import {
  useNavigate ,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

 
import Loading from './Loading'
import AdminLogin from './AdminLogin';
import Dashboard from './Dashboard';
import { OrderDetails } from "../components/Orders";
 



function AdminNavigation() {
  return (
    <BrowserRouter>
    <Routes>
      

 
          
          <Route path="/" element={<Loading />} />
          <Route path="/Login" element={<AdminLogin />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/OrderDetails" element={<OrderDetails />} />
    </Routes>
  
  </BrowserRouter>
  );
}

export default AdminNavigation;
