const tabsNav = document.querySelector('.tabs-nav');
const tabs = Array.from(document.getElementsByClassName('tab'));
const leftArrow = document.querySelector('.left-arrow-container');
const rightArrow = document.querySelector('.right-arrow-container');
let tabIndicator = 0;


rightArrow.addEventListener('click', () => {
    if(tabIndicator == 0) {
        tabIndicator++;
        console.log(tabIndicator);
    }
    if(tabIndicator == 1) {
        tabIndicator++;
        console.log(tabIndicator);
    }
    
});

function nextTab() {
    if(tabIndicator == 0) {
        tabsNav.style.translate = '-80px';
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
    }
    console.log(tabIndicator);
    if (tabIndicator == 1) {
        tabs[1].classList.remove('active');
        tabs[2].classList.add('active'); 
    }
} 

onload = () => {
    tabs[0].classList.add('active');
    console.log(tabIndicator);
};