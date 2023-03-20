import classes from "./Main.module.scss";
import playIcon from "../../assets/icons/playicon.svg";
import mainNft from "../../assets/mainnftimg.png";
import arrow from "../../assets/Arrow.svg";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";

const Main = () => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.leftBlock}>
          <div className={classes.firstText}>
            <span>
              Discover, collect, and sell extraordinary <span>NFTs</span>
            </span>
          </div>
          <div className={classes.secondText}>
            <p>
              Our marketplace is the world’s first and largest NFT market for
              independent creators worldwide{" "}
            </p>
          </div>
          <div className={classes.buttons}>
            <button className={classes.firstBut}>Explore</button>
            <button className={classes.secondBut}>Create</button>
          </div>
          <div className={classes.videoBlock}>
            <img src={playIcon} />
            <span>Learn more about Nftico</span>
          </div>
          <div className={classes.subImgs}>
            <img src={image2} />
            <img src={image1} />
          </div>
        </div>
        <div className={classes.rightBlock}>
          <div className={classes.mainNft}>
            <img src={mainNft} className={classes.nftimg} />
            <img src={arrow} className={classes.arrow} />
          </div>
        </div>
      </div>
      {/* <div className={classes.subContainer}>
        <div className={classes.firstSubText}>
          We will take all the worry and guesswork out of your blockchain and
          cryptocurrency concerns.
        </div>
        <div className={classes.nftTextGradient}>
          30.000+
          <p>World Arts</p>
        </div>
        <div className={classes.nftText}>
          18.000+
          <p>Digital Artists</p>
        </div>
        <div className={classes.nftText}>
          22.000+
          <p>Live Auctions</p>
        </div>
        <div className={classes.nftText}>
          50.000+
          <p>Unique Products</p>
        </div>
      </div> */}
    </div>
  );
};

export default Main;
