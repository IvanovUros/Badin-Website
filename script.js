const body = document.getElementById('body');
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
const menuBtn = document.querySelector('.hamburger-wrapper');
const mainMenuWindow = document.querySelector('.main-menu');
const whatWeDoBtn = document.querySelector('.what-we-do');
const lifeAtBadinBtn = document.querySelector('.life-at-badin');
let tabIndicator = 0;
let screenWidth = screen.width;
let menuOpen = false;

let tabsAnimationInterval = setInterval(() => {
    tabsLaptopAnimation();
}, 4000);

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        whatWeDoBtn.style.zIndex ='0';
        lifeAtBadinBtn.style.zIndex ='0';
        menuOpen = true;
        body.style.overflow = 'hidden';
        mainMenuWindow.style.display = 'flex';
        setTimeout(function() {
            mainMenuWindow.classList.add('open');
        },100);
    } else {
        menuBtn.classList.remove('open');
        mainMenuWindow.classList.remove('open');
        whatWeDoBtn.style.zIndex ='1';
        lifeAtBadinBtn.style.zIndex ='1';
        body.style.overflow = 'visible';
        setTimeout(function() {
            mainMenuWindow.style.display = 'none';
        },500);
        menuOpen = false;
    };
});

window.addEventListener('resize', () => {
    screenWidth = screen.width;
    if(screenWidth < 1024) {
        tabs.forEach(tabs => {
            tabs.style.margin = '0 1rem';
            tabs.classList.remove('active');
        });
        tabs[1].style.marginTop = '50px';
        tabs[2].style.marginTop = '50px';
        tabs[3].style.marginTop = '50px';
        tabs[4].style.marginTop = '50px';
        tabs[0].style.marginTop = '0px';
        tabs[0].classList.add('active'); 
        tabs[0].classList.remove('tab--first');
        tabs[1].classList.remove('tab--second'); 
        tabs[2].classList.remove('tab--third'); 
        tabs[3].classList.remove('tab--fourth'); 
        tabs[4].classList.remove('tab--fifth');  
        tabIndicator = 0;
    } 
    else if (screenWidth >= 1024) {
        tabsNav.style.translate = '0 0';
    };
});

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
            };
        };
    };

onload = () => {
    tabs[0].classList.add('active');
    tabBorderDots[0].classList.add('active');
};

tabsNav.addEventListener('mouseover', () => {
    clearInterval(tabsAnimationInterval);
});

tabsNav.addEventListener('mouseleave', () => {
    tabsAnimationInterval = setInterval(() => {
        tabsLaptopAnimation();
    }, 4000);
});

function tabsActiveClassAdd (x) {
    tabs.forEach(tabs => {
        tabs.classList.remove('active');
    })
    tabs[x].classList.add('active');
}

tabs[0].addEventListener('click', () => {
    tabsActiveClassAdd(0);
    tabs[0].style.marginTop = '20rem';
    tabs[0].style.marginLeft = '22.5rem';
    tabs[4].style.marginTop = '40rem';
    tabs[4].style.marginLeft = '22.5rem';
    tabs[3].style.marginTop = '30rem';
    tabs[3].style.marginLeft = '2.5rem';
    tabs[2].style.marginTop = '15rem';
    tabs[2].style.marginLeft = '2.5rem';
    tabs[1].style.marginTop = '5rem';
    tabs[1].style.marginLeft = '20rem';
    tabIndicator = 0;
    tabDescriptionTitle.innerHTML = 'Karthik Rao';
    tabDescriptionSubTitle.innerHTML = 'Head of technology,Eton Institute';
});

tabs[1].addEventListener('click', () => {
    tabsActiveClassAdd(1);
    tabs[1].style.marginTop = '20rem';
    tabs[1].style.marginLeft = '22.5rem';
    tabs[0].style.marginTop = '40rem';
    tabs[0].style.marginLeft = '22.5rem';
    tabs[4].style.marginTop = '30rem';
    tabs[4].style.marginLeft = '2.5rem';
    tabs[3].style.marginTop = '15rem';
    tabs[3].style.marginLeft = '2.5rem';
    tabs[2].style.marginTop = '5rem';
    tabs[2].style.marginLeft = '20rem';
    tabIndicator = 1;
    tabDescriptionTitle.innerHTML = 'Dragan Andrejic';
    tabDescriptionSubTitle.innerHTML = 'Software Team Leader,Telekom Srbija';
});

tabs[2].addEventListener('click', () => {
    tabsActiveClassAdd(2);
    tabs[2].style.marginTop = '20rem';
    tabs[2].style.marginLeft = '22.5rem';
    tabs[1].style.marginTop = '40rem';
    tabs[1].style.marginLeft = '22.5rem';
    tabs[0].style.marginTop = '30rem';
    tabs[0].style.marginLeft = '2.5rem';
    tabs[4].style.marginTop = '15rem';
    tabs[4].style.marginLeft = '2.5rem';
    tabs[3].style.marginTop = '5rem'; 
    tabs[3].style.marginLeft = '20rem';
    tabIndicator = 2;
    tabDescriptionTitle.innerHTML = 'Nikola Ristovic';
    tabDescriptionSubTitle.innerHTML = 'Head of Satellite Applications Unit,Raiffeisen bank';
});

tabs[3].addEventListener('click', () => {
    tabsActiveClassAdd(3);
    tabs[3].style.marginTop = '20rem';
    tabs[3].style.marginLeft = '22.5rem';
    tabs[2].style.marginTop = '40rem';
    tabs[2].style.marginLeft = '22.5rem';
    tabs[1].style.marginTop = '30rem';
    tabs[1].style.marginLeft = '2.5rem';
    tabs[0].style.marginTop = '15rem';
    tabs[0].style.marginLeft = '2.5rem';
    tabs[4].style.marginTop = '5rem';
    tabs[4].style.marginLeft = '20rem';
    tabIndicator = 3;
    tabDescriptionTitle.innerHTML = 'Geordie Lindsay-Russell';
    tabDescriptionSubTitle.innerHTML = 'Business Analyst Project Managment';
});

tabs[4].addEventListener('click', () => {
    tabsActiveClassAdd(4);
    tabs[4].style.marginTop = '20rem';
    tabs[4].style.marginLeft = '22.5rem';
    tabs[3].style.marginTop = '40rem';
    tabs[3].style.marginLeft = '22.5rem';
    tabs[2].style.marginTop = '30rem';
    tabs[2].style.marginLeft = '2.5rem';
    tabs[1].style.marginTop = '15rem';
    tabs[1].style.marginLeft = '2.5rem';
    tabs[0].style.marginTop = '5rem';
    tabs[0].style.marginLeft = '20rem';
    tabIndicator = 4;
    tabDescriptionTitle.innerHTML = 'Fangsin Lim';
    tabDescriptionSubTitle.innerHTML = 'Coo Tranxactor';
});