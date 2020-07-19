// Variables

const menuButton = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');

const allButton = document.querySelector('.all-btn');
const weightsButton = document.querySelector('.weights-btn');
const cardioButton = document.querySelector('.cardio-btn');
const functionalButton = document.querySelector('.func-btn');

const weightImg = document.querySelector('.weights');
const cardioImg = document.querySelector('.cardio');
const functionalImg = document.querySelector('.functional');

// Toggle Menu Button
menuButton.addEventListener('click', () => {
    navList.classList.toggle('menu-active');
    menuButton.classList.toggle('toggle');
});

// Our Facilities Scripts start

// gallery filter
allButton.addEventListener('click', ()=> {
    weightImg.classList.add('show')
    weightImg.classList.remove('hide')
    cardioImg.classList.add('show')
    cardioImg.classList.remove('hide')
    functionalImg.classList.add('show')
    functionalImg.classList.remove('hide')
});
// Weights image filter
weightsButton.addEventListener('click', ()=> {
    weightImg.classList.add('show')
    weightImg.classList.remove('hide')
    cardioImg.classList.remove('show')
    cardioImg.classList.add('hide')
    functionalImg.classList.remove('show')
    functionalImg.classList.add('hide')
});
// Cardio image filter
cardioButton.addEventListener('click', ()=> {
    weightImg.classList.remove('show')
    weightImg.classList.add('hide')
    cardioImg.classList.add('show')
    cardioImg.classList.remove('hide')
    functionalImg.classList.remove('show')
    functionalImg.classList.add('hide')
});
// Functional image Filter
functionalButton.addEventListener('click', ()=> {
    weightImg.classList.remove('show')
    weightImg.classList.add('hide')
    cardioImg.classList.remove('show')
    cardioImg.classList.add('hide')
    functionalImg.classList.add('show')
    functionalImg.classList.remove('hide')
});

// Our Facilities script end

// Modal Script
const images = document.querySelectorAll(".mimages");
let modal = document.querySelector('.modal');
let modalImage = document.getElementById('modal-image');
let closer = document.getElementById('closer');

images.forEach((image)=> {
    image.addEventListener('click',() => {
        modal.classList.add('view');
        modalImage.src = image.src;
    })
;
})

closer.addEventListener('click', () => {
    modal.classList.remove('view')
});

// Modal script end