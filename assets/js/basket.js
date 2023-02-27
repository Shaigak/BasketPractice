"use strict"



let tableBody = document.querySelector("tbody");

let products = JSON.parse(localStorage.getItem("basket"));



if (products != null) {
    for (const product of products) {

        tableBody.innerHTML += `<tr>
        <td>
        <img src="${product.img}" alt="">
        </td>
        <td>${product.name}</td>
        
        <td>${product.description}</td>
        
        <td>
         <span class="minus">-</span>
         <span> ${product.count} </span> 
         <span class="plus">+</span></td>
        
        <td >₼ ${product.pricec}</td>

        <td class="  d-none">${product.id}</td>

        <td><i class="fa-solid fa-xmark item2"></i></td>

        </tr> `
    }
   
    
    let iconsDelete = document.querySelectorAll(".item2")

    let plus=document.querySelectorAll(".plus")

    let minus=document.querySelectorAll(".minus")



        for (const item of minus) {
            item.addEventListener("click",function(){
                let id = this.parentNode.nextElementSibling.nextElementSibling.innerText;
                for (const product of products) {
                    if(product.id == id){
                        item.nextElementSibling.innerText--;
                        product.count--
                        totalPrice(products)
    localStorage.setItem("basket",JSON.stringify(products))  

                    }
                }
            }) 
           
        }
          
    localStorage.setItem("basket",JSON.stringify(products))  

  


   


    for (const item of iconsDelete) {
        item.addEventListener("click", function () {

            let arr = products.filter(m => m.id != Number(this.parentNode.previousElementSibling.innerText))

            localStorage.setItem("basket", JSON.stringify(arr))

            window.location.reload()

        })
    }

    getBasketCount(products)
    totalPrice(products);
} else {
    document.querySelector("table").classList.add("d-none")

    document.querySelector(".alert-warning").classList.remove("d-none")
}

function getBasketCount(arr) {

    let sum = 0

    for (const item of arr) {

        sum += item.count;

    }

    document.querySelector("sup").innerText = sum

}

getBasketCount(products)





function totalPrice(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += parseInt(item.pricec)*parseInt(item.count);
    }
    document.querySelector("h2").innerHTML = `<span> Total: ${sum} AZN </span>`;
}


