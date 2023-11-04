import React from "react";
import { ReactSortable } from "react-sortablejs";
import AddImage from "./AddImage";

import SingleImage from "./singleImage";
function ImageGallery({ updateCheck, setImageDate, imageData, selectItems }) {
  // Drag and Drop Handler
  const onDragDropEnds = (oldItem, newItem) => {
    console.log(oldItem, newItem);
  };
  return (
    <div className="md:px-4 px-2 py-4  justify-between gap-5 ">
      {!!imageData?.length ? (
        <>
          {/* sortable image gallery */}
          <ReactSortable
            list={imageData}
            setList={(newlist) => setImageDate(newlist)}
            className="grid-layout"
            onEnd={({ oldIndex, newIndex }) =>
              onDragDropEnds(oldIndex, newIndex)
            }
          >
            {imageData?.map((image, index) => {
              return (
                <SingleImage
                  key={image.id}
                  image={image}
                  index={index}
                  updateCheck={updateCheck}
                  selectItems={selectItems}
                />
              );
            })}
            {/* add image option */}
            <AddImage />
          </ReactSortable>
        </>
      ) : (
        <>
          <div className="flex py-4 flex-col gap-2 justify-center items-center ">
            <strong>No Image </strong>
          </div>
          {/* add image option */}
          <AddImage />
        </>
      )}
    </div>
  );
}

export default ImageGallery;
