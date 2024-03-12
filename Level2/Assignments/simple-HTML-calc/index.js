const sum = document["add-form"]
const sub = document["sub-form"]
const mul = document["mul-form"]

const sumFunc = (num1, num2) => {
    console.log(parseFloat(num1) + parseFloat(num2))
   }

   const subFunc = (num1, num2) => {
    console.log(num1 - num2)
   }

   const mulFunc = (num1, num2) => {
    console.log(num1 * num2)
   }

sum.addEventListener("submit", function(event) {
    event.preventDefault()
    sumFunc(sum.addNumOne.value, sum.addNumTwo.value)
})

sub.addEventListener("submit", function(event) {
    event.preventDefault()
    subFunc(sub.subNumOne.value, sub.subNumTwo.value)
})

mul.addEventListener("submit", function(event) {
    event.preventDefault()
    mulFunc(mul.mulNumOne.value, mul.mulNumTwo.value)
})