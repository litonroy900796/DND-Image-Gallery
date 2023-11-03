import React, { useState } from 'react'
import Header from './header'
import ImageGallery from './imageGallery';
function Layout() {
    const [selectImage,setSelectImage] = useState([]);
    const handleSelect =(id,isChecked)=>{
        if(isChecked){
            setSelectImage([...selectImage,id])
        }else{
            setSelectImage(selectImage.filter((itemId)=> itemId !== id))
        } 
    }
  return (
    <div>
       <Header selectImage={selectImage} />
       <ImageGallery updateCheck={handleSelect} />
    </div>
  )
}

export default Layout
