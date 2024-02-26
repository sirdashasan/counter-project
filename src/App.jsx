import React, { useState } from "react"; /* ADIM 0 */

export default function sayac() {
  const [sayi, setSayi] = useState(0);

  const artirici = () => {
    setSayi(sayi + 1);
  };

  const azaltici = () => {
    setSayi(sayi - 1);
  };

  const reset = () => {
    setSayi(0);
  };

  const stil = {
    fontSize: "1.5em",
    marginBottom: "0.5em",
    marginLeft: "1em",
    color: sayi % 2 === 0 ? "royalblue" : "crimson",
  };

  const sayacStil = {
    marginLeft: "1em",
  };

  return (
    <div className="widget-counter container">
      <h2 style={sayacStil}>Sayaç</h2>
      <div id="sayici" style={stil}>
        Sayi: {sayi} {sayi % 2 === 0 ? "çift sayıdır" : "tek sayıdır"}
        {""}
      </div>
      <div>
        <button id="artirici" onClick={artirici}>
          Artırıcı
        </button>
        <button id="decrement" onClick={azaltici}>
          Azaltıcı
        </button>
        <button id="resetCount" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
