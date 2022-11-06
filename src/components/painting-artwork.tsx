import React, { useState, useEffect } from "react";
import * as Unicons from "@iconscout/react-unicons";
import BtnBlack from "../UI-components/button-black.tsx";
import BtnWhite from "../UI-components/button-white.tsx";
import PagesPath from "./pages-path.tsx";
import Description from "./description.tsx";

function PaintingArtwork() {
  const page = window.location.pathname.charAt(1);
  const [apiData, setApiData] = useState<any[]>([]);
  const [lowerCategory, setLowerCategory] = useState("");
  const [depth, setDepth] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  fetch(
    "https://storage.googleapis.com/ya-misc/interviews/front/examples/" +
      page +
      ".json"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      fetchApi(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));

  function fetchApi(data) {
    setApiData(data);

    const depth = apiData.dimensions.depth;
    const height = apiData.dimensions.height;
    const width = apiData.dimensions.width;
    const fullname = apiData.artistShort.fullname;
    const country = apiData.artistShort.country;
    const countryUpper = country.charAt(0).toUpperCase() + country.slice(1);
    const category = apiData.category;
    const lowerCat = category.charAt(0) + category.substring(1).toLowerCase();

    setDepth(depth);
    setHeight(height);
    setWidth(width);
    setCountry(countryUpper);
    setName(fullname);
    setLowerCategory(lowerCat);
  }

  return (
    <>
      <div className="m-7">
        <PagesPath title={apiData.title}></PagesPath>
      </div>
      <section>
        <div className="mx-auto max-w-screen-1xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 gap-y-4">
            <div className="z-10 lg:py-12">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt={apiData.title}
                  src={apiData.imageUrl}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex justify-center mt-1">
                <a
                  href={apiData.imageUrl}
                  target="_blank"
                  className="text-center flex-1 text-sm"
                >
                  <Unicons.UilEye></Unicons.UilEye> VIEW IN A ROOM
                </a>
                <a href="" className="text-center flex-1 text-sm">
                  <Unicons.UilCube></Unicons.UilCube> AR VIEW
                </a>
              </div>
            </div>

            <div className="relative flex bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-12">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-2xl font-bold sm:text-3xl " id="title">
                      {apiData.title}
                    </h2>
                  </div>
                  <div className="my-auto">
                    <Unicons.UilStar></Unicons.UilStar>
                  </div>
                </div>
                <div className="text-orange-400 font-medium my-2">
                  {name}
                  <span className="text-slate-400 ml-3"> {country}</span>
                </div>
                <div className="text-sm font-medium">
                  {" "}
                  {lowerCategory}, {apiData.creationYear}
                </div>
                <div className="text-sm font-medium mt-1">
                  {" "}
                  {width} W x {height} H x {depth} D in{" "}
                </div>
                <div className="text-xl font-bold my-6"> {apiData.price} €</div>
                <BtnBlack text="Aquire"></BtnBlack>
                <div className="mt-3"></div>
                <BtnWhite text="Make an offer"></BtnWhite>
                <div className="mt-2"></div>

                <div className="text-xs font-medium mt-3">
                  <Unicons.UilHourglass></Unicons.UilHourglass> PRE-RESERVE FOR
                  24 HOURS{" "}
                </div>

                <div className="text-xs font-medium mt-2">
                  <Unicons.UilCheck></Unicons.UilCheck> 131€ estimated delivery
                  fee <span className="font-normal">for France</span>
                </div>

                <p className="mt-4">
                  In order to obtain an accurate delivery fee, please enter your
                  country of residence and zip code :
                </p>
                <div className="flex mt-5">
                  <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Email"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                    <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                      Country of residence
                    </span>
                  </label>
                  <label className="ml-5 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Email"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                    <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                      Zip code
                    </span>
                  </label>
                </div>
                <div className="text-xs mt-3">
                  <Unicons.UilTruck></Unicons.UilTruck> Delivery fees is 129€
                </div>
                <div className="text-xs mt-3">
                  <Unicons.UilMapMarker></Unicons.UilMapMarker> Free pickup in{" "}
                  <span className="font-medium">Bruxelles, Belgium</span>
                </div>

                <div className="text-xs mt-2">
                  <Unicons.UilCheck></Unicons.UilCheck> Try 14 days at home for
                  free
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="m-8 max-w-2xl">
        <Description description={apiData.description}></Description>
      </div>
    </>
  );
}

export default PaintingArtwork;
