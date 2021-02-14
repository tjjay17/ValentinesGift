let test = document.querySelector('#test');
let topflap = document.getElementById('topFlap');
let fullbody = document.getElementById('homePage');

test.onmouseover = () =>{
    topflap.style.transform = 'rotate(180deg)';
    topflap.style.position = 'relative';
    topflap.style.top = '20vh';
}

// test.onmouseout = () =>{
//     topflap.style.transform = 'none';
//     topflap.style.position = 'relative';
//     topflap.style.top = '39.5vh';
// }


