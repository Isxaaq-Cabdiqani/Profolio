import { useState } from "react";

function ImageSlider() {
  const dummydata = [
    {
      id: 1,
      imgl: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
      Name: "mountains view",
      description: "beautiful mountains and clear sky",
    },
    {
      id: 2,
      imgl: "https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg",
      Name: "Wild green field",
      description: "Wide field with refreshing sky",
    },
    {
      id: 3,
      imgl: "https://images.pexels.com/photos/34912941/pexels-photo-34912941.jpeg",
      Name: "Forest view",
      description: "Beautiful forest and mountain",
    },
  ];

  const [slider, setSlider] = useState([...dummydata]);
  const [selector, setSelector] = useState(0);

  function next() {
    setSelector((p) => (p + 1) % slider.length);
  }

  function back() {
    setSelector((p) => (p - 1 + slider.length) % slider.length);
  }

  return (
    <>
      <div className="ImageSlider">
        <h2>Image Gallery</h2>
        <br />
        <div className="image_container">
          <img src={slider[selector].imgl} />
        </div>
        <h3>{slider[selector].Name}</h3>
        <p>{slider[selector].description}</p>
        <button onClick={back}>Back</button>
        <button onClick={next}>Next</button>
        <p>
          {slider[selector].id}/{slider.length}
        </p>
      </div>
    </>
  );
}

export default ImageSlider;
