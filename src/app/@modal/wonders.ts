import { StaticImageData } from "next/image";
// ইমেজগুলো ইম্পোর্ট করে নাও (পাথ চেক করে নিও)
import photo1 from "./photos/1 (1).jpg";
import photo2 from "./photos/1 (2).jpg";
import photo3 from "./photos/1 (3).jpg";
import photo4 from "./photos/1 (4).jpg";
import photo5 from "./photos/1 (5).jpg";
import photo6 from "./photos/1 (6).jpg";
import photo7 from "./photos/1 (7).jpg";

export interface WonderImage {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
}

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Great Wall of China",
    src: photo1,
    photographer: "Photo by Max van den Oetelaar on Unsplash",
    location: "China",
  },
  {
    id: "2",
    name: "Petra",
    src: photo2,
    photographer: "Photo by Reiseuhu on Unsplash",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Christ the Redeemer",
    src: photo3,
    photographer: "Photo by Chris Bair on Unsplash",
    location: "Brazil",
  },
  {
    id: "4",
    name: "Machu Picchu",
    src: photo4,
    photographer: "Photo by Alexander Schimmeck on Unsplash",
    location: "Peru",
  },
  {
    id: "5",
    name: "Chichen Itza",
    src: photo5,
    photographer: "Photo by Filip Gielda on Unsplash",
    location: "Mexico",
  },
  {
    id: "6",
    name: "Colosseum",
    src: photo6,
    photographer: "Photo by Andrea Venzano on Unsplash",
    location: "Italy",
  },
  {
    id: "7",
    name: "Taj Mahal",
    src: photo7,
    photographer: "Photo by Julian Yu on Unsplash",
    location: "India",
  },
];

export default wondersImages;