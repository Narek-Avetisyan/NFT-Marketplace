import classes from "./Trending.module.scss";
import trendnft1 from "../../../assets/trendnft1.png";
import trendnft2 from "../../../assets/trendnft2.png";
import trendnft3 from "../../../assets/trendnft3.png";
import trendnft4 from "../../../assets/trendnft4.png";

const Trendingnft = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1>NFTs</h1>
          <h2>STrending NFTs</h2>
        </div>
        <div className={classes.trendFlex}>
          <div className={classes.trend}>
            <div className={classes.trendCenter}>
              <div className={classes.trendImg}>
                <img src={trendnft1} />
              </div>
              <div className={classes.trendText}>
                <p>By Ya Chin-Ho</p>
                <span>Venture Capitalist</span>
              </div>
              <div className={classes.trendSubText}>
                <div className={classes.firstText}>
                  <p>From </p>
                  <div>Not for sale</div>
                </div>
                <div className={classes.secondText}>
                  <p>Highest bid</p>
                  <span>2.835 ETH</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.trend}>
            <div className={classes.trendCenter}>
              <div className={classes.trendImg}>
                <img src={trendnft2} />
              </div>
              <div className={classes.trendText}>
                <p>Science Jobs</p>
                <span>Venture Capitalist</span>
              </div>
              <div className={classes.trendSubText}>
                <div className={classes.firstText}>
                  <p>From </p>
                  <div>Not for sale</div>
                </div>
                <div className={classes.secondText}>
                  <p>Highest bid</p>
                  <span>2.835 ETH</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.trend}>
            <div className={classes.trendCenter}>
              <div className={classes.trendImg}>
                <img src={trendnft3} />
              </div>
              <div className={classes.trendText}>
                <p>Science Jobs</p>
                <span>Venture Capitalist</span>
              </div>
              <div className={classes.trendSubText}>
                <div className={classes.firstText}>
                  <p>From </p>
                  <div>Not for sale</div>
                </div>
                <div className={classes.secondText}>
                  <p>Highest bid</p>
                  <span>2.835 ETH</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.trend}>
            <div className={classes.trendCenter}>
              <div className={classes.trendImg}>
                <img src={trendnft4} />
              </div>
              <div className={classes.trendText}>
                <p>Science Jobs</p>
                <span>Venture Capitalist</span>
              </div>
              <div className={classes.trendSubText}>
                <div className={classes.firstText}>
                  <p>From </p>
                  <div>Not for sale</div>
                </div>
                <div className={classes.secondText}>
                  <p>Highest bid</p>
                  <span>2.835 ETH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trendingnft;
