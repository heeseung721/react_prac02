import React, { useState } from "react";

import "../App.css";
import Products from "../components/Products";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);

  return (
    <div>
      {/* showProducts가 true일 경우에만 Products를 보여주는 토글  */}
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}
