$(function (){

    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

});

// Toggel Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    // Stop Propagation
    e.stopPropagation();

    // Toggle Class menu-active on Button
    this.classList.toggle("menu-active");

    // Toggle Class Open on Links
    tLinks.classList.toggle("open");
};

// Click anywhere Outside Menu and Toggle Button
document.addEventListener("click", (e) => {

    // console.log(e.target);

    if (e.target !== toggleBtn && e.target !== tLinks) {
        // console.log("good");

        // Check If Menu is Open
        if (tLinks.classList.contains("open")) {
            // console.log("good");

            // Toggle Class menu-active on Button
            toggleBtn.classList.toggle("menu-active");

            // Toggle Class Open on Links
            tLinks.classList.toggle("open");
        }
    }
});

// Stop Propagation
tLinks.onclick = function (e) {
    e.stopPropagation();
}


//Smooth Scroll
$('.links li a').click(function () {
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top
    }, 500);
});













// Get Slider Items  |  Array.from [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// console.table(sliderImages);

// Get Number Of Slides
var slidesCount = sliderImages.length;

// console.log(slidesCount);

// Set Current Slide
var currentSlide = 1;

// Slide Number String Element
var slideNumberVideoElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Button
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create Main UL Element
var paginationElement = document.createElement('ul');

// Set ID on Created UL Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based on Slides Count 
for (var i = 1; i <= slidesCount; i++) {

    // Creat LI
    var paginationItem = document.createElement('li');

    // Set Custom Attribute
    paginationItem.setAttribute('data-index', i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items to the Main UL list 
    paginationElement.appendChild(paginationItem);
}

// Add the Created UL Element to the Page
document.getElementById('indicators').appendChild(paginationElement);

// Get the New Created UL 
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items  |  Array.from [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

    paginationsBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();

    }
}

// Trigger the Checker Function
theChecker();



// Next Slide Function
function nextSlide() {

    // console.log('Next');

    if (nextButton.classList.contains('disabled')) {

        // Do Nothing
        return false

    } else {
        currentSlide++;

        theChecker();
    }

}

// Previous Slide Function
function prevSlide() {

    // console.log('Previous');

    if (prevButton.classList.contains('disabled')) {

        // Do Nothing
        return false

    } else {
        currentSlide--;

        theChecker();
    }
}

// Create the Checker Function
function theChecker() {

    // Set the Slide Number
    slideNumberVideoElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    // Remove All Active Classes
    removeAllActive();

    // Set Active Class on Current Slide
    sliderImages[currentSlide - 1].classList.add('active');

    // Set Active Class on Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // Check If Current Slide is First
    if (currentSlide == 1) {

        // Add Disabled Class on Previous Button
        prevButton.classList.add('disabled');

    } else {

        // Remove Disabled Class from Previous Button
        prevButton.classList.remove('disabled');
    }

    // Check If Current Slide is Last
    if (currentSlide == slidesCount) {

        // Add Disabled Class on next Button
        nextButton.classList.add('disabled');

    } else {

        // Remove Disabled Class from next Button
        nextButton.classList.remove('disabled');
    }


}

// Remove All Active Classes from Images and Pagination Bullets
function removeAllActive() {

    // Loop Through Images
    sliderImages.forEach(function (img) {

        img.classList.remove('active');
    });

    // Loop Through Pagination Bullets
    paginationsBullets.forEach(function (Bullet) {

        Bullet.classList.remove('active');
    });
}









// Get Slider Items  |  Array.from [ES6 Feature]
var sliderVideo = Array.from(document.querySelectorAll('.slider-video .slider-container .slider-video'));

// console.table(sliderImages);

// Get Number Of Slides
var slidesVideoCount = sliderVideo.length;

// console.log(slidesCount);

// Set Current Slide
var currentSlideVideo = 1;

// Slide Number String Element
var slideNumberVideoElement = document.getElementById('slide-number-video');

// Previous and Next Buttons
var nextVideoButton = document.getElementById('nextVideo');
var prevVideoButton = document.getElementById('prevVideo');

// Handle Click on Previous and Next Button
nextVideoButton.onclick = nextVideoSlide;
prevVideoButton.onclick = prevVideoSlide;

// Create Main UL Element
var paginationVideoElement = document.createElement('ul');

// Set ID on Created UL Element
paginationVideoElement.setAttribute('id', 'paginationVideo-ul');

// Create List Items Based on Slides Count 
for (var i = 1; i <= slidesVideoCount; i++) {

    // Creat LI
    var paginationVideoItem = document.createElement('li');

    // Set Custom Attribute
    paginationVideoItem.setAttribute('data-index-video', i);

    // Set Item Content
    paginationVideoItem.appendChild(document.createTextNode(i));

    // Append Items to the Main UL list 
    paginationVideoElement.appendChild(paginationVideoItem);
}

// Add the Created UL Element to the Page
document.getElementById('indicatorsVideo').appendChild(paginationVideoElement);

// Get the New Created UL 
var paginationVideoCreatedUl = document.getElementById('paginationVideo-ul');

// Get Pagination Items  |  Array.from [ES6 Feature]
var paginationsVideoBullets = Array.from(document.querySelectorAll('#paginationVideo-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsVideoBullets.length; i++) {

    paginationsVideoBullets[i].onclick = function () {

        currentSlideVideo = parseInt(this.getAttribute('data-index-video'));

        theCheckerVideo();

    }
}

// Trigger the Checker Function
theCheckerVideo();



// Next Slide Function
function nextVideoSlide() {

    // console.log('Next');

    if (nextVideoButton.classList.contains('disabledVideo')) {

        // Do Nothing
        return false

    } else {
        currentSlideVideo++;

        theCheckerVideo();
    }

}

// Previous Slide Function
function prevVideoSlide() {

    // console.log('Previous');

    if (prevVideoButton.classList.contains('disabledVideo')) {

        // Do Nothing
        return false

    } else {
        currentSlideVideo--;

        theCheckerVideo();
    }
}

// Create the Checker Function
function theCheckerVideo() {

    // Set the Slide Number
    slideNumberVideoElement.textContent = 'Slide #' + (currentSlideVideo) + ' of ' + (slidesVideoCount);

    // Remove All Active Classes
    removeAllVideoActive();

    // Set Active Class on Current Slide
    sliderVideo[currentSlideVideo - 1].classList.add('activeVideo');

    // Set Active Class on Current Pagination Item
    paginationVideoCreatedUl.children[currentSlideVideo - 1].classList.add('activeVideo');

    // Check If Current Slide is First
    if (currentSlideVideo == 1) {

        // Add Disabled Class on Previous Button
        prevVideoButton.classList.add('disabledVideo');

    } else {

        // Remove Disabled Class from Previous Button
        prevVideoButton.classList.remove('disabledVideo');
    }

    // Check If Current Slide is Last
    if (currentSlideVideo == slidesVideoCount) {

        // Add Disabled Class on next Button
        nextVideoButton.classList.add('disabledVideo');

    } else {

        // Remove Disabled Class from next Button
        nextVideoButton.classList.remove('disabledVideo');
    }


}

// Remove All Active Classes from Images and Pagination Bullets
function removeAllVideoActive() {

    // Loop Through Images
    sliderVideo.forEach(function (video) {

        video.classList.remove('activeVideo');
    });

    // Loop Through Pagination Bullets
    paginationsVideoBullets.forEach(function (Bullet) {

        Bullet.classList.remove('activeVideo');
    });
}