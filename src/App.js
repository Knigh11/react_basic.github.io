import React from "react";
import './App.css';

function Apppicture(props) {
  console.log(props);
  return (
    <div className="picture">
      <img src={props.image} alt=""></img>
    </div>
  );
}

function App() {
  return (
    <Apppicture image="https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg"></Apppicture>
  );
}

export default App;
