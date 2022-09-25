let img = [
    "cat.jpg",
    "dog.jpg",
    "doremon.jpg"
]
let empty = [0, 0, 0];

function randomImg() {
    return img[Math.floor(Math.random() * 3)];
}

let img1 = document.getElementById("image1");
img1.addEventListener("click", function () {
    empty.splice(0, 1, randomImg());
    document.getElementById('image1').src = empty[0];
    check();
})

let img2 = document.getElementById("image2");
img2.addEventListener("click", function () {
    empty.splice(1, 1, randomImg());
    document.getElementById('image2').src = empty[1];
    check();
})
console.log(empty);
let img3 = document.getElementById("image3");
img3.addEventListener("click", function () {
    empty.splice(2, 1, randomImg());
    document.getElementById('image3').src = empty[2];
    check();
})
function check() {
    if (img[0] == empty[0] && img[0] == empty[1] && img[0] == empty[2]) {
        alert("win");
    }else if (img[1] == empty[0] && img[1] == empty[1] && img[1] == empty[2]) {
        alert("win");
    } else if (img[2] == empty[0] && img[2] == empty[1] && img[2] == empty[2]) {
        alert("win");
    }
}