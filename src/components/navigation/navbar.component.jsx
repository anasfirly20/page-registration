import React from "react";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";

const Navbar = () => {
  return (
    <MDBNavbar sticky light className="navbar bg-dark font-monospace">
      <MDBContainer fluid className="navigation">
        <MDBNavbarBrand className="text-white">FaoTech.</MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
