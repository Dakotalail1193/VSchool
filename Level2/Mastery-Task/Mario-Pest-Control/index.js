const pricing = document["pricing"]
const total = document.getElementById("total")



pricing.addEventListener("submit", (event)=> {
    event.preventDefault()
    
    const goombaTotal = pricing.goomba.value
    const bobTotal = pricing.bob.value
    const cheepTotal = pricing.cheep.value

    const goombaBill = goombaTotal * 5
    const bobBill = bobTotal * 7   
    const cheepBill = cheepTotal * 11

    const bill = []

    bill.push(goombaBill, bobBill, cheepBill)

    const totalBill = (nums) =>{
        return nums[0] + nums[1] + nums[2];
    }
    console.log(totalBill(bill))

    const billing = document.createElement("p")
    
    billing.textContent = "$" + totalBill(bill) 

    total.append(billing)
     
   
   
   
    
}
)




 
// const goombaBill = goombaTotal * 5
// const bobBill = bobTotal * 7   
// const cheepBill = cheepTotal * 11