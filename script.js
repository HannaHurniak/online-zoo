const activeBurger = document.querySelector('.header__burger');
const activeMenu = document.querySelector('.navigation_nav');

activeBurger.addEventListener('click', () => {
  activeBurger.classList.toggle('active');
  activeMenu.classList.toggle('active');
});

const sliderInZoo = document.querySelector('.slider__pets__inzoo');
const sliderTrack = document.querySelector('.slider__track');
const buttonPetsInZoo = document.querySelectorAll('.PIZ');
const widthCardPIZ = sliderTrack.offsetWidth/8;

buttonPetsInZoo.forEach((el, index) => el.addEventListener('click', () => {
  const width = sliderInZoo.offsetWidth;
  // const t1 = sliderTrack.scrollWidth - widthCardPIZ - width
  // const t2 = sliderInZoo.scrollLeft -  width
  if (index === 0){
    sliderInZoo.scrollBy(-(width) , 0);
    if (0 >= sliderInZoo.scrollLeft -  width)  buttonPetsInZoo[0].style.visibility = 'hidden';
    buttonPetsInZoo[1].style.visibility = 'inherit';
  } else {
    sliderInZoo.scrollBy(width, 0);
    if (sliderTrack.scrollWidth - width <= sliderInZoo.scrollLeft +  width) buttonPetsInZoo[1].style.visibility = 'hidden';
    buttonPetsInZoo[0].style.visibility = 'inherit'
  }
})
)

const popup = document.querySelector('.b-pop-up');
const footerDonate = document.querySelector('.button__footer__donate');
const buttonDonate = document.querySelector('.donate__now');
const close = document.querySelector('.close');
const popupDonate2 = document.querySelector('.popup-donation2');
const popupDonate3 = document.querySelector('.popup-donation3');
const over = document.querySelector('#overlay');
const body = document.querySelector('body');
const complete = document.querySelector('.complete');
const valueOfQuickDonation = document.querySelector('input[max="9999"]');
const valueOfDonation = document.querySelector('input[max="4"]');
const otherAmountBtn = document.querySelector('.other_amount');
const buttonDonateNext = document.querySelector('.btn-donate');

let currentDonation = valueOfQuickDonation.value;

over.classList.remove("over-active");

buttonDonate.onclick = function() {
  popup.style.display="block";
  body.classList.add("body");
  over.classList.add("over-active");
}
footerDonate.onclick = function() {
  popup.style.display="block";
  over.classList.add("over-active");
  body.classList.remove("body");
}
close.onclick = function() {
  popup.style.display="none";
  over.classList.remove("over-active");
  body.classList.remove("body");
}
window.onclick = function(e) {
  if(e.target == over) {
    popup.style.display="none";
    over.classList.remove("over-active");
    body.classList.remove("body");
  }
  if(e.target == over) {
    popupDonate.style.display="none";
    over.classList.remove("over-active");
    body.classList.remove("body");
  }
  if(e.target == over) {
    popupDonate2.style.display="none";
    over.classList.remove("over-active");
    body.classList.remove("body");
  }
  if(e.target == over) {
    popupDonate3.style.display="none";
    over.classList.remove("over-active");
    body.classList.remove("body");
  }
}

const popupDonate = document.querySelector('.popup-donation');
const buttonQuickDonate = document.querySelector('.button__donate');
const buttonNext = document.querySelector('.next');
const buttonNext2 = document.querySelector('.next2');
const buttonBack = document.querySelector('.back');
const buttonBack2 = document.querySelector('.back2');


buttonQuickDonate.onclick = function() {
  valueOfDonation.value = valueOfQuickDonation.value;
  popupDonate.style.display="block"; 
  body.classList.add("body");
  over.classList.add("over-active");

  buttonNext.onclick = function() {
    popupDonate.style.display="none";
    popupDonate2.style.display="block";
  }
  
  buttonNext2.onclick = function() {
    popupDonate2.style.display="none";
    popupDonate3.style.display="block";
  }
  
  buttonBack.onclick = function() {
    popupDonate2.style.display="none";
    popupDonate.style.display="block";
  }
  buttonBack2.onclick = function() {
    popupDonate3.style.display="none";
    popupDonate2.style.display="block";
  }
  complete.onclick = function() {
    popupDonate3.style.display="none";
    over.classList.remove("over-active");
    body.classList.remove("body");
    alert('Thanks for you donation!');

  }
}


const buttonPrice = document.querySelectorAll('.btn-price');
// buttonPrice.onclick = function() {
//   popup.style.display="none";
//   popupDonate.style.display="block";
// }
// console.log(buttonPrice)
buttonPrice.forEach((el) => el.addEventListener(("click"), () => {
    currentDonation = +(/\d+/).exec(el.innerHTML);
    valueOfDonation.value = currentDonation;
    popup.style.display="none";
    popupDonate.style.display="block";
    buttonPriceHover()
}));
function buttonPriceHover() {
  otherAmountBtn.classList.remove('act');
  buttonPrice.forEach((el) => {
    el.classList.remove('act');
    if (+/\d+/.exec(el.innerHTML) === +valueOfDonation.value){
      el.classList.add('act')
    } 
  })
  if (+valueOfDonation.value === 0){
    buttonDonateNext.classList.add('act');
    console.log(+valueOfDonation.value);
  }
}

valueOfQuickDonation.oninput = function () {
  if (this.value.length > 4) this.value = this.value.substr(0, 4); 
}
valueOfDonation.oninput = function () {
  if (this.value.length > 4) this.value = this.value.substr(0, 4); 
}
document.querySelector('input[name="credit-card"]').oninput = function () {
  if (this.value.length > 16) this.value = this.value.substr(0, 16); 
}
document.querySelector('input[name="cvv"]').oninput = function () {
  if (this.value.length > 3) this.value = this.value.substr(0, 3); 
}