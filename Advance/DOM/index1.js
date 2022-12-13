// image slider
let photos = ["images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img6.jpg","images/img7.jpg"];
let img = document.getElementById("img");
let count = 0;

function next(){
    count++;

    if(count > photos.length){
        count = 0;
        img.src = photos[count];
    }else{
        img.src = photos[count];
    }
}

function prev() {
    count--;

    if(count < 0){
        count = photos.length - 1;
        img.src = photos[count];
    }else{
        img.src = photos[count];
    }
}

let image = document.getElementById("image");

function lightOn(){
    image.src = "images/pic_bulbon.gif";
}
function lightOff(){
    image.src = "images/pic_bulboff.gif";
}

// dynamic css style changeing
let btn = document.getElementById("btn");
btn.addEventListener("click", ()=> {
    let para = document.getElementById("heading");
    // para.classList.add("heading");
    para.classList.toggle("heading");
})