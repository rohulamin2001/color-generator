// RGB input box selection 
const rgbField = document.querySelector(".rgb-field")

// Change Color Button selection 
const changeColorBtn = document.querySelector(".change-color-btn");
// copy button selection 
const copyBtn = document.querySelector(".middle-container button")
    // full body selection 
let body = document.body;

// toast message Div declearation
let toastDiv = null;
// add click event listener for generate random rgb color

changeColorBtn.addEventListener("click", function() {;

    const storeRGB = generateRGBcolor();

    console.log(storeRGB);

    rgbField.value = storeRGB;
    body.style.backgroundColor = storeRGB;
    body.style.transition = "all .5s";
    console.log()
})

// random rgb color generator function
function generateRGBcolor() {
    const x = Math.floor(Math.random() * 255);
    const red = x.toString(16);
    const y = Math.floor(Math.random() * 255);
    const green = y.toString(16);
    const z = Math.floor(Math.random() * 255);
    const blue = z.toString(16);
    // if you need hex color code then you have to return `rgb(${x},${y},${z})` 

    return `#${red}${green}${blue}`
}

// add click event listener with copy button for copy the color code
copyBtn.addEventListener("click", function() {

    navigator.clipboard.writeText(rgbField.value)
    if (toastDiv != null) {
        toastDiv.remove();;
    }
    toastDiv = document.createElement("div");
    toastDiv.innerHTML = rgbField.value + " Copied";
    toastDiv.className = "toast-message animation-in-toast";
    body.appendChild(toastDiv);

    toastDiv.addEventListener("click", function() {
        this.classList.add("animation-out-toast")
        this.classList.remove("animation-in-toast")

        this.addEventListener("animationend", function() {
            this.remove();
        })
    })

})




/**s
 *
 * @param {string} color 
 */
function isValidHex(color) {
    if (color.length != 7) {
        return false;
    }
    if (color[0] != "#") {
        return false;
    }
    color = color.substring(1);
    console.log(color)

}
isValidHex("#ffffff");