let yLine = document.querySelector("#y-line");
let xLine = document.querySelector("#x-line");
const circle = document.querySelector(".dot");
const xPointer = document.querySelector("#x-pointer");
const yPointer = document.querySelector("#y-pointer");
let graph = document.querySelector(".graph");
const rInputs = document.querySelector(".r-buttons");
const labels = rInputs.querySelectorAll("label");
const submitButton = document.querySelector(".submit");
let rValue;
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
document.querySelector("#hidden-form-timezone\\:timezone-hidden").value = timeZone;
const button_timezone = document.querySelector("#hidden-form-timezone\\:hidden-timezone");
button_timezone.click();

const limit = {
    xMax: 4,
    xMin: -4,
    yMax: 5,
    yMin: -5,
    rMax: 5,
    rMin: 1,
}


graph.addEventListener("mousemove", (e) => {
    const coord = e.offsetY - 40 * (e.offsetY / 340);
    yLine.setAttribute("stroke", "#ff0038");
    if (rValue) {
        const highLimit = limit.yMax * 100 / rValue;
        const lowLimit = -(limit.yMin * 100 / rValue);
        if (coord > 150) {
            yLine.setAttribute("y1", coord <= 150 + lowLimit ? coord : 150 + lowLimit);
            yLine.setAttribute("y2", coord <= 150 + lowLimit ? coord : 150 + lowLimit);
        } else {
            yLine.setAttribute("y1", coord >= 150 - highLimit ? coord : 150 - highLimit);
            yLine.setAttribute("y2", coord >= 150 - highLimit ? coord : 150 - highLimit);
        }
    } else {
        yLine.setAttribute("y1", coord);
        yLine.setAttribute("y2", coord);
    }

    const coordX = e.offsetX - 40 * (e.offsetX / 340);
    xLine.setAttribute("stroke", "#ff0038");
    if (rValue) {
        const highLimit = limit.xMax * 100 / rValue;
        const lowLimit = -(limit.xMin * 100 / rValue);
        if (coordX > 150) {
            xLine.setAttribute("x1", coordX <= 150 + highLimit ? coordX : 150 + highLimit);
            xLine.setAttribute("x2", coordX <= 150 + highLimit ? coordX : 150 + highLimit);
        } else {
            xLine.setAttribute("x1", coordX >= 150 - lowLimit ? coordX : 150 - lowLimit);
            xLine.setAttribute("x2", coordX >= 150 - lowLimit ? coordX : 150 - lowLimit);
        }
    } else {
        xLine.setAttribute("x1", coordX);
        xLine.setAttribute("x2", coordX);
    }
});

graph.addEventListener("mouseenter", () => {
    yLine = document.querySelector("#y-line");
    xLine = document.querySelector("#x-line");
    rValue = +(document.querySelector(".active-btn").textContent);
});

graph.addEventListener("click", (e) => {
    const x = +(((xLine.getAttribute("x1") - 150) / 100) * +rValue).toFixed(1);
    const y = +(-((yLine.getAttribute("y1") - 150) / 100) * +rValue).toFixed(1);
    const r = +rValue;
    const xInput= document.querySelector("#hidden-form\\:hidden-x");
    const yInput= document.querySelector("#hidden-form\\:hidden-y");
    const rInput= document.querySelector("#hidden-form\\:hidden-r");
    const button= document.querySelector("#hidden-form\\:hidden-btn");
    xInput.value = x;
    yInput.value = y;
    rInput.value = r;
    button.click();
    let dot = "<circle cx=" + (xLine.getAttribute("x1")) + " cy=" + (yLine.getAttribute("y1")) + " r=\"2\" class=\"";
    if (r === 1){
        dot += "r1";
    } else if (r === 2) {
        dot += "r2"
    } else if (r === 3) {
        dot += "r3"
    } else if (r === 4) {
        dot += "r4"
    } else {
        dot += "r5"
    }
    if (hitMark(x, y, r)){
        dot += " dot-hit";
    } else {
        dot += " dot-miss";
    }
    dot += "\"/>";
    document
        .querySelector("#graph-svg")
        .insertAdjacentHTML("beforeend", dot);
});

graph.addEventListener("mouseleave", () => {
    yLine.setAttribute("stroke", "transparent");
    xLine.setAttribute("stroke", "transparent");
});

