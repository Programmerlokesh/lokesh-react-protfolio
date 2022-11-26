import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { data } from "../data/lokeshData";
import { Button } from "../styles/Button";

const ProjectCard = () => {
  const { id } = useParams();
  const projectData = data.filter((element) => element.id === +id)[0];
  console.log(projectData);

  return (
    <Wrapper>
      <h1>{projectData.name}</h1>
      <div className="container grid grid-three-column">
        <div className="image">
          <img src={projectData?.imageSrc} alt={projectData?.name} />
          <div className="link-container">
            <Button>
              <a href={projectData.preview} target="_blank" rel="noreferrer">
                Demo
              </a>
            </Button>
            <Button>
              <a href={projectData.github} target="_blank" rel="noreferrer">
                Code
              </a>
            </Button>
          </div>
        </div>
        <section className="overview">
          <div className="overview-header">
            <h3>Overview </h3>
          </div>
          <div className="overview-text">
            <p>{projectData.overview}</p>
          </div>
        </section>
        <section className="tecnologies">
          <div className="technology-header">
            <h3>Technologies</h3>
          </div>
          <section>
            <div className="technology-name">
              {projectData.tecnologies?.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </div>
          </section>
        </section>
      </div>
      <div className="backbtn">
        <NavLink to="/projects">
          <Button className="btn">Go Back</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  h1 {
    text-align: center;
    padding-bottom: 5rem;
  }

  .container {
    max-width: 160rem;

    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .link-container {
        display: flex;
        gap: 3rem;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
      }

      img {
        height: 20rem;
      }
    }
    .overview {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .overview-header {
        text-align: center;

        h3 {
          font-size: 3rem;
          font-weight: bold;
        }
      }
      .overview-text {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .tecnologies {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .technology-header {
        text-align: center;

        h3 {
          font-weight: bold;
          font-size: 3rem;
        }
      }

      section {
        display: flex;
        justify-content: center;

        .technology-name {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.4rem;
          width: 20rem;
          height: 20rem;

          box-shadow: ${({ theme }) => theme.colors.shadowSupport};

          li {
            font-size: 1.5rem;
            font-weight: 600;
          }
        }
      }
    }
  }
  .backbtn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 2rem;
  }
`;

export default ProjectCard;
