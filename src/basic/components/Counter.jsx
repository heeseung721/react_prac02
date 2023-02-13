import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);

  console.log("total:" + total);
  console.log(onClick);
  // props로 받아온 total은 총 누적 카운트횟수,
  // onClick은 const handleClick = () => setCount((prev) => prev + 1); 함수를 말함

  return (
    <div className="counter">
      <p className="number">
        {count} <span className="total">/{total}</span>
      </p>
      <button
        className="button"
        onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
        }}
      >
        Add
      </button>
    </div>
  );
}
