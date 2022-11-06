import React from "react";

function BtnBlack({ text }) {
  return (
    <a
      className="inline-block rounded-full bg-gradient-to-r from-orange-600 via-orange-400 to-yellow-300 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
      href=""
    >
      <span className="block rounded-full bg-white w-60 text-center font-medium hover:bg-transparent">
        {text}
      </span>
    </a>
  );
}

export default BtnBlack;
