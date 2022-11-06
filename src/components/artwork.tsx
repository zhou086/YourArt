import React from "react";
import PaintingArtwork from "./painting-artwork.tsx";
import Swipper from "./swipper.tsx";

function Artwork() {
  return (
    <>
      <PaintingArtwork></PaintingArtwork>
      <div className="m-7 mt-12">
        <Swipper></Swipper>
      </div>
    </>
  );
}

export default Artwork;
