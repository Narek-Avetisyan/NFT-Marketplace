import Drops from "./Drops/Drops";
import classes from "./Nftdrops.module.scss";
import Nftres from "./Nftres/Nftres";
import Topcollections from "./Topcollection/Topcollection";
import Trendingnft from "./Trendingnft/Trendingnft";

const Nftdrops = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1>NFTs</h1>
          <h2>Selected notable drops</h2>
        </div>
        <Drops />
        <Topcollections />
        <Trendingnft />
        <Nftres />
      </div>
    </div>
  );
};

export default Nftdrops;
