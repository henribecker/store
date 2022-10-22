let count = 1;
document.getElementById("baner1").checked = true;

setInterval(function () {
    nextImage();
}, 4000)

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById("baner" + count).checked = true;
}