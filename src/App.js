
import { useState } from 'react';
import Header from './components/header';
import ImageGallery from './components/imageGallery';
import { imageGalleryData } from "./utils/imageDate";
function App() {
  const [selectImage,setSelectImage] = useState([]);
  console.log("🚀 ~ file: App.js:8 ~ App ~ selectImage:", selectImage)
  const [imageData, setImageDate] = useState(imageGalleryData);
  // update select count
    const handleSelect =(id,isChecked)=>{
        if(isChecked){
            setSelectImage([...selectImage,id])
        }else{
            setSelectImage(selectImage.filter((itemId)=> itemId !== id))
        } 
    }
    // delete method 
    const handleDelete =()=>{
        const updateData= imageData.filter((item)=> !selectImage.includes(item.id));
        setImageDate(updateData);
        setSelectImage([])
    }
  return (
    <div className="container  my-4 shadow-2xl rounded-md bg-white border border-gray-200">
       <Header selectImage={selectImage} handleDelete={handleDelete} />
       <ImageGallery 
       updateCheck={handleSelect}
        imageData={imageData} 
        setImageDate={setImageDate}
       selectItems={selectImage}
        />
    
      </div>
  );
}

export default App;
