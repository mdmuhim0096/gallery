let gallary = document.getElementById("table");
let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");

let deg = 0;

rightBtn.onclick = () => {
    deg -= 45;
    gallary.style.transform = `perspective(1000px) rotateY(${deg}deg)`;
}

leftBtn.onclick = () => {
    deg += 45;
    gallary.style.transform = `perspective(1000px) rotateY(${deg}deg)`;
}

document.addEventListener("keyup", (e) => {
    if (e.key == "ArrowRight") {
        deg -= 45;
        gallary.style.transform = `perspective(1000px) rotateY(${deg}deg)`;
    } else if (e.key == "ArrowLeft") {
        deg += 45;
        gallary.style.transform = `perspective(1000px) rotateY(${deg}deg)`;
    }
})