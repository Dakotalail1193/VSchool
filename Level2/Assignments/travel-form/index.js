const form = document.travelForm
const submit = document.getElementById("submit")

submit.addEventListener("click", function formAlert() {
    const firstName = form.elements["firstName"].value;   
    const lastName = form.elements["lastName"].value;
    const age = form.elements["age"].value;
    const gender = form.elements["gender"].value;
    const location = form.elements["travel-location"].value;

    let diet = [];

    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
   }
   if (form.elements['gluten-free'].checked) {
       diet.push(document.getElementById('gluten-free').value);
   }
   if (form.elements['none'].checked) {
       diet.push(document.getElementById('none').value);
   }
   return alert("First Name: " + firstName + "\n Last Name: " + lastName + "\n Age: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\n Diet: " + diet + "\n Enjoy your vacation!")
})