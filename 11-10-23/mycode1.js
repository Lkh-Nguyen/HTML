let tour = document.getElementById("tour"),
  price = document.getElementById("price");

function getPriceByTour(id) {
  switch (id) {
    case "1":
      return 1500;
      break;
    case "2":
      return 2000;
      break;
    case "3":
      return 2500;
      break;
  }
}
price.textContent = `${getPriceByTour(tour[tour.selectedIndex].value)}VND/Person`;
tour.addEventListener("change", () => {
  price.textContent = `${getPriceByTour(tour[tour.selectedIndex].value)}VND/Person`;
});
let  numOfPeople = document.getElementById("number");
let  amount = document.getElementById("amount");

function CalTotal() {
    let totalAmountContent = document.getElementById("total-amount");
    totalAmountContent.style.display = 'flex';
    amount.textContent = `${getPriceByTour(tour[tour.selectedIndex].value) * numOfPeople.value}vnd`;
}
