import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import Search from "./Search";

function Nav() {
  return (
    <div>
      <NavBar>
        <Logo to={"/"}>Styled Components project</Logo>
        <SearchDiv>
          <Search />
        </SearchDiv>
      </NavBar>
    </div>
  );
}

export default Nav;

const Logo = styled(Link)`
  text-decoration: none;
  padding-left: 20px;
  font-size: 2rem;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  color: #414141;
  svg {
    font-size: 4rem;
  }
`;

const NavBar = styled.div`
  background: rgb(197, 197, 197);
  background: linear-gradient(90deg, #d8d8d8 21%, #cec4c4 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90px;
  z-index: 10;
  opacity: 0.8;
  transition: opacity 0.3s;
  :hover {
    opacity: 1;
  }
`;

const SearchDiv = styled.div`
  margin-right: 50px;
`;
