import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function HeaderComponent() {
   return (
      <Navbar expand="lg" className="bg-body-tertiary">
         <Container>
            <Link href="/" className="navbar-brand">
               Bin Vu
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Link href={"/facebook"} className="nav-link">
                     Facebook
                  </Link>
                  <Link href={"/youtube"} className="nav-link">
                     Youtube
                  </Link>
                  <Link href={"/instagram"} className="nav-link">
                     Instagram
                  </Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default HeaderComponent;
