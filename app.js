"use strict";
const baseURL = "http://localhost:3000";
const btnLeft = document.querySelector("#btn_left");
const btnRight = document.querySelector("#btn_right");
const carousel = document.querySelector("#comments_wrapper");
const submit_button = document.querySelector("#submit_button");
const popup_input = document.querySelector(".popup-input");
const popup_input2 = document.querySelector("#popup_input2");
const modalFirst = document.querySelector(".modalpopupwrapper");
const modalSecond = document.querySelector(".modalpopupwrapper2");
const modal_btn = document.querySelector("#modal_btn");
const modalpopup = document.querySelector("#modalpopup");
const blur_div = document.querySelector(".blur");
const close_btn = document.querySelector(".close");
const close_btn_2 = document.querySelector("#close_btn_2");
const close_btn_3 = document.querySelector("#close_btn_3");

async function getMiniCards() {
  try {
    const response = await fetch(`${baseURL}/miniCards`);
    const result = await response.json();
    console.log(result);
    renderMiniCards(result);
  } catch (err) {
    alert(err.message);
  }
}

getMiniCards();

function renderMiniCards(data) {
  if (data.length) {
    let res = "";
    data.forEach((el) => {
      res += `
      <div class="mini__card">
        <img src=${el.icon} alt="">
        
        ${
          el.new_description
            ? `<p>${el.new_description}</p>`
            : `<p>${el.description}</p>`
        }
        <a href="#">${el.linkText}</a>
        
        ${el.number ? `<p class="bold_number">${el.number}</p>` : ""}
        <a href="#">${el.linkText}</a>
      </div>`;
    });
    $("#consultation__wrapper").innerHTML = res;
  }
}
// ----------------------------------------------------------------

async function getCards() {
  try {
    const response = await fetch(`${baseURL}/helpCards`);
    const result = await response.json();
    console.log(result);
    renderCards(result);
  } catch (err) {
    alert(err.message);
  }
}

getCards();

function renderCards(data) {
  if (data.length) {
    let res = "";

    data.forEach((el) => {
      res += `
      <div class="consultation__card">
        <div class="card__ellipse">
          <img src=${el.icon} alt="">
        </div>
        <p>${el.description}</p>
      </div>`;
    });
    $("#needHelp__wrapper").innerHTML = res;
  }
}
// ----------------------------------------------------------------

async function getSpecializes() {
  try {
    const response = await fetch(`${baseURL}/specializes`);
    const result = await response.json();
    console.log(result);
    renderSpecializes(result);
  } catch (err) {
    alert(err.message);
  }
}

getSpecializes();

function renderSpecializes(data) {
  if (data.length) {
    let res = "";

    data.forEach((el) => {
      res += `
          <div class="specializes__card">
              <div class="top">
                <img src="${el.icon}" alt="" />
                <a href="#">${el.title}</a>
              </div>
              <p>${el.description}</p>
          </div>`;
    });
    $("#specializes_wrapper").innerHTML = res;
  }
}
// ----------------------------------------------------------------

async function getComments() {
  try {
    const response = await fetch(`${baseURL}/comments`);
    const result = await response.json();
    console.log(result);
    renderComments(result);
  } catch (err) {
    alert(err.message);
  }
}

getComments();

function renderComments(data) {
  if (data.length) {
    let res = "";
    data.map((el) => {
      res += `
            <div class="card">
              <div class="top">
                <div class="image">
                  <img src="${el.icon}" alt="" />
                </div>
                <div class="top_info">
                  <a href="#">${el.name}</a>
                  <p>${el.createdAt}</p>
                </div>
              </div>
              <p class="desc">
                ${el.text}
              </p>
              <div class="card_bottom">
                <p class="quest">Вопрос:</p>
                <a class="quest_txt" href="#"
                  >${el.question}</a
                >
              </div>
            </div>`;
    });
    $("#comments_wrapper").innerHTML = res;
  }
}
// ----------------------------------------------------------------
async function getLawyers() {
  try {
    const response = await fetch(`${baseURL}/lawyer`);
    const result = await response.json();
    console.log(result);
    renderLawyers(result);
  } catch (err) {
    alert(err.message);
  }
}

