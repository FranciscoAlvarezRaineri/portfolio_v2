import React from "react";

const Landing = () => {
  return (
    <div id="header" className="h-screen bg-gray-800 flex flex-wrap-reverse">
      <div className="flex flex-col justify-evenly md:basis-2/3 basis-full">
        <div className="text-gray-200 font-mono text-3xl justify-center m-4 flex lg:flex-row flex-col">
          <h1 className="mr-5 text-center">Hi! I'm</h1>
          <p className="text-center">Francisco Alvarez Raineri</p>
        </div>
        <h1 className="text-gray-200 font-mono text-3xl text-center m-4">
          Full Stack Developer
        </h1>
        <h1 className="text-gray-200 font-mono text-3xl text-center m-4">
          Welcome to my Portfolio!
        </h1>
        <h1 className="text-gray-200 font-mono text-3xl text-center m-4">
          <span className="text-red-800">Please beware! </span> <br></br>
          <span className="text-yellow-500"> Site under construction</span>,
          <br></br>
          continue at your own risk...
          <br></br>
          <span className="text-xl">😂 😂 😂</span>
        </h1>
      </div>
      <div className="md:basis-1/3 basis-full flex justify-center items-center">
        <img
          src="/Retrato low.jpg"
          alt="Portrait"
          className="w-auto max-h-96 aspect-square border rounded-full shadow-md shadow-gray-600 m-4"
        ></img>
      </div>
    </div>
  );
};

export default Landing;
