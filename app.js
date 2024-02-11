document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const ProductList = document.getElementById('ProductList');
            data.forEach(Product => {
        const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <h2>${Product.Product_Name}</h2>
                <p>Description: ${Product.Product_Description}</p>
                <p>Price: $${Product.Product_Price}</p>
                <p>Date Added: ${Product.Product_Date_Added}</p>
                <hr>
            `;
            ProductList.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});