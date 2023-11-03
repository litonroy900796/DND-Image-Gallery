import React from "react";

function Header({selectImage,handleDelete}) {
  return (
    <div className="flex items-center md:px-4 px-2 justify-between py-2 border-b border-gray-300 ">
       {
        !!selectImage.length ? <div className="flex items-center gap-2">
          <input id="select" type="checkbox" checked />

          <label
            htmlFor="select"
            className="cursor-pointer text-xl font-semibold"
          >
            {selectImage.length} File Selected
          </label>
       
      </div>
      : <span className="cursor-pointer text-xl font-semibold">Gallery</span>
       }
     
        <small onClick={handleDelete} className="text-[red] cursor-pointer text-base ">Delete File</small>
    </div>
  );
}

export default Header;
