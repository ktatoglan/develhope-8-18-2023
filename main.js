
let cars = [];
document.addEventListener("DOMContentLoaded", function () {
    if (JSON.parse(localStorage.getItem("cars"))) {
        cars = JSON.parse(localStorage.getItem("cars"));
        console.log(cars);
        list(cars);
    }

});

let btn = document.getElementById("addButton");
console.log(btn);
console.log(cars);
btn.addEventListener("click", () => {
  if (document.getElementById("brand").value != null) {
    let car = {
      brand: document.getElementById("brand").value,
      quantity: document.getElementById("quantity").value,
    };
    console.log(car);
    if (cars) {
    cars.unshift(car);
    localStorage.setItem("cars",JSON.stringify(cars));
    }
  }
  console.log(cars);
  location.reload();
});


function list(cars) {
    let carList = document.querySelector(".car-list");
    let counter = 0;
    cars.map((car)=>{
        const node = document.createElement("div");
        node.classList.add("column");
        node.classList.add("is-3");
        node.classList.add("box");
        carList.appendChild(node).innerHTML= `<i>Brand: ${car.brand}</i><br><i>Qty: ${car.quantity}</i><br><button class="button is-danger" id="soldBtn" onClick="soldThis(this, ${counter})">Sold</button>`;
        counter++;
    })
}

function soldThis(param, index) {
    param.parentNode.remove();
    cars.splice(index, 1);
    localStorage.setItem("cars",JSON.stringify(cars));
    location.reload();
}
    
