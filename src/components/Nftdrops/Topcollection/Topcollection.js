import classes from "./Topcollection.module.scss";
import vector from "../../../assets/icons/Vector.svg";
import shape from "../../../assets/icons/Shape.svg";

import topnft1 from "../../../assets/topnft1.png";
import topnft2 from "../../../assets/topnft2.png";
import topnft3 from "../../../assets/topnft3.png";
import topnft4 from "../../../assets/topnft4.png";
import topnft5 from "../../../assets/topnft5.png";
import topnft6 from "../../../assets/topnft6.png";
import topnft7 from "../../../assets/topnft7.png";
import topnft8 from "../../../assets/topnft8.png";
import topnft9 from "../../../assets/topnft9.png";

const Topcollections = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.heading}>
            <h1>NFTs</h1>
            <h2>Top collections</h2>
          </div>
          <div className={classes.days}>
            <span>
              1 DAY <img src={vector} />
            </span>
            <span className={classes.active}>
              7 DAYS <img src={vector} />
            </span>
            <span>
              30 DAYS <img src={vector} />{" "}
            </span>
          </div>
          <div className={classes.etherium}>
            <span>
              Ethereum <img src={vector} />{" "}
            </span>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.topBlock}>
            <div className={classes.topNft}>
              <img src={topnft1} />
            </div>
            <div className={classes.midleText}>
              <p>Bored Ape Yacht Club</p>
              <div>
                <img src={shape} />
                10,450.00
              </div>
            </div>
            <div className={classes.endBlock}>
              <div>2.9k ETH</div>
              <span>+10.00%</span>
            </div>
          </div>
          <div className={classes.topBlock}>
            <div className={classes.topNft}>
              <img src={topnft2} />
            </div>
            <div className={classes.midleText}>
              <p>Chromie Squiggle </p>
              <div>
                <img src={shape} />
                19,320.00
              </div>
            </div>
            <div className={classes.endBlock}>
              <div>2.7k ETH</div>
              <span>+10.00%</span>
            </div>
          </div>
          <div className={classes.topBlock}>
            <div className={classes.topNft}>
              <img src={topnft3} />
            </div>
            <div className={classes.midleText}>
              <p>Worlwide Webb Land</p>
              <div>
                <img src={shape} />
                10,450.00
              </div>
            </div>
            <div className={classes.endBlock}>
              <div>2.9k ETH</div>
              <span>+10.00%</span>
            </div>
          </div>
          <div className={classes.topBlock}>
            <div className={classes.topNft}>
              <img src={topnft4} />
            </div>
            <div className={classes.midleText}>
              <p>Bored Ape Chemistry </p>
              <div>
                <img src={shape} />
                10,450.00
              </div>
            </div>
            <div className={classes.endBlock}>
              <div>2.5k ETH</div>
              <span>+10.00%</span>
            </div>
          </div>
          <div className={classes.topBlock}>
            <div className={classes.topNft}>
              <img src={topnft5} />
            </div>
            <div className={classes.midleText}>
              <p>Bored Ape Kennel Club</p>
              <div>
                <img src={shape} />
                10,450.00
              </div>
            </div>
            <div className={classes.endBlock}>
              <div>1.9k ETH</div>
              <span>+10.00%</span>
            </div>
          </div>
          <div className={classes.topBlock}>
            <div className={classes.topNft}>
              <img src={topnft6} />
            </div>
            <div className={classes.midleText}>
              <p>Brick-and-Mortar </p>
              <div>
                <img src={shape} />
                10,450.00
              </div>
            </div>
            <div className={classes.endBlock}>
              <div>1.9k ETH</div>
              <span>+10.00%</span>
            </div>
          </div>
          <div className={classes.topBlock}>
            <div className={classes.topNft}>
              <img src={topnft7} />
            </div>
            <div className={classes.midleText}>
              <p>RTFKT CloneX Mintvial</p>
              <div>
                <img src={shape} />
                10,450.00
              </div>
            </div>
            <div className={classes.endBlock}>
              <div>1.9k ETH</div>
              <span>+10.00%</span>
            </div>
          </div>
          <div className={classes.topBlock}>
            <div className={classes.topNft}>
              <img src={topnft8} />
            </div>
            <div className={classes.midleText}>
              <p>Psychedelics Anonymous</p>
              <div>
                <img src={shape} />
                10,450.00
              </div>
            </div>
            <div className={classes.endBlock}>
              <div>1.4k ETH</div>
              <span>+10.00%</span>
            </div>
          </div>
          <div className={classes.topBlock}>
            <div className={classes.topNft}>
              <img src={topnft9} />
            </div>
            <div className={classes.midleText}>
              <p>Free Way to Back Up</p>
              <div>
                <img src={shape} />
                10,450.00
              </div>
            </div>
            <div className={classes.endBlock}>
              <div>2.5k ETH</div>
              <span>+10.00%</span>
            </div>
          </div>
        </div>
        <div className={classes.topBtn}>
          <button>See All Collections </button>
        </div>
      </div>
    </div>
  );
};

export default Topcollections;
