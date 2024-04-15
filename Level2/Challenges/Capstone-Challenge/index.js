const todoForm = document.form
const submit = document.getElementById("submit")

function getData(){
    axios.get("https://api.vschool.io/dakotalail/todo")
        .then(response => listData(response.data))
        .catch(error => console.log(error))
}



function listData (data){
    clearList()
    
    for (let i = 0; i < data.length; i++){
        const title = document.createElement('h1');
        title.textContent = data[i].title;
        title.className = "todo-title";  
        document.getElementById("todo-item").appendChild(title);

        const description = document.createElement('p');
        description.textContent = data[i].description;
        description.className = "todo-details";
        document.getElementById("todo-item").appendChild(description);

        const price = document.createElement('p');
        price.textContent = data[i].price;
        price.className = "todo-price";
        document.getElementById("todo-item").appendChild(price);        

        const img = document.createElement('img');
        img.src = data[i].imgUrl;
        img.className = "todo-img"
        document.getElementById("todo-item").appendChild(img); 

        const divButton = document.createElement("div");
        divButton.className = "buttons";
        document.getElementById("todo-item").appendChild(divButton);
        
        const edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.className = "edit-button";
        divButton.appendChild(edit);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        divButton.appendChild(deleteButton);

        const divComplete = document.createElement("div");
        divComplete.className = "buttons";
        document.getElementById("todo-item").appendChild(divComplete);

        const label = document.createElement("label");
        label.textContent = "Completed"
        divComplete.appendChild(label);

        const check = document.createElement("input");
        check.type = "checkbox";
        check.className = "checkbox"
        divComplete.appendChild(check);

       
       check.addEventListener('click', () => {
        if (check.checked === true){
        title.style.textDecoration = "line-through";
        description.style.textDecoration = "line-through";
        price.style.textDecoration = "line-through";
     }else {
        title.style.textDecoration = "black";
        description.style.textDecoration = "black";
        price.style.textDecoration = "black"
     }})
           
        deleteButton.addEventListener('click', () => {
           axios.delete("https://api.vschool.io/dakotalail/todo/" + data[i]._id)
           .then(response => getData())
           .catch(error => console.log(error))
        })   
    }
}

function clearList(){
    const list = document.getElementById("todo-item")
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
}

getData()

todoForm.addEventListener("submit", function (event){
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
        
    }


    axios.post("https://api.vschool.io/dakotalail/todo", newTodo)
        .then(response => getData())
        .catch(error => console.log(error))
})

