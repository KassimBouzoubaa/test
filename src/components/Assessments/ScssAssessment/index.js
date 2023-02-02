import React from "react";

export default function ScssAssessment() {
  return (
    <div className='grid grid-cols-1 divide-y divide-none text-left'>
      <h3 className='font-medium leading-tight text-3xl m-2 text-blue-600 w-fit'>
        1. Styling
      </h3>
      <p className='subpixel-antialiased w-fit m-2'>
        In this first test we will try out your skills in styling elements.
      </p>
      <p className='subpixel-antialiased w-fit m-2'>
        Your goal is to reproduce the checkerboard presented in the picture
        below with HTML elements, and SCSS or Tailwind styling.{" "}
        <span className='font-bold'>
          Before starting your work, please refer to the README for more
          detailed directions!
        </span>
      </p>
      <img src='/images/styling-test.png' alt='styling-test' />

      <div className=" ring ring-fuchsia-300 w-1/2 ">
        <div className="flex w-100">
        <div className=" ring ring-fuchsia-300 bg-fuchsia-400 w-1/5 flex justify-center items-center text-green-300 text-2xl hover:bg-green-300 hover:text-fuchsia-300 hover:justify-end hover:items-end ">
          john
          </div>
        <div className=" ring ring-fuchsia-300 bg-green-300 w-3/5 h-40 flex justify-end items-end p-3 text-fuchsia-300 text-2xl  hover:bg-fuchsia-400 hover:text-green-300 hover:justify-center hover:items-center ">doe</div>
        <div className=" ring ring-fuchsia-300 bg-fuchsia-400 w-1/5 flex justify-center items-center text-green-300 text-2xl  hover:bg-green-300 hover:text-fuchsia-300 hover:justify-end hover:items-end">john</div>
        </div>



    <div className=" ring ring-fuchsia-300 flex w-100">
    <div className="ring ring-fuchsia-300 bg-green-300 w-3/4 h-80 flex justify-end items-end p-3 text-fuchsia-300 text-2xl  hover:bg-fuchsia-400 hover:text-green-300 hover:justify-center hover:items-center">doe</div>
    <div className="ring ring-fuchsia-300 bg-fuchsia-400 w-1/4">
    <div className="ring ring-fuchsia-300 bg-green-300 h-1/2 flex justify-end items-end p-3 text-fuchsia-300 text-2xl  hover:bg-fuchsia-400 hover:text-green-300 hover:justify-center hover:items-center">doe</div>
    <div className="flex justify-center items-center h-1/2 p-3 text-green-300 text-2xl  hover:bg-green-300 hover:text-fuchsia-300 hover:justify-end hover:items-end">john</div>
    </div>
    </div>
</div>

    </div>
  );
}
