const product = document.querySelector(".row");

let data = [
    {
        id: 1,
        name1: "Green Bag",
        price: 550,
        description: "Beautiful ladies green bag",
        image: "images/green-bag.jpeg"
    },
    {
        id: 2,
        name1: "Sneakers",
        price: 700,
        description: "Unisex Sneakers",
        image: "images/sneakers.jpg"
    },
    {
        id: 3,
        name1: "Crocs",
        price: 500,
        description: "High female crocs",
        image: "images/crocs.webp"
    },
    {
        id: 4,
        name1: "Belt",
        price: 300,
        description: "High quality belt",
        image: "images/belt.jpeg"
    },
    {
        id: 4,
        name1: "Belt",
        price: 400,
        description: "High quality belt",
        image: "images/belt.jpeg"
    },
    {
        id: 4,
        name1: "Belt",
        price: 150,
        description: "High quality belt",
        image: "images/belt.jpeg"
    }
]

let dataList = ""
for (let i = 0; i < data.length; i++){

    dataList += `
    <div class="col-lg-4 col-sm-12">
    <div class="card" style="width: 18rem;">
        <img src="${data[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
           <h5 class="card-title">${data[i].name1}</h5>
           <p class="card-text">$${data[i].price}</p>
           <p class="card-text">${data[i].description}</p>
           <a href="#" class="btn btn-primary">Add to cart</a>
           <a href="#" class="btn btn-warning">Buy Now</a>
        </div>
    </div>
 </div>
   `
   product.innerHTML = dataList;
}

