const base= document.querySelector('#base');
const height= document.querySelector('#height');
const button =document.querySelector('.btn');
const message =document.querySelector('#output-msg');


button.addEventListener('click', calculateArea);


function calculateArea()
{
   if(base.value>0 && height.value>0)
   {
    const area=(Number(base.value)*Number(height.value))/2;
    message.innerText=`The area of the triangle is ${area} cm².`

   }
   else if(base.value<0 && height.value<0){
    message.innerText="The base and height cannot be negative"
   }

   else if(base.value<0 || height.value<0)
   {
    message.innerText="Please enter all the positive values"
   }

   else
   {
    message.innerText="Please enter value in all the fields"
   }
}