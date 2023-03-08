

// let pattern = new RegExp("ism") ;
// let text = "Uzbekiston"

// console.log(pattern.test(text));


// let pattern = /^j.*a$/
// let num = "jina"

// console.log(pattern.test(num));

// let pattern = /^\d+$/
// let str = '1356'
// console.log(pattern.test(str));

// let pattern = /^\d{3}-\d{4}-\d{6}-\d{7}$/
// let count = "666-5465-123456-4564899266666"
// console.log(pattern.test(count));



let elForm = document.querySelector(".form")
let elInput = document.querySelector(".input")
let elText = document.querySelector(".text")
let elText1 = document.querySelector(".text1")
let elBtn = document.querySelector(".btn")
let elformPas = document.querySelector(".form1")
let elInp = document.querySelector(".inp")
let elInp1 = document.querySelector(".inp1")
let elItem = document.querySelector(".item")
let elItem1 = document.querySelector(".item1")
let elclick = document.querySelector(".click")
let pattern = /^\d{5}-\d{3}-\d{2}-\d{2}$/
let count = "99890-866-06-05"
elText.textContent = " Namuna : 99890-866-06-05"

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();



    if(pattern.test(elInput.value)){
        elText1.textContent = "siz malumotni tug'ri kiritingiz..."
        elText.textContent = ""
    } else{
        elText.textContent = "Iltimos Malumotni tug'ri kiriting!!!"
        elInput.classList.add("danger")
        elText1.textContent = ""
    }
})


elformPas.addEventListener("submit", function(evt) {
    let pass1 = elInp.value
    let pass2 = elInp1.value
    evt.preventDefault();

     if(pass1 ==="" ||pass2=== ""){
        elItem.textContent = "Malumotlar kiritilmagan !"      
    }else if(pass1 === pass2 ) {    
        elItem.textContent = "siz mufaqqiyatli tarizda utdingiz"
    } else if(pass1 !== pass2) {
        elItem.textContent = "Malumotni tug'ri kiriting"
    }
})


let elFor = document.querySelector(".forin")
let elInputVal = document.querySelector(".inputval")
let elSpan = document.querySelector('.span')
let elButton = document.querySelector(".button")
elFor.addEventListener("submit", function(evt) {
    evt.preventDefault();
   const elValue = +elInputVal.value
   switch (elValue) {
    case 1:
        elSpan.textContent = "Dushanba"
        break;
        case 2:
            elSpan.textContent = "Seshanba"
       break;
       case 3:
        elSpan.textContent = "Chorshanba"
        break;
       case 4:
        elSpan.textContent = "Payshanba"
        break;
       case 5:
        elSpan.textContent = "Juma"
        break;
       case 6:
        elSpan.textContent = "Shanba"
        break;
       case 7:
        elSpan.textContent = "Yakshanba"
        break;
    default:
       elSpan.textContent = "Bunaqa hafta kuni yuq"
        break;
   }
})