document.addEventListener('DOMContentLoaded', (event) => {
    //место для кода
    let expression_field = document.querySelector('.input-field')

let buttons = document.querySelectorAll('.btn')
function print_symbol(event){
    expression_field.value += event.target.innerHTML
}
for (let i=0;i<buttons.length;i+=1){
    if (buttons[i].innerHTML != "=" && buttons[i].innerHTML != "AC"){
        buttons[i].addEventListener("click", print_symbol)
    }
}
function print_result(){
    let result_string = expression_field.value
    if (result_string.includes("+")){
        result_string = result_string.split("+")
        expression_field.value = +result_string[0] + +result_string[1]
    }
    if (result_string.includes("-")){
        result_string = result_string.split("-")
        expression_field.value = +result_string[0] - +result_string[1]
    }
    if (result_string.includes("*")){
        result_string = result_string.split("*")
        expression_field.value = +result_string[0] * +result_string[1]
    }
    if (result_string.includes("/")){
        result_string = result_string.split("/")
        expression_field.value = +result_string[0] / +result_string[1]
    }
}

function clear(){
    expression_field.value = ""
}
let plus_btn = document.querySelector(".btn-equal")
let ac_btn = document.querySelector(".btn-clear")
plus_btn.addEventListener("click",print_result)
ac_btn.addEventListener("click",clear)


})
