import classes from "./Footer.module.scss";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.footerFlex}>
          <div className={classes.col}>
            <div className={classes.supportOne}>Marketplace</div>
            <ul>
              <li>
                <a href="#s">Explore</a>{" "}
              </li>
              <li>
                <a href="#s">Help Center</a>{" "}
              </li>
              <li>
                <a href="#s">Become a Partner</a>{" "}
              </li>
              <li>
                <a href="#s">About Us</a>{" "}
              </li>
              <li>
                <a href="#s">Platform Status</a>{" "}
              </li>
            </ul>
          </div>

          <div className={classes.col}>
            <div className={classes.supportOne}>Community</div>
            <ul>
              <li>
                <a href="#s">Profile</a>
              </li>
              <li>
                <a href="#s">Favorites</a>
              </li>
              <li>
                <a href="#s">Watchlist</a>
              </li>
              <li>
                <a href="#s">My Collections</a>
              </li>
              <li>
                <a href="#s">Rankings</a>
              </li>
              <li>
                <a href="#s">Activity</a>
              </li>
            </ul>
          </div>

          <div className={classes.col}>
            <div className={classes.supportOne}>Categories</div>
            <ul>
              <li>
                <a href="#s">Arts</a>
              </li>

              <li>
                <a href="#s">Collectibles</a>
              </li>

              <li>
                <a href="#s">Games</a>
              </li>

              <li>
                <a href="#s">Sports</a>
              </li>

              <li>
                <a href="#s">Trading Cards</a>
              </li>
              <li>
                <a href="#s">Photography</a>
              </li>
            </ul>
          </div>
          <div className={classes.col}>
            <div className={classes.supportOne}>Marketplace</div>
            <div>
              <p>
                If you’re an NFT enthusiast or are looking to download our NFT
                App.
              </p>
              <div className={classes.input}>
                <input type="text" placeholder="Type Your Email" />
                <button>Subscribe</button>
              </div>
              <div className={classes.socials}>
                <a href="#s">
                  <img src={facebook} />
                </a>
                <a href="#s">
                  <img src={twitter} />
                </a>
                <a href="#s">
                  <img src={instagram} />
                </a>
                <a href="#s">
                  <img src={linkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.subLine}>
        <div className={classes.container}>
          <div className={classes.subWrap}>
            <div>
              <span>Privacy Policy</span>
              <span>License</span>
              <span>API</span>
            </div>
            <div className={classes.date}>@ 2021 All rights reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
