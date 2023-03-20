import classes from "./Drops.module.scss";
import heartsvg from "../../../assets/icons/heart.svg";
import shapesvg from "../../../assets/icons/Shape.svg";
import dropsusers from "../../../assets/icons/dropusers.png";
import drop1 from "../../../assets/salenft1.png";
import drop2 from "../../../assets/salenft2.png";
import drop3 from "../../../assets/salenft3.png";
import drop4 from "../../../assets/salenft4.png";

const Drops = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.drop}>
          <div className={classes.dropCenter}>
            <div className={classes.dropImg}>
              <img src={drop1} />
            </div>
            <div className={classes.dropText}>
              <p>Science Jobs</p>
              <span>
                <img src={heartsvg} />
                24
              </span>
            </div>
            <div className={classes.dropSubText}>
              <img src={shapesvg} />
              <p>From 17.59 Flow</p>
              <div>
                <img src={dropsusers} />
              </div>
            </div>

            <div className={classes.dropButton}>
              <button>Live now</button>
            </div>
          </div>
        </div>
        <div className={classes.drop}>
          <div className={classes.dropCenter}>
            <div className={classes.dropImg}>
              <img src={drop2} />
            </div>
            <div className={classes.dropText}>
              <p>Science Jobs</p>
              <span>
                <img src={heartsvg} />
                24
              </span>
            </div>
            <div className={classes.dropSubText}>
              <img src={shapesvg} />
              <p>From 17.59 Flow</p>
              <div>
                <img src={dropsusers} />
              </div>
            </div>

            <div className={classes.dropButton}>
              <button>Live now</button>
            </div>
          </div>
        </div>
        <div className={classes.drop}>
          <div className={classes.dropCenter}>
            <div className={classes.dropImg}>
              <img src={drop3} />
            </div>
            <div className={classes.dropText}>
              <p>Science Jobs</p>
              <span>
                <img src={heartsvg} />
                24
              </span>
            </div>
            <div className={classes.dropSubText}>
              <img src={shapesvg} />
              <p>From 17.59 Flow</p>
              <div>
                <img src={dropsusers} />
              </div>
            </div>

            <div className={classes.dropButton}>
              <button>Live now</button>
            </div>
          </div>
        </div>
        <div className={classes.drop}>
          <div className={classes.dropCenter}>
            <div className={classes.dropImg}>
              <img src={drop4} />
            </div>
            <div className={classes.dropText}>
              <p>Science Jobs</p>
              <span>
                <img src={heartsvg} />
                24
              </span>
            </div>
            <div className={classes.dropSubText}>
              <img src={shapesvg} />
              <p>From 17.59 Flow</p>
              <div>
                <img src={dropsusers} />
              </div>
            </div>

            <div className={classes.dropButton}>
              <button>Live now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drops;
