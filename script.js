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
const trustedClientLogo = Array.from(document.getElementsByClassName('trusted-logo-wrapper'));
const trustedLogoCover = Array.from(document.getElementsByClassName('cover'));
const tabBorderDots = Array.from(document.getElementsByClassName('border-dot'));
let tabIndicator = 0;
let test = true;
let screenWidth = screen.width;

window.addEventListener('resize', () => {
    screenWidth = screen.width;
});

function tabsLaptopAnimation () {
    if(screenWidth >= 1024) {
        switch(tabIndicator) {
            case 0:
                tabs[0].classList.remove('active');
                tabs[0].style.marginTop = '40rem';
                tabs[0].style.marginLeft = '22.5rem';
                tabs[1].classList.add('active');
                tabs[1].style.marginTop = '20rem';
                tabs[1].style.marginLeft = '22.5rem';
                tabs[2].style.marginTop = '5rem';
                tabs[2].style.marginLeft = '20rem';
                tabs[3].style.marginTop = '15rem';
                tabs[3].style.marginLeft = '2.5rem';
                tabs[4].style.marginTop = '30rem';
                tabs[4].style.marginLeft = '2.5rem';
                tabBorderDots[1].classList.add('active');
                tabBorderDots[0].classList.remove('active');
                tabDescriptionTitle.innerHTML = 'Dragan Andrejic';
                tabDescriptionSubTitle.innerHTML = 'Software Team Leader,Telekom Srbija';
                tabIndicator++;
                break;
            case 1:
                tabs[1].classList.remove('active');
                tabs[1].style.marginTop = '40rem';
                tabs[1].style.marginLeft = '22.5rem';
                tabs[2].classList.add('active');
                tabs[2].style.marginTop = '20rem';
                tabs[2].style.marginLeft = '22.5rem';
                tabs[3].style.marginTop = '5rem';
                tabs[3].style.marginLeft = '20rem';
                tabs[4].style.marginTop = '15rem';
                tabs[4].style.marginLeft = '2.5rem';
                tabs[0].style.marginTop = '30rem';
                tabs[0].style.marginLeft = '2.5rem';
                tabBorderDots[2].classList.add('active');
                tabBorderDots[1].classList.remove('active');
                tabDescriptionTitle.innerHTML = 'Nikola Ristovic';
                tabDescriptionSubTitle.innerHTML = 'Head of Satellite Applications Unit,Raiffeisen bank';
                tabIndicator++;
                break;
            case 2:
                tabs[2].classList.remove('active');
                tabs[2].style.marginTop = '40rem';
                tabs[2].style.marginLeft = '22.5rem';
                tabs[3].classList.add('active');
                tabs[3].style.marginTop = '20rem';
                tabs[3].style.marginLeft = '22.5rem';
                tabs[4].style.marginTop = '5rem';
                tabs[4].style.marginLeft = '20rem';
                tabs[0].style.marginTop = '15rem';
                tabs[0].style.marginLeft = '2.5rem';
                tabs[1].style.marginTop = '30rem';
                tabs[1].style.marginLeft = '2.5rem';
                tabBorderDots[3].classList.add('active');
                tabBorderDots[2].classList.remove('active');
                tabDescriptionTitle.innerHTML = 'Geordie Lindsay-Russell';
                tabDescriptionSubTitle.innerHTML = 'Business Analyst Project Managment';
                tabIndicator++;
                break;
            case 3:
                tabs[3].classList.remove('active');
                tabs[3].style.marginTop = '40rem';
                tabs[3].style.marginLeft = '22.5rem';
                tabs[4].classList.add('active');
                tabs[4].style.marginTop = '20rem';
                tabs[4].style.marginLeft = '22.5rem';
                tabs[0].style.marginTop = '5rem';
                tabs[0].style.marginLeft = '20rem';
                tabs[1].style.marginTop = '15rem';
                tabs[1].style.marginLeft = '2.5rem';
                tabs[2].style.marginTop = '30rem';
                tabs[2].style.marginLeft = '2.5rem';
                tabBorderDots[4].classList.add('active');
                tabBorderDots[3].classList.remove('active');
                tabDescriptionTitle.innerHTML = 'Fangsin Lim';
                tabDescriptionSubTitle.innerHTML = 'Coo Tranxactor';
                tabIndicator++;
                break;
            case 4:
                tabs[4].classList.remove('active');
                tabs[4].style.marginTop = '40rem';
                tabs[4].style.marginLeft = '22.5rem';
                tabs[0].classList.add('active');
                tabs[0].style.marginTop = '20rem';
                tabs[0].style.marginLeft = '22.5rem';
                tabs[1].style.marginTop = '5rem';
                tabs[1].style.marginLeft = '20rem';
                tabs[2].style.marginTop = '15rem';
                tabs[2].style.marginLeft = '2.5rem';
                tabs[3].style.marginTop = '30rem';
                tabs[3].style.marginLeft = '2.5rem';
                tabBorderDots[0].classList.add('active');
                tabBorderDots[4].classList.remove('active');
                tabDescriptionTitle.innerHTML = 'Karthik Rao';
                tabDescriptionSubTitle.innerHTML = 'Head of technology,Eton Institute';
                tabIndicator = 0;
                break;

        }
        
        
    };
};

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
    tabBorderDots[0].classList.add('active');
    setInterval(() => {
        tabsLaptopAnimation();
    }, 4000);
};