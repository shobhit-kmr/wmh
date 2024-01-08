import React from "react";

function Btn() {
  return (
    <>

      <button class="relative ml-96 mt-10 flex h-[50px] w-40 items-center justify-center overflow-hidden bg-purple font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-purple hover:shadow-purple hover:before:border-[25px]">
        <span class="relative z-10">Button 2</span>
      </button>
    </>
  );
}

export default Btn;