rInputs.addEventListener('click',(event)=>{
    if (event.target.tagName.toLowerCase() === 'label'){
            labels.forEach((label)=>{label.classList.remove("active-btn");})
            event.target.classList.add("active-btn");
            document.querySelectorAll(".r1").forEach((mark) => {
                if (!mark.classList.contains("inactive-mark")) {
                    mark.classList.add("inactive-mark");
                }
            });
            rValue = event.target.textContent;
            document.querySelectorAll(".r2").forEach((mark) => {
                if (!mark.classList.contains("inactive-mark")) {
                    mark.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r3").forEach((mark) => {
                if (!mark.classList.contains("inactive-mark")) {
                    mark.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r4").forEach((mark) => {
                if (!mark.classList.contains("inactive-mark")) {
                    mark.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r5").forEach((mark) => {
                if (!mark.classList.contains("inactive-mark")) {
                    mark.classList.add("inactive-mark");
                }
            });
            if (rValue == 1) {
                document.querySelectorAll(".r1").forEach((mark) => {
                    if (mark.classList.contains("inactive-mark")) {
                        mark.classList.remove("inactive-mark");
                    }
                });
            } else if (rValue== 2) {
                document.querySelectorAll(".r2").forEach((mark) => {
                    if (mark.classList.contains("inactive-mark")) {
                        mark.classList.remove("inactive-mark");
                    }
                });
            } else if (rValue == 3) {
                document.querySelectorAll(".r3").forEach((mark) => {
                    if (mark.classList.contains("inactive-mark")) {
                        mark.classList.remove("inactive-mark");
                    }
                });
            } else if (rValue == 4) {
                document.querySelectorAll(".r4").forEach((mark) => {
                    if (mark.classList.contains("inactive-mark")) {
                        mark.classList.remove("inactive-mark");
                    }
                });
            } else {
                document.querySelectorAll(".r5").forEach((mark) => {
                    if (mark.classList.contains("inactive-mark")) {
                        mark.classList.remove("inactive-mark");
                    }
                });
            }
            changeRText(rValue);
    }
})

document.addEventListener("DOMContentLoaded", () => {
    rValue = +(document.querySelector(".r-value").textContent);
    labels.forEach((label) => {
        if (label.textContent == rValue) {
            label.classList.add("active-btn");
            changeRText(rValue);
        }
        if (rValue == 1) {
            document.querySelectorAll(".r2").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r3").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r4").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r5").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
        } else if (rValue == 2) {
            document.querySelectorAll(".r1").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r3").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r4").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r5").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
        } else if (rValue == 3) {
            document.querySelectorAll(".r1").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r2").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r4").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r5").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
        } else if (rValue == 4) {
            document.querySelectorAll(".r1").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r2").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r3").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r5").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
        } else {
            document.querySelectorAll(".r1").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r2").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r3").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
            document.querySelectorAll(".r4").forEach((mark1) => {
                if (!mark1.classList.contains("inactive-mark")) {
                    mark1.classList.add("inactive-mark");
                }
            });
        }
    })
})

submitButton.addEventListener("click", (e) => {
    let xValue = document.querySelector("#form\\:outputX").textContent;
    let yValue = document.querySelector("#form\\:y-input").value;
    const x = +((+xValue / rValue) * 100 + 150).toFixed(1);
    const y = (-((+yValue / rValue) * 100) + 150).toFixed(1);
    const r = +rValue;
    let dot = "<circle cx=" + (x) + " cy=" + (y) + " r=\"2\" class=\"";
    if (r === 1){
        dot += "r1";
    } else if (r === 2) {
        dot += "r2"
    } else if (r === 3) {
        dot += "r3"
    } else if (r === 4) {
        dot += "r4"
    } else {
        dot += "r5"
    }
    if (hitMark(xValue, yValue, r)){
        dot += " dot-hit";
    } else {
        dot += " dot-miss";
    }
    dot += "\"/>";
    document
        .querySelector("#graph-svg")
        .insertAdjacentHTML("beforeend", dot);
})



function changeRText(rValue) {
    const rlablesWhole = document.querySelectorAll(".graph-label.r-whole-pos");
    const rlablesHalf = document.querySelectorAll(".graph-label.r-half-pos");
    const rlablesNegWhole = document.querySelectorAll(".graph-label.r-whole-neg");
    const rlablesNegHalf = document.querySelectorAll(".graph-label.r-half-neg");
    rlablesWhole.forEach((el) => (el.textContent = +rValue ? rValue : "R"));
    rlablesHalf.forEach((el) => (el.textContent = +rValue / 2 ? rValue / 2 : "R/2"));
    rlablesNegWhole.forEach((el) => (el.textContent = -rValue ? -rValue : "-R"));
    rlablesNegHalf.forEach((el) => (el.textContent = -(rValue / 2) ? -(rValue / 2) : "-R/2"));
}


function hitMark (x, y, r){
    return hitInCircle(x, y, r) || hitInRectangle(x, y, r) || hitInTriangle(x, y, r);
}

function hitInTriangle (x, y, r){
    return x >= 0 && y <= 0 && y >= x-r;
}

function hitInCircle (x, y, r){
    return x <= 0 && y >= 0 && x*x + y*y <= r*r;
}

function hitInRectangle (x, y, r){
    return x >= 0 && x <= r && y >= 0 && y <= r/2;
}


function setDot(x, y) {
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    xPointer.setAttribute("x1", x);
    xPointer.setAttribute("y1", y);
    xPointer.setAttribute("y2", y);
    yPointer.setAttribute("y1", y);
    yPointer.setAttribute("x1", x);
    yPointer.setAttribute("x2", x);
    xPointer.classList.add("pointer");
    yPointer.classList.add("pointer");
    xPointer.classList.remove("inactive");
    yPointer.classList.remove("inactive");
    circle.classList.remove("inactive");
}

function inactiveDot() {
    xPointer.classList.add("inactive");
    yPointer.classList.add("inactive");
    circle.classList.add("inactive");
}
