document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('nav button');
    const navList = document.querySelector('nav ul');
    const galleryImages = document.querySelectorAll('.gallery img');

    function toggleMenu() {
        navList.classList.toggle('show');
    }

    function handleResize() {
        if (window.innerWidth > 1000) {
            navList.classList.remove('hide');
            navList.classList.remove('show');
        } else {
            navList.classList.add('hide');
        }
    }

    function viewerTemplate(pic, alt) {
        return `<div class="viewer">
          <button class="close-viewer">X</button>
          <img src="${pic}" alt="${alt}">
          </div>`;
    }

    function closeViewer() {
        document.querySelector('.viewer').remove();
    }

    function viewHandler(event) {
        // create a variable to hold the element that was clicked on from event.target
        const clickedElement = event.target;
        // get the src attribute from that element and 'split' it on the "-"
        const parts = clickedElement.src.split('-');
        // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
        const newSrc = parts[0] + '-full.jpeg';
        // insert the viewerTemplate into the top of the body element
        // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
        document.body.insertAdjacentHTML('afterbegin', viewerTemplate(newSrc, clickedElement.alt));
        // add a listener to the close button (X) that calls a function called closeViewer when clicked
        const closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }

    galleryImages.forEach(image => {
        image.addEventListener('click', viewHandler);
    });

    

    menuButton.addEventListener('click', toggleMenu);

    window.addEventListener('resize', handleResize);

    handleResize();

});
