import React from "react";
import * as Unicons from "@iconscout/react-unicons";

function PagesPath({title}) {
  const page = window.location.pathname.charAt(1);
  return (
    <>
      <h3 className="inline-flex items-center">
        Home
        <span>
          <Unicons.UilAngleRight></Unicons.UilAngleRight>
        </span>
        <a href="/">Painting</a>
        <span>
          <Unicons.UilAngleRight></Unicons.UilAngleRight>
        </span>
        <a href={page}>{page}</a>
        <span>
          <Unicons.UilAngleRight></Unicons.UilAngleRight>
        </span>
        {title}
      </h3>
    </>
  );
}

export default PagesPath;
