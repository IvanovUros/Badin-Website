const tabsNav = document.querySelector('.tabs-nav');
const tabs = Array.from(document.getElementsByClassName('tab'));
const leftArrowBtn = document.querySelector('.left-arrow-container');
const rightArrowBtn = document.querySelector('.right-arrow-container');
const leftArrowLine = document.getElementById('leftArrowLine');
const leftArrowPointUp = document.getElementById('leftArrowPointUp');
const leftArrowPointDwn = document.getElementById('leftArrowPointDwn');
const rightArrowLine = document.getElementById('rightArrowLine');
const rightArrowPointUp = document.getElementById('rightArrowPointUp');
const rightArrowPointDwn = document.getElementById('rightArrowPointDwn');
const tabDescriptionTitle = document.querySelector('.tab-description-title');
const tabDescriptionSubTitle = document.querySelector('.tab-description-subtitle');
const tabDescriptionText = document.querySelector('.tab-description-text');
let tabIndicator = 0;

rightArrowBtn.addEventListener('click', () => {
    if(tabIndicator == 0) {
        tabIndicator++;
        tabsNav.style.translate = '-80px';
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
        leftArrowLine.style.backgroundColor = '#317ade';
        leftArrowPointUp.style.backgroundColor = '#317ade';
        leftArrowPointDwn.style.backgroundColor = '#317ade';
        tabDescriptionTitle.innerHTML = 'Dragan Andrejic';
        tabDescriptionSubTitle.innerHTML = 'Software Team Leader,Telekom Srbija';
    }
    else if(tabIndicator == 1) {
        tabIndicator++;
        tabsNav.style.translate = '-160px';
        tabs[1].classList.remove('active');
        tabs[2].classList.add('active');
        tabDescriptionTitle.innerHTML = 'Nikola Ristovic';
        tabDescriptionSubTitle.innerHTML = 'Head of Satellite Applications Unit,Raiffeisen bank';
    }
    else if(tabIndicator == 2) {
        tabIndicator++;
        tabsNav.style.translate = '-240px';
        tabs[2].classList.remove('active');
        tabs[3].classList.add('active');
        tabDescriptionTitle.innerHTML = 'Geordie Lindsay-Russell';
        tabDescriptionSubTitle.innerHTML = 'Business Analyst Project Managment';
    }
    else if (tabIndicator == 3) {
        tabIndicator++;
        tabsNav.style.translate = '-320px';
        tabs[3].classList.remove('active');
        tabs[4].classList.add('active');
        rightArrowLine.style.backgroundColor = '#cbcaca';
        rightArrowPointUp.style.backgroundColor = '#cbcaca';
        rightArrowPointDwn.style.backgroundColor = '#cbcaca';
        tabDescriptionTitle.innerHTML = 'Fangsin Lim';
        tabDescriptionSubTitle.innerHTML = 'Coo Tranxactor';
    };
});

leftArrowBtn.addEventListener('click', () => {
    if(tabIndicator == 1) {
        tabsNav.style.translate = '0px';
        tabs[1].classList.remove('active');
        tabs[0].classList.add('active');
        tabIndicator--;
        leftArrowLine.style.backgroundColor = '#cbcaca';
        leftArrowPointUp.style.backgroundColor = '#cbcaca';
        leftArrowPointDwn.style.backgroundColor = '#cbcaca';
        tabDescriptionTitle.innerHTML = 'Karthik Rao';
        tabDescriptionSubTitle.innerHTML = 'Head of technology,Eton Institute';
    }
    else if (tabIndicator == 2) {
        tabsNav.style.translate = '-80px';
        tabs[2].classList.remove('active');
        tabs[1].classList.add('active');
        tabIndicator--;
        tabDescriptionTitle.innerHTML = 'Dragan Andrejic';
        tabDescriptionSubTitle.innerHTML = 'Software Team Leader,Telekom Srbija';
    }
    else if (tabIndicator == 3) {
        tabsNav.style.translate = '-160px';
        tabs[3].classList.remove('active');
        tabs[2].classList.add('active');
        tabIndicator--;
        tabDescriptionTitle.innerHTML = 'Nikola Ristovic';
        tabDescriptionSubTitle.innerHTML = 'Head of Satellite Applications Unit,Raiffeisen bank';
    }
    else if (tabIndicator == 4) {
        tabsNav.style.translate = '-240px';
        tabs[4].classList.remove('active');
        tabs[3].classList.add('active');
        tabIndicator--;
        rightArrowLine.style.backgroundColor = '#317ade';
        rightArrowPointUp.style.backgroundColor = '#317ade';
        rightArrowPointDwn.style.backgroundColor = '#317ade';
        tabDescriptionTitle.innerHTML = 'Geordie Lindsay-Russell';
        tabDescriptionSubTitle.innerHTML = 'Business Analyst Project Managment';
    };
});

onload = () => {
    tabs[0].classList.add('active');
};