import React from "react";

function Cards(props) {
  return (
    <div className=" rounded-md border-opacity-75 border-4 mt-10 items-center justify-center w-3/4 border-indigo-800 ">
      <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-center text-indigo-800 font-bold pt-10">
        {props.title1}
      </h2>
      <div className="flex flex-col justify-evenly items-center mt-10 pb-10">
        <img src={props.img} alt="jims" className={props.imgprop} />

        <div className="w-2/3 flex flex-col flex-grow-0">
          <h2 className="lg:text-2xl md:text-xl sm:text-xl  pl-10 font-semibold text-center">
            {props.title2}
          </h2>
          <p className="lg: text-center">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
