const $buttonsNumbers = document.querySelectorAll('.calculator__buttons--number')
const $buttonsOperators = document.querySelectorAll(".calculator__buttons--operator")
const $inputGetNumbers = document.querySelector(".calculator__display-input")
const $result = document.querySelector(".calculator__display-result")
const $buttonResult =document.querySelector(".calculator__buttons--button--result")
const $clear = document.querySelector(".calculator__buttons--button-c")
const $negative = document.querySelector('.calculator__buttons--negative')

let calculate = ""

$result.addEventListener('click', function (){    
    $inputGetNumbers.value = $inputGetNumbers.value.replace("÷","/")
    $inputGetNumbers.value = $inputGetNumbers.value.replace("X","*")  
    $inputGetNumbers.value = $inputGetNumbers.value.replace("%","/100")
    calculate = $inputGetNumbers.value
    $result.innerHTML = eval($inputGetNumbers.value)
})

$negative.addEventListener('click',function (){    
    
    let verifyNegative = $inputGetNumbers.value.includes("-") 

    if(verifyNegative == false){  
        $inputGetNumbers.value = $inputGetNumbers.value.replace(" ","") 
        $inputGetNumbers.value = "-"+$inputGetNumbers.value
    }else{
        $inputGetNumbers.value = $inputGetNumbers.value.replace("-","") 
    }
})

$buttonsNumbers.forEach(function($button){
    $button.addEventListener("click", function(){
        calculate = calculate + $button.textContent
        $inputGetNumbers.value = calculate
    })
})

$buttonsOperators.forEach(function($button){
    $button.addEventListener("click", function(){
        calculate = calculate + $button.textContent;
        $inputGetNumbers.value = calculate
    })
})

$buttonResult.addEventListener("click", function(){
    console.log(calculate)
    $result.textContent = eval(calculate)
})

$clear.addEventListener("click", function(){
    $result.innerHTML = ""
    $inputGetNumbers.value = ''
    $result.innerHTML = "0"

})