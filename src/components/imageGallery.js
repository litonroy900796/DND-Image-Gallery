import React from "react";
import { ReactSortable } from "react-sortablejs";

import SingleImage from "./singleImage";
function ImageGallery({updateCheck,setImageDate,imageData,selectItems}) {
     // Drag and Drop Handler
     const onDragDropEnds = (oldIndex, newIndex) => {
        console.log('Drag and drop other tasks');
        console.log(oldIndex, newIndex);
    };
  return (
    <div className="md:px-4 px-2 py-4  justify-between gap-5 ">
      <ReactSortable
        list={imageData}
        setList={(newlist) => setImageDate(newlist)}
        className="grid-layout"
       
     
       
        onEnd={({ oldIndex, newIndex }) => onDragDropEnds(oldIndex, newIndex)}
      >
        {imageData?.map((image, index) => {
          return <SingleImage
           key={index} image={image} 
           index={index}
            updateCheck={updateCheck}
            selectItems={selectItems}
             />;
        })}
      </ReactSortable>
    </div>
  );
}

export default ImageGallery;
