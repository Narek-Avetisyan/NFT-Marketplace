import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../Redux/reducers/searchSlice/searchSlice";
import userImg from "../assets/topnft1.png";
import priceIcon from "../assets/icons/Shape.svg";

export const store = configureStore({
  _state: {
    nfts: {
      topCollection: {
        userImg: <img src={userImg} />,
        title: "Bored Ape Yacht Club",
        ethPrice: "2.9K ETH",
        priceIcon: <img src={priceIcon} />,
        price: "10,450.00",
        procent: "+10.00%",
      },
    },
  },

  reducer: {
    search: searchReducer,
  },

  getState() {
    return this._state;
  },
});
