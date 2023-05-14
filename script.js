const car = document.querySelector(".car"),
firstImg = car.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to car scroll left value
    let scrollWidth = car.scrollWidth - car.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = car.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = car.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the car scroll left else add to it
        car.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});