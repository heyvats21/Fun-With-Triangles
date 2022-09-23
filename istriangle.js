const inputs =document.querySelectorAll(".angle-input")
const isTriangleBtn = document.querySelector("#is-triangle-btn")
const outputEl=document.querySelector("#output")


function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles=angle1+angle2+angle3;
    // console.log(sumOfAngles)
    return sumOfAngles
}

function isTrangle(){
    const sumOfAngles=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))

    if(sumOfAngles === 180){
        // console.log("Yay,the angles forms a triangle")
        outputEl.innerText="Yay,the angles forms a triangle"
    }
    else{
        // console.log("Its not a angle")
        outputEl.innerText="The angle not forms a triangle"
    }

}

isTriangleBtn.addEventListener("click",isTrangle)