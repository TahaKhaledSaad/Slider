// Get Slider Items | Array.from [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
// Get Number Of Slides Inside Slider
var slidesCount = sliderImages.length;
// Set Current Slide -index-
var currentSlide = 1;
// Slide Number Element
var slideNumberElement = document.getElementById("slide-number");
// Previous and Next Buttons
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

// Handle prev and next Buttons
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

// Create The Main ul Element
var paginationElem = document.createElement("ul");
paginationElem.setAttribute("id", "pagination-ul");

// Create li Elements Based On Slides Count
for (let i = 1; i <= slidesCount; i++) {
  // [1] Create li(s)
  var paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i); // Custom Attr
  paginationItem.appendChild(document.createTextNode(i));
  // [2] Append li(s) in Pagination Element
  paginationElem.appendChild(paginationItem);
}
// Add The Created UL Element To The Page
document.getElementById("indicators").appendChild(paginationElem);

/*****************************************/
/****** Work After Creation Of DOM *******/
/*****************************************/

// [1] Get The New Created UL
var paginationCreatedUL = document.getElementById("pagination-ul");

// [1] Get Pagination Items | Array.from [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker(); 
  };
}

// Invoke, Call, Trigger Functions
checker();

// Function: 1
function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
}
// Function: 2
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
}
// Function: 3
function checker() {
  // [1] Set The Slide Number
  slideNumberElement.textContent = `Slide #${currentSlide} of ${slidesCount}`;
  // [2] Invoke Remove Function
  removeAllActive();
  // [3] Set Active Class To Current Slide
  sliderImages[currentSlide - 1].classList.add("active");
  // [4] Set Active Class To Pagination Item
  paginationCreatedUL.children[currentSlide - 1].classList.add("active");
  // [5] Check If The Current Slide Is The Last
  if (slidesCount == currentSlide) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
  // [6] Check If The Current Slide Is The First
  if (currentSlide == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
}
// Function : 4
function removeAllActive() {
  // Remove All Active Classes From Images and Pagitation Bolluts
  // [1] Loop Through Images
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });
  // [2] Loop Through Pagination Bullets
  paginationsBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
