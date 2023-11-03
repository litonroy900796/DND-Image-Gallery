import React, { useState } from 'react'

function SingleImage({image,index,updateCheck,selectItems}) {
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
        updateCheck(image.id,!isChecked);
      };
 
  return (
    <div
   
    className={`border  rounded-md text-center mx-auto single-image relative ${index===0 ? "feature_image ":""}`}
  >
    <img src={image.image} alt="image1" className="rounded-md" />
    <div className="absolute left-4 z-10 top-3">
      {
        selectItems.includes(image.id) &&   
        <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
        className="form-checkbox  opacity-0 text-indigo-600 checkbox h-5 w-5 checked:bg-indigo-600"
      />  
    }
    <input
    type="checkbox"
    checked={isChecked}
    onChange={toggleCheckbox}
    className="form-checkbox  opacity-0 text-indigo-600 checkbox h-5 w-5 checked:bg-indigo-600"
  />
   
    </div>
    <div class="overlay z-[6]"></div>
  </div>
  )
}

export default SingleImage
