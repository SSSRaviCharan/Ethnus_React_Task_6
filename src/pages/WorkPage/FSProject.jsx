import ImgSlider from "../../components/ImgSlider/ImgSlider";
import "./Workpage.css";
import photo1 from "../../img/cs.jpg";
import photo2 from "../../img/cs.jpg";

function FSP() {
  const photos = [photo1, photo2];

  return (
    <div className="site-description">
      <ImgSlider photos={photos} />
      <h1>Full Stack Project</h1>
      <div className="paragraph">
        <p>Yet to complete a Full Stack project using MERN technologies.</p>
        <p>
          <a href="" target="">
            Visit Github
          </a>
        </p>
        <p className="built-date">October 2023</p>
      </div>
    </div>
  );
}

export default FSP;
