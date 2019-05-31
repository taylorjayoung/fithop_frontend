import React from "react";
import "./SideDrawer.css";
// import "./SideDrawer2.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Classes</a>
        </li>
        <li>
          <a href="/">Gyms</a>
        </li>
      </ul>
    </nav>
  );
};

// const sideDrawer = props => {
//   let drawerClasses = "side-drawer";
//   if (props.show) {
//     drawerClasses = "side-drawer open";
//   }
//   return (
//     <nav className={drawerClasses}>
//       <ul>
//         <li>
//           <a href="/">Classes</a>
//         </li>
//         <li>
//           <a href="/">Gyms</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

export default sideDrawer;
