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
let tabIndicator = 0;
let test = true;

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

function trustedLogoAnimation () {
    x = Math.floor(Math.random() * 13);
    if (x < 11) {
        y = x + 1;
        z = x + 2;
    } else if (x >= 11) {
        y = x - 1;
        z = x - 2;
    };
    // console.log(x);
    trustedClientLogo[x].style.display = 'block';
    trustedClientLogo[y].style.display = 'block';
    trustedClientLogo[z].style.display = 'block';
    setTimeout(function() {
        trustedLogoCover[x].style.backgroundColor = 'transparent';
        trustedLogoCover[y].style.backgroundColor = 'transparent';
        trustedLogoCover[z].style.backgroundColor = 'transparent';
        trustedClientLogo[x].style.translate = '0';
        trustedClientLogo[y].style.translate = '0';
        trustedClientLogo[z].style.translate = '0';
        
    },500);
    setTimeout(function() {
        trustedLogoCover[x].style.backgroundColor = '#f9fafe';
        trustedLogoCover[y].style.backgroundColor = '#f9fafe';
        trustedLogoCover[z].style.backgroundColor = '#f9fafe';
        trustedClientLogo[x].style.translate = '0 -80px';
        trustedClientLogo[y].style.translate = '0 -80px';
        trustedClientLogo[z].style.translate = '0 -80px';
    },1500);
    setTimeout(function() {
        trustedClientLogo.forEach(trustedClientLogo => {
            trustedClientLogo.style.translate = '0 80px';
          });
        trustedClientLogo[x].style.display = 'none';
        trustedClientLogo[y].style.display = 'none';
        trustedClientLogo[z].style.display = 'none';
    },2000);
};

onload = () => {
    tabs[0].classList.add('active');
    trustedLogoAnimation();
    window.setInterval(trustedLogoAnimation,2500);
};