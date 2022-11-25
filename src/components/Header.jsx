import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>L</span>okesh
            <span>D</span>ebnath
          </h2>
        </div>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo h2 {
    font-size: 2.5rem;
    font-weight: 400;
    text-transform: uppercase;
    background: -webkit-linear-gradient(#eee, rgb(69, 57, 248));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .logo h2 span {
    font-size: 3.5rem;
  }

  @media (max-width: 1080px) {
    .logo {
      height: 5rem;
    }
  }

  @media (max-width: 998px) {
    .logo {
      height: 5rem;
    }
  }

  @media (max-width: 798px) {
    .logo {
      height: 5rem;
    }
  }
  @media (max-width: 520px) {
    .logo {
      height: 5rem;

      & h2 {
        font-size: 2rem;
      }
    }
  }
`;

export default Header;
