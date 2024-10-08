let h1 = document.getElementById("fact");
let url = "https://catfact.ninja/fact";
let btn = document.querySelector(".btn");


async function getfact(){
    let res = await fetch(url);
    let data = await res.json();
    h1.style.display = "flex";
    h1.innerText = data.fact;

}

btn.addEventListener("click",()=>{
   getfact();  
})