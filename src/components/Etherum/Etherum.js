import classes from "./Etherum.module.scss";
import bigEtherum from "../../assets/bigetheriumimg.png";
import bigEtherumElipse from "../../assets/icons/etherum elipse.png";

const Etherum = () => {
  return (
    <div className={classes.mainEtherum}>
      <div className={classes.container}>
        <div className={classes.etherum}>
          <div className={classes.elipse}>
            <img src={bigEtherumElipse} />
          </div>
          <div>
            <img src={bigEtherum} />
          </div>
        </div>
        <div className={classes.etherumInfo}>
          <div className={classes.createNft}>
            Create, Sell well & Collect Your Best Very Fast NFTs.
          </div>
          <div className={classes.sellNft}>
            Create, Sell well & Collect Your Best Very Fast NFTs.The purpose of
            lorem ipsum is to create a natural looking block of text (sentence,
            paragraph, page, etc.) that doesn't distract from the layout. A
            practice not without controversy, laying out pages with meaningless
          </div>
          <div className={classes.walletBtn}>
            <button>Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Etherum;
