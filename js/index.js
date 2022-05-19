const $buttonsNumbers = document.querySelectorAll('.calculator__buttons--number')
const $buttonsOperators = document.querySelectorAll(".calculator__buttons--operator")
const $inputGetNumbers = document.querySelector(".calculator__display-input")
const $result = document.querySelector(".calculator__display-result")
const $buttonResult =document.querySelector(".calculator__buttons--button--result")

let calculate = ""

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