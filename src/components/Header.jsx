import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Inicio</Navbar.Brand>
          <Navbar.Brand href="/clientes">Clientes</Navbar.Brand>
          <Navbar.Brand href="/paises">Paises</Navbar.Brand>
          <Navbar.Brand href="/carritos">Carritos</Navbar.Brand>
          <Navbar.Brand href="/categorias">Categorias</Navbar.Brand>
          <Navbar.Brand href="/opiniones">Opiniones</Navbar.Brand>
          <Navbar.Brand href="/lenguajes">Lenguajes</Navbar.Brand>
          <Navbar.Brand href="/libros">Libros</Navbar.Brand>

        </Container>
      </Navbar>
    </>
  );
}

export default Header;
