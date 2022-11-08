import React from "react";

export default function Header({ handlePrint }) {
  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="text-amber-1000 font-bold uppercase tracking-wide text-4xl m-2 font-serif">
            Invoice
          </h1>
        </div>
        {/* <div >
          <ul className="flex items-center justify-between flex-wrap ">
            <button
              onClick={handlePrint}
              className=" mt-4 bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500
            hover:bg-transparent
            hover:text-gray-500 transition-all duration-300
            "
            >
              print
            </button>
            <li className="mx-2">
              <button
                className=" mt-4 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500
            hover:bg-transparent
            hover:text-blue-500 transition-all duration-300
            "
              >
                download
              </button>
            </li>
            <li>
              <button
                className=" mt-4 bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500
            hover:bg-transparent
            hover:text-blue-500 transition-all duration-300
            "
              >
                sent
              </button>
            </li>
          </ul>
        </div> */}
      </header>
    </>
  );
}
