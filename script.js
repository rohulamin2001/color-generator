// Hex input box selection 
const hexField = document.querySelector(".hex-field");
// Rgba input box selection 
const rgbField = document.querySelector(".rgb-field");

// Change Color Button selection 
const changeColorBtn = document.querySelector(".change-color-btn");
// copy button selection 
const hexCopyBtn = document.querySelector(".hex-copy-btn");
const rgbCopyBtn = document.querySelector(".rgb-copy-btn");
// full body selection 
let body = document.body;

// toast message Div declearation
let toastDiv = null;
// add click event listener for generate random rgb color

changeColorBtn.addEventListener("click", function() {;
    const storeDecimalNo = generateDecimalNo();
    const storeHex = hexCodeGenerator(storeDecimalNo)
    const hexTorgb = hexToRgb(storeHex)

    const storeRgb = rgbCodeGenerator(storeDecimalNo);
    hexField.value = storeHex;
    rgbField.value = storeRgb;
    body.style.backgroundColor = `#${storeHex}`;
    body.style.transition = "all .5s";

})

// random decimal number generator
function generateDecimalNo() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return {
        red,
        green,
        blue
    }
}
// hex color code generator 
function hexCodeGenerator(color) {

    let red = `${color.red.toString(16)}`;
    let green = `${color.green.toString(16)}`;
    let blue = `${color.blue.toString(16)}`;


    if (red.length < 2) {
        red = `0${color.red.toString(16)}`
    } else {
        red;
    }
    if (green.length < 2) {
        green = `0${color.green.toString(16)}`
    } else {
        green;
    }
    if (blue.length < 2) {
        blue = `0${color.blue.toString(16)}`
    } else {
        blue;
    }
    return `${red}${green}${blue}`


}

/**
 * 
 * @param {String} color 
 */
// convert hex color to integer number and return rgb color code 
function hexToRgb(color) {
    let red = parseInt(color.slice(0, 2), 16)
    let green = parseInt(color.slice(2, 4), 16)
    let blue = parseInt(color.slice(4, 6), 16)
    return `rgb(${red},${green},${blue})`;

}

// rgb color code generator 
function rgbCodeGenerator(color) {

    return `rgb(${color.red},${color.green},${color.blue})`;
}

// add click event listener with copy button for copy the hex color code
hexCopyBtn.addEventListener("click", function() {

    if (hexField.value != "" && isValidHex(hexField.value)) {
        navigator.clipboard.writeText(`#${hexField.value}`)
        if (toastDiv != null) {
            toastDiv.remove();
        }
        toastDiv = document.createElement("div");
        toastDiv.innerHTML = `#${hexField.value} Copied`;
        toastDiv.className = "toast-message animation-in-toast";
        body.appendChild(toastDiv);

        toastDiv.addEventListener("click", function() {
            this.classList.add("animation-out-toast")
            this.classList.remove("animation-in-toast")

            this.addEventListener("animationend", function() {
                this.remove();
            })
        })
    } else {
        alert("Invalid Hex Code")
    }
})

// add click event listener with copy button for copy the hex rgb code
rgbCopyBtn.addEventListener("click", function() {

        if (rgbField.value != "") {
            navigator.clipboard.writeText(`${rgbField.value}`)
            if (toastDiv != null) {
                toastDiv.remove();
            }
            toastDiv = document.createElement("div");
            toastDiv.innerHTML = `${rgbField.value} Copied`;
            toastDiv.className = "toast-message animation-in-toast";
            body.appendChild(toastDiv);

            toastDiv.addEventListener("click", function() {
                this.classList.add("animation-out-toast")
                this.classList.remove("animation-in-toast")

                this.addEventListener("animationend", function() {
                    this.remove();
                })
            })
        } else {
            alert("Invalid Rgb Code")
        }
    })
    // add keyup event handler with hexField
    // for type valid hex code
hexField.addEventListener("keyup", function(event) {
    const color = event.target.value;
    hexField.value = color.toLowerCase();


    if (color && isValidHex(color)) {

        body.style.backgroundColor = `#${color}`;
        rgbField.value = hexToRgb(color);

    }

})

/**
 *
 * @param {string} color 
this is hex code validation function 
*/
function isValidHex(color) {
    if (color.length != 6) {
        return false;
    }

    return /^[0-9A-Fa-f]{6}$/i.test(color)

}