const toolPic = document.querySelector('.toolPic');
const livecam = document.querySelector('.livecam');
const pic =  document.querySelector('.pic');
const newPic =  document.querySelector('.newpic');
const bar_on =  document.querySelectorAll('.display');
const toolItem =  document.querySelectorAll('.toolPic__item');
const sideBar__scroll = document.querySelector('.sideBar__scroll');
const slide = document.querySelector('.topPick__slide');


toolPic.onclick = function(){
    livecam.classList.toggle("livecam-width");
    pic.classList.toggle("display");
    newPic.classList.toggle("newpic");
    newPic.classList.toggle("newDisplay");
    toolItem.forEach(el => el.classList.toggle('display'));
    bar_on.forEach(el => el.classList.toggle('newDisplay'));
    bar_on.forEach(el => el.classList.toggle('bar-on-max'));
}

let bottomSlider = 0;

sideBar__scroll.addEventListener("click", () => {
  bottomSlider === 684 ? bottomSlider = 0 : bottomSlider += 171;
//   console.log(bottomSlider);
  slide.style.bottom = `${bottomSlider}px`;
})
function polindrom(str){
    if (str == str.splir('').reverce().join('')){
        return true;
    }
}