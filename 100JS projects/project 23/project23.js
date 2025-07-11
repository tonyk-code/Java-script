let websiteCount=0;
let yearsOfExperienceCount=0;
let appsMadeCount=0;

let x=setInterval(() => {
    document.querySelector('.number-of-years').innerText=++yearsOfExperienceCount;

    if(yearsOfExperienceCount===15){
        clearInterval(x);
    }
},50)

let y=setInterval(() => {
    websiteCount+=17;
    
    if(websiteCount>=260){
        websiteCount=260;
        clearInterval(y);
    }
    document.querySelector('.number-of-website').innerText=websiteCount;
},50)

let z=setInterval(() => {
    appsMadeCount += 2;

    if(appsMadeCount>=27){
        appsMadeCount=27;
        clearInterval(z);
    }
    document.querySelector('.number-of-apps-made').innerText=appsMadeCount;
},50)