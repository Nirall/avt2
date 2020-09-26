import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import img8 from "./images/8.png";

const arr1 = [img1, img2, img3, img4];
const arr2 = [img5, img6, img7, img8];
const arr3 = [...arr1, ...arr2];


const imagesArr = [arr1, arr2, arr3];

export default imagesArr;