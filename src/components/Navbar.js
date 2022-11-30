import React, { Component } from "react";

// class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <div className="navbar bg-primary">TCD0502 React Course</div>
//       </div>
//     );
//   }
// }
const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">TCD0502 React Course</a>
      </div>
    </div>
  );
}

export default Navbar;