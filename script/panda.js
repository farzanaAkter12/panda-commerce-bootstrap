//changing color to lightblue of every h2 tag
const header2=document.getElementsByTagName('h2');
for(const h2 of header2)
{
    h2.style.color='lightblue';
}

//changing background color of backpack section
const backpack=document.getElementById('backpack-section');
backpack.style.backgroundColor='tomato';
backpack.style.paddingBottom='15px';

//card class er border radius 30px setting
const cards = document.getElementsByClassName('card');

for(const card of cards)
{
    card.style.borderRadius = '30px';
}

//click event on submit button
const blueButton=document.getElementById('new-button');
blueButton.style.border='1px solid red';
blueButton.style.marginTop='5px';
blueButton.onclick=function makeRed() {
                                  blueButton.style.backgroundColor='orangered';
    blueButton.style.color='white';
                                }

//click buy now and remove it
const buyNowButtons = document.getElementsByClassName('buy-now-button');
for (const button of buyNowButtons) {
    button.addEventListener('click',function(event)
    {
        event.target.parentNode.removeChild(event.target);
    });
}
//submit button disabled by contition
const submitButton = document.getElementById('submit-button');
const input = document.getElementById('input-email1');

input.addEventListener('input',function()
{
    const text = input.value;
    if (text =="email") {
        submitButton.disabled =false;
    }
    else{
        submitButton.disabled =true;
    }
});

//let's play it cool bg color change
const lastSection = document.getElementById('last-section');

lastSection.addEventListener('dblclick', function () {
    lastSection.style.backgroundColor="lightblue";
});
lastSection.addEventListener('click', function () {
    lastSection.style.backgroundColor = "#fceaea";
});

//image change on mouseenter
const shoes = document.getElementsByClassName('shoe');
let shoeImgSrc=[];
for (const shoe of shoes) {
   let src =shoe.getAttribute("src");
   shoeImgSrc.push(src);
}
for(const shoe of shoes)
{
    shoe.addEventListener('mouseenter',function(){
        shoe.src="watch.png"
    })
}
for (let i=0; i<shoes.length;i++) {
    shoes[i].addEventListener('mouseleave', function () {
        shoes[i].src = shoeImgSrc[i];
    })
}
