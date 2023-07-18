import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import image1 from './images/Dog5.jpg';
import image2 from './images/Dog2.jpg';
import image3 from './images/Dog3.jpg';
import image4 from './images/Dog4.jpg';
import image5 from './images/Lion5.jpg';
import image6 from './images/Lion6.jpg';
import image7 from './images/Lion3.jpg';
import image8 from './images/Lion7.jpg';
import image9 from './images/Tiger1.jpg';
import image10 from './images/Tiger5.jpg';
import image11 from './images/Tiger3.jpg';
import image12 from './images/Tiger4.jpg';
// import image2 from './images/Dog2.jpg';
// Import other images as needed


import React, { useState, useEffect } from 'react';

const imageUrls = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11, image12



  // Add more picture URLs as needed
];
// const imageUrls=['A','B','C','D','E','F','G'];
var string = ['Dog', 'Lion', 'Tiger'];
let numberArr = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11]
];
const App = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [randomImages, setRandomImages] = useState([]);
  const [neededUrls, setNeededUrls] = useState([]);
  const [name, setName] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  // let neededUrls = []

  useEffect(() => {

    generateRandomImages();
  }, []);
  const navigate = useNavigate()
  function goTo() {
    navigate('/login')
  }

  const generateRandomImages = () => {


    setName('');
    setNeededUrls([]);
    setSelectedImages([]);
    setRandomImages([]);
    // console.log(neededUrls);


    const pictureUrls = [...imageUrls];
    const shuffledImages = pictureUrls.sort(() => 0.5 - Math.random());
    const selected = shuffledImages.slice(0, 6);
    let x = Math.floor((Math.random() * 3));
    setName(string[x]);

    for (let i = 0; i < numberArr[x].length; i++) {

      // console.log(numberArr[x][i]," ",imageUrls[numberArr[x][i]])
      let v = imageUrls[numberArr[x][i]];
      setNeededUrls(prevNeededUrls => [...prevNeededUrls, v]);
      // neededUrls.push(v);


    }
    setRandomImages(selected);

  };

  const toggleImageSelection = (imageUrl) => {
    console.log(neededUrls);

    if (selectedImages.includes(imageUrl)) {
      setSelectedImages(selectedImages.filter((url) => url !== imageUrl));
    } else {
      setSelectedImages([...selectedImages, imageUrl]);
    }
    console.log(selectedImages);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    var element = document.getElementById('Cont');
    if (darkMode) {
      element.classList.add('dark-mode')
      console.log(element)
    }
    else {
      element.classList.remove('dark-mode');
      console.log(element)

    }

  }

  const handleFormSubmit = (e) => {
    var element = document.getElementById("button");

    element.style.cursor = "wait";

    element.innerHTML = "Checking...";
    //  inputData.disabled = true;
    element.disabled = true;

    var myfunc = function () {
      const matching = selectedImages.every(url => neededUrls.includes(url));
      let matching2 = 1;
      for (let i = 0; i < randomImages.length; i++) {
        var url = randomImages[i];
        if (selectedImages.includes(url)) {
          continue;
        }
        else {
          if (neededUrls.includes(url)) {
            matching2 = 0;
            break
          }
        }
      }

      // console.log(selectedImages);
      if (matching && matching2) {
        // Process the selected images here
        element.style.backgroundColor = "green";
        element.innerHTML = "Captcha Verified";
        element.disabled = true;
        element.style.cursor = "not-allowed";
        alert('Congo we verified u r not a robot')
        goTo();
        // console.log('Selected Images:', selectedImages);
      } else {
        element.style.backgroundColor = "red";
        element.style.cursor = "not-allowed";
        element.innerHTML = "Not Matched";
        element.disabled = true;
        alert('Dont Match Try Again()');
        // neededUrls=[];
        var myFunc = function () {
          element.style.backgroundColor = "#007bff";
          element.style.cursor = "pointer";
          element.innerHTML = "Verify Captcha";
          element.disabled = false;
          setNeededUrls([]);
          // setSelectedImagesselectedImages([]);
          setSelectedImages([]);
          setRandomImages([]);
          generateRandomImages();
          console.log('Hi there')
          console.log(selectedImages);
          console.log(neededUrls);
        }
        setTimeout(myFunc, 2000);
      }
    }
    setTimeout(myfunc, 2000);
  };

  return (
    <>

      <div className='Content' id='Cont'>
        
        <div className='Heading'>
          <h2 className='heading'>Verify Captcha</h2>
          <h3 className='heading2'>Selct All the Images of {name} if there are any</h3>
        </div>

        <div className="image-container">
          {randomImages.map((imageUrl) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt="Random Image"
              onClick={() => toggleImageSelection(imageUrl)}
              className={selectedImages.includes(imageUrl) ? 'selected' : 'picture'}
            />
          ))}
        </div>
        <div className='Button'>
          <button type="submit" id="button" onClick={handleFormSubmit}>Submit</button>
        </div>


      </div>
    </>

  );
};

export default App;
