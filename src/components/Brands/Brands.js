import classes from "./Brands.module.scss";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";

const Brands = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.clientWrap}>
          <a href="#s">
            <img src={client1} />
          </a>
          <a href="#s">
            <img src={client2} />
          </a>
          <a href="#s">
            <img src={client3} />
          </a>
          <a href="#s">
            <img src={client4} />
          </a>
          <a href="#s">
            <img src={client5} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Brands;
