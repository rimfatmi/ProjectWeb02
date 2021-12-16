import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import StarRatingComponent from "react-star-rating-component";

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  `;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #808080;
  }
`;
const Nav = styled.nav`
  background: #000;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

function NavBar({ search, setSearch, rate, setRate }) {
  const handleChange = (event) => setSearch(event.target.value);

  return (
    <div className="NavBar">
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>

          <NavLink to="/movieList" activeStyle>
            Movies
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          <div className="h">
            <div className="Search">
              <div className="field">
                <label className="label"> Search Movie</label>
                <input
                  className="input"
                  value={search}
                  //Controle de saisie de la valeur
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="rate">
                <StarRatingComponent
                  name="rate"
                  starCount={5}
                  value={rate}
                  onStarClick={(nextValue, prevValue) =>
                    setRate(nextValue, prevValue)
                  }
                />
              </div>
            </div>
          </div>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
}

export default NavBar;
