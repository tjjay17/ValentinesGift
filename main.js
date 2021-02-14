let prompt = document.getElementById('gamePrompt');
let topflap = document.getElementById('topFlap');
let fullbody = document.getElementById('homePage');
let random = Math.floor(3*Math.random()).toString();
let firstheart = document.getElementById('option0');
let secondheart = document.getElementById('option1');
let thirdheart = document.getElementById('option2');
let correctOption = document.getElementById('option'+ random);
let wrongOptions = [];
let isOpened = false;
let letter = document.getElementById('loveLetter');

for(let i = 0; i<3; i++){
    if(random !== i.toString()){
        wrongOptions.push(i.toString());
    }
}

for(let j = 0; j<wrongOptions.length;j++){
    let wrong = document.getElementById('option' + wrongOptions[j].toString());
    wrong.onclick = () =>{
        prompt.innerHTML = 'No Dummy! Try Again';
        setTimeout(() =>{
            prompt.innerHTML = 'Select The Right Heart...';
        },1200);
    }
}

correctOption.onclick = () =>{
    prompt.innerHTML = "Happy Valentine's Day!";
    topflap.style.transform = 'rotate(180deg)';
    topflap.style.position = 'relative';
    topflap.style.top = '20vh';
    isOpened = true;
    letter.style.display = 'inline-block';
    setTimeout(() =>{
        letter.style.transform = 'translateY(-120px)';
    },1000);
    
}

let afterRight = (
    "<div id = 'bigHeart'> </div>"
);

