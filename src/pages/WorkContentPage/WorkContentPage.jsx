import "./WorkContentPage.css";
import WorkContentBox from "../../components/WorkCententBox/WorkContentBox";
import ffrimg from "../../img/ffrobot.jpg";
import comingsoon from "../../img/cs.jpg";

function WorkContentPage() {
  return (
    <div id="projects">
      <h1>Projects</h1>

      <h2>Internet Of Things</h2>
      <div className="main-col">
        <WorkContentBox
          image={ffrimg}
          path="/website/ffrobot"
          alt="application"
          description="Fire Fighting Robot"
        />
      </div>

      <h2>Full Stack Project</h2>
      <div className="main-col">
        <WorkContentBox
          image={comingsoon}
          path="/website/fsproj"
          alt="application"
          description="Fire Fighting Robot"
        />
      </div>
    </div>
  );
}

export default WorkContentPage;
