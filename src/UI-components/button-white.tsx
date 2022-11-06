import React from "react";

function BtnWhite({ text }) {
  return (
    <a
      className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
      href=""
    >
      <span className="block rounded-full bg-white w-60 text-center text-base font-medium hover:bg-transparent">
        {text}
      </span>
    </a>
  );
}

export default BtnWhite;
