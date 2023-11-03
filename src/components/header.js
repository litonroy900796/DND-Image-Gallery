import React from "react";

function Header() {
  return (
    <div className="flex items-center md:px-4 px-2 justify-between py-2 border-b border-gray-300 ">
      <div className="flex items-center gap-2">
       
          <input id="select" type="checkbox" checked />

          <label
            htmlFor="select"
            className="cursor-pointer text-xl font-semibold"
          >
            3 File Selected
          </label>
       
      </div>
        <small className="text-[red] cursor-pointer text-base ">Delete File</small>
    </div>
  );
}

export default Header;
