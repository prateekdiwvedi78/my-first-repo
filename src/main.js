import "./style.css";
import "./firebase.js";

console.log("Firebase Connected!");

const startPost = document.getElementById("startPost");
const popup = document.getElementById("postPopup");
const closeBtn = document.querySelector(".popup .close");

console.log(startPost);
console.log(popup);
console.log(closeBtn);

if (startPost && popup && closeBtn) {
    startPost.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });
} else {
    console.error("One or more elements were not found.");
}