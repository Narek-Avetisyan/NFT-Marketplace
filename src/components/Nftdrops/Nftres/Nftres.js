import classes from "./Nftres.module.scss";
import resImg from "../../../assets/startnftmain.png";
import commentSvg from "../../../assets/icons/commenticon.svg";
import userImg from "../../../assets/icons/startuser.png";
import userImg1 from "../../../assets/nftuser2.png";
import userImg2 from "../../../assets/nftuser3.png";
import startImg1 from "../../../assets/startnft1.png";
import startImg2 from "../../../assets/startnft2.png";

const Nftres = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1>NFTs</h1>
          <h2>Resouces for getting started</h2>
        </div>
        <div className={classes.wrapBlock}>
          <div className={classes.leftBlock}>
            <div>
              <img src={resImg} />
            </div>
            <div className={classes.startBlock1}>
              <div className={classes.wraper}>
                <button>NFT Token</button>
                <div className={classes.commentBlock}>
                  <a>
                    <img src={commentSvg} />
                  </a>
                  <span className={classes.comment}>No Comment</span>
                </div>
              </div>
              <div className={classes.txt}>
                <p>The Seven Secrets I should have received NFTs.</p>
              </div>
              <div className={classes.userBlock}>
                <div className={classes.userImg}>
                  <img src={userImg} />
                </div>
                <div className={classes.userBlockInfo}>
                  <p>Election Season</p>
                  <span>June 2, 2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.rightBlock}>
            <div className={classes.columns}>
              <div className={classes.column1}>
                <div>
                  <img src={startImg1} />
                </div>
                <div className={classes.buttonWrap}>
                  <div className={classes.buttonsBlock}>
                    <button>Game</button>
                    <button>NFT</button>
                    <span>
                      <img src={commentSvg} /> <span>No Comment</span>
                    </span>
                  </div>
                  <p>I think I minted duplicate NFTs</p>
                  <div className={classes.userSubBlock}>
                    <a>
                      <img src={userImg1} />
                    </a>
                    <div>
                      <div className={classes.userName}>Courtney Henry</div>
                      <span className={classes.userDate}>May 27, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.column1}>
                <div className={classes.startImg}>
                  <img src={startImg2} />
                </div>
                <div className={classes.buttonWrap}>
                  <div className={classes.buttonsBlock}>
                    <button className={classes.nftButton}>NFT Token</button>
                    <button>NFT</button>
                    <span>
                      <img src={commentSvg} /> <span>No Comment</span>
                    </span>
                  </div>
                  <p>The Marketplace isn’t working</p>
                  <div className={classes.userSubBlock}>
                    <a>
                      <img src={userImg2} />
                    </a>
                    <div>
                      <div className={classes.userName}>Courtney Henry</div>
                      <span className={classes.userDate}>May 27, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nftres;
