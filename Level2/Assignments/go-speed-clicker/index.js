let clicks = 0;
let counter = document.querySelector('h1');
counter.textContent = clicks;





document.addEventListener("click", () => {
    clicks += 1;   
    counter.textContent = clicks;
    localStorage.total = JSON.stringify(clicks);
   
})
let total = JSON.parse(localStorage.total);
clicks = total
counter.textContent = clicks;




    