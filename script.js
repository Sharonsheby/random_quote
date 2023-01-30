let qutoe=document.getElementById("qutoe");
let author=document.getElementById("author");
let btn=document.getElementById("btn")
const url= "https:api.quotable.io/random";


let getQutoe=()=>{
    fetch (url).then((data)  => data.json()).then((item) => {
        console.log(item.content);
        console.log(item.author);
        qutoe.innerText=item.content
        author.innerText=item.author
    });
}
window.addEventListener("load",getQutoe);
btn.addEventListener("click",getQutoe)