// let toggleBtn = document.querySelector(".toggle-menu");
// let tLinks = document.querySelector(".links");

// toggleBtn.onclick = function (e) {

//     // Stop Propagation
//     e.stopPropagation();

//     // Toggle Class menu-active on Button
//     this.classList.toggle("menu-active");

//     // Toggle Class Open on Links
//     tLinks.classList.toggle("open");
// };

// // Stop Propagation
// tLinks.onclick = function (e) {
//     e.stopPropagation();
// }


//Smooth Scroll
$('.links li a').click(function () {
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top
    }, 500);
});


//  Gallery

let ourGallery = document.querySelectorAll(".gallery .images-box img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // Create Overlay Element
        let Overlay = document.createElement("div");

        // Add class to overlay
        Overlay.className = 'popup-overlay';

        // Append overlay to Body
        document.body.appendChild(Overlay);

        // Create Popup
        let popupBox = document.createElement("div");

        // Add Class to PopupBox
        popupBox.className = 'popup-box';

        if (img.alt !== null) {

            // Create Heading
            let imgHeading = document.createElement("h3");

            // Create Text for Heading
            let imgText = document.createTextNode(img.alt);

            // Append Text to Heading
            imgHeading.appendChild(imgText);

            // Append Heading to PopupBox
            popupBox.appendChild(imgHeading);

        }

        // Create Image
        let popupImage = document.createElement("img");

        // console.log(img.src);

        // Set Image Source
        popupImage.src = img.src;

        // Add Image to Popup Box
        popupBox.appendChild(popupImage);

        // Append Popup Box to Body
        document.body.appendChild(popupBox);

        // Create Close Span
        let closeButton = document.createElement("span");

        // Create Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append Text to Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class to CloseButton
        closeButton.className = 'close-button';

        // Add CloseButton to PopupBox
        popupBox.appendChild(closeButton);

    });
});

// Close Popup
document.addEventListener("click", function (e) {

    if (e.target.className === 'close-button') {

        // Remove Current Popup
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();
    }
});