// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucarr = JSON.parse(localStorage.getItem("coffee"));  
console.log('bucarr:', bucarr)  
let total = 0;  
for(let i=0; i<bucarr.length; i++){  
    total = total+bucarr[i].price;  
}  
  
console.log('total:', total)  
let tt = document.getElementById("total_amount");  
tt.innerText= total;  
function append(line){  
    let main = document.getElementById("bucket");  
    line.map(function(ele){  
        let div = document.createElement("div");  
        div.setAttribute("id","coffee");  
        let img = document.createElement("img");  
        img.src= ele.image;  
        let name = document.createElement("h3");  
        name.innerText= ele.title;  
        let price = document.createElement("p");  
        price.innerText= ele.price;  
        let rbtn = document.createElement("button");  
        rbtn.innerText="Remove";  
        rbtn.setAttribute("id","remove_coffee");  
        rbtn.addEventListener("click",function(){  
            remove(ele,i)  
        })  
        div.append(img,name,price,rbtn)  
        main.append(div)  
    })  
}  
append(bucarr)  
  
function remove(ele,i){  
    bucarr.splice(i,1)  
    console.log('bucarr:', bucarr)  
    localStorage.setItem("coffee",JSON.stringify(bucarr))  
    window.location.reload();  
}