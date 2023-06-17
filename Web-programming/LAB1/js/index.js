const rInputs = document.querySelectorAll(".r-btn");
const yInput = document.querySelector("#y-input");
const xInputs = document.querySelectorAll(".x-btn");
const yLine = document.querySelector("#y-line");
const xLine = document.querySelector("#x-line");
const graph = document.querySelector("#graph-svg");
const circle = document.querySelector(".dot");
const xPointer = document.querySelector("#x-pointer");
const yPointer = document.querySelector("#y-pointer");
const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector("#form");
const notify = document.querySelector(".notify");
const notifyMessage = document.querySelector(".notify__message");
const timezone = new Date().getTimezoneOffset();
let rValue;
let xValue;
let yValue;
let segment;

// ok
document.addEventListener("DOMContentLoaded", () => {
  const data = sessionStorage.getItem("history");
  document.querySelector("#result-table-body").insertAdjacentHTML("beforeend", data ? data : "");
});


graph.addEventListener("mousemove", (e) => {
  const coord = e.offsetY - 20 * (e.offsetY / 320);
  const coordX = e.offsetX - 20 * (e.offsetX / 320);
  if (rValue) {
    yLine.setAttribute("stroke", "red");
    xLine.setAttribute("stroke", "red");
    const limit = 500 / rValue;
    if (coord > 150) {
      yLine.setAttribute("y1", coord <= 150 + limit ? coord : 150 + limit);
      yLine.setAttribute("y2", coord <= 150 + limit ? coord : 150 + limit);
      xLine.setAttribute("x1", coordX <= 150 + limit ? coordX : 150 + limit);
      xLine.setAttribute("x2", coordX <= 150 + limit ? coordX : 150 + limit);
    } else {
      yLine.setAttribute("y1", coord >= 150 - limit ? coord : 150 - limit);
      yLine.setAttribute("y2", coord >= 150 - limit ? coord : 150 - limit);
      xLine.setAttribute("x1", coordX >= 150 - limit ? coordX : 150 - limit);
      xLine.setAttribute("x2", coordX >= 150 - limit ? coordX : 150 - limit);
    }

  }
});

//ok
form.addEventListener("submit", (event) => {
  disableNotification();
  event.preventDefault();
  if (xValue !== undefined && yValue !== undefined && rValue !== undefined) {
    fetch(`/server.php?x=${xValue}&y=${yValue}&r=${rValue}&timezone=${timezone}`)
      .then((res) => res.text())
      .then((data) => {
        sessionStorage.setItem("history",
          sessionStorage.getItem("history") === null ? data : data + sessionStorage.getItem("history")
        );
        document.querySelector("#result-table-body").insertAdjacentHTML("afterbegin", data);
      })
      .catch((e) => alert(e.message));
  } else if (xValue === undefined) {
    setNotification("X value is empty");
  } else if (yValue === undefined) {
    setNotification("invalid Y, range [-5,5]");
  } else if (rValue === undefined) {
    setNotification("R value is empty");
  }
});


graph.addEventListener("click", (e) => {
  disableNotification();
  if (rValue){
    const y = yLine.getAttribute("y1");
    const x = xLine.getAttribute("x1");
    setDot(x, y);
    const convX = +(((x - 150) / 100) * +rValue).toFixed(2);
    const convY = +(-((y - 150) / 100) * +rValue).toFixed(2);
    xValue = convX;
    yValue = convY;
    setInput(convX, convY);
  }
}
);

//ok
rInputs.forEach((rBtn) => {
  rBtn.addEventListener("click", (event) => {
    disableNotification();
     rInputs.forEach((rBtn) => {
       rBtn.parentElement.classList.remove("active-btn");
    });
    if (rValue === +event.target.value) {
      rValue = undefined;
      inactiveMode();
      return;
    } else {
      event.target.parentElement.classList.add("active-btn");
      rValue = +event.target.value;
      changeRText(rValue);
    }
    if (validateYInput(yValue) && rValue) {
      const convX = +((+xValue / rValue) * 100 + 150);
      const convY = +(-((+yValue / rValue) * 100) + 150);
      setDot(convX, convY);
    }
  });
});

//ok
yInput.addEventListener("input", (event) => {
    disableNotification();
    if (validateYInput(event.target.value)) {
      yValue = +event.target.value;
    } else {
      yValue = undefined;
      return;
    }
    if (rValue && xValue) {
      const convX = +((+xValue / rValue) * 100 + 150);
      const convY = +(-((+yValue / rValue) * 100) + 150);
      setDot(convX, convY);
    }
  }
);

//ok
xInputs.forEach((xBtn) => {
  xBtn.addEventListener("change", (event) => {
    disableNotification();
    xInputs.forEach((xBtn) => {
      xBtn.parentElement.classList.remove("active-btn");
    });
    if (xValue === +event.target.value) {
      xValue = undefined;
      inactiveDot();
      return;
    } else {
      event.target.parentElement.classList.add("active-btn");
      xValue = +event.target.value;
    }
    if (validateYInput(yValue) && rValue) {
      const convX = +((+xValue / rValue) * 100 + 150);
      const convY = +(-((+yValue / rValue) * 100) + 150);
      setDot(convX, convY);
    }
  });
});

//ok
graph.addEventListener("mouseleave", () => {
  yLine.setAttribute("stroke", "transparent");
  xLine.setAttribute("stroke", "transparent");
});

//ok
function validateYInput(yValue) {
  if (yValue == "")
    return false;
  if (yValue >= -5 && yValue <= 5) {
    return true;
  }
  return false;
}

//ok
function changeRText(rValue) {
  const rlablesWhole = document.querySelectorAll(".graph-label.r-whole-pos");
  const rlablesHalf = document.querySelectorAll(".graph-label.r-half-pos");
  const rlablesNegWhole = document.querySelectorAll(".graph-label.r-whole-neg");
  const rlablesNegHalf = document.querySelectorAll(".graph-label.r-half-neg");
  rlablesWhole.forEach((el) => (el.textContent = !(isNaN(rValue)) ? rValue : "R"));
  rlablesHalf.forEach(
    (el) => (el.textContent = !(isNaN(rValue)) / 2 ? rValue / 2 : "R/2")
  );
  rlablesNegWhole.forEach((el) => (el.textContent = -rValue ? -rValue : "-R"));
  rlablesNegHalf.forEach(
    (el) => (el.textContent = -(rValue / 2) ? -(rValue / 2) : "-R/2")
  );
}

//ok
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

//ok
function setInput(x, y) {
  yInput.value = y;
  xInputs.forEach((xBtn) => {
    xBtn.parentElement.classList.remove("active-btn");
    if (+xBtn.value === x) {
      xBtn.parentElement.classList.add("active-btn");
    }
  });
}

//ok
function inactiveMode() {
  changeRText("R");
  inactiveDot();
  yLine.setAttribute('stroke', 'transparent')
  xLine.setAttribute('stroke', 'transparent')
}

//ok
function inactiveDot() {
  xPointer.classList.add("inactive");
  yPointer.classList.add("inactive");
  circle.classList.add("inactive");
}

//ok
function setNotification(text) {
  notifyMessage.classList.remove("disabled");
  notifyMessage.innerText = text;
}

//ok
function disableNotification() {
  notifyMessage.classList.add("disabled");
}

window.addEventListener('unhandledrejection', function(event) {
  // объект события имеет два специальных свойства:
  alert(event.promise); // - промис, который сгенерировал ошибку
  alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});