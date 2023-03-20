import "./App.css";
import Brands from "./components/Brands/Brands";
import Etherum from "./components/Etherum/Etherum";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nftdrops from "./components/Nftdrops/Nftdrops";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main />
        <Nftdrops />
        <Etherum />
        <Brands />
        <Footer />
      </div>
    </div>
  );
}

export default App;
