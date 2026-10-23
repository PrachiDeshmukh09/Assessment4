import { useState } from "react";
function Favourite() {
  const [favorites, setFavorites] = useState([]);
  const coins = ["Bitcoin", "Ethereum", "Dogecoin"];
  function addFavorite(coin) {
    if (!favorites.includes(coin)) {
      setFavorites([...favorites, coin]);
    }
  }
  return (
    <div>
      <h2>Favorite Coins</h2>
      {coins.map((coin) => (
        <button key={coin} onClick={() => addFavorite(coin)}>
          Add {coin}
        </button>
      ))}

      
    </div>
  );
}
export default Favourite;


