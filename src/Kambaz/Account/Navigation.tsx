import { Link } from "react-router-dom";
export default function AccountNavigation() {
  
  return (
    <div id="wd-account-navigation">
      <Link 
        to={`/Kambaz/Account/Signin`}  
        className="list-group-item text-center border-0 bg-white text-danger selected-link"
      >
        Signin  
      </Link> 
      <br/>
      
      <Link 
        to={`/Kambaz/Account/Signup`}  
        className="list-group-item text-center border-0 bg-white text-danger"
      >
        Signup  
      </Link> 
      <br/>
      
      <Link 
        to={`/Kambaz/Account/Profile`} 
        className="list-group-item text-center border-0 bg-white text-danger"
      >
        Profile 
      </Link> 
    </div>
  );
}
