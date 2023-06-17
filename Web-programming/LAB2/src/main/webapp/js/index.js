const rInput = document.querySelector("#r-value");
const yInput = document.querySelector("#y-input");
const xInputs = document.querySelectorAll(".x-btn");
const yLine = document.querySelector("#y-line");
const xLine = document.querySelector("#x-line");
const graph = document.querySelector("#graph-svg");
const submitBtn = document.querySelector("#submit-btn");
const circle = document.querySelector(".dot");
const xPointer = document.querySelector("#x-pointer");
const yPointer = document.querySelector("#y-pointer");
const clearBtn = document.querySelector("#clear-btn");
const form = document.querySelector("#form");
const notify = document.querySelector(".notify");
const notifyMessage = document.querySelector(".notify_message");
let rValue;
let xValue;
let yValue;

const limit = {
    xMax: 3,
    xMin: -5,
    yMax: 5,
    yMin: -3,
    rMax: 3,
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

form.addEventListener("submit", (event) => {
    event.preventDefault();
    submit(xValue, yValue, rValue);
});

graph.addEventListener("click", (e) => {
    disableNotification();
    if (rValue) {
        const x = +(((xLine.getAttribute("x1") - 150) / 100) * +rValue).toFixed(1);
        const y = +(-((yLine.getAttribute("y1") - 150) / 100) * +rValue).toFixed(1);
        setDot(x, y);
        submit(x,y,rValue)
    } else if (rValue === undefined) {
        setNotification("please, set r value");
    }
});

graph.addEventListener("mouseleave", () => {
    yLine.setAttribute("stroke", "transparent");
    xLine.setAttribute("stroke", "transparent");
});

clearBtn.addEventListener("click", (event) => {
    disableNotification();
    event.preventDefault();
    inactiveDot();
    fetch('http://localhost:8080/LAB2-1.0-SNAPSHOT/ControllerServlet?command=clear')
        .then((res) => {
            if (!res.ok) {
                throw res;
            }
            document.querySelector("#result-table-body").innerHTML = "";
            document.querySelectorAll(".dot-state").forEach(dot => dot.remove());
        }).catch((err) => {alert(err.message)})
});

rInput.addEventListener("change", (event) => {
        if (validateRInput(+event.target.value)) {
            disableNotification();
            rValue = +event.target.value;
            changeRText(rValue);
            if (validateYInput(yValue) && validateXInput(xValue)) {
                const convX = +((+xValue / rValue) * 100 + 150);
                const convY = +(-((+yValue / rValue) * 100) + 150);
                setDot(convX, convY);
            }
        }
});

yInput.addEventListener("input", (event) => {
        disableNotification();
        if (validateYInput(event.target.value)) {
            yValue = +event.target.value;
        } else {
            yValue = undefined;
            return;
        }
        if (validateRInput(rValue) && validateXInput(xValue)) {
            const convX = +((+xValue / rValue) * 100 + 150);
            const convY = +(-((+yValue / rValue) * 100) + 150);
            setDot(convX, convY);
        }
    }
);

xInputs.forEach((xBtn) => {
    xBtn.addEventListener("click", (event) => {
        if (validateXInput(+event.target.value)) {
            disableNotification();
            xInputs.forEach((xBtn) => {
                xBtn.classList.remove("active-btn");
            });
            if (xValue === +event.target.value) {
                xValue = undefined;
                inactiveDot();
                return;
            } else {
                event.target.classList.add("active-btn");
                xValue = +event.target.value;
            }
            if (validateYInput(yValue) && validateRInput(rValue)) {
                const convX = +((+xValue / rValue) * 100 + 150);
                const convY = +(-((+yValue / rValue) * 100) + 150);
                setDot(convX, convY);
            }
        }
    });
});

function validateRInput(rValue) {
    return +rValue >= limit.rMin && +rValue <= limit.rMax;
}

function validateYInput(yValue) {
    if (yValue === "") {
        return false;
    }
    return +yValue >= limit.yMin && +yValue <= limit.yMax;
}
function validateXInput(xValue) {
    return +xValue >= limit.xMin && +xValue <= limit.xMax;
}

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

function setNotification(text) {
    notifyMessage.classList.remove("disabled");
    notifyMessage.innerText = text;
}
function disableNotification() {
    notifyMessage.classList.add("disabled");
}

function submit(xValue, yValue, rValue) {
    disableNotification();
    if (xValue !== undefined && yValue !== undefined && rValue !== undefined) {
        fetch(`http://localhost:8080/LAB2-1.0-SNAPSHOT/ControllerServlet?x=${xValue}&y=${yValue}&r=${rValue}&command=hit`)
            .then((res) => {
                if (!res.ok) {
                    throw res;
                }
                return res.text();
            })
            .then((data) => {
                let mark = JSON.parse(data);
                let newRow;
                newRow = '<tr style="text-align: center;">';
                newRow += '<td>' + parseFloat(mark.xValue).toFixed(1) + '</td>';
                if (parseFloat(mark.yValue) === Math.ceil(parseFloat(mark.yValue))) {
                    newRow += '<td>' + parseFloat(mark.yValue).toFixed(1) + '</td>';
                }
                else {
                    newRow += '<td>' + parseFloat(mark.yValue) + '</td>';
                }
                newRow += '<td>' + mark.rValue.toFixed(1) + '</td>';
                newRow += '<td>' + mark.hit + '</td>';
                newRow += '<td>' + mark.time + '</td>';
                newRow += '<td>' + (parseFloat(mark.leadTime)/1000).toFixed(3) + " mcs" + '</td>';
                newRow += '</tr>'
                document
                    .querySelector("#result-table-body")
                    .insertAdjacentHTML("afterbegin", newRow);
                const convX = +((+mark.xValue / mark.rValue) * 100 + 150);
                const convY = +(-((+mark.yValue / mark.rValue) * 100) + 150);
                setDot(convX, convY);
                if (mark.hit === "miss") {
                    document.querySelector("#result-table-body").firstChild.classList.add("no");
                    graph.insertAdjacentHTML("beforeend", `<circle cx="${convX}" cy="${convY}" r="2" class="dot-state" fill="#ff0038"/>`);
                }
                else {
                    graph.insertAdjacentHTML("beforeend", `<circle cx="${convX}" cy="${convY}" r="2" class="dot-state" fill="#6667AB"/>`);
                }
            })
            .catch((e) => {
                if (e.status === 404) {
                    alert("404 page not found")
                }
            });
    } else if (xValue === undefined) {
        setNotification("x value is empty");
    } else if (yValue === undefined) {
        setNotification("invalid y, range [-3,5]");
    } else if (rValue === undefined) {
        setNotification("r value is empty");
    }
}