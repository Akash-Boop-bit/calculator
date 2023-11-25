const para = document.getElementById("intputpara")
const para1 = document.getElementById("outputpara")
const button = document.getElementById("button")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")
const button0 = document.getElementById("button0")
const buttonc = document.getElementById("buttonc")
const buttonp = document.getElementById("buttonp")
const buttonm = document.getElementById("buttonm")

let a = []
let b = []
c = 0
let result = 0
let addition = []
let subtraction = []


function equal(j,k){
    n = j.length - 1
    s = 0
    x = 0
    for(let i = 0; i<n; i++){
        if(i == 0){
            if (k[i] == "+"){
                s = Number(j[i]) + Number(j[i+1])
            }
            if (k[i] == "-"){
                s = Number(j[i]) - Number(j[i+1])
            }
        }
        else {
            if (k[i] == "+"){
                s += Number[j[i+1]]
            }
            if (k[i] == "-"){
                s -= Number[j[i+1]]
            }
        }
    }
    para1.innerText = "=" + s
}


button.addEventListener('click',() => {
    
})
button1.addEventListener('click',() => {
    para.innerText += "1"
    a[c] += "1"
    equal(a,b)
})
button2.addEventListener('click',() => {
    para.innerText += "2"
    a[c] += "2"
    equal(a,b)
})
button3.addEventListener('click',() => {
    para.innerText += "3"
    a[c] += "3"  
    equal(a,b) 
})
button4.addEventListener('click',() => {
    para.innerText += "4"
    a[c] += "4"
    equal(a,b)
})
button5.addEventListener('click',() => {
    para.innerText += "5"
    a[c] += "5"
    equal(a,b)
})
button6.addEventListener('click',() => {
    para.innerText += "6"
    a[c] += "6"
    equal(a,b)
})
button7.addEventListener('click',() => {
    para.innerText += "7"
    a[c] += "7"
    equal(a,b)
})
button8.addEventListener('click',() => {
    para.innerText += "8"
    a[c] += "8"
    equal(a,b)
})
button9.addEventListener('click',() => {
    para.innerText += "9"
    a[c] += "9"
    equal(a,b)
})
button0.addEventListener('click',() => {
    para.innerText += "0"
    a[c] += "0"
    equal(a,b)
})
buttonm.addEventListener('click',() => {
    para.innerText += "-"
    b.push("-")
    c+=1
})
buttonp.addEventListener('click',() => {
    para.innerText += "+"
    b.push("+")
    c+=1
})
buttonc.addEventListener('click',() => {
    para.innerText = ""
    a = []
    para1.innerText = "="
    result = 0
    b = []
    c = 0
})

