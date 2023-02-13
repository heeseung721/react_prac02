import React, { useState } from "react";
import Counter from "../components/Counter";
import "../App.css";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? "🔥" : "❄️"}
      </div>
      <div className="counters">
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
        {/* 컴포넌트가 여러개 있어도 state는 각각 따로 관리 됨 */}
      </div>
    </div>
  );
}
