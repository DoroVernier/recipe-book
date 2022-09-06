import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <Nav>
        <NavLink>Startseite</NavLink>
        <NavLink>Veggie</NavLink>
        <NavLink>Dessert</NavLink>
      </Nav>
    </header>
  );
};

const Nav = styled.nav`
display: flex; 
justify-content: space-evenly; 
background-color: grey; 
`

const NavLink = styled.a`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
color: white; 


`
