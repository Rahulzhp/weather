let menu=document.getElementById("menu");
let data;

async function myData(){
    try{
        let res=await fetch(`https://masai-api.herokuapp.com/coffee/menu`);

        data=await res.json();
        let actual_data=data.menu.data;
          appendProducts(actual_data)
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
myData()


function appendProducts(actual_data){
    menu.innerHTML=null;
    actual_data.forEach(function(el){
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.image
        let p=document.createElement("p")
        p.innerText=`Name - ${el.title}`
        let price = document.createElement("p");  
        price.innerText= el.price;  
        let btn=document.createElement("button")
        btn.innerText="Add to bucket"
        btn.addEventListener("click",function(){
            Shw(el)
        })
        div.append(p,img,price,btn)
        menu.append(div);
    })
}
let bucarr= JSON.parse(localStorage.getItem("coffee"))||[]  
function Shw(el){  
    bucarr.push(el);  
    console.log('bucarr:', bucarr)  
    localStorage.setItem("coffee",JSON.stringify(bucarr))  
    count.innerText=bucarr.length;  
}  
  
let count = document.getElementById("coffee_count");  
if(bucarr === null){  
    count.innerText = 0;  
}  
count.innerText = bucarr.length;