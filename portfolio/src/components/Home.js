import "../Styles/Home.css";
import Typical from "react-typical";

function Home() {
  return (
    <div className="home--container">
      <div className="home--parent">
        <div className="home--details">
          <div className="colz">
            <div className="colz--icon">
              <a href="https://github.com/chantho05">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/themichaelmdavis/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="home--details--name">
            <span className="primary--text">
              {" "}
              Hello, I'M <span className="highlighted--text"> Michael </span>
            </span>
          </div>
          <div className="home--details--role">
            <span className="home--text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev ",
                    1000,
                    "Full Stack Developer ",
                    1000,
                    "MERN Stack ",
                    1000,
                    "Cross Platform Dev ",
                    1000,
                    "React/React Native Dev ",
                    1000,
                  ]}
                />
              </h1>
              <span className="home--role--tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="home--options">
            <button className="btn primary--btn">
              {""}
              Hire Me{""}
            </button>
            <a href="MichaelDavis.pdf" download="MichaelDavis.pdf">
              <button className="btn highlighted--btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="home--picture">
          <div className="home--picture--background"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
