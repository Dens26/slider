// Création d'une classe d'images
class Image {
    constructor(src, alt, title, subtitle) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.subtitle = subtitle;
    }
}
// Variables
let index =0;

// Initialisation d'un tableau d'objet images
const imageList = [];
for (let i = 0; i < 3; i++) {
    imageList.push(new Image(`./images/cat-${i + 1}.jpg`, `image de chat ${i + 1}`, `Slide ${i + 1}`, `Subtitle ${i + 1}`));
}

let image = document.querySelector('.image');
let title = document.querySelector('.title');
let subtitle = document.querySelector('.subtitle');

slide(index);

function slide(index) {
    // image.height = image.width;
    image.src = imageList[index].src;
    image.alt = imageList[index].alt;
    title.textContent = imageList[index].title;
    subtitle.textContent = imageList[index].subtitle;
}

const left = document.querySelector('.left');
left.addEventListener("click", evt =>{
    if (index == 0){
        index = 2;
    }
    else{
        index --;
    }
    slide(index);
},false)

const right = document.querySelector('.right');
right.addEventListener("click", evt =>{
    if (index == 2){
        index = 0;
    }
    else{
        index ++;
    }
    slide(index);
},false)