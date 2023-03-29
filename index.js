const product = document.getElementById("product");

let data = [
    {
        id: 1,
        name1: "Green Bag",
        price: 5500,
        description: "Beautiful ladies green bag",
    },
    {
        id: 2,
        name1: "Sneakers",
        price: 7000,
        description: "Unisex Sneakers",
    },
    {
        id: 3,
        name1: "Crocs",
        price: 5000,
        description: "High female crocs",
    },
    {
        id: 4,
        name1: "Belt",
        price: 3000,
        description: "High quality belt",
    }
]

let dataList = ""
for (let i = 0; i < data.length; i++){

    dataList += `
    <div class="col-6">
    <div class="card" style="width: 18rem;">
        <img src="images/green-bag.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
           <h5 class="card-title">${data[i].name1}</h5>
           <p class="card-text">${data[i].price}</p>
           <p class="card-text">${data[i].description}</p>
           <a href="#" class="btn btn-primary">Add to cart</a>
           <a href="#" class="btn btn-warning">Buy Now</a>
        </div>
    </div>
 </div>
   `
   product.innerHTML = dataList;
}

<ul>
      <li>${data[i].id}</li>
      <li>${data[i].name1}</li>
      <li>${data[i].price}</li>
      <li>${data[i].description}</li>
   </ul>