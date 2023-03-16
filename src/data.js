import { v4 as uuidv4 } from "uuid";
import BeaverCreek from "./img/BeaverCreek.jpg";
import Rewind from "./img/Rewind.jpg";
import Badlands from "./img/Badlands.jpg";
import Ambleside from "./img/Ambleside.jpg";
import Persist from "./img/Persist.jpg";
import Oasis from "./img/Oasis.jpg";
import Fallin from "./img/Fallin.jpg";
import Daydreams from "./img/Daydreams.jpg";
import Destination from "./img/Destination.jpg";

function chillWaves() {
  return [
    {
      name: "Beaver Creek",
      cover: `${BeaverCreek}`,
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8078",
      color: ["#ECBB74", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Rewind",
      artist: "SwuM, Afternoon Bike Ride",
      cover: `${Rewind}`,
      id: uuidv4(),
      color: ["#F58863", "#5F434A"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30134",
      active: false,
    },
    {
      name: "Badlands",
      cover: `${Badlands}`,
      artist: "Hanz, Makzo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20126",
      color: ["#F3AF8E", "#C6A7D5"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Ambleside",
      artist: "Aarigod",
      cover: `${Ambleside}`,
      id: uuidv4(),
      color: ["#ADC772", "#3D4140"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12999",
      active: false,
    },
    {
      name: "Persist",
      cover: `${Persist}`,
      artist: "Invention",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8291",
      color: ["#F79AAD", "#5771B0"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Oasis",
      cover: `${Oasis}`,
      artist: "Hanz, Makzo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11768",
      color: ["#FBBC69", "#6F4B3B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Fallin'",
      cover: `${Fallin}`,
      artist: "Ruck P, Jaz Lund",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20561",
      color: ["#CB8794", "#2D2F4A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover: `${BeaverCreek}`,
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#ECBB74", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Daydreams",
      artist: "Evil Needle",
      cover: `${Daydreams}`,
      id: uuidv4(),
      color: ["#EF9D82", "#683A75"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8883",
      active: false,
    },
    {
      name: "Destination",
      artist: "Ruck P, Djemeia",
      cover: `${Destination}`,
      id: uuidv4(),
      color: ["#ED8DB6", "#695C9D"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8157",
      active: false,
    },
  ];
}

export default chillWaves;
