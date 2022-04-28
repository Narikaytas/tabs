let aboutButtonEl = document.getElementById('about');
let timeToVisitButtonEl = document.getElementById('timeToVisit');
let attractionsButtonEl = document.getElementById('attractions');

let aboutParaEl = document.getElementById('aboutPara');
let timeToVisitParaE1 = document.getElementById('timeToVisitPara');
let attractionsParaE1 = document.getElementById('attractionsPara');

timeToVisitParaE1.classList.add('d-none');
attractionsParaE1.classList.add('d-none');

function aboutInfo(){
    document.getElementById('about').style.background = '#56ccf2';  
    document.getElementById('timeToVisit').style.background ='#6fcf97';  
    document.getElementById('attractions').style.background = '#6fcf97';
    
    aboutParaEl.classList.remove('d-none');
    timeToVisitParaE1.classList.add('d-none');
    attractionsParaE1.classList.add('d-none');

        

}

function timeToVisitInfo(){
    document.getElementById('about').style.background = '#6fcf97';  
    document.getElementById('timeToVisit').style.background = '#56ccf2';  
    document.getElementById('attractions').style.background = '#6fcf97';
    
    
    aboutParaEl.classList.add('d-none');
    timeToVisitParaE1.classList.remove('d-none');
    attractionsParaE1.classList.add('d-none');
}

function attractionsInfo(){
    document.getElementById('about').style.background = '#6fcf97';  
    document.getElementById('timeToVisit').style.background = '#6fcf97';  
    document.getElementById('attractions').style.background = '#56ccf2';
    
    
    aboutParaEl.classList.add('d-none');
    timeToVisitParaE1.classList.add('d-none');
    attractionsParaE1.classList.remove('d-none');
}