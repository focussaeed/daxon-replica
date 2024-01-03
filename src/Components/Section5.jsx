import Banner from "../assets/banner-1.webp";
import { Button } from "../Components/Button-Components";

const Section5 = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center ">
        <div className="col-lg-6 col-md-6 col-sm-6 sec2B">
          <img src={Banner} width="500px" height="500px" alt="Picture.jpg" />
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6">
          <p>
            {" "}
            Lorem ipsum is a dummy text of the printing and tyoesetting industry</p>
          <h1 className="sec5B">Winter Discount </h1>
          <h1 className="sec5B">Up to 30% </h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

          <Button label="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export { Section5 };
