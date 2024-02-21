const addItem = document["add-item"]
const momList = document.getElementById("list")


addItem.addEventListener("submit", (event) => {
event.preventDefault()

const purchase = addItem.title.value

const shopping = document.createElement("li")

shopping.innerHTML += "<div>" + purchase + "</div>"
//shopping.textContent = purchase

momList.prepend(shopping)

//const editButton = document.createElement ("button")
//editButton.textContent = "edit"
//shopping.append(editButton)


//const deleteButton = document.createElement("button")
//deleteButton.textContent = "X"

shopping.innerHTML += " <button>edit</button> " + "<button id='delete'>X</button> "

const deleteButton = document.getElementById('delete')

deleteButton.addEventListener ("click", (event) => {
    shopping.remove()
})
//shopping.append(deleteButton)
//shopping.innerHTML += " <button>edit</button> " + "<button id='delete'>X</button> "

//const deleteButton = document.getElementById('delete')

//deleteButton.addEventListener("click", (event) => 



//)

})

