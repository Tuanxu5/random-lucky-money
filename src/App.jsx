import { useState } from "react";
import { haimuoik } from "../public/haimuoik.jpg";
import { haitramk } from "../public/haitramk.jpeg";
import { mottramk } from "../public/mottramk.jpg";
import { muoik } from "../public/muoik.jpeg";
import { namk } from "../public/namk.jpeg";
import { nammuoik } from "../public/nammuoik.jpeg";
import { namtramk } from "../public/namtramk.jpeg";

import "./App.css";

function App() {
  const listMoney = [5000, 10000, 20000, 50000, 100000, 200000, 500000];

  const [selectedMoney, setSelectedMoney] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (selectedMoney === 0) {
      const randomMoney = getRandomMoneyWithWeights();
      setSelectedMoney(randomMoney);
      setIsClicked(true);
    }
  };

  const getRandomMoneyWithWeights = () => {
    const weights = [0.1, 0.2, 0.3, 0.2, 0.1, 0.005, 0.005];
    const rand = Math.random();
    let cumulativeProbability = 0;
    for (let i = 0; i < weights.length; i++) {
      cumulativeProbability += weights[i];
      if (rand <= cumulativeProbability) {
        return listMoney[i];
      }
    }
    return listMoney[listMoney.length - 1];
  };
  const handleResetMoney = () => {
    setSelectedMoney(0);
    setIsClicked(false);
  };

  const getImageUrl = (moneyValue) => {
    switch (moneyValue) {
      case 5000:
        return namk;
      case 10000:
        return muoik;
      case 20000:
        return haimuoik;
      case 50000:
        return nammuoik;
      case 100000:
        return mottramk;
      case 200000:
        return haitramk;
      case 500000:
        return namtramk;
      default:
        return "";
    }
  };

  return (
    <div className="App">
      <div>
        <div className={`gen-money ${isClicked ? "clicked" : ""}`}>
          <img src={getImageUrl(selectedMoney)} alt="" className={`img-money`} />
        </div>
      </div>
      <div>
        <img
          src="https://i.pinimg.com/564x/e7/b0/31/e7b0314bf3464ad421fd55cc5eeae2c5.jpg"
          alt=""
          onClick={handleClick}
          className="img-bao-li-xi"
        />
      </div>
      {selectedMoney !== 0 && (
        <div style={{ textAlign: "center", marginTop: "50px" }} onClick={handleResetMoney}>
          Bắt đầu lại
        </div>
      )}
    </div>
  );
}

export default App;
