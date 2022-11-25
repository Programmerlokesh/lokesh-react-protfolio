import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to me today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get started</Button>
            </NavLink>
          </div>
        </div>
      </section>
      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Lokesh Debnath</h3>
            {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Mail Lokesh to get hire</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Me</h3>
            <div className="footer-social--icons">
              {/* Facebook link */}
              <div>
                <a
                  href="https://www.facebook.com/lokesh.9733/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="icons" />
                </a>
              </div>
              {/* Instagram Link */}
              <div>
                <a
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Flokesh.2001%3Figshid%3DYmMyMTA2M2Y%253D%26fbclid%3DIwAR0TTWmxtnVnEsetyBAj22vPvMSrq20RnirhPklWpZsUfhCTB2O809EQbTw&h=AT2cNZGjJoHs_uYKMUdpQ-Si7zz9B2aZVLD0BSIsVV553eXsky_AUNO3uZeCUoJxhcIvExPU5areUhUJybcd6WwfBAww1nHYIyjsoF6-C_CWlXDyuZkVmk0U_iZJqv4ZtTfb7w"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="icons" />
                </a>
              </div>
              {/* GitHub link */}
              <div>
                <a
                  href="https://github.com/Programmerlokesh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Me</h3>
            <h3>+91 9733116447</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Lokesh Debnath. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;
export default Footer;
