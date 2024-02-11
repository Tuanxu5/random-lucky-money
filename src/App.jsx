import { useState } from "react";
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
        return "https://upload.wikimedia.org/wikipedia/vi/7/7c/%C4%90%E1%BB%93ng_b%E1%BA%A1c_5000_%C4%91%E1%BB%93ng.jpg";
      case 10000:
        return "https://static.wixstatic.com/media/6e3cc1_88046490f5734e9191bf0108564cf782~mv2.jpg/v1/fill/w_560,h_274,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/6e3cc1_88046490f5734e9191bf0108564cf782~mv2.jpg";
      case 20000:
        return "https://en.numista.com/catalogue/photos/viet_nam/63fdf045478aa8.79782893-original.jpg";
      case 50000:
        return "https://www.theworldnote.com/uploads/allimg/2004/1_200428100050_1.jpg";
      case 100000:
        return "https://en.numista.com/catalogue/photos/viet_nam/64f38ae1a90dc4.91546703-original.jpg";
      case 200000:
        return "https://www.theworldnote.com/uploads/allimg/2004/1_200428100853_1.jpg";
      case 500000:
        return "https://en.numista.com/catalogue/photos/viet_nam/600ec24b7720e7.92083904-original.jpg";
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