getLawyers();
const wrapper_left = document.querySelector("#portal_wrapper_left");
function renderLawyers(data) {
  if (data.length) {
    let res = "";
    data.map((el) => {
      res += `
        <div class="lawyers_card">
            <img src="${el.icon}" alt="xola" />
            <div>
              <h4>${el.title}</h4>
              <p>${el.description}</p>
              <p class="consult_txt">${el.consultations}</p>
            </div>
        </div>`;
    });
    $("#portal_wrapper_left").innerHTML = res;

    const btn = createElement("button", "lawyers_button", "Все наши юристы");
    wrapper_left.append(btn);
  }
}

// ----------------------------------------------------------------

async function getFooter() {
  try {
    const response = await fetch(`${baseURL}/footer`);
    const result = await response.json();
    console.log(result);
    renderFooter(result);
  } catch (err) {
    alert(err.message);
  }
}

getFooter();
function renderFooter(data) {
  if (data.length) {
    let res = "";
    data.map((el) => {
      res += `
        <div class="col1">
            <h5>${el.title}</h5>
            ${el.desc1 ? `<a href="#">${el.desc1} </a>` : ""}
            ${el.desc2 ? `<a href="#">${el.desc2} </a>` : ""}
            ${el.desc3 ? `<a href="#">${el.desc3} </a>` : ""}
            ${el.desc4 ? `<a href="#">${el.desc4} </a>` : ""}
        </div>`;
    });
    $("#footer_wrapper").innerHTML = res;
  }
}

let count = 0;

function slider() {
  if (count > 9) {
    count = 0;
    carousel.style.transition = "all 2s ease";
  }
  if (count < 0) {
    count = 9;
  }
  carousel.style.transition = "all 1s ease";
  carousel.style.transform = `translateX(-${count * 387}px)`;
}
btnLeft.addEventListener("click", () => {
  console.log("left");
  count--;
  slider();
});
btnRight.addEventListener("click", () => {
  console.log("right");
  count++;
  slider();
});
modal_btn.addEventListener("click", () => {
  modalFirst.style.display = "flex";
  document.body.classList.add("stop_scrolling");
  modalpopup.style.zIndex = "945341132";
  blur_div.style.display = "block";
});

close_btn.addEventListener("click", (e) => {
  e.preventDefault();
  modalFirst.style.display = "none";
  document.body.classList.remove("stop_scrolling");
  blur_div.style.display = "none";
  modalpopup.style.zIndex = "-1";
});

submit_button.addEventListener("click", (e) => {
  if (popup_input.value != "" && popup_input2.value != "") {
    e.preventDefault();
    modalFirst.style.display = "none";
    document.body.classList.add("stop_scrolling");
    blur_div.style.display = "block";
    modalSecond.style.display = "flex";
    popup_input.value = "";
    popup_input2.value = "";
  } else {
    alert("Please fill the input correctly");
  }
});

close_btn_2.addEventListener("click", (e) => {
  e.preventDefault();
  modalSecond.style.display = "none";
  document.body.classList.remove("stop_scrolling");
  blur_div.style.display = "none";
  modalpopup.style.zIndex = "-1";
});

close_btn_3.addEventListener("click", (e) => {
  e.preventDefault();
  modalSecond.style.display = "none";
  document.body.classList.remove("stop_scrolling");
  blur_div.style.display = "none";
  modalpopup.style.zIndex = "-1";
});

const choose_input = document.querySelector(".submit_1");
const question_input = document.querySelector(".question_input");
const portal_in1 = document.querySelector(".portal_in1");
const portal_in2 = document.querySelector(".portal_in2");

choose_input.addEventListener("input", (e) => {
  e.preventDefault();
});
question_input.addEventListener("input", (e) => {
  e.preventDefault();
});
portal_in1.addEventListener("input", (e) => {
  e.preventDefault();
});
portal_in2.addEventListener("input", (e) => {
  e.preventDefault();
});
