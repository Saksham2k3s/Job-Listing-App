import React from "react";

function Loader() {
  return (
    <>
      <div className="min-h-[600px] w-full flex justify-center align-middle">
        <h4 className="text-[#ec4899] self-center ">
          Hang on, fetching the best opportunities for you...
        </h4>
      </div>
    </>
  );
}

export default Loader;
