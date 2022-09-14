// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./App.css";

// const Nav = () => {
//   return (
//     <div>
//       <div className="nav_bg">
//         <div className="row">
//           <div className="col-12 mx-auto">
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//               <div className="container-fluid">
//                 <NavLink className="navbar-brand brand-name" to="/">
//                   Engineer's Day
//                 </NavLink>
//                 {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button> */}
//                 <div className="" id="navbarNav">
//                   <ul className="navbar-nav">
//                     <li className="nav-item">
//                       <NavLink
//                         exact
//                         className="nav-link "
//                         activeClassName="nav_active"
//                         to="/"
//                       >
//                         Events
//                       </NavLink>
//                     </li>
//                     {/* <li className="nav-item">
//           <NavLink exact className="nav-link" activeClassName="nav_active" to='/events'>Events</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink exact className="nav-link" activeClassName="nav_active" to='/contactus'>Contact us</NavLink>
//         </li> */}
//                   </ul>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid d-flex align-center justify-content-center">
          <h1>
            <NavLink className="navbar-brand " to="/">
              ABHIYAANTRIK DIVAS 2K22
            </NavLink>
          </h1>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
