
"use strict"
let cardBtns = document.querySelectorAll("#shop a")
let products = [];

if (localStorage.getItem("basket") != null) {
    products = JSON.parse(localStorage.getItem("basket"))
}
cardBtns.forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        let productImg = this.parentNode.previousElementSibling.getAttribute("src");

        let productName = this.parentNode.firstElementChild.innerText;

        let productDesc = this.previousElementSibling.previousElementSibling.innerText;

        let prodPrice=Number(this.previousElementSibling.lastElementChild.innerText)

        
        


        let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));

        


        

        let existProduct = products.find(m => m.id == productId)

        if (existProduct != undefined) {
            existProduct.count += 1;
        } else {

            products.push({
                id: productId,
                name: productName,
                img: productImg,
                description: productDesc,
                pricec:prodPrice,
                count: 1,
            })
        }
        localStorage.setItem("basket", JSON.stringify(products));

        getBasketCount(products)
    })
});

function getBasketCount(arr){

    let sum =0 

    for (const item of arr) {

        sum+=item.count;   
    }

    document.querySelector("sup").innerText=sum

}

