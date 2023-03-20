import logo from "../../assets/mainlogo.png";
import searchlogo from "../../assets/icons/search.svg";
import classes from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../../Redux/reducers/searchSlice/searchSlice";

const Header = () => {
  const { value } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  console.log(value);

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logo} />
        </div>
        <div className={classes.navbar}>
          <a href="#s">Explore</a>
          <a href="#s">Stats</a>
          <a href="/drops">Drops</a>
          <a href="#s">Activity</a>
        </div>
        <div className={classes.search}>
          <input
            type={Text}
            placeholder="Search..."
            onChange={(event) => dispatch(changeValue(event.target.value))}
          />
          <div className={classes.inputlogo}>
            <img src={searchlogo} />
          </div>
        </div>
        <div className={classes.button}>
          <button>Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
