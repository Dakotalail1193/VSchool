const todoForm = document.form
const submit = document.getElementById("submit")

// function getData(){
//     axios.get("https://api.vschool.io/dakotalail/todo")
//         .then(res => listData(res.data))
//         .catch(err => console.log(err))
// }

// function listData (){
//     for (let i = 0; i < data.length; i++){
//         const title = document.createElement('h1');
//         title.textContent = data[i].title;
//         title.className = "todo-title";  
//         document.getElementById('todo-item').appendChild(title);

//         const details = document.createElement('p');
//         details.textContent = data[i].details;
//         details.className = "todo-details";
//         document.getElementById("todo-title").appendChild(details);

//         const price = document.createElement('p');
//         price.textContent = data[i].price;
//         price.className = "todo-price";
//         document.getElementById("todo-details").appendChild(price);

        

//         const img = documentcreateElement('img');
//         img.src = data[i].imgUrl;
//         img.className = "todo-img"
//         document.getElementById("todo-price").appendChild(img);       
//     }
// }

todoForm.addEventListener("submit", function (event){
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }

    axios.post("https://api.vschool.io/dakotalail/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})