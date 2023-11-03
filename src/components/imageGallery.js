import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { imageGalleryData } from "../utils/imageDate";
import SingleImage from "./singleImage";
function ImageGallery() {
  const [imageData, setImageDate] = useState(imageGalleryData);
     // Drag and Drop Handler
     const onDragDropEnds = (oldIndex, newIndex) => {
        console.log('Drag and drop other tasks');
        console.log(oldIndex, newIndex);
    };
  return (
    <div className="md:px-4 px-2 py-4  justify-between gap-5 ">
      <ReactSortable
        list={imageGalleryData}
        setList={(newlist) => setImageDate(newlist)}
        className="grid-layout"
        ghostClass="dropArea"
        handle=".dragHandle"
        preventOnFilter={true}
        onEnd={({ oldIndex, newIndex }) => onDragDropEnds(oldIndex, newIndex)}
      >
        {imageData?.map((image, index) => {
          return <SingleImage key={index} image={image} index={index} />;
        })}
      </ReactSortable>
    </div>
  );
}

export default ImageGallery;
