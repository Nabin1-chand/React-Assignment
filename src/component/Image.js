
import React, {useState,useEffect} from 'react';
import './Todo.css';
const Image = () => {
    const[images , setImages] = useState([]);
    const [imageURLs , setImageURLs] = useState([]);

    useEffect(()=>{
        if(images.length < 1) return;
          const newImageURLs =[];
          images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
          setImageURLs(newImageURLs);
        }, [images]);
        function onImageChange(e) {
          setImages([...e.target.files]);
        }
 
  return (
    <>
     <input type ="file" multiple accept ="image/*" onChange={onImageChange}/>
     <div className="image">
     { imageURLs.map(imageSrc=> <img src={imageSrc}/>)}
     </div>
     

   
      
  
      
    
    </>
  );

}

export default Image