import React from "react";
import "./Coin.css";

const Coin = ({
  image,
  name,
  symbol,
  current_price,
  market_cap,
  market_cap_change_percentage_24h,
  total_volume,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Rp.{current_price.toLocaleString()}</p>
          <p className="coin-volume">Rp.{market_cap.toLocaleString()}</p>
          {market_cap_change_percentage_24h < 0 ? (
            <p className="coin-percent red">
              {market_cap_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              {market_cap_change_percentage_24h.toFixed(2)}%
            </p>
          )}
          <p className="coin-marketcap">
            Mkt Cap: ${total_volume.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
